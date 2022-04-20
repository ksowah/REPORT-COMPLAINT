const table_body = document.getElementById("table_body");

let savedReports = []

// get reports from local storage
const storedReports = JSON.parse(localStorage.getItem("savedReports"));

// set reports from local storage to savedReports
if(storedReports) {
	savedReports = storedReports;
	console.log(savedReports);
}

// show reports on table
const showReports = () => {
	let output = ""

    // display report in ascending order
    if(savedReports.length > 0){
        for(let i = savedReports.length - 1; i > 0 ; i--){
            output += `
			<tr>
			<td>${savedReports[i].name}</td>
			<td>${savedReports[i].student_id}</td>
			<td>${savedReports[i].room_number}</td>
			<td>${savedReports[i].message}</td>
			</tr>
			`
        }
		
	}else{
		output = "<tr><td colspan='4'>No reports to show</td></tr>"
	}
	table_body.innerHTML = output;
}

showReports()



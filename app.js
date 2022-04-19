const name = document.getElementById("name");
const student_id = document.getElementById("student_id");
const room_number = document.getElementById("room_number");
const message = document.getElementById("message");
const error = document.getElementById("error");
const alertMessage = document.getElementById("alert");
const alert_head = document.getElementById("alert_head");
const table_body = document.getElementById("table_body");

let savedReports = []

const storedReports = JSON.parse(localStorage.getItem("savedReports"));

if(storedReports) {
	savedReports = storedReports;
	console.log(savedReports);
}

const validate = () => {

	let valid = null

	if (name.value === "") {
		valid = false
		error.innerText = "Please enter your name";
		alertMessage.style.visibility = "visible";
		alert_head.innerText = "ERROR: "
	}

	else if (student_id.value === "" || isNaN(student_id.value) || student_id.value.length !== 8) {
		valid = false
		error.innerText = "Please enter a valid student id";
		alertMessage.style.visibility = "visible";
		alert_head.innerText = "ERROR: "
	}

    else if(room_number.value === "" || isNaN(room_number.value) || room_number.value.length > 4) {
		valid = false
		error.innerText = "Please enter a valid room number";
		alertMessage.style.visibility = "visible";
		alert_head.innerText = "ERROR: "
    }

    else if(message.value === ""){
		valid = false
		error.innerText = "Please enter your report message";
		alertMessage.style.visibility = "visible";
		alert_head.innerText = "ERROR: "
    }

	else {
		valid = true
		alert_head.innerText = "CONGRATULATIONS! "
		error.innerText = "Your report has been sent. Thank you!";
		storeReports()
	}

	if(valid){
		alertMessage.style.visibility = "visible";
		alertMessage.style.background = "#dff0d8";
		alertMessage.style.borderColor = "#d6e9c6";
		alertMessage.style.color = "#3c763d";
	}

	if(valid === false){
		alertMessage.style.visibility = "visible";
		alertMessage.style.background = "#f2dede";
		alertMessage.style.borderColor = "#ebccd1";
		alertMessage.style.color = "#a94442";
	}

};

const storeReports = () => {
	let report = {
		name: name.value,
		student_id: student_id.value,
		room_number: room_number.value,
		message: message.value
	}

	savedReports.push(report);
	report = {}
	localStorage.setItem("savedReports", JSON.stringify(savedReports));
}

const showReports = () => {
	let output = ""
	if(savedReports.length > 0){
		savedReports.forEach(report => {
			output += `
			<tr>
			<td>${report.name}</td>
			<td>${report.student_id}</td>
			<td>${report.room_number}</td>
			<td>${report.message}</td>
			</tr>
			`;
		})
		
	}else{
		output = "<tr><td colspan='4'>No reports to show</td></tr>"
	}
	table_body.innerHTML = output;
}

if(savedReports){
	showReports()
}


const name = document.getElementById("name");
const student_id = document.getElementById("student_id");
const room_number = document.getElementById("room_number");
const message = document.getElementById("message");
const error = document.getElementById("error");
const alertMessage = document.getElementById("alert");
const alert_head = document.getElementById("alert_head");

let savedReports = []

// keep all reports in an array from local storage to persist the data
const storedReports = JSON.parse(localStorage.getItem("savedReports"));
if(storedReports) {
	savedReports = storedReports;
	console.log(savedReports);
}

// validate form
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

// store all the data in local storage and push each item in the array
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





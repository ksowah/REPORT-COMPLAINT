const name = document.getElementById("name");
const student_id = document.getElementById("student_id");
const room_number = document.getElementById("room_number");
const message = document.getElementById("message");

const validate = () => {
	if (name.value === "") {
		alert("Please enter your name");
		return false;
	}

	if (student_id.value === "" || isNaN(student_id.value) || student_id.value.length !== 8) {
		alert("Please enter a valid student id");
		return false;
	}

    if(room_number.value === "" || isNaN(room_number.value) || room_number.value.length !== 4) {
        alert("Please enter a room number");
    }

    if(message.value === ""){
        alert("Please enter your report message");
    }
};

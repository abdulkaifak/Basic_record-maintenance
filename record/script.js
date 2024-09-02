var selectedRow = null;

// Form Submit Function
function onFormSubmit() {
    // Check validity
    if (validate()) {
        // Store user data
        var formData = readFormData();
        // Check empty row
        if (selectedRow === null) {
            // Insert New User Record
            insertNewRecord(formData);
        } else {
            // Update Existing User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}

// Get Values From Form
function readFormData() {
    return {
        name: document.getElementById("name").value,
        rollNo: document.getElementById("rollno").value, // Corrected ID to match HTML
        year: document.getElementById("year").value,
        branch: document.getElementById("branch").value,
        section: document.getElementById("section").value,
        backlogs: document.getElementById("backlogs").value
    };
}

// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0]; // Corrected ID to match HTML
    var newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = data.name;
    newRow.insertCell(1).innerHTML = data.rollNo;
    newRow.insertCell(2).innerHTML = data.year;
    newRow.insertCell(3).innerHTML = data.branch;
    newRow.insertCell(4).innerHTML = data.section;
    newRow.insertCell(5).innerHTML = data.backlogs;
    newRow.insertCell(6).innerHTML = `
        <a onClick="onEdit(this)">Edit</a>
        <a onClick="onDelete(this)">Delete</a>`;
}

// Reset Form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("rollno").value = ""; // Corrected ID to match HTML
    document.getElementById("year").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("section").value = "";
    document.getElementById("backlogs").value = "";
    selectedRow = null;
}

// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollno").value = selectedRow.cells[1].innerHTML; // Corrected ID to match HTML
    document.getElementById("year").value = selectedRow.cells[2].innerHTML;
    document.getElementById("branch").value = selectedRow.cells[3].innerHTML;
    document.getElementById("section").value = selectedRow.cells[4].innerHTML;
    document.getElementById("backlogs").value = selectedRow.cells[5].innerHTML;
}

// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.year;
    selectedRow.cells[3].innerHTML = formData.branch;
    selectedRow.cells[4].innerHTML = formData.section;
    selectedRow.cells[5].innerHTML = formData.backlogs;
}

// Delete Function
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex); // Corrected ID to match HTML
        resetForm();
    }
}

// Check User Validation
function validate() {
    let isValid = true;
    // Name validation
    if (document.getElementById("name").value === "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        document.getElementById("nameValidationError").classList.add("hide");
    }
    // Roll No validation
    if (document.getElementById("rollno").value === "") { // Corrected ID to match HTML
        isValid = false;
        document.getElementById("rollnoValidationError").classList.remove("hide");
    } else {
        document.getElementById("rollnoValidationError").classList.add("hide");
    }
    // B.Tech Year validation
    if (document.getElementById("year").value === "") {
        isValid = false;
        document.getElementById("yearValidationError").classList.remove("hide");
    } else {
        document.getElementById("yearValidationError").classList.add("hide");
    }
    // Branch validation
    if (document.getElementById("branch").value === "") {
        isValid = false;
        document.getElementById("branchValidationError").classList.remove("hide");
    } else {
        document.getElementById("branchValidationError").classList.add("hide");
    }
    // Section validation
    if (document.getElementById("section").value === "") {
        isValid = false;
        document.getElementById("sectionValidationError").classList.remove("hide");
    } else {
        document.getElementById("sectionValidationError").classList.add("hide");
    }
    // Backlogs validation
    if (document.getElementById("backlogs").value === "") {
        isValid = false;
        document.getElementById("backlogsValidationError").classList.remove("hide");
    } else {
        document.getElementById("backlogsValidationError").classList.add("hide");
    }
    return isValid;
}

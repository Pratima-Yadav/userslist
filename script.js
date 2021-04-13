var selectedRow = null
var index=0;

var day = new Date().toLocaleString('en-us', {weekday: 'short'});
var date = new Date().toLocaleString('default', { month: 'short' });
var month = new Date().getDate();
var year = new Date().getFullYear();
var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
var dateTime = day+'\n '+date+' \n'+month+'\n'+year+'\n' +time;


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["id"] = document.getElementById("id").value;
    formData["city"] = document.getElementById("city").value;
    formData["degree"] = document.getElementById("degree").value;
    formData["timestamp"] = document.getElementById("timestamp").value;
    return formData;
}

function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
   cell2.innerHTML = (index+1);
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.degree;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML =dateTime;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a class ="edit"  onClick="onEdit(this) ">Edit<i class="fas fa-edit "></i></a>
                       <a class="delete" onClick="onDelete(this)">Delete user <i class="fas fa-user-minus"></i></a>`;

    index++;
                    }

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("city").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("timestamp").innerHTML = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("city").value = selectedRow.cells[2].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[3].innerHTML;
    document.getElementById("timestamp").value = selectedRow.cells[4].innerHTML;
    document.getElementById("myForm").style.display = "block";
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.id;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.degree;
    selectedRow.cells[3].innerHTML = formData.timestamp;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
       
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
           
    }
    return isValid;
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  
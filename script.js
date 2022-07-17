var selectedRow= null // globla varialbe
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null)
    {
        insertNewRecord(formData);
    }
else{
updatRecord(formData);
}
    resetForm(formData);

}

// retrive the data form 
function readFormData()
{
    var formData={};
    formData["EmpNo"]= document.getElementById("EmpNo").value ;
    formData["firstName"]= document.getElementById("firstName").value;
    formData["lastName"]= document.getElementById("lastName").value;
    formData["Password"]= document.getElementById("Password").value;
    formData["pwd"]= document.getElementById("pwd").value;
    return formData;

}

//Insert the data form table

function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.EmpNo;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.firstName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.lastName;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Password;
     var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.pwd;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onclick='onEdit(this)' > Edit </button> <button onclick='onDelete(this)'> Delete</button>`
        
}

function  onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('EmpNo').value = selectedRow.cells[0].innerHTML
    document.getElementById('firstName').value = selectedRow.cells[1].innerHTML
    document.getElementById('lastName').value = selectedRow.cells[2].innerHTML
    document.getElementById('Password').value = selectedRow.cells[3].innerHTML
    document.getElementById('pwd').value = selectedRow.cells[4].innerHTML
    
}
function updatRecord(formData)
{selectedRow.cells[0].innerHTML = formData.EmpNo;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.Password;
    selectedRow.cells[4].innerHTML = formData.pwd;

}

// deleted data

function onDelete(td){
    if(confirm('do you want to delete the recored....?')){
        row = td.parentElement.parentElement
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
    resetForm();
}

// reset the data 

function resetForm()
{
    document.getElementById('EmpNo').value= '';
    document.getElementById('firstName').value= '';
    document.getElementById('lastName').value= '';
    document.getElementById('Password').value= '';
    document.getElementById('pwd').value= '';


}



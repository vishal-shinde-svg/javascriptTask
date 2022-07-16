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
    formData["srNo"]= document.getElementById("srNo").value ;
    formData["firstName"]= document.getElementById("firstName").value;
    formData["lastName"]= document.getElementById("lastName").value;
    return formData;

}

//Insert the data form table

function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.srNo;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.firstName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.lastName;
     var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onclick='onEdit(this)' > Edit </button> <button onclick='onDelete(this)'> Delete</button>`
}

function  onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('srNo').value = selectedRow.cells[0].innerHTML
    document.getElementById('firstName').value = selectedRow.cells[1].innerHTML
    document.getElementById('lastName').value = selectedRow.cells[2].innerHTML
    
}
function updatRecord(formData)
{selectedRow.cells[0].innerHTML = formData.srNo;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;

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
    document.getElementById('srNo').value= '';
    document.getElementById('firstName').value= '';
    document.getElementById('lastName').value= '';

}



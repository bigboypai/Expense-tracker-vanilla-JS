
const addExpenseBtn = document.querySelector('.add-expense-button')
const tableTemplate = document.querySelector('.table-template')


// Table Logic

function createNewCells() {

    const newRow = tableTemplate.insertRow()

    let nameCell = newRow.insertCell()
    let dateCell = newRow.insertCell()
    let amountCell = newRow.insertCell()
    
    nameCell.innerHTML = nameInput.value
    dateCell.innerHTML = dateInput.value
    amountCell.innerHTML = amountInput.value
}

// Inputs selector
const nameInput = document.getElementById('nameInput')
const dateInput = document.getElementById('dateInput')
const amountInput = document.getElementById('amountInput')

addExpenseBtn.addEventListener('click', function() {
    if (nameInput.value !== '' && dateInput.value !== '' && amountInput.value !== '') {
        createNewCells()
        nameInput.value = ''
        dateInput.value = ''
        amountInput.value = ''
    } else {
        swal("We are missing some info!", "It seems like you didn't fill the whole form", 'info');      
    }
})
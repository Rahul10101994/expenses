let expenses =[];
let totalAmount = 0;

const itemSelect = document.getElementById('item-input')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function(){
    const item = itemSelect.value;
    const amount = Number(amountInput.value);
    const date= dateInput.value;

    if(item === ''){
        alert('please select a item');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('please enter a valid amount');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
    expenses.push({item,amount,date})

    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow = expenseTableBody.insertRow();

    const itemCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense= expenses[expenses.length - 1];
    itemCell.textContent=expense.item;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

});
for(const exepense of expenses){
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow = expenseTableBody.insertRow();

    const itemCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splioce(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense= expenses[expenses.length - 1];
    itemCell.textContent=expense.item;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
}
window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
              const   expensetablebody = this.document.getElementById("expense-table-body");
              console.log(expensetablebody);
              console.log(window)
              html2pdf().from(expensetablebody).save();

    })
}

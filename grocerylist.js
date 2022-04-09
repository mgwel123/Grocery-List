let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('grocery-list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.setAttribute('class', 'list-row');
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.setAttribute('id', 'grocery');
    cell2.setAttribute('id', 'item-price');
    cell3.setAttribute('id', 'item-quantity');
    cell1.innerHTML = document.getElementById('new-grocery-item').value;
    cell2.innerHTML = document.getElementById('cost').value;
    cell3.innerHTML = document.getElementById('quantity').value;
    
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-grocery-item').value = '';
    document.getElementById('cost').value = '';
    document.getElementById('quantity').value = '';
    updateListTotal();
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove';
    btn.onclick = () => {
        console.log(`Removing item-${id} from List`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
        updateListTotal();
    }
    return btn;
}


let table = document.getElementById('grocery-list');
let bottomRow = table.insertRow(-1);
bottomRow.insertCell(0).innerHTML = 'Total Cost:';
let totalCost = bottomRow.insertCell(1);
totalCost.setAttribute('id', 'total-cost');
totalCost.innerHTML = '$0.00';      //WIP

function updateListTotal () {
    let listItemRows = document.getElementsByClassName(`list-row`);
    console.log(listItemRows);
    let sum = 0;
    for (let i = 0; i < listItemRows.length; i++) {
        let listItemRow = listItemRows[i];
        console.log(listItemRow);
        let costElement = listItemRow.querySelector('#item-price');
        let quantityElement = listItemRow.querySelector('#item-quantity');
        console.log(costElement, quantityElement);
        let itemCost = parseFloat(costElement.innerText);
        let itemQuantity = parseFloat(quantityElement.innerText);
        console.log(itemCost, itemQuantity);
        sum = sum + (itemCost * itemQuantity); 
    }
    sum = Math.round(sum * 100) / 100;
    totalCost.innerText = '$' + sum;
}


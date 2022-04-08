let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('grocery-list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-grocery-item').value;
    row.insertCell(1).innerHTML = document.getElementById('cost').value;
    row.insertCell(2).innerHTML = document.getElementById('quantity').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-grocery-item').value = '';
    document.getElementById('cost').value = '';
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
    }
    return btn;
}

let table = document.getElementById('grocery-list');
let bottomRow = table.insertRow(-1);
bottomRow.insertCell(0).innerHTML = 'Total Cost:';
bottomRow.insertCell(1).innerHTML = '$0.00';      //WIP

function updateListTotal () {
    let listItemRows = document.getElementById(`item-${id}`);
    for (let i = 0; i < listItemRows.length; i++) {
        let listItemRow = listItemRows[i];
        let itemCost = listItemRow[1].innerText;
        let itemQuantity = listItemRow[2].innerText;
        console.log(itemCost, itemQuantity);


    }
}


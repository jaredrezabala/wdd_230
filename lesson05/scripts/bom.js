const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value != "") {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        listItem.textContent = input.value;
        deleteButton.textContent = '❌';
        listItem.append(deleteButton);
        list.append(listItem);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
        });
        input.focus();
        input.value = '';
        if (list.children.length == 10) {
            console.log("You're top 10 is amazing!");
        }
    }
    else {
        console.log("Please enter a valid chapter");
        input.focus();
    }
});

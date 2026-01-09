const inputField = document.getElementById('inputBox');
const submitBtn = document.getElementById('submitBtn');
const taskContainer = document.getElementById('taskContainer');


function addTask() {
    if(inputField.value === '') {
        window.alert('You must write something!');
        return;
    } else {
        let liElement = document.createElement('li');
        liElement.innerHTML = inputField.value;
        taskContainer.appendChild(liElement);
        let deleteElement =  document.createElement('span');
        deleteElement.innerHTML = '&times;';
        liElement.appendChild(deleteElement);
    }


    inputField.value = '';
    saveData();
}

taskContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData();
    } else if ( event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData();
    };
}, false)

submitBtn.addEventListener('click', () => {
    addTask();
    
});


function saveData() {
    localStorage.setItem('data', taskContainer.innerHTML);
}

function loadData() {
    taskContainer.innerHTML = localStorage.getItem('data');
}
loadData();
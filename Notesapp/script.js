const notesContainer = document.querySelector('.notesContainer');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.inputBox');


function showData() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showData();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// localStorage.clear();

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');

    inputBox.setAttribute('contenteditable', 'true');
    inputBox.className = 'inputBox';
    img.src = 'Delete.png';

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);   
    updateStorage();        
})

notesContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.inputBox');
        notes.forEach(note => {
            note.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})





const formulario = document.getElementById('form');
const taskList = document.getElementById('taskList');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task').value;

    if (taskInput && taskInput.length <= 50) {
        const li = document.createElement('li');
        li.textContent = taskInput;
        taskList.appendChild(li);
        document.getElementById('task').value = '';
    }
});

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completado');
    }
}
);
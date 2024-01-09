let tasks = []; // localStorage

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value;

    if (taskText === "") return; // 

    tasks.push(taskText); // adicionando
   // saveTasksToLocalStorage(); // Salvar no localStorage
    updateTaskList(); // Atualizar 
    taskInput.value = ""; // Limpar entrada
}

function saveTasksToLocalStorage() {
    localStorage.setItem('lista', JSON.stringify(tasks)); // Salvar as tarefas no localStorage
}

function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpe a lista antes de atualizar

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task + ` [${index}]`;
        taskList.appendChild(taskItem);
    });
}
window.addEventListener('load', () => {
    updateTaskList();
});
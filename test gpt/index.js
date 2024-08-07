document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Créer une nouvelle tâche
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;

        // Ajouter un événement de clic pour supprimer la tâche
        newTask.addEventListener('click', () => {
            taskList.removeChild(newTask);
        });

        taskList.appendChild(newTask);

        // Réinitialiser le champ d'entrée
        taskInput.value = '';
    });

    // Permettre l'ajout de tâches en appuyant sur la touche "Entrée"
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            taskForm.dispatchEvent(new Event('submit'));
        }
    });
});
const form = document.querySelector('form');


// Storage part
function storeList() {
    window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
    if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`
    }
};

getTodos();

//add élément 
form.addEventListener("submit", (e) => {
    e.preventDefault(); //empêche de charger la page
    
    list.innerHTML += `<li>${item.value}</li>`; //ajoute la tâche
    item.value = ""; // vider l'input
    storeList();
});

//remove element
list.addEventListener("click", (e) => {
    // e.target.remove(); pour simplement supprimer
    if (e.target.classList.contains("checked")) {
        e.target.remove();
    } else {
        e.target.classList.add("checked");
    }
    storeList();
});



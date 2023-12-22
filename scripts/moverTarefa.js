const columns = document.querySelectorAll(".coluna");

document.addEventListener("dragstart", (e) =>{
    e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) =>{
    e.target.classList.remove("dragging");
});

columns.forEach((column) => {
    column.addEventListener("dragover", (e) =>{
        const dragging = document.querySelector(".dragging");
        column.appendChild(dragging);
    });
});

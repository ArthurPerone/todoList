const buttonAddTask = document.querySelector(".adicionarTarefa");
const todo = document.querySelector(".pendente");

buttonAddTask.addEventListener("click", (e) =>{
    //previne que a página recarregue
    e.preventDefault();

    //cria os elementos da tarefa
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const item = document.createElement("div");


    //adiciona as classes aos elementos
    item.classList.add("tarefa");
    title.classList.add("titulo-tarefa");
    description.classList.add("descricao-tarefa");


    //atribui os textos dos inputs a tarefa
    title.textContent = document.getElementById("inputTitulo").value
    description.textContent = document.getElementById("inputDescricao").value


    //define o titulo e a descrição como filhos do div da tarefa
    item.appendChild(title);
    item.appendChild(description)

    //permite arrastar a tarefa
    item.draggable = true;
    
    //adiciona a tarefa na lista de pendentes
    todo.appendChild(item)

    //limpa os campos de titulo e descrição
    document.getElementById("inputTitulo").textContent = ""
    document.getElementById("inputDescricao").textContent = ""
})
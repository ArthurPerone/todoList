const buttonAddTask = document.querySelector(".adicionarTarefa");
const todo = document.querySelector(".pendente");
const doing = document.querySelector(".fazendo");
const done = document.querySelector(".feito");

buttonAddTask.addEventListener("click", (e) =>{
    //previne que a página recarregue
    e.preventDefault();

    //cria os elementos da tarefa
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const item = document.createElement("div");
    const deleteTask = document.createElement("button");


    //adiciona as classes aos elementos
    item.classList.add("tarefa");
    title.classList.add("titulo-tarefa");
    description.classList.add("descricao-tarefa");
    deleteTask.classList.add("botao-deletar")


    //atribui os textos dos inputs a tarefa
    title.textContent = document.getElementById("inputTitulo").value
    description.textContent = document.getElementById("inputDescricao").value
    deleteTask.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" fill="#FFFFFF"/></svg>'

    deleteTask.addEventListener("click", () =>{
        try{
            todo.removeChild(item);
        }catch(err){
            try{
                doing.removeChild(item)
            }catch(err){
                try{
                    done.removeChild(item)
                }catch(err){
                    return
                }
            }
        }        
    })


    //define o titulo e a descrição como filhos do div da tarefa
    item.appendChild(title);
    item.appendChild(description)
    item.appendChild(deleteTask)

    //permite arrastar a tarefa
    item.draggable = true;
    
    //adiciona a tarefa na lista de pendentes
    todo.appendChild(item)

    //limpa os campos de titulo e descrição
    document.getElementById("inputTitulo").textContent = ""
    document.getElementById("inputDescricao").textContent = ""
})
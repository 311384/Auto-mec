let tarefas = []

function adicionarTarefa(){    
     
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (tarefa == ""){
        let mensagemErro = "Por favor, insira uma tarefa válida!";
        mensagem.textContent = mensagemErro;
        document.getElementById("mensagem").style.color ='#a34743';   
    } else {               
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        document.getElementById("mensagem").style.color ='#28a745';
       tarefas.push(tarefa) 
       renderizarTarefas()
    
    
inputTarefa.value = "";
}

}
function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML=""
            
        for (let i = 0; i < tarefas.length; i++){
            let novaTarefa= document.createElement("li")
            novaTarefa.textContent = tarefas[i]

            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover"            
            botaoRemover.textContent = "Remover"
            botaoRemover.onclick = () => removerTarefa (i)

            let botaoEditar =document.createElement("button")
            botaoEditar.className = "editar"            
            botaoEditar.textContent = "Editar"
            botaoEditar.onclick = () => editarTarefa (i)

            novaTarefa.appendChild(botaoRemover)
            novaTarefa.appendChild(botaoEditar)
            listaTarefas.appendChild(novaTarefa)
         }
        }
        function removerTarefa(i) {
            tarefas.splice(i, 1)
            renderizarTarefas()
        }
        function editarTarefa(i) {
           let tarefaEditada = prompt("Edite a tarefa:")
           if (tarefaEditada.trim() !== "") {
            tarefas[i] = tarefaEditada
            renderizarTarefas()
           }
        }
        function limparLista() {
            tarefas.length = 0
            renderizarTarefas()
            const mensagem = document.getElementById("mensagem")
            mensagem.textContent = "Lista de tarefas limpa com sucesso!"
            mensagem.style.color = '#28a745'; // Reset message color
        }

    



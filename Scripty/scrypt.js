function adicionarTarefa(){
     //recebe valor do input do usuário e remove espaços em branco pelo comando .trim()
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    // se o usuário não digitar nada, exibe mensagem de erro
    if (tarefa == ""){
        let mensagemErro = "Por favor, insira uma tarefa válida!";
        document.getElementById("mensagem").textContent = mensagemErro;    
    } else { 
        // se o usuário digitar algo, exibe mensagem de sucesso       
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        document.getElementById("mensagem").textContent = mensagemSucesso;
        //cria nova tarefa na lista li e insere na lista de ul
    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa= document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
    }

    //limpa o input após adicionar a tarefa
inputTarefa.value = "";

}

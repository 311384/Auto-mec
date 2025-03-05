function adicionarTarefa(){
     //recebe valor do input do usuário e remove espaços em branco pelo comando .trim()
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById("mensagem");
    // se o usuário não digitar nada, exibe mensagem de erro
    if (tarefa == ""){
        let mensagemErro = "Por favor, insira uma tarefa válida!";
        mensagem.textContent = mensagemErro;
        document.getElementById("mensagem").style.color ='#a34743';   
    } else { 
        // se o usuário digitar algo, exibe mensagem de sucesso       
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        document.getElementById("mensagem").style.color ='#28a745';
        //cria nova tarefa na lista li e insere na lista de ul
    const listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa= document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
    }

    //limpa o input após adicionar a tarefa
inputTarefa.value = "";

}

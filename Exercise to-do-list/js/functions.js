document.getElementById('novaTarefa').onkeypress =
    (e) => {
        if (e.code == "Enter")
            adicionarTarefa();
    }

adicionarTarefa = function() {
    var listaTarefas;
    var id, tmp;

    var novaTarefa = document.getElementById("novaTarefa");
    var value = novaTarefa.value;

    if (!value)
        return;

    listaTarefas = document.getElementById("tarefas");

    id = listaTarefas.childElementCount;
    novaTarefa = createContainerTarefa(id);

    tmp = createLabelTarefa(value);
    novaTarefa.appendChild(tmp);

    tmp = createBtnRemoveTarefa(id);
    novaTarefa.appendChild(tmp);

    listaTarefas.appendChild(novaTarefa);
}

function createContainerTarefa(id) {
    let container = document.createElement("div");
    container.className = "tarefaContainer";
    container.id = "tarefa_" + id;

    container.value = false;

    container.onclick = () => {
        container.style.background = (container.value) ?
            "rgb(147, 194, 212)" : "yellowgreen";
        container.value = !container.value;
    };

    return container;
}

function createLabelTarefa(value) {
    var label = document.createElement("label");
    label.className = "tarefaLabel";
    label.innerText = value;

    return label;
}

function createBtnRemoveTarefa(id) {
    let btn = document.createElement("input");
    btn.className = "tarefaBtn";
    btn.type = "button";
    btn.value = "X";
    btn.onclick = () => removerTarefa("tarefa_" + id);

    return btn;
}

function removerTarefa(idTarefa) {
    var listaTarefas = document.getElementById("tarefas");
    var tarefa = listaTarefas.children.namedItem(idTarefa);
    if (tarefa)
        listaTarefas.removeChild(tarefa);
}
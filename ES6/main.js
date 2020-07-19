class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        super();

        this.usuatio = 'Diego';
    }

    mostrarUsuario() {
        console.log(this.usuatio);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
};

MinhaLista.mostrarUsuario();

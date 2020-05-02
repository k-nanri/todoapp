export class TodoList {

    private todolist:HTMLElement;

    constructor() {
        const element:HTMLElement | null = document.getElementById("todolist");
        if (element === null) {
            throw Error("Not Found HTMLElement.");
        }
        this.todolist = element;
    }

    public pushTodo(todo:Text) {
        
        const list = document.createElement("div");
        list.appendChild(todo);
        this.todolist.appendChild(list);
    }
}
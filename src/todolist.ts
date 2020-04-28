export class TodoList {

    private todolist:HTMLElement;

    constructor() {
        const element:HTMLElement | null = document.getElementById("todoitems");
        if (element === null) {
            throw Error("Not Found HTMLElement.");
        }
        this.todolist = element;
    }

    public pushTodo(todo:Text) {
        
        const list = document.createElement("li");
        list.appendChild(todo);
        this.todolist.appendChild(list);
    }
}
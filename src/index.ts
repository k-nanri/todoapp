class TodoItem {
    private todo:string = "";

    constructor() {

        const todoTextElement:HTMLInputElement | null = document.getElementById("todo") as HTMLInputElement;
        if (!todoTextElement) {
            throw Error("Not Found HTMLElement");
        }

        this.todo = todoTextElement.value;
    }

    public getTodo(): string {
        return this.todo;
    }
}

class TodoList {

    private todolist:HTMLElement;

    constructor() {
        const element:HTMLElement | null = document.getElementById("todoitems");
        if (element === null) {
            throw Error("Not Found HTMLElement.");
        }
        this.todolist = element;
    }

    public pushTodo(todo:string) {
        
        const list = document.createElement("li");
        const textnode = document.createTextNode(todo);
        list.appendChild(textnode);
        this.todolist.appendChild(list);
    }

}

export function init() {
    const button = document.getElementById("regist");
    if (button) {
        button.onclick = () => {
            try {
                const todo:TodoItem = new TodoItem();
                const todolist:TodoList = new TodoList();
                todolist.pushTodo(todo.getTodo());
            } catch (e) {

            }
        };
    }
}

init();
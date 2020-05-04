import { completed } from "./actionevent";
import { CheckBoxItem } from "./checkboxitem";

export class TodoList {

    private static instance: TodoList | null = null;
    private static num:number = 0;
    private todolist:HTMLElement;

    private constructor() {
        const element:HTMLElement | null = document.getElementById("todolist");
        if (element === null) {
            throw Error("Not Found HTMLElement.");
        }
        this.todolist = element;
    }

    public static getInstance(): TodoList {

        if (!TodoList.instance) {
            TodoList.instance = new TodoList();
        }
        return TodoList.instance;
    }

    public pushTodo(todo:Text) {
        TodoList.num =+ 1;
        const list = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", completed);
        list.appendChild(checkbox);
        list.appendChild(todo);
        this.todolist.appendChild(list);
    }
}
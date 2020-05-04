import { completed } from "./actionevent";
import { CheckBoxItem } from "./checkboxitem";

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
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", completed);
        list.appendChild(checkbox);
        list.appendChild(todo);
        this.todolist.appendChild(list);
    }
}
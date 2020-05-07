import { completed, deleteTodo } from "./actionevent";
import { CheckBoxItem } from "./checkboxitem";
import { DeleteTodo } from "./deletetodo";

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
        list.className = "todo";

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todocheckbox"
        checkbox.addEventListener("click", completed);

        // label
        const todolabel = document.createElement("label");
        todolabel.appendChild(todo);
        todolabel.className = "todolabel"

        // delete button
        const deletebutton = document.createElement("input");
        deletebutton.type = "button";
        deletebutton.className = "btn btn-danger deletetodo";
        deletebutton.value = "削除";
        deletebutton.addEventListener("click", deleteTodo);

        list.appendChild(checkbox);
        list.appendChild(todolabel);
        list.appendChild(deletebutton);
        this.todolist.appendChild(list);
    }
}
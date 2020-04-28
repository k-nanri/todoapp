import {TodoItem} from "./todoitem";
import {TodoList} from "./todolist";

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
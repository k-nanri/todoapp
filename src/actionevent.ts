import {TodoItem} from "./todoitem";
import {TodoList} from "./todolist";

export function addTodo() {
    try {
        const todo:TodoItem = new TodoItem();
        const todolist:TodoList = new TodoList();
        todolist.pushTodo(todo.getTodo());
    } catch (e) {

    }
}
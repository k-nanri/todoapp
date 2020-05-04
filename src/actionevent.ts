import {TodoItem} from "./todoitem";
import {TodoList} from "./todolist";
import {CheckBoxItem} from "./checkboxitem";

export function addTodo() {
    try {
        const todo:TodoItem = new TodoItem();
        const todolist:TodoList = TodoList.getInstance();
        todolist.pushTodo(todo.getTodo());
    } catch (e) {
        // console.log(e);
    }
}

export function completed(event:Event) {

    try {
        const checkBoxItem:CheckBoxItem = new CheckBoxItem(event);
        checkBoxItem.complete();
    } catch(e) {
        
    }

}
import {addTodo} from "./actionevent";


export function init() {
    const button = document.getElementById("regist");
    if (button) {
        button.onclick = addTodo;
    }
}

init();
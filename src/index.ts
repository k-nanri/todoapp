import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";
import {addTodo} from "./actionevent";


export function init() {
    const button = document.getElementById("regist");
    if (button) {
        button.onclick = addTodo;
    }
}

init();
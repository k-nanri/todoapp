import {TodoList} from "../src/todolist";

test("todolist 1", () => {
    try {
        const todolist:TodoList = new TodoList()
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

test("todolist 2", () => {
    document.body.innerHTML =
        '<ul id="todoitems">';
    const actual:TodoList = new TodoList();
    expect(((actual as any).todolist)).toBeInstanceOf(HTMLElement);
});

test("todolist 3", () => {
    document.body.innerHTML =
        '<ul id="todoitems">';
    
    const todolist:TodoList = new TodoList();
    const text:Text = document.createTextNode("test2");
    todolist.pushTodo(text);

    const actual = document.getElementById("todoitems");
    expect(actual).not.toBeNull();
    if (actual) {
        const nodelist = actual.childNodes
        expect(nodelist[0].childNodes[0].nodeValue).toBe("test2");
    } else {
        throw new Error("actual is null.");
    }

});

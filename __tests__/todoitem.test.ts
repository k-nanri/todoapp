import {TodoItem} from "../src/todoitem";

test("constructor error", () => {

    try {
        const item:TodoItem = new TodoItem();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }

});

test("constructor successful", () => {
    document.body.innerHTML = '<div><input type="text" value="test" id="todo"></div>';
    const item:TodoItem = new TodoItem();
    expect((item as any).todo).toBe("test");
});

test("getTodo test", () => {
    document.body.innerHTML = '<div><input type="text" value="test2" id="todo"></div>';
    const item:TodoItem = new TodoItem();
    const text:Text = item.getTodo();
    expect(text).toBeInstanceOf(Text);
    expect(text.nodeValue).toBe("test2");
});
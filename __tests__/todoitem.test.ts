import {TodoItem} from "../src/todoitem";

beforeEach(() => {
    console.log("テスト関数の実行前に呼ばれる");
})

afterEach(() => {
    console.log("テスト関数の実行後に呼ばれる");
});

beforeAll(() => {
    console.log("最初に１回呼ばれるだけ");
});

afterAll(() => {
    console.log("全てのテスト完了後に呼ばれる");
});

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
import {TodoItem} from "../src/todoitem";
import {TodoList} from "../src/todolist";
import { addTodo } from "../src/actionevent";

jest.mock("../src/todoitem");
jest.mock("../src/todolist");
const TodoItemMock = TodoItem as jest.Mock;
const TodoListMock = TodoList as jest.Mock;

beforeEach(() => {
    TodoItemMock.mockClear();
    TodoListMock.mockClear();
});

test("test addTodo", () => {
    TodoItemMock.mockImplementation(() => {
        return {
            getTodo: (): Text => {
                return document.createTextNode("test");
            }
        }
    });

    TodoListMock.mockImplementation(() => {
        return {
            pushTodo:(text:Text): void => {
                return;
            }
        }
    });

    expect(addTodo());
});

test("test addTodo error", () => {
    TodoItemMock.mockImplementation(() => {
        throw new Error("constructor error.")
    });


    TodoListMock.mockImplementation(() => {
        pushTodo:(text:Text): void => {
            return;
        }
    });

    expect(addTodo());
});
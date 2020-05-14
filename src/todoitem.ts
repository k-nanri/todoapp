export class TodoItem {
    private todo:string = "";

    constructor() {
        const todoTextElement:HTMLInputElement | null = 
            document.getElementById("todo") as HTMLInputElement;
        if (!todoTextElement) {
            throw Error("Not Found HTMLElement");
        }

        const replace_str = todoTextElement.value.replace(/\s+/, "");
        if (replace_str.length === 0) {
            throw Error("invalid string");
        }
        console.log(replace_str.length);

        this.todo = todoTextElement.value;
    }

    public getTodo(): Text {
        const textnode = document.createTextNode(this.todo);
        return textnode;
    }
}
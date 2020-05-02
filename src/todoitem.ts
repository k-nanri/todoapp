export class TodoItem {
    private todo:string = "";

    constructor() {
        const todoTextElement:HTMLInputElement | null = 
            document.getElementById("todo") as HTMLInputElement;
        if (!todoTextElement) {
            throw Error("Not Found HTMLElement");
        }

        this.todo = todoTextElement.value;
    }

    public getTodo(): Text {
        const textnode = document.createTextNode(this.todo);
        return textnode;
    }
}
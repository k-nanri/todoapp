export class DeleteTodo {

    private element:EventTarget;

    constructor(event:Event) {
        const eventtarget : EventTarget | null  = event.currentTarget;
        if (!eventtarget) {
            throw new Error();
        }
        this.element = eventtarget;
    }

    public delete():void {
        const element:HTMLInputElement = this.element as HTMLInputElement;
        if (element.parentElement) {
            element.parentElement.remove();
        }
    }
}
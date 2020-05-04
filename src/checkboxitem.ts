export class CheckBoxItem {

    private event: EventTarget;

    constructor(event: Event) {
        const checkBoxTarget : EventTarget | null  = event.currentTarget;
        if (!checkBoxTarget) {
            throw new Error();
        }
        this.event = checkBoxTarget;
    }
    public complete():void {

        const element:HTMLInputElement = this.event as HTMLInputElement;
        console.log(element.checked);
        if (element.parentElement) {
            if (element.checked) {
                element.parentElement.style.textDecoration = "line-through";
            } else {
                element.parentElement.style.textDecoration = "";
            }
        }
    }
}
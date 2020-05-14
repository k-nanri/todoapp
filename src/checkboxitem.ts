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
        if (element.parentElement?.childNodes[1]) {
            const label:HTMLElement = element.parentElement?.childNodes[1] as HTMLElement;
            if (element.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "";
            }
        }
    }
}
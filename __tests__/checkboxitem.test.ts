import {CheckBoxItem} from "../src/checkboxitem";

test("constructor error", () => {

    try {
        const event: Event = document.createEvent("HTMLEvents");
        const actual = new CheckBoxItem(event);
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


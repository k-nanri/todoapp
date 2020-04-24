
const button = document.getElementById("regist");

if (button) {
    button.onclick = ():void => {
        
        // valueは、HTMLInputElementが実装しているため型アサーションする
        const textbox:HTMLInputElement = document.getElementById("todo") as HTMLInputElement
        let todo:string = "";
        if (textbox) {
            // テキストボックスから値を取得
            todo = textbox.value;
        }
        
        // todoのリストにテキストボックスから取得したtodoを書き込む
        const unsortlist = document.getElementById("todoitems");
        const list = document.createElement("li");
        const textnode = document.createTextNode(todo);
        list.appendChild(textnode);
        if (unsortlist) {
            unsortlist.appendChild(list);
        }
    }
}
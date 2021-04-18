export class Button {

    public HTML_id:string;
    public Texto:string;
    public OnClick:string;
    public ButtonStyle:string;
    public ButtonClass:string;

    constructor(_HTML_id:string, _Texto:string, _OnClick:string, _ButtonStyle:string, _ButtonClass:string) {

        this.HTML_id = _HTML_id;
        this.Texto = _Texto;
        this.OnClick = _OnClick;
        this.ButtonStyle = _ButtonStyle;
        this.ButtonClass = _ButtonClass;

    }

}
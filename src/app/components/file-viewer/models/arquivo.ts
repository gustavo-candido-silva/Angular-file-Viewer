export class Arquivo {

    public HTML_id:string;
    public Source:string;
    public PreviewStyle:string;
    public SourceName:string;

    constructor(_HTML_id:string, _Source:string, _PreviewStyle:string, _SourceName:string) {

        this.HTML_id = _HTML_id;
        this.Source = _Source;
        this.PreviewStyle = _PreviewStyle;
        this.SourceName = _SourceName;
        
    }

}
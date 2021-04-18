export class ListaEncadeada {

    private nodeAtual:Node = null;
    private nodeList:Node[] = [];
    private nomeLista:string = "";

    constructor(_nomeLista) {

        this.nomeLista = _nomeLista;        

    }

    AddElement(_objeto:any){

        let node = new Node(this.GetProxId(), _objeto);

        if(this.nodeList.length == 0){

            this.nodeAtual = node;

        }else{

            this.nodeAtual.nodeProximo = node;

            node.nodeAnterior = this.nodeAtual;

            this.nodeAtual = node;

        }

        this.nodeList.push(node)

    }

    GetNomeLista(){
        return this.nomeLista;
    }

    GetIdAtual(){
        try {
            return this.nodeAtual.IdNode;
        } catch (error) {
            return null;
        }
    }

    GetConteudo(){
        try {
            return this.nodeAtual.objeto;
        } catch (error) {
            return null;
        }
    }

    GetProxId(){

        if(this.nodeList.length == 0){
            return 0;
        }else{

            let ultIndex = this.nodeList.length;

            return this.nodeList[ultIndex].IdNode+1;

        }

    }

    GetConteudoById(Id:number){

        let nodeFilter = this.nodeList.filter(x=>{
            if(x.IdNode == Id)
                return true;
            else
                return false;
        });

        return nodeFilter[0].objeto;

    }

    GetIdByConteudo(obj:any){

        let nodeFilter = this.nodeList.filter(x=>{
            if(JSON.stringify(x.objeto) == JSON.stringify(obj))
                return true;
            else
                return false;
        });

        return nodeFilter[0].IdNode;

    }

    RemoveNode(Id:number){

        let nodeFilter = this.nodeList.filter(x=>{
            if(x.IdNode == Id)
                return true;
            else
                return false;
        });

        let indexOf = this.nodeList.indexOf(nodeFilter[0]);

        let nodeAnterior = nodeFilter[0].nodeAnterior;
        let nodeProximo = nodeFilter[0].nodeProximo;

        nodeProximo.nodeAnterior = nodeAnterior;
        nodeAnterior.nodeProximo = nodeProximo;

        if(JSON.stringify(nodeFilter[0]) == JSON.stringify(this.nodeAtual)){

            this.nodeAtual = nodeAnterior;

        }

        this.nodeList.splice(indexOf,1);
    }

    GetItensArray(){

        let itensArray = [];

        this.nodeList.forEach(x=>{
            itensArray.push({Id:x.IdNode, Obj:x.objeto});
        })

        return itensArray;
    }


}

class Node{

    public nodeAnterior:Node = null;
    public nodeProximo:Node = null;
    public IdNode:number = null;
    public objeto:any = null;

    constructor(_id:number, _obj:any){
        this.IdNode = _id;
        this.objeto = _obj;
    }
    
}
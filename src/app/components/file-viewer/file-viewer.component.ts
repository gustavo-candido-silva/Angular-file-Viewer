import { Component, Input, OnInit } from '@angular/core';

import { Arquivo } from './models/arquivo';
import { Button } from './models/button';
import { ListaEncadeada } from './models/lista-encadeada';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {

  @Input() lstArquivos:ListaEncadeada;
  @Input() lstBtn:ListaEncadeada;

  public arq_atual:{Id:number,Obj:Arquivo};
  public lst_arquivo: {Id:number,Obj:Arquivo}[] = [];
  public lst_buttons: {Id:number,Obj:Button}[] = [];

  constructor() { }

  ngOnInit(): void {

    this.lst_arquivo = this.lstArquivos.GetItensArray();
    this.lst_buttons = this.lstBtn.GetItensArray();

    this.arq_atual = this.lst_arquivo[0];

  }

  f_displayProx(){

    console.log("prox");
    this.arq_atual = this.lstArquivos.GetProxConteudo(this.arq_atual.Obj);

  }

  f_displayAnt(){

    console.log("Ant");
    this.arq_atual = this.lstArquivos.GetAntConteudo(this.arq_atual.Obj);

  }

  f_deleteAtual(){

    console.log("Del");
    this.arq_atual = this.lstArquivos.RemoveNode(this.arq_atual.Id);
    this.lst_arquivo = this.lstArquivos.GetItensArray();

  }

  f_redirect(fn){

    this[fn]();

  }

}

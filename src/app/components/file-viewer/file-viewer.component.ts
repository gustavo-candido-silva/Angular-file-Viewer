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

  public arq_atual:Arquivo;
  

  constructor() { }

  ngOnInit(): void {

    this.arq_atual = this.lstArquivos.GetConteudoById(0);

  }

  f_displayProx(){

  }

  f_displayAnt(){

  }

  f_deleteAtual(){

  }

}

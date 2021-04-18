import { Component, OnInit } from '@angular/core';
import { Arquivo } from 'src/app/components/file-viewer/models/arquivo';
import { Button } from 'src/app/components/file-viewer/models/button';
import { ListaEncadeada } from 'src/app/components/file-viewer/models/lista-encadeada';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public lstArq:ListaEncadeada = new ListaEncadeada("Arquivos");
  public lstButton:ListaEncadeada = new ListaEncadeada("Botoes");
  public lstReady:boolean = false;

  constructor() { }

  ngOnInit(): void {

    let arq = []
    arq.push(new Arquivo("file_0","assets/files/other_and_decorative.png","","other_and_decorative.png"));
    arq.push(new Arquivo("file_1","assets/files/main_lev_build.png","","main_lev_build.png"));

    arq.forEach(element => {
      this.lstArq.AddElement(element);
    });

    let buttons = [];
    buttons.push(new Button("btn_anterior", "", "f_displayAnt", "", "viewer-prev"))
    buttons.push(new Button("btn_reset", "", "f_deleteAtual", "", "viewer-reset"))
    buttons.push(new Button("btn_proximo", "", "f_displayProx", "", "viewer-next"))

    buttons.forEach(element => {
      this.lstButton.AddElement(element);
    });

    let time = setInterval(() => {

      if(this.lstArq.GetIdAtual() && this.lstButton.GetIdAtual()){
        clearInterval(time);
        this.lstReady = true;
      }
      
    }, 500);
    

  }

}

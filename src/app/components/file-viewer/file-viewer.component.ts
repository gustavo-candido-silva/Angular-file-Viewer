import { Component, Input, OnInit } from '@angular/core';

// You should import the CSS file.
// import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

import { fromPath } from "pdf2pic";
import { Arquivo } from './models/arquivo';
import { Button } from './models/button';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {

  @Input() lstArquivos:Arquivo[] = [];
  @Input() lstBtn:Button[] = [];
  

  constructor() { }

  ngOnInit(): void {



  }

  f_displayProx(){

  }

  f_displayAnt(){

  }

  f_deleteAtual(){

  }

}

import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articleList',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.scss']
})
export class ArticleListComponent {
  @Input() data
  layer:boolean=false;
  showLayer(){
   this.layer=true;
  }
  hideLayer(){
    this.layer=false;
  }
}


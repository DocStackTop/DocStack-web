import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  choose=window.location.href.split('page/')[1]?window.location.href.split('page/')[1]:"home"
  menus=[{
    "text":"首页",
    "type":"home"
  },{
    "text":"我的文章",
    "type":"article"
  },{
    "text":"我的收藏",
    "type":"collection"
  },{
    "text":"留言管理",
    "type":"message"
  }]
  constructor(private router: Router) { }
  chooseMenu(data){
    this.router.navigate(["/page/"+data.type]);
    this.choose=data.type
  }
  login(){
    this.router.navigate(["/login"]);
  }
  
}

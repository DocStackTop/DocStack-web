import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
let list=require('./../../../../until/articleList.json')
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {
  theme = true;
  list=list;
  choose=-1;
  canResize=false;
  rightMenuStatus=false;
  pageWidth=document.body.clientWidth;
  pageHeight=document.body.clientHeight;
  rightMenu={
    x:0,
    y:0,
    id:0
  }
  resize=230;
  menuWidth=240;
  chooseData(data){
    this.choose=data;
    this.rightMenuStatus=false;
  }
  rightMenuShow(data){
this.rightMenu=data;
this.choose=data.id;
this.rightMenuStatus=true;
  }
  startResize(e){
    this.canResize=true;
    // this.resize=e.pageX-10;
    // this.menuWidth=e.pageX;
  }
  endResize(e){
    this.canResize=false;
  }
  setResize(e){
    
// if(this.canResize){
//   console.log(e)
//   this.resize=e.pageX-10;
//   this.menuWidth=e.pageX;
// }
  }
  ngAfterViewInit(){
    let that=this;
    window.onmousedown = function(){
      that.rightMenuStatus=false;
    }
    window.onmouseup = function(e){
      that.canResize=false;
      if(11>=that.resize){
        that.resize=1;
        that.menuWidth=11;
      }
    }
    window.onmousemove = function(e){
      if(that.canResize&&that.resize>=1){
        that.resize=e.pageX-10;
        that.menuWidth=e.pageX;
      }else if(that.canResize){
        that.resize=1;
        that.menuWidth=11;
      }
    }
    window.onresize=function(){
      that.pageWidth=document.body.clientWidth;
      that.pageHeight=document.body.clientHeight;
    }
    window.oncontextmenu = function ()
    {
        return false;     // 取消默认菜单
    }
  }
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
let list=require('./../../../../until/homePageList.json')
console.log(list)
@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  list=list;
  lineNum=0;
  boxWidth=0;
  marginWidth=0;
  marginLeft=0;
  _current=1;
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let that=this;
    that.lineNum=Math.floor((document.getElementById("articleBox").clientWidth-60)/175)-1;
    that.boxWidth=document.getElementById("articleBox").clientWidth-60;
    that.marginWidth=that.boxWidth-that.lineNum*175;
    that.marginLeft=parseInt(that.marginWidth/(that.lineNum*2)+"");
  }
  changePage(data){
    console.log("当前页数"+data)
  }
  ngAfterViewInit(){
    let that=this;
   
    window.onresize = function(){
      that.lineNum=Math.floor((document.getElementById("articleBox").clientWidth-60)/175)-1;
      that.boxWidth=document.getElementById("articleBox").clientWidth-60;
      that.marginWidth=that.boxWidth-that.lineNum*175;
      that.marginLeft=parseInt(that.marginWidth/(that.lineNum*2)+"");
    }
  }
}


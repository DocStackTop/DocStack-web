import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from "./../../../service/article.service"

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  list=[];
  lineNum=0;
  boxWidth=0;
  marginWidth=0;
  marginLeft=0;
  _current=1;
  constructor(private router: Router,private articleService: ArticleService) { }
  ngOnInit() {
    this.getArticleList();
  }

  getArticleList(): void {
    this.articleService.getArticleList()
      .subscribe(articles => {
        this.list=articles;
      });
  }
  changePage(data){
    console.log("当前页数"+data)
  }
  goDetail(data){
    this.router.navigate(["/details",data]);
  }
  ngAfterViewInit(){
    let that=this;
    window.onload=function(){
      that.lineNum=Math.floor((document.getElementById("articleBox").clientWidth-60)/175)-1;
      that.boxWidth=document.getElementById("articleBox").clientWidth-60;
      that.marginWidth=that.boxWidth-that.lineNum*175;
      that.marginLeft=parseInt(that.marginWidth/(that.lineNum*2)+"");
    }
    window.onresize = function(){
      that.lineNum=Math.floor((document.getElementById("articleBox").clientWidth-60)/175)-1;
      that.boxWidth=document.getElementById("articleBox").clientWidth-60;
      that.marginWidth=that.boxWidth-that.lineNum*175;
      that.marginLeft=parseInt(that.marginWidth/(that.lineNum*2)+"");
    }
  }
}


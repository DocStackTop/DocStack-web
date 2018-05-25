import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { MenuService } from "./../../../service/menu.service";
import { ArticleService } from "./../../../service/article.service"
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {
  @ViewChild('nzTree') nzTree;
  theme = true;
  list=[];
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
  articleId=-1;
  content
  
  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,private menuService: MenuService) { }
    
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.articleId=params['id'];
      this.getArticle();
    });
    this.getMenuList();
  }
  getArticle(): void {
    this.articleService.getArticle(this.articleId)
      .subscribe(articles => {
        this.content=articles.desc;
      });
  }
  getMenuList(): void {
    this.menuService.getMenuList()
      .subscribe(menus => {
        menus.map((item,i)=>{
          this.list.push(new NzTreeNode(item))
        })
      });
  }
  mouseAction(name: string, event: NzFormatEmitEvent): void {
    console.log(name, event);
    // just for demo, should get in ngAfterViewInit
    console.log('checkedNodes: %o', this.nzTree.getCheckedNodeList());
    console.log('selectedNodes: %o', this.nzTree.getSelectedNodeList());
    console.log(this.nzTree.nzTreeService.getCheckedNodeList());
  }

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


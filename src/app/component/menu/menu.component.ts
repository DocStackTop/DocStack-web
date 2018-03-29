import { Component,Input,Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [    
        style( {height: 0}),
        animate(250,style({height: '*'}))
      ]),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class MenuComponent {
  @Output() chooseData = new EventEmitter<any>();
  @Output() rightMenuShow = new EventEmitter<any>();
  @Input() list
  @Input() choose
  close=-1;
  rightMenu={
    x:0,
    y:0,
    id:0
  }
  changeShowStatus(e,data){
    e.stopPropagation();
      e.preventDefault();
      if(this.close==data){
        this.close=-1;
      }else{
        this.close=data;
      }
    
  }
  chooseStatus(e,data){
    e.stopPropagation();
      e.preventDefault();
      this.chooseData.emit(data)
  }
  chooseDatatoPar(data){
    this.chooseData.emit(data)
  }
  rightMenuPar(e,data){
    if(e.button==2){
      this.rightMenu={
        x:e.pageX,
        y:e.pageY,
        id:data
      }
      e.stopPropagation();
      e.preventDefault();
      this.rightMenuShow.emit(this.rightMenu)
      return false;
    }
  }

  ngAfterViewInit(){
    window.oncontextmenu = function ()
    {
        return false;     // 取消默认菜单
    }
  }
}


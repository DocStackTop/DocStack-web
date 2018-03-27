import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  type=0//0:登录 1：注册 2：验证码 3：填写邮箱 4：重置密码
  test(e){
    if(e.button==2){
      console.log("into")
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }
  retrieveShow(){
    this.type=3;
  }
  registeredShow(){
    this.type=1;
  }
  changeType(data){
    if(data==0){
      //登录接口，成功进首页
    }
    if(data==1){
      //校验，成功后发送验证码，成功后填写验证码
      this.type=2
    }
    if(data==2){
      //注册的验证码成功后进首页，忘记密码的成功后进重置密码
      this.type=4
    }
    if(data==3){
      //发送验证码，成功后进验证码
      this.type=2
    }
    if(data==4){
      //成功后进登录？或者首页
      this.type=0
    }
  }
  ngAfterViewInit(){
    
    window.oncontextmenu = function ()
    {
        return false;     // 取消默认菜单
    }
  }
  
}


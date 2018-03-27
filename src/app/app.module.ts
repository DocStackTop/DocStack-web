import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { ContentComponent } from './pages/content/content.component';
import { HomePageComponent } from './pages/content/homePage/homePage.component';
import { ArticleComponent } from './pages/content/article/article.component';
import { CollectionComponent } from './pages/content/collection/collection.component';
import { MessageComponent } from './pages/content/message/message.component';
import { ArticleListComponent } from './component/articleList/articleList.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ContentComponent,
    HomePageComponent,
    ArticleComponent,
    CollectionComponent,
    MessageComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
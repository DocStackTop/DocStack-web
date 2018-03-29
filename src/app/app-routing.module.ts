import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { ContentComponent } from './pages/content/content.component';
import { HomePageComponent } from './pages/content/homePage/homePage.component';
import { ArticleComponent } from './pages/content/article/article.component';
import { CollectionComponent } from './pages/content/collection/collection.component';
import { MessageComponent } from './pages/content/message/message.component';
import { DetailsComponent } from './pages/content/details/details.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'page', component: ContentComponent,children: [
      { path: 'home', component: HomePageComponent },
      { path: 'article', component: ArticleComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'message', component: MessageComponent }
    ]},
    { path: 'details/:id', component: DetailsComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from './../model/article';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleService {

  private articleUrl = 'api/article';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getArticleList (): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getArticleNo404<Data>(id: number): Observable<Article> {
    const url = `${this.articleUrl}/?id=${id}`;
    return this.http.get<Article[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Article>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getArticle(id: number): Observable<Article> {
    const url = `${this.articleUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Article>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchArticles(term: string): Observable<Article[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Article[]>(`${this.articleUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Article[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addArticle (hero: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, hero, httpOptions).pipe(
      tap((hero: Article) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Article>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteArticle (hero: Article | number): Observable<Article> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.articleUrl}/${id}`;

    return this.http.delete<Article>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Article>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateArticle (hero: Article): Observable<any> {
    return this.http.put(this.articleUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
    //   this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
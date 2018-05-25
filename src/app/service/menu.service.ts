import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Menu } from './../model/menu';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuService {

  private menuUrl = 'api/menu';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getMenuList (): Observable<any> {
    return this.http.get<any>(this.menuUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getMenuNo404<Data>(id: number): Observable<Menu> {
    const url = `${this.menuUrl}/?id=${id}`;
    return this.http.get<Menu[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Menu>(`getHero id=${id}`))
      );
  }

  /* GET heroes whose name contains search term */


  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addMenu (hero: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menuUrl, hero, httpOptions).pipe(
      tap((hero: Menu) => this.log(`added hero w/ id=$`)),
      catchError(this.handleError<Menu>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMenu (hero: Menu | number): Observable<Menu> {
    // const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.menuUrl}/$`;

    return this.http.delete<Menu>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=$`)),
      catchError(this.handleError<Menu>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateMenu (hero: Menu): Observable<any> {
    return this.http.put(this.menuUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=$`)),
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
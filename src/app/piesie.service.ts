import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PiesieService {
  constructor(private http: HttpClient) { }
  piesieBazaUrl = 'https://dog.ceo/api/';  

  private log(message: string) {
    console.log(message);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
   getRasyPiesie(): Observable<any> {
       return this.http.get<any>('https://dog.ceo/api/breeds/list/all').pipe(
      tap(_ => this.log('Mamy rasy')),
      catchError(this.handleError<any>('getRasyPiesie', []))
    );
      }
      getPiesie(rasa: string): Observable<any> {
        return this.http.get<any>(`https://dog.ceo/api/breed/${rasa}/images`).pipe(
       tap(_ => this.log(`Mamy zwariowane pieski z rasy: ${rasa}`)),
       catchError(this.handleError<any>('getRasyPiesie', []))
     );
       }
    
}


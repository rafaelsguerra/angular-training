import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http'

import { Post } from './post.module';
import { map, catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private http: HttpClient) { }
  
  // The url is deliberatedly wrong so no one can overstress the server.
  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title: title, content: content }
    return this.http.post(
      'https://angular-guide-2637.firebaseio.com/posts.json',
      postData, {observe: 'response'}
    );
  }

  // The url is deliberatedly wrong so no one can overstress the server.
  fetchPosts() {
    let customParams = new HttpParams();
    customParams = customParams.append('print', 'pretty');
    customParams = customParams.append('custom', 'keys');
    return this.http.get<{ [key: string]: Post }>('https://angular-guide-2637.firebaseio.com/posts.json', {
      headers: new HttpHeaders({'Custom-header': 'Hello'}),
      params: customParams,
      responseType: 'json'
    }).pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }), catchError(errorResponse => {
        return throwError(errorResponse);
      })
    );
  }

  // The url is deliberatedly wrong so no one can overstress the server.
  deleteAllPosts() {
    return this.http.delete('https://angular-guide-2637.firebaseio.com/posts.json', 
      { observe: 'events',
        responseType: 'text'}
    ).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // do something
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
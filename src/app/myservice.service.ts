import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
@Injectable()
export class MyserviceService {

  constructor(private http: Http) {}
 getPosts() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
    }

}

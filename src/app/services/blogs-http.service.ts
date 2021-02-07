import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Blog {
  id: number
  blogUrl: string	
  title: string
  createdOn: string
  author: string
  category: string
  image: string
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class BlogsHttpService {

  private apiRootUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getBlogs(): Observable<Blog[]> {
	  let url = this.apiRootUrl + "api/blogs/getBlogs";
    return this.http.get<Blog[]>(url);
  }

  public getBlogById(id : string): Observable<Blog> {
	  let url = this.apiRootUrl + `api/blogs/blog/id/${id}`;
    return this.http.get<Blog>(url);
  }

  public getBlogByUrl(blogUrl : string): Observable<Blog> {
    let url = this.apiRootUrl + `api/blogs/blog/url/${blogUrl}`;
    return this.http.get<Blog>(url);
  }
}

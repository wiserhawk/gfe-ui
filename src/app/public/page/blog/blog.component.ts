import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { tap } from 'rxjs/operators';
import { Blog, BlogsHttpService } from 'src/app/services/blogs-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog_url: string
  blog: Blog
  imgBasePath = environment.imgBaseURL + 'blogs/'
  private readonly APP_NAME = 'GetFitEat | '

  constructor(private readonly route: ActivatedRoute, 
      private readonly blogHttp: BlogsHttpService,
      private readonly titleService: Title) { 
        this.route.params.subscribe( params => {
          this.blog_url = params.blog_url
      } 
    )
    this.loadBlog()
  }

  ngOnInit(): void {
  }

  loadBlog() {
    this.blogHttp.getBlogByUrl(this.blog_url).subscribe( res => {
      this.blog = res
      this.titleService.setTitle(this.APP_NAME + this.blog.title)
    })
  }

  formatDate(date: string) {
    if (date) {
      return format(new Date(date), 'MMM dd, yyyy')
    }
  }
}

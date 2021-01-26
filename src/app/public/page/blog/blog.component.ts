import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog_url: string
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.blog_url = params.blog_url ); 
  }

  ngOnInit(): void {
  }

}

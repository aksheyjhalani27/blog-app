import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularDataTableModule } from 'angular-data-table-library'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})

export class BlogListComponent implements OnInit {
  blogList: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchBlogPost();
  }

  fetchBlogPost() {
    this.blogList =  JSON.parse(localStorage.getItem('BlogList'));
    let dataPerPage = 10;
    let color = 'Blue';
  }

  goBlogs(){
    this.router.navigate(['/blogs']);
  }

}

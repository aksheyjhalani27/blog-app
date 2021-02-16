import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  description: string = '';
  blogTitle: string = '';
  
  BlogList: Array<any>=[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit(){
    if(localStorage.getItem('BlogList')){
      this.BlogList = JSON.parse(localStorage.getItem('BlogList'));
      this.BlogList.push({Title: this.blogTitle, Description: this.description});
    } else {
      this.BlogList[0] = {Title: this.blogTitle, Description: this.description};
    }
    localStorage.setItem('BlogList',JSON.stringify(this.BlogList));
    this.router.navigate(['/blogList']);
  }

}

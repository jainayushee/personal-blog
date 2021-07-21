import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  heading:any;
  text:any;
  image:any;
  id:any;
  blogContent:any;

  constructor(private receiveContent:BlogService, private route: ActivatedRoute ) {     
    window.scrollTo(0, 0);   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.blogContent= this.receiveContent.getByID(this.id).subscribe(response =>
      {
        this.blogContent= response
        this.heading=this.blogContent.title
        this.text=this.blogContent.text
        this.image= this.blogContent.image
      })
    
    
  }

}

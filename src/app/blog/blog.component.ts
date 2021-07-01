import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  heading!: any;
  image!: any;
  content!: any;

  constructor() {    
  }

  ngOnInit(): void {
    this.heading="cricketing losses"
    // this.image='https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1'
    this.image="../../assets/cricket.png"
    
  }

}

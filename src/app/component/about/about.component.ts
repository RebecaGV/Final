import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  youtube = 'https://www.youtube.com/watch?v=92Z6W9vMrJY';

  constructor() { }

  ngOnInit(): void {
  }

  
}

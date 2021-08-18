import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header = [ 'https://timetables.kz/wp-content/uploads/2021/07/cropped-asc-timetables-logo-kz-300x81.png' ]
  constructor() { }

  ngOnInit(): void {
  }

}

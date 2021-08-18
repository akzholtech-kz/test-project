import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edupage',
  templateUrl: './edupage.component.html',
  styleUrls: ['./edupage.component.css']
})
export class EdupageComponent implements OnInit {
  imgEdupage = "https://timetables.kz/wp-content/uploads/2021/07/Edupage-main-page-iphone-11-1448x2048.png"
  constructor() { }

  ngOnInit(): void {
  }

}

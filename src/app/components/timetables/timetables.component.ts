import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetables',
  templateUrl: './timetables.component.html',
  styleUrls: ['./timetables.component.css']
})
export class TimetablesComponent implements OnInit {
  imgTimetable = "https://timetables.kz/wp-content/uploads/2021/07/Timetables-main-page-2048x1070.png"
  constructor() { }

  ngOnInit(): void {
  }

}

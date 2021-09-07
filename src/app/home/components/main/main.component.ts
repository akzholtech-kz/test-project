import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  image = 'https://timetables.kz/wp-content/uploads/2021/07/tt_mainmock.png';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['guid']);
  }
}

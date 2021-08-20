import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  header = [
    'https://timetables.kz/wp-content/uploads/2021/07/cropped-asc-timetables-logo-kz-300x81.png',
  ];
  language = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  scroll(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  onClick() {
    this.language = !this.language;
  }
}

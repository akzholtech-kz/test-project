import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guid',
  templateUrl: './guid.component.html',
  styleUrls: ['./guid.component.css']
})
export class GuidComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // onCreate() {
  //   this.router.navigate(['functions'], {relativeTo: this.route})
  // }
}

import { GuidDataStorageService } from './../services/guid-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Function } from 'src/app/shared/models/block.model';

@Component({
  selector: 'app-fuctions',
  templateUrl: './fuctions.component.html',
  styleUrls: ['./fuctions.component.css'],
})
export class FuctionsComponent implements OnInit {
  functions: Function[] = [];
  constructor(
    private router: Router,
    private dataService: GuidDataStorageService
  ) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((response) => {
      this.functions = response;
      console.log('functions: ', this.functions);
    });
  }

  public openFunction(f: Function): void {
    this.router.navigate(['guid', f.id]);
  }
}

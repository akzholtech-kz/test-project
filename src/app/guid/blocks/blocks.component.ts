import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content, Function } from 'src/app/shared/models/block.model';
import { GuidDataStorageService } from './../services/guid-data.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
})
export class BlocksComponent implements OnInit {
  selectedFunction: Function;
  constructor(
    private route: ActivatedRoute,
    private dataService: GuidDataStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const functionId = params.get('functionId');

      this.selectedFunction = this.dataService.getFunctionById(functionId);
      console.log('selectedFunction: ', this.selectedFunction);
    });
  }
  public onClick(content: Content): void {
    this.router.navigate(['guid', this.selectedFunction.id, content.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content, Function } from 'src/app/shared/models/block.model';
import { GuidDataStorageService } from '../services/guid-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ComponentComponent implements OnInit {
  selectedContent: Content;

  constructor(
    private route: ActivatedRoute,
    private dataService: GuidDataStorageService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const functionId = params.get('functionId');
      const contentId = params.get('contentId');
      this.selectedContent = this.dataService.getContentBy(functionId, contentId);
      console.log('selectedContent: ', this.selectedContent);
    });
  }
}

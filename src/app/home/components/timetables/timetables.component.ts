import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Content } from 'src/app/shared/models/block.model';
import { TimeService } from './timetables.service';

@Component({
  selector: 'app-timetables',
  templateUrl: './timetables.component.html',
  styleUrls: ['./timetables.component.css'],
})
export class TimetablesComponent implements OnInit, OnDestroy {
  @ViewChild('f') tmForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Content;
  employees: Content[] = [new Content('1', 'frond'), new Content('2', 'back')];

  constructor(private tmService: TimeService) {}

  ngOnInit(): void {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const newEmployees = new Content(value.id, value.name);
    this.employees.push(newEmployees);
    form.reset();
  }

  onEditItem(index: number) {
    (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.tmService.getemployee(index);
      this.tmForm.setValue({
        name: this.editedItem.id,
        amount: this.editedItem.name,
      });
    };
  }
  onClear() {
    this.tmForm.reset();
  }
  onDelete() {
    this.employees.pop();
    this.onClear();
  }

  ngOnDestroy() {}
}

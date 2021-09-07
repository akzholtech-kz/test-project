import { Subject } from 'rxjs';
import { Content } from 'src/app/shared/models/block.model';

export class TimeService {
  startedEditing = new Subject<Content[]>();

  private employees: Content[] = [
    new Content('1', 'frond'),
    new Content('2', 'back'),
  ];

  getemployee(index: number) {
    return this.employees[index];
  }

  onDelete(index: number) {
    this.employees.splice(index, 1);
    this.startedEditing.next(this.employees.slice());
  }
}

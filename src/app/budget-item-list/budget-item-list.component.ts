import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BudgetItem } from '../shared/modules/budget-item.modules';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: BudgetItem) {
    this.delete.emit(item);
  }

}

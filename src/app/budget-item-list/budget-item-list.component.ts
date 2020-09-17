import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';
import { BudgetItem } from '../shared/modules/budget-item.modules';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    //show edit modal
    let dialogRef = this.dialog.open(EditItemModelComponent,
      {
        width: '580px',
        data: item
      });

      dialogRef.afterClosed().subscribe(result => {
        //check if result has value
        if (result) {
          //replace the item with the updated/submitted item from the form
          this.budgetItems[this.budgetItems.indexOf(item)]= result;
        }
      });
  }

}

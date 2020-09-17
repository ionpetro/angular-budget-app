import { Component, EventEmitter, Input, Output, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms'
import { BudgetItem } from '../shared/modules/budget-item.modules';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  onSubmit(form: NgForm) {
    console.log(form);
    this.formSubmit.emit(form.value);
    form.reset();
  }

  constructor() { }

  ngOnInit(): void {
    // if item has a value
    if (this.item){
      // an existing object was passed
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

}

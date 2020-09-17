import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { BudgetItem } from '../shared/modules/budget-item.modules';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

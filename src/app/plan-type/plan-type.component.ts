import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConstantService } from './../services/constant.service';

@Component({
  selector: 'app-plan-type',
  templateUrl: './plan-type.component.html',
  styleUrls: ['./plan-type.component.css', './../app.component.css'],
  providers: [ConstantService]
})
export class PlanTypeComponent implements OnInit {
  @Input() burgerTypes;
  @Output() nextEmitter = new EventEmitter<string>();
  burgerType:string = 'Basic';
  constructor() {}

  ngOnInit() {
  }

  next() {
    this.nextEmitter.emit(this.burgerType);
  }
}

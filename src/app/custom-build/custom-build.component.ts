import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-build',
  templateUrl: './custom-build.component.html',
  styleUrls: ['./custom-build.component.css']
})
export class CustomBuildComponent implements OnInit {
  @Input() data;
  @Input() pricing;
  @Input() calories;
  @Output() nextPageEmitter = new EventEmitter<any>();
  @Output() backPageEmitter = new EventEmitter<any>();
  @Output() priceCalEmitter = new EventEmitter<any>();

  fieldValue;

  constructor() { }

  ngOnInit() {}

  nextPage(item, selectedValue) {
    this.nextPageEmitter.emit({'item':item, 'selectedValue':selectedValue});
    console.log(this.fieldValue);
  }

  backPage(item) {
    this.backPageEmitter.emit({'item':item});
  }

  valueChanged(value) {
    console.log();
    this.priceCalEmitter.emit({"calories" : value.calories, "addPrice" : value.additionalPrice});
  }

}

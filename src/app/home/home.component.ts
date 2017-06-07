/**
 * Created by praneethrajreddyveerlapally on 6/6/17.
 */
import { Component } from '@angular/core';
import { ConstantService } from './../services/constant.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConstantService]
})
export class HomeComponent {
  title = 'app works!';
  constants = {};
  homeFields = {};

  constructor(private constant : ConstantService) {
    this.init();
    this.constant = constant;
  }

  init() {
    this.constants = this.constant.getConstants();
    this.homeFields = this.constant.getHomeFields();
  }
}

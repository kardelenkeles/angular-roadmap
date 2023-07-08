import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.css']
})
export class PropBindComponent {
  title = 'RastMobile';
  product = {
    name : 'airpod',
    price: 1000
  };
}

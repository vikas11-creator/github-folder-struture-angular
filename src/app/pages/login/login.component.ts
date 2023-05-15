import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  height: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}

  ngOnInit(): void {
    console.log(this.height);
    let i = 0;
    // let max = 0;
    let store;
    console.log(this.height);
    for (let j = this.height.length - 1; j < this.height.length; j--) {
      store = Math.min(this.height[i], this.height[j]) * Math.abs(j - i);
      // console.log(store);
    }
  }
}

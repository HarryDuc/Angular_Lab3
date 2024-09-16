import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b6',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b6.component.html',
  styles: ``
})
export class B6Component {
  a: number = 0;
  b: number = 0;
  Array: any[] = [];
  ngauNhien(a: number, b: number) {
    this.Array = [];
    for (let i = 0; i < a; i++) {
      this.Array[i] = [];
      for (let j = 0; j < b; j++) {
        this.Array[i][j] = Math.floor(Math.random() * 20);
      }
    }
  }
  sumArray(a: number, b: number) {
    var str = '';
    var sum = 0;
    for (var i = 0; i < a; i++) {
      sum = 0;
      for (var j = 0; j < b; j++) {
        if (i == j) {
          sum += this.Array[i][j];
        }
      }
      str += sum + ' ';
    }
    return str;
  }
}

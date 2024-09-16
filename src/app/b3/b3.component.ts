import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b3.component.html',
  styles: ``
})
export class B3Component {
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
  sumArray() {
    var str = '';
    var sum = 0;
    for (let i = 0; i < this.Array.length; i++) {
      sum = 0;
      for (let j = 0; j < this.Array[i].length; j++) {
        sum += this.Array[i][j];
      }
      str += sum + ' ';
    }
    return str;
  }
}

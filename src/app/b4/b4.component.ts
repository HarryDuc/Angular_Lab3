import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b4.component.html',
  styles: ``
})
export class B4Component {
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
    for (let i = 0; i < b; i++) {
      sum = 0;
      for (let j = 0; j < a; j++) {
        sum += this.Array[j][i];
      }
      str += sum + ' ';
    }
    return str;
  }
}

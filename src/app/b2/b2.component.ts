import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b2.component.html',
  styles: ``
})
export class B2Component {
  a: number = 0;
  b: number = 0;
  Array: any[] = [];
  ngauNhien(a: number, b: number) {
    this.Array = [];
    for (let i = 0; i < a; i++) {
      this.Array[i] = [];
      for (let j = 0; j < b; j++) {
        this.Array[i][j] = Math.floor(Math.random() * 20 + 1);
      }
    }
    console.log(this.Array);
  }
}

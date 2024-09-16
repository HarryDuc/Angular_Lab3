import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b1.component.html',
  styles: ``
})
export class B1Component {
  Array: any = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
}

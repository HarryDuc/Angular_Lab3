import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Students } from '../students';
@Component({
  selector: 'app-b7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './b7.component.html',
  styleUrl: './b7.component.css'
})
export class B7Component {
  student: Students[] = [
    {
      fullname: "Vu Minh Duc",
      birthday: new Date(),
      gender: "Nam",
      mark: 10,
      pic: "https://th.bing.com/th/id/OIP.S2W19xappbvIzlxm-QP8WQHaHV?w=188&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      fullname: "Vu Minh Duc",
      birthday: new Date('05/11/2005'),
      gender: "Nam",
      mark: 10,
      pic: "https://th.bing.com/th/id/R.eeed84536c60d41888f8867031a984e3?rik=SbIw4wan%2bn3O0w&pid=ImgRaw&r=0"
    }
  ]
}


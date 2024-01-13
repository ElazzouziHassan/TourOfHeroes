import { Component } from '@angular/core';
import { CrisisListComponent } from '../../component/crisis-list/crisis-list.component';

@Component({
  selector: 'app-crisis-center',
  standalone: true,
  imports: [
    CrisisListComponent
  ],
  templateUrl: './crisis-center.component.html',
  styleUrl: './crisis-center.component.scss'
})
export class CrisisCenterComponent {

}

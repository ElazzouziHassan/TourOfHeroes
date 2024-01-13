import { Component } from '@angular/core';
import { HeroesListComponent } from '../../component/heroes-list/heroes-list.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    HeroesListComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

}

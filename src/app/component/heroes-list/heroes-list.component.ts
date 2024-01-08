import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {

}

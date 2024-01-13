import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../classes/hero';
import { UpperCasePipe } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    RouterLink,
    UpperCasePipe,
  ],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}

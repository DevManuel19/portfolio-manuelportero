import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedBackgroundComponent } from "./animated-background/animated-background.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimatedBackgroundComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-manuelportero';
}

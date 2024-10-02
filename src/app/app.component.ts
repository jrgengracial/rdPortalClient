import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from './filterpipe.pipe';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, MainComponent,
     FooterComponent, NavbarComponent, FormsModule, FilterpipePipe, LoginComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title : string = "Rd Pawnshop";
}

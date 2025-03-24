import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScrolltopComponent } from './shared/scrolltop/scrolltop.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreloaderComponent, HeaderComponent, FooterComponent, ScrolltopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ehzdev';
}

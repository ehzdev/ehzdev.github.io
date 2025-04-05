import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScrolltopComponent } from './shared/scrolltop/scrolltop.component';
import { ContactComponent } from './shared/contact/contact.component';

import { HeaderService } from './shared/header/services/header.service'; // Importa tu servicio

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, PreloaderComponent, NavbarComponent, HeaderComponent, ContactComponent, FooterComponent, ScrolltopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeader: boolean = false;
  title = 'ehzdev';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.getHeaderVisibility().subscribe(visible => {
      this.showHeader = visible;
    });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../../shared/header/services/header.service';
import { Title, Meta } from '@angular/platform-browser';
import { ExperienceComponent } from './experience/experience.component';
import { ServicesComponent } from './services/services.component';
@Component({
  selector: 'app-home',
  imports: [ExperienceComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private headerService: HeaderService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Bienvenido a Mi Página Web');
    this.metaService.updateTag({ name: 'description', content: 'Descripción de la página principal.' });
    this.headerService.toggleHeader(true);
  }

  ngOnDestroy(): void {
    this.headerService.toggleHeader(false);
  }
}

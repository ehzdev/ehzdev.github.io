import { Component } from '@angular/core';
import { HeaderService } from './services/header.service';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerTitle: string = '';
  headerSubtitle: string = '';
  headerCaption: string = '';

  headerMaskTitle: string = '';
  headerMaskSubtitle: string = '';
  headerMaskCaption: string = '';

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    const headerData = this.headerService.getHeaderText();
    this.headerTitle = headerData.title;
    this.headerSubtitle = headerData.subtitle;
    this.headerCaption = headerData.caption;

    // Obtener los textos para header con máscara
    const headerMaskData = this.headerService.getHeaderMaskText();
    this.headerMaskTitle = headerMaskData.title;
    this.headerMaskSubtitle = headerMaskData.subtitle;
    this.headerMaskCaption = headerMaskData.caption;
  }
}

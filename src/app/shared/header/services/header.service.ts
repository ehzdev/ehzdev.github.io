import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerVisibility = new BehaviorSubject<boolean>(false);
  private headerText = new BehaviorSubject<string>('');
  private headerData = {
    title: '',
    subtitle: '',
    caption: ''
  };

  private headerMaskData = {
    title: '',
    subtitle: '',
    caption: ''
  };

  constructor() {}

  toggleHeader(visible: boolean): void {
    this.headerVisibility.next(visible);
  }

  getHeaderVisibility() {
    return this.headerVisibility.asObservable();
  }

  setHeaderText(title: string, subtitle: string, caption: string): void {
    this.headerData = { title, subtitle, caption };
  }

  getHeaderText(): { title: string, subtitle: string, caption: string } {
    return this.headerData;
  }

  setHeaderMaskText(title: string, subtitle: string, caption: string): void {
    this.headerMaskData = { title, subtitle, caption };
  }

  getHeaderMaskText(): { title: string, subtitle: string, caption: string } {
    return this.headerMaskData;
  }
}

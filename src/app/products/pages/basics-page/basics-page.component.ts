import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'jaume';
  public nameUpper: string = 'JAUME';
  public nameComplete: string = 'jAuMe nAdAl';

  public customDate: Date = new Date();
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
            src="./assets/images/logos/promaint-logo.png"
            height="80"
            width="220"
            class="align-middle m-2"
            alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private router: Router = inject(Router);

  async handleLinkClick(route: string): Promise<void> {
    await this.router.navigateByUrl(route);
  }
}

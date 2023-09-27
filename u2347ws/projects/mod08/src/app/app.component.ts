import { Component } from '@angular/core';
import { routes } from 'projects/mod08/src/app/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'mod08';
  routes = routes;
}

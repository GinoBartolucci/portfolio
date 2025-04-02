import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {AboutComponent} from './about/about.component'
import {ProjectsComponent} from './projects/projects.component'
import {FooterComponent} from './footer/footer.component'
import {ContactComponent} from './contact/contact.component'
import {ExperienciaComponent} from './experiencia/experiencia.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ContactComponent,
    ExperienciaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio'
}

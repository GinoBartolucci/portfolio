import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AboutComponent} from './about/about.component'
import {ProjectsComponent} from './projects/projects.component'
import {FooterComponent} from './footer/footer.component'
import {ContactComponent} from './contact/contact.component'
import {GuidesComponent} from './guides/guides.component'
//import {ExperienciaComponent} from './experiencia/experiencia.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ContactComponent,
    GuidesComponent,
    //ExperienciaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio'
  readonly isGuidesRoute = typeof window !== 'undefined' && window.location.pathname.startsWith('/guides')
}

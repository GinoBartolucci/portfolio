import {Component, inject} from '@angular/core'
import {AsyncPipe, NgOptimizedImage} from '@angular/common'
import {HttpClient} from '@angular/common/http'
import {ButtonIconComponent} from '../button-icon/button-icon.component'

export interface ProjectButton {
  text: string
  icon: string
  link: string
}

export interface ProjectItem {
  id: number
  titulo: string
  image: string
  descripcion: string
  buttons: ProjectButton[]
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, ButtonIconComponent],
  providers: [],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  private readonly http = inject(HttpClient)

  readonly proyectos$ = this.http.get<ProjectItem[]>('/projects.json')
}

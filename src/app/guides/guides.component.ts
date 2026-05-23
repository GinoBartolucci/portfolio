import {Component, OnInit} from '@angular/core'
import {MarkdownComponent} from 'ngx-markdown'

interface GuideDocument {
  title: string
  path: string
  section: string
}

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.css',
})
export class GuidesComponent implements OnInit {
  documentSrc = ''
  readonly groupedDocuments = [
    {
      section: 'Setup',
      documents: [
        { title: 'Alembic y migraciones', path: '/guides/setup/alembic.md', section: 'Setup' },
        { title: 'Configurar Git y GitLab con SSH', path: '/guides/setup/configurar-git-gitlab-ssh.md', section: 'Setup' },
        { title: 'Docker básico', path: '/guides/setup/docker-basico.md', section: 'Setup' },
        { title: 'Guía básica Git', path: '/guides/setup/guia-basica-git.md', section: 'Setup' },
        { title: 'Instalar Docker en WSL2', path: '/guides/setup/instalar-docker-wsl2.md', section: 'Setup' },
        { title: 'Instalar WSL y usuario sudo', path: '/guides/setup/instalar-wsl-y-usuario-sudo.md', section: 'Setup' },
        { title: 'Levantar proyecto Node en WSL', path: '/guides/setup/levantar-proyecto-node-wsl.md', section: 'Setup' },
        { title: 'Liberar espacio en WSL/Docker', path: '/guides/setup/liberar-espacio-wsl-docker.md', section: 'Setup' },
        { title: 'Permiso sudo en WSL', path: '/guides/setup/permiso-sudo-wsl.md', section: 'Setup' },
      ] satisfies GuideDocument[],
    },
    {
      section: 'ADESI',
      documents: [
        { title: 'Actores y stakeholders', path: '/guides/adesi/actores-y-stakeholders.md', section: 'ADESI' },
        { title: 'Análisis de metas', path: '/guides/adesi/analisis-de-metas.md', section: 'ADESI' },
        { title: 'Casos de uso', path: '/guides/adesi/casos-de-uso.md', section: 'ADESI' },
        { title: 'Diagrama transición estados', path: '/guides/adesi/diagrama-transicion-estados.md', section: 'ADESI' },
        { title: 'Diagramas de actividad', path: '/guides/adesi/diagramas-de-actividad.md', section: 'ADESI' },
        { title: 'Diccionario de datos', path: '/guides/adesi/diccionario-de-datos.md', section: 'ADESI' },
        { title: 'Ingeniería de requerimientos', path: '/guides/adesi/ingenieria-de-requerimientos.md', section: 'ADESI' },
        { title: 'Matriz CRUD', path: '/guides/adesi/matriz-crud.md', section: 'ADESI' },
        { title: 'Mejoras desde resumen', path: '/guides/adesi/MEJORAS_DESDE_RESUMEN.md', section: 'ADESI' },
        { title: 'Modelo del dominio', path: '/guides/adesi/modelo-del-dominio.md', section: 'ADESI' },
        { title: 'Procesos de negocio', path: '/guides/adesi/procesos-de-negocio.md', section: 'ADESI' },
        { title: 'Reglas de negocio', path: '/guides/adesi/reglas-de-negocio.md', section: 'ADESI' },
        { title: 'Subesquema de navegación', path: '/guides/adesi/subesquema-de-navegacion.md', section: 'ADESI' },
        { title: 'Técnicas de relevamiento', path: '/guides/adesi/tecnicas-de-relevamiento.md', section: 'ADESI' },
        { title: 'Templates', path: '/guides/adesi/templates.md', section: 'ADESI' },
      ] satisfies GuideDocument[],
    },
  ]

  selectedDocument: GuideDocument | null = null
  loading = false
  errorMessage = ''

  ngOnInit(): void {
    this.selectDocument(this.groupedDocuments[0].documents[0])
  }

  selectDocument(document: GuideDocument): void {
    this.selectedDocument = document
    this.loading = true
    this.errorMessage = ''
    this.documentSrc = document.path
  }

  onMarkdownLoad(): void {
    this.loading = false
  }

  onMarkdownError(): void {
    this.loading = false
    this.errorMessage = 'No se pudo cargar el archivo Markdown seleccionado.'
  }
}

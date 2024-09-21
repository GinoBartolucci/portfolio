import {Component} from '@angular/core'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common' // Asegúrate de importar esto
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionLogoGithub, ionOpenOutline} from '@ng-icons/ionicons'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ionLogoGithub, ionOpenOutline})],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  proyectos = [
    {
      id: 1,
      titulo: 'Generador de Contraseñas',
      image: 'images/passgen.jpg',
      color: 'slate-950',
      bgColor: 'emerald-900',
      descripcion:
        'Genera contraseñas utilizando las palabras (1000) mas comunes en español seleccionadas aleatoriamente, ademas de seguro es fácil de recordar. Un formulario permite ajustar la seguridad de la contraseña cambiando parámetros como la longitud y caracteres especiales. Utilice Vue 3 con Vite.',
      buttons: [
        {
          text: 'GitHub',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/generador-contrasenas',
        },
        {
          text: 'Deploy',
          icon: 'ionOpenOutline',
          link: 'https://passgen.ginobartolucci.com.ar/',
        },
      ],
      tags: [
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
      ],
    },
    {
      id: 2,
      titulo: 'Acortador de links Linke.ar',
      image: 'images/linke-ar.jpg',
      descripcion:
        'Aplicación web full stack, hice la API y el front con Next 14 React y tailwind en typescript. El deploy en Vercel y postgres para la base de datos',
      buttons: [
        {
          text: 'GitHub',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/generador-contrasenas',
        },
        {
          text: 'Deploy',
          icon: 'ionOpenOutline',
          link: 'https://passgen.ginobartolucci.com.ar/',
        },
      ],
      tags: [
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
      ],
    },
    {
      id: 3,
      titulo: 'App web ComConnect',
      image: 'images/com-connect.jpg',
      descripcion:
        'Un sistema que pueda reunir personas con un mismo interés creando eventos dentro de comunidades. RestApi hecha con Node.js, Mysql con Sequelize y el Frontend lo hice con vue.js y NuxtJS. El prototipo esta hecho en Figma.',
      buttons: [
        {
          text: 'GitHub Front',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/generador-contrasenas',
        },
        {
          text: 'GitHub Back',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/generador-contrasenas',
        },
        {
          text: 'Figma',
          icon: 'ionOpenOutline',
          link: 'https://passgen.ginobartolucci.com.ar/',
        },
      ],
      tags: [
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
      ],
    },
    {
      id: 4,
      titulo: 'Generador de Contraseñas',
      image: 'images/passgen.jpg',
      descripcion:
        'Genera contraseñas utilizando las palabras (1000) mas comunes en español seleccionadas aleatoriamente, ademas de seguro es fácil de recordar. Un formulario permite ajustar la seguridad de la contraseña cambiando parámetros como la longitud y caracteres especiales. Utilice Vue 3 con Vite.',
      buttons: [
        {
          text: 'GitHub',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/generador-contrasenas',
        },
        {
          text: 'Deploy',
          icon: 'ionOpenOutline',
          link: 'https://passgen.ginobartolucci.com.ar/',
        },
      ],
      tags: [
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
        {
          icon: 'ionLogoLinkedin',
          link: 'https://linkedin.com/in/ginobartolucci',
        },
      ],
    },
  ]
}

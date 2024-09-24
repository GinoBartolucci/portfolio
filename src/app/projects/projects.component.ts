import {Component} from '@angular/core'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common' // Asegúrate de importar esto
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {
  ionLogoGithub,
  ionOpenOutline,
  ionLogoFigma,
  ionLogoYoutube,
  ionDocumentTextOutline,
} from '@ng-icons/ionicons'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [
    provideIcons({
      ionLogoGithub,
      ionOpenOutline,
      ionLogoFigma,
      ionLogoYoutube,
      ionDocumentTextOutline,
    }),
  ],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  proyectos = [
    {
      id: 1,
      titulo: 'Acortador de links Linke.ar',
      image: 'images/linke-ar.jpg',
      descripcion:
        'Aplicación web full stack, hice la API y el front con Next 14 React y tailwind en typescript. El deploy en Vercel y postgres para la base de datos',
      buttons: [
        {
          text: 'GitHub',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/linke.ar',
        },
        {
          text: 'Deploy',
          icon: 'ionOpenOutline',
          link: 'https://linke-ar.ginobartolucci.com.ar/',
        },
      ],
    },
    {
      id: 2,
      titulo: 'Generador de Contraseñas',
      image: 'images/passgen.jpg',
      color: 'slate-950',
      bgColor: 'emerald-900',
      descripcion:
        'Genera contraseñas utilizando las palabras (1000) mas comunes en español. Un formulario permite ajustar la seguridad de la contraseña cambiando parámetros como la longitud y caracteres especiales. Utilice Vue 3 con Vite.',
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
    },
    {
      id: 3,
      titulo: '¿Sueñan los Androides con romper paredes digitales?',
      image: 'images/presentacion.jpg',
      descripcion:
        'Algoritmos genéticos con Machine Learning para entrenar una red neuronal que supere un humano en el juego Breakout. Utilicé Python, NEAT, NumPy y Pandas. El proyecto fue presentado en el Conaiisi 2022',
      buttons: [
        {
          text: 'GitHub',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/Neat_Breakout-ML_AG',
        },
        {
          text: 'Papper',
          icon: 'ionDocumentTextOutline',
          link: 'Paper.pdf',
        },
        {
          text: 'Presentación',
          icon: 'ionDocumentTextOutline',
          link: 'Presentacion.pdf',
        },
        {
          text: 'Video',
          icon: 'ionLogoYoutube',
          link: 'https://www.youtube.com/watch?v=0kaCRvTS7pk',
        },
      ],
    },
    {
      id: 4,
      titulo: 'App web ComConnect',
      image: 'images/com-connect.jpg',
      descripcion:
        'Un sistema que pueda reunir personas con un mismo interés creando eventos dentro de comunidades. RestApi hecha con Node.js, Mysql con Sequelize y el Frontend lo hice con vue.js y NuxtJS. El prototipo esta hecho en Figma.',
      buttons: [
        {
          text: 'GitHub Front',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/TTADS-Frontend',
        },
        {
          text: 'GitHub Back',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/TTADS-Backend',
        },
        {
          text: 'Figma',
          icon: 'ionLogoFigma',
          link: 'https://www.figma.com/proto/t2Er169sZQTysr8De1UGpT/Eventos?node-id=145-544&starting-point-node-id=145%3A544&disable-default-keyboard-nav=1&hide-ui=1',
        },
      ],
    },
    {
      id: 5,
      titulo: 'AccesoLibre',
      image: 'images/acceso-libre.jpg',
      descripcion:
        'Aplicación web para venta de entradas con Java Servlets, JSP, MySQL y Bootstrap, permite a los usuarios comprar entradas y a las productoras venderlas y escanearlas.',
      buttons: [
        {
          text: 'GitHub',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/JAVA-acceso_libre',
        },
      ],
    },
    {
      id: 6,
      titulo: 'Academia',
      image: 'images/academia.jpg',
      descripcion:
        'Aplicación web y escritorio para para una academia con C#, .Net, Web y Win Forms. La app permite administrar horarios de cursos profesores y materias.',
      buttons: [
        {
          text: 'GitHub',
          icon: 'ionLogoGithub',
          link: 'https://github.com/GinoBartolucci/Net-TP2-Grupo1',
        },
      ],
    },
  ]
}

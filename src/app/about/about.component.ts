import {Component} from '@angular/core'
import {NgxTypedWriterModule} from 'ngx-typed-writer'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionLogoLinkedin, ionLogoGithub, ionDownloadOutline} from '@ng-icons/ionicons'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgxTypedWriterModule, NgIconComponent],
  providers: [provideIcons({ionLogoLinkedin, ionLogoGithub, ionDownloadOutline})],
  template: `
    <div class="flex flex-col lg:flex-row items-center justify-center w-full p-2">
      <img
        class="animate-fade-right animate-duration-300 hidden lg:block rounded-lg drop-shadow-lg"
        src="/images/foto_perfil.jpg"
        alt="foto gino bartolucci"
        width="290"
        height="290"
        priority />
      <div class="flex flex-col justify-center items-center ml-3">
        <ngx-typed-writer
          class=" animate-fade mt-1 font-fira font-medium text-4xl sm:text-[2.7rem] text-center tracking-tight  lg:min-w-[730px]"
          [strings]="['Gino bartolucci', 'Gino Bartolucci', 'Gino Bartolucci | Dev Fullstack']"
          [cursorChar]="'|'"
          [showCursor]="true"
          [backSpeed]="30"
          [typeSpeed]="50"
          [backDelay]="2500"
          [startDelay]="1500"
          [smartBackspace]="true"
          [loop]="false">
        </ngx-typed-writer>
        <p
          class="animate-fade animate-duration-300 animate-ease-in font-fira font-light text-center text-xl sm:text-2xl  max-w-[1024px] p-6 self-start">
          Mi nombre es Gino Bartolucci, vivo en Argentina. Estoy estudiando Ingeniería en Sistemas,
          aunque también soy autodidacta. Siempre estoy conociendo tecnologías nuevas o mejorando en
          las que ya conozco.
        </p>
        <div class="flex justify-center gap-10 items-center w-full">
          @for (item of icons_links; track $index) {
            <a [href]="item.link" target="_blank" class="animate-fade">
              <ng-icon [name]="item.icon" size="35" color="grey"></ng-icon>
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
  icons_links = [
    {
      icon: 'ionLogoLinkedin',
      link: 'https://linkedin.com/in/ginobartolucci',
    },
    {
      icon: 'ionLogoGithub',
      link: 'https://github.com/GinoBartolucci',
    },
    {
      icon: 'ionDownloadOutline',
      link: 'gino_bartolucci_resume.pdf',
    },
  ]
}

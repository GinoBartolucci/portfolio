import {Component} from '@angular/core'
import {NgxTypedWriterModule} from 'ngx-typed-writer'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionLogoLinkedin, ionLogoGithub, ionDownloadOutline} from '@ng-icons/ionicons'
import {LinksIconsComponent} from '../links-icons/links-icons.component'
import {NgOptimizedImage} from '@angular/common'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgxTypedWriterModule, NgIconComponent, LinksIconsComponent, NgOptimizedImage],
  providers: [provideIcons({ionLogoLinkedin, ionLogoGithub, ionDownloadOutline})],
  template: `
    <div class="flex flex-col lg:flex-row items-center justify-center w-full p-2 mt-16 sm:mt-24">
      <img
        class="animate-fade-right animate-duration-300 hidden lg:block rounded-lg drop-shadow-lg"
        ngSrc="images/foto_perfil.webp"
        alt="foto gino bartolucci"
        priority
        width="290"
        height="290"
        priority />
      <div class="flex flex-col justify-center items-start lg:ml-6 p-6">
        <ngx-typed-writer
          class=" animate-fade my-4 font-fira font-medium text-4xl sm:text-[2.7rem] text-center sm:text-left tracking-tight"
          [strings]="['Gino bartolucci', 'Gino Bartolucci']"
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
          class="animate-fade animate-duration-300 animate-ease-in font-light text-xl sm:text-2xl py-4 max-w-[700px] self-start text-gray-800">
          {{ texto }}
        </p>
        <app-links-icons class="mt-4 self-center sm:self-start" />
      </div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
  texto =
    'Estoy finalizando la carrera de Ingeniería en Sistemas y escuchando ofertas de empleo. Me gusta el Análisis funcional y el Desarrollo full stack, siempre estoy conociendo tecnologías nuevas para aprender.'
}

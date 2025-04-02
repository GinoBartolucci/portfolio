import {Component} from '@angular/core'
import {NgxTypedWriterModule} from 'ngx-typed-writer'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionLogoLinkedin, ionLogoGithub, ionDownloadOutline} from '@ng-icons/ionicons'
import {LinksIconsComponent} from '../links-icons/links-icons.component'
import {NgOptimizedImage} from '@angular/common'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgxTypedWriterModule, LinksIconsComponent, NgOptimizedImage],
  providers: [provideIcons({ionLogoLinkedin, ionLogoGithub, ionDownloadOutline})],
  template: `
    <div class="flex flex-col lg:flex-row items-center justify-center w-full p-2 mt-16 sm:mt-24">
      <img
        class="animate-fade-right animate-duration-300 rounded-lg drop-shadow-lg"
        ngSrc="images/foto_perfil.webp"
        alt="foto gino bartolucci"
        priority
        width="320"
        height="320"
        priority />
      <div class="flex flex-col justify-center items-start lg:ml-6 p-6">
        <ngx-typed-writer
          class=" animate-fade my-1 sm:my-3 font-fira font-medium text-3xl sm:text-[2.7rem] self-center lg:self-start tracking-tight"
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
        <div
          class="animate-fade animate-duration-300 animate-ease-in font-light text-xl sm:text-2xl py-4 max-w-[790px] self-start text-gray-800">
          <p class="py-2">
            Soy estudiante en la etapa final de la carrera de Ingeniería en Sistemas y actualmente
            me desempeño como pasante en el Ministerio de Desarrollo Productivo del Gobierno de
            Santa Fe, donde trabajo como desarrollador Full Stack.
          </p>
          <p class="py-1">
            En el futuro, me gustaría especializarme y desarrollar mi carrera en el ámbito de la
            Ingeniería en Sistemas.
          </p>
        </div>
        <app-links-icons class="mt-4 self-center sm:self-start" />
      </div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {}

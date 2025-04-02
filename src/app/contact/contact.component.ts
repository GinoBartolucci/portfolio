import {Component} from '@angular/core'
import {ButtonIconComponent} from '../button-icon/button-icon.component'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionMail} from '@ng-icons/ionicons'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ionMail})],
  template: `
    <section class="mt-12 font-fira text-center p-2">
      <hr class="mb-12" />
      <h2 class="text-3xl md:text-5xl text-gray-900">¿Tenes un proyecto en mente?</h2>
      <div class="flex items-center justify-center m-4 hover:underline">
        <a
          href="mailto:ginobartolucci00@gmail.com?Subject=Contacto%20Portfolio"
          class="text-xl md:text-2xl">
          Trabajemos juntos
        </a>
        <ng-icon name="ionMail" class="icon ml-2" size="28" color="black"></ng-icon>
      </div>
      <hr class="mt-12" />
    </section>
  `,
  styleUrl: './contact.component.css',
})
export class ContactComponent {}

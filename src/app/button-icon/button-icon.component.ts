import {Component, Input} from '@angular/core'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {
  ionLogoGithub,
  ionOpenOutline,
  ionLogoFigma,
  ionLogoYoutube,
  ionDocumentTextOutline,
  ionLogoLinkedin,
  ionMail,
} from '@ng-icons/ionicons'

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      ionLogoGithub,
      ionOpenOutline,
      ionLogoFigma,
      ionLogoYoutube,
      ionDocumentTextOutline,
      ionLogoLinkedin,
      ionMail,
    }),
  ],
  template: `
    <a
      [href]="button.link"
      target="_blank"
      class="button flex justify-center items-center text-center m-1 px-2 py-1 animate-fade text-lg xl:text-xl rounded-lg border-2 bg-white shadow-sm hover:shadow-md">
      {{ button.text
      }}<ng-icon [name]="button.icon" class="icon ml-2 bg-white" size="28" color="black"></ng-icon>
    </a>
  `,
  styles: ``,
})
export class ButtonIconComponent {
  @Input() button: {text: string; icon: string; link: string} = {text: '', icon: '', link: ''}
}

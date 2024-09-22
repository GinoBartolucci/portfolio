import {Component} from '@angular/core'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionLogoLinkedin, ionLogoGithub, ionDownloadOutline} from '@ng-icons/ionicons'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ionLogoLinkedin, ionLogoGithub, ionDownloadOutline})],
  template: `
    <footer class="flex flex-col justify-center items-center h-[200px] text-center">
      <span class="text-center p-5 text-lg italic">By Gino Bartolucci</span>
      <div class="flex justify-center items-center">
        <div class="flex justify-center gap-10 items-center w-full">
          @for (item of icons_links; track $index) {
            <a [href]="item.link" target="_blank" class="animate-fade">
              <ng-icon [name]="item.icon" size="35" color="grey"></ng-icon>
            </a>
          }
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
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

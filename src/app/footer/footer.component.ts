import {Component} from '@angular/core'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionLogoLinkedin, ionLogoGithub, ionDownloadOutline} from '@ng-icons/ionicons'
import {LinksIconsComponent} from '../links-icons/links-icons.component'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinksIconsComponent],
  providers: [provideIcons({ionLogoLinkedin, ionLogoGithub, ionDownloadOutline})],
  template: `
    <footer class="flex flex-col justify-center items-center h-[200px] text-center">
      <div class="flex justify-center items-center">
        <app-links-icons />
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

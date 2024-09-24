import {Component} from '@angular/core'
import {NgIconComponent, provideIcons} from '@ng-icons/core'
import {ionLogoLinkedin, ionLogoGithub, ionOpenOutline} from '@ng-icons/ionicons'

interface IconLink {
  icon: string
  link: string
}
;[]

@Component({
  selector: 'app-links-icons',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ionLogoLinkedin, ionLogoGithub, ionOpenOutline})],
  template: `
    <div class="flex justify-center gap-10 items-center w-full">
      @for (item of icons_links; track $index) {
        <a [href]="item.link" target="_blank" class="animate-fade hover:scale-105">
          <ng-icon [name]="item.icon" size="35" color="grey"></ng-icon>
        </a>
      }
    </div>
  `,
  styleUrl: './links-icons.component.css',
})
export class LinksIconsComponent {
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

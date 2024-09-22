import {Component, Input} from '@angular/core'
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
    @for (item of this.icons_links; track $index) {
      <a [href]="item.link" target="_blank" class="animate-fade">
        <ng-icon [name]="item.icon" size="35" color="grey"></ng-icon>
      </a>
    }
  `,
  styleUrl: './links-icons.component.css',
})
export class LinksIconsComponent {
  @Input() icons_links: IconLink[] = []
}

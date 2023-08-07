import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icon, IconDefinition, IconName, findIconDefinition, library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
// when the button is pressed an icon is chosen randomly from this list
const iconNames : Array<IconName> = [
  "download",
  "arrow-left", "arrow-right", "arrow-up", "arrow-down",
  "circle-left", "circle-right", "circle-up", "circle-down",
  "random"
]


@Component({
  selector: 'app-fontawesome-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <button (click)="onClick()">click to change the icon to the right</button>
    <fa-icon [icon]="icon"></fa-icon>
  `,
  styleUrls: ['./fontawesome-button.component.css']
})
export class FontawesomeButtonComponent {
  icon = findIconDefinition({prefix: 'fas', iconName: "arrow-left"})

  onClick() {
    const promise = new Promise(async (resolve, reject) => {
      setTimeout(() => resolve("finished"), 3000)
    })

    promise.then(() => {
      this.setRandomIcon()
    })
  }

  setRandomIcon() {
    let name = iconNames[Math.floor(Math.random() * iconNames.length)]
    this.icon = findIconDefinition({prefix: 'fas', iconName: name})
  }
}

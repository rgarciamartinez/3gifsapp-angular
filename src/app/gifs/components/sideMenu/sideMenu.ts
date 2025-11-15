import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuHeader } from "./sideMenuHeader/sideMenuHeader";
import { SideMenuOptions } from "./sideMenuOptions/sideMenuOptions";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './sideMenu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu { }

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface menuOption{
  label:string,
  subLabel:string,
  route:string,
  icon:string
}
@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sideMenuOptions.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptions {

  menuOptions:menuOption[] = [
    {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabel: 'Trending Gifts',
    route: '/dashboard/trending',
  },
    {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Search',
    subLabel: 'Search Gifts',
    route: '/dashboard/search',
  },
]

}

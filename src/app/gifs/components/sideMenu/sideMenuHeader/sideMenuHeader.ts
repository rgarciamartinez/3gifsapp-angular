import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './sideMenuHeader.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuHeader {

  private envs = environment

  companyName = signal(this.envs.companyName)
  companySubName = signal(this.envs.companySubName)
  companySlogan = signal(this.envs.companySlogan)

 }

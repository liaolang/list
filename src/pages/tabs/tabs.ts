import { Component } from '@angular/core';

import { ShoppingPage } from '../shopping/shopping';
import { AchievePage } from '../achieve/achieve';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AchievePage;
  tab2Root = ShoppingPage;
  constructor() {

  }
}

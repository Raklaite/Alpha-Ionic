import { Component } from '@angular/core';
import { TestPage } from '../test/test'
import { FeedPage } from '../feed/feed'
import { AboutPage } from '../about/about';
  // remove native page imports for created
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = AboutPage;
  tab3Root = TestPage;

  constructor() {

  }
}

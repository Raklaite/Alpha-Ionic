import { Component } from '@angular/core';
import { FeedPage } from '../feed/feed';
import { TestPage } from '../test/test';
import { HomePage } from '../home/home';
  // remove native page imports for created
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = TestPage;

  constructor() {

  }
}

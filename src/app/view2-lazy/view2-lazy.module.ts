import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { setUpLocationSync } from '@angular/router/upgrade';
import myAppView2 from '../../app-js/view2/view2';

@Component({
  template: '<div id="view2" ui-view></div>'
})
export class View2EmptyComponent implements OnInit {
  constructor(private upgrade: UpgradeModule) {
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.querySelector('#view2'), [myAppView2.name]);
    setUpLocationSync(this.upgrade);
  }
}

@NgModule({
  declarations: [
    View2EmptyComponent
  ],
  imports: [
    CommonModule,
    UpgradeModule,
    RouterModule.forChild([
      {path: '', component: View2EmptyComponent}
    ])
  ],
  exports: [RouterModule]
})
export class View2LazyModule {
}

import { Component, DoBootstrap, NgModule, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { setUpLocationSync } from '@angular/router/upgrade';
import myAppView2 from '../../app-js/view2/view2';

@Component({
  template: '<div id="view2" ui-view></div>'
})
export class EmptyComponent implements OnInit {
  constructor(private upgrade: UpgradeModule) {
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.querySelector('#view2'), [myAppView2.name]);
    setUpLocationSync(this.upgrade);
  }
}

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    UpgradeModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: EmptyComponent}
    ])
  ]
})
export class View2LazyModule {
}

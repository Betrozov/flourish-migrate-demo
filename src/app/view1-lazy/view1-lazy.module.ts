import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { setUpLocationSync } from '@angular/router/upgrade';
import myAppView1 from '../../app-js/view1/view1';

@Component({
  template: '<div id="view1" ui-view></div>'
})
export class EmptyComponent implements OnInit {
  constructor(private upgrade: UpgradeModule) {
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.querySelector('#view1'), [myAppView1.name]);
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
export class View1LazyModule {
}

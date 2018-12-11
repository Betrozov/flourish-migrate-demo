import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { setUpLocationSync } from '@angular/router/upgrade';
import other1 from '../../../app-js/view1/other1/other1';

@Component({
  template: '<div id="other1" ui-view></div>'
})
export class Other1EmptyComponent implements OnInit {
  constructor(private upgrade: UpgradeModule) {
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.querySelector('#other1'), [other1.name]);
    setUpLocationSync(this.upgrade);
  }
}

@NgModule({
  declarations: [
    Other1EmptyComponent
  ],
  imports: [
    CommonModule,
    UpgradeModule,
    RouterModule.forChild([
      {path: '', component: Other1EmptyComponent}
    ])
  ]
})
export class Other1LazyModule {
}

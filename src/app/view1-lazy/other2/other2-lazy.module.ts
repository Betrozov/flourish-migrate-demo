import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { setUpLocationSync } from '@angular/router/upgrade';
import other2 from '../../../app-js/view1/other2/other2';

@Component({
  template: '<div id="other2" ui-view></div>'
})
export class EmptyComponent implements OnInit {
  constructor(private upgrade: UpgradeModule) {
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.querySelector('#other2'), [other2.name]);
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
      {path: '**', component: EmptyComponent}
    ])
  ]
})
export class Other2LazyModule {
}

import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { setUpLocationSync } from '@angular/router/upgrade';
import myAppView1 from '../../app-js/view1/view1';

@Component({
  template: `
    <div id="view1" ui-view></div>
    <router-outlet></router-outlet>
  `
})
export class View1EmptyComponent implements OnInit {
  constructor(private upgrade: UpgradeModule) {
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.querySelector('#view1'), [myAppView1.name]);
    setUpLocationSync(this.upgrade);
  }
}

@NgModule({
  declarations: [
    View1EmptyComponent,
  ],
  imports: [
    CommonModule,
    UpgradeModule,
    RouterModule.forChild([
      {
        path: '',
        component: View1EmptyComponent,
        children: [
          {path: 'other1', loadChildren: './other1/other1-lazy.module#Other1LazyModule'},
          {path: 'other2', loadChildren: './other2/other2-lazy.module#Other2LazyModule'}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class View1LazyModule {
}

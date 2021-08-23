import { BlocksComponent } from './blocks/blocks.component';
import { FuctionsComponent } from './fuctions/fuctions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidComponent } from './guid.component';

const routes: Routes = [{ path: '', component: GuidComponent, children: [
  {path: "", component: BlocksComponent},
 {path: ":functions", component: FuctionsComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidRoutingModule {}

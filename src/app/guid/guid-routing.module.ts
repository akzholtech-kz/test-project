import { ComponentComponent } from './content/content.component';
import { BlocksComponent } from './blocks/blocks.component';
import { FuctionsComponent } from './fuctions/fuctions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidComponent } from './guid.component';

const routes: Routes = [
  { path: '', component: FuctionsComponent },
  { path: ':functionId', component: BlocksComponent },
  { path: ':functionId/:contentId', component: ComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidRoutingModule {}

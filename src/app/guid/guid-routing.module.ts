import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidComponent } from './guid.component';

const routes: Routes = [{ path: '', component: GuidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidRoutingModule {}

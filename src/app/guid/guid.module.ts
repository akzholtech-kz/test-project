import { GuidRoutingModule } from './guid-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GuidComponent } from './guid.component';
@NgModule({
  declarations: [GuidComponent],
  imports: [CommonModule, GuidRoutingModule],
})
export class GuidModule {}

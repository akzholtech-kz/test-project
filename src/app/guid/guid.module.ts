import { GuidRoutingModule } from './guid-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GuidComponent } from './guid.component';
import { FuctionsComponent } from './fuctions/fuctions.component';
import { BlocksComponent } from './blocks/blocks.component';
@NgModule({
  declarations: [GuidComponent, FuctionsComponent, BlocksComponent],
  imports: [CommonModule, GuidRoutingModule],
})
export class GuidModule {}

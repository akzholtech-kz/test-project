import { HomeRoutingModule } from './home.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { EdupageComponent } from './edupage/edupage.component';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './partners/partners.component';
import { TimetablesComponent } from './timetables/timetables.component';

@NgModule({
  declarations: [
    MainComponent,
    TimetablesComponent,
    EdupageComponent,
    PartnersComponent,
    ContactsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [
    MainComponent,
    TimetablesComponent,
    EdupageComponent,
    PartnersComponent,
    ContactsComponent,
  ],
})
export class HomeRouterModule {}

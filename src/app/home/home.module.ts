import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EdupageComponent } from './components/edupage/edupage.component';
import { MainComponent } from './components/main/main.component';
import { PartnersComponent } from './components/partners/partners.component';
import { TimetablesComponent } from './components/timetables/timetables.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    TimetablesComponent,
    EdupageComponent,
    PartnersComponent,
    ContactsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

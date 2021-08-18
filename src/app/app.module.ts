import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EdupageComponent } from './components/edupage/edupage.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PartnersComponent } from './components/partners/partners.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { TimetablesComponent } from './components/timetables/timetables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TimetablesComponent,
    EdupageComponent,
    PartnersComponent,
    ContactsComponent,
    DropDownDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

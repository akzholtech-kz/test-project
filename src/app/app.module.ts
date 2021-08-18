import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EdupageComponent } from './edupage/edupage.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './partners/partners.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { TimetablesComponent } from './timetables/timetables.component';

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

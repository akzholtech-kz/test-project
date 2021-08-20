import { AppRoutingModule } from './app-routing.module';
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
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './test/test.component';
import { TimetableDetailComponent } from './main/timetable-detail/timetable-detail.component';

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
    FooterComponent,
    TestComponent,
    TimetableDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { TestComponent } from './test/test.component';

import { MainComponent } from './components/main/main.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PartnersComponent } from './components/partners/partners.component';
import { EdupageComponent } from './components/edupage/edupage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetablesComponent } from './components/timetables/timetables.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TestComponent },
  { path: 'main', component: MainComponent },
  { path: ':/timetables', component: TimetablesComponent },
  { path: ':edupage', component: EdupageComponent },
  { path: ':partners', component: PartnersComponent },
  { path: ':contacts', component: ContactsComponent },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

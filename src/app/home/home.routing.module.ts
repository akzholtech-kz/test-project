import { TimetablesComponent } from './../home/timetables/timetables.component';
import { MainComponent } from './../home/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { EdupageComponent } from './edupage/edupage.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'main', component: MainComponent},
{path: 'timetables', component: TimetablesComponent},
{path: 'edupage', component: EdupageComponent},
{path: 'partners', component: PartnersComponent},
{path: 'contacts', component: ContactsComponent},
]
@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
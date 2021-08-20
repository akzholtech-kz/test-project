import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeRouterModule } from './home/home.router.module';
import { DropDownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    FooterComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

  import { NgModule } from '@angular/core';
  import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
  import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
  import { NavbarComponent } from './component/navbar/navbar.component';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { CommonModule} from '@angular/common';
  import { CardsComponent } from './component/cards/cards.component';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { FilterComponent } from './component/cards/filter/filter.component';
  import { ListingComponent } from './component/cards/listing/listing.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { EmployeesComponent } from './component/employees/employees.component';
  import { HttpClientModule } from '@angular/common/http';
  import { CompanyComponent } from './component/company/company.component';
  import { ContactComponent } from './component/contact/contact.component';
  import { FeatureComponent } from './component/feature/feature.component';
  import { AboutComponent } from './component/about/about.component';
  import { HomeComponent } from './component/home/home.component';
  import { InstituteComponent } from './component/institute/institute.component';
  import { PostDataComponent } from './component/institute/Instiute_Post/post-data.component';
  import { Services } from './component/service/Services';
  import { CartComponent } from './component/cart/cart.component';
  import { PopupComponent } from './component/popup/popup.component';
  import { NotfoundComponent } from './component/notfound/notfound.component';
  import { LoginComponent } from './component/login/login.component';
  import { LoaderComponent } from './component/loader/loader.component';
import { TableComponent } from './component/table/table.component';
import { FilterGender } from './component/Pipe/filter';
import { ModalComponent } from './component/modal/modal.component';
import { ProfileComponent } from './component/profile/profile.component';

  @NgModule({
    declarations: [
      AppComponent,
      CartComponent,
      CardsComponent,
      PopupComponent,
      LoginComponent,
      LoaderComponent,
      FilterComponent,
      ListingComponent,
      PostDataComponent,
      NotfoundComponent,
      EmployeesComponent,
      InstituteComponent,
      FeatureComponent,
      TableComponent,
      HomeComponent,
      FilterGender,
      ModalComponent,
      ProfileComponent
    ],
    imports: [
      FormsModule,
      CommonModule,
      RouterModule,
      RouterOutlet,
      CommonModule,
      BrowserModule,
      NavbarComponent,
      AppRoutingModule, 
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
    ],
    providers: [
      provideClientHydration(),
      Services,
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
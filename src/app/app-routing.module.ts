import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { CardsComponent } from './component/cards/cards.component';
import { LoginComponent } from './component/login/login.component';
import { ContactComponent } from './component/contact/contact.component';
import { FeatureComponent } from './component/feature/feature.component';
import { CompanyComponent } from './component/company/company.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { InstituteComponent } from './component/institute/institute.component';
import { PostDataComponent } from './component/institute/Instiute_Post/post-data.component';
import { ProfileComponent } from './component/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'about' , canActivateChild:[authGuard],children: [
      { path: "company", component: CompanyComponent },
      { path: "employees", component: EmployeesComponent }
    ]
  },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'institute', component: InstituteComponent },
  { path: 'feature', component: FeatureComponent , canActivate:[authGuard] },
  { path: 'cart_item', component: CartComponent },
  { path: 'post', component: PostDataComponent },
  { path: 'todo', component: CardsComponent },
  { path: 'login', component:LoginComponent, canActivate:[loginGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[authGuard] },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

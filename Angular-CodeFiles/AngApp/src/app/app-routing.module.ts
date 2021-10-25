import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/firstpage',pathMatch:'full'
  },
  {
    path: 'user', component: UserComponent,
    
    children:
    [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LogInComponent }
    ]
  },
  {
    path:'navbar', component: NavBarComponent
  },
  {
    path:'firstpage', component: FirstPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

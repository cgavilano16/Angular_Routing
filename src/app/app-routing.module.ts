import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'course', component: CourseNavigatorComponent},
  { path:'login', component:LoginComponent},
  { path:'profile/:userId', component:ProfileComponent},
  { path:'register', component:RegisterComponent}
];

export const routing=RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

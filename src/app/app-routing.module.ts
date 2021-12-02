import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path: 'login/:user',
    component: LoginComponent,
  },
  {
    path:'patient-registration',
    component:RegistrationPatientComponent
  },
  {
    path:'admin',
    loadChildren: () =>
    import('../app/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path:'patient',
    loadChildren: () =>
    import('../app/patient/patient.module').then((m) => m.PatientModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

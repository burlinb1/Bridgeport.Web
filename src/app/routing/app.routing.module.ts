import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard';
import { LoginCallbackComponent } from '../login/login-callback.component';
import { RateUnitTypeListComponent } from '../rateunittype/rateunittypelist.component';
import { CityListComponent } from '../city/citylist.component';
import { CityEditComponent } from '../city/city-edit.component';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';

const appRoutes: Routes = [
    {
        path: 'logincallback',
        component: LoginCallbackComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: 'cityindex',
        component: CityListComponent,
        data: { title: 'City'},
        canActivate: [AuthGuard]
    },
    {
        path: 'city/:id',
        component: CityEditComponent,
        data: { title: 'City' },
        canActivate: [AuthGuard]
    },
    {
        path: 'rateunittypeindex',
        component: RateUnitTypeListComponent,
        data: { title: 'Rate unit type' },
        canActivate: [AuthGuard],
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' },
        canActivate: [AuthGuard],
    },
    {   path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
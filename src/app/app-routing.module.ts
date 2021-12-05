import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Routes} from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoansListComponent } from './loans-list/loans-list.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes:Routes =[
  {
    path:'loans/:user',
    component:LoansComponent
  },
  {
    path:'search',
    component:SearchComponent,
    canActivate:[AdminGuard,AuthGuard],
    canDeactivate:[UnsavedGuard]
  },
  {path:'loans',
  component:LoansComponent
 
 },
 
  {
    path:'loans/:photoId/product/:productId',
    component:LoansComponent
  },
 
  {
    path:'loanslist',
    component:LoansListComponent
  },
  /*{path:'loans',
  children:[
    {
      path:'loanslist',
      component:LoansListComponent
    }
  ]
  },*/
  {
    path:'new-loan',
    redirectTo:'loans'
  },
  { path: 'payment',
     
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
    {
      path:'',
      component:LoansComponent
    },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

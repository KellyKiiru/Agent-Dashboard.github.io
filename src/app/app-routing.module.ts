import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { SchoolsListComponent } from './schools/schools-list/schools-list.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { CollectionsComponent } from './collections/collections.component';
import { InvoiceAdditionComponent } from './invoice-addition/invoice-addition.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'school-details', component: SchoolDetailsComponent },
  { path: 'school-list', component: SchoolsListComponent },
  { path: 'school-details/:id', component: SchoolDetailsComponent },
  { path: 'invoices', component: InvoicesListComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'add-invoices', component: InvoiceAdditionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

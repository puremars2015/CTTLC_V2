import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { ProductListComponent } from './product-list-page/product-list.component';
import { MaterialPageComponent } from './material-page/material-page.component';

const routes: Routes = [
  { path: 'index', component: IndexPageComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'material', component: MaterialPageComponent },
  { path: '**', component: IndexPageComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

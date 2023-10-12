import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableParserComponent } from './table-parser/table-parser.component';

const routes: Routes = [
  { path:'', redirectTo: 'table-parser', pathMatch: 'full' },
  { path: 'table-parser', component: TableParserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

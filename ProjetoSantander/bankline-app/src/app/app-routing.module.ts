import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { CorrentistaComponent } from './components/correntista/correntista.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'correntistas', component: CorrentistaComponent },
  { path: 'movimentacoes-new', component: MovimentacaoNewComponent },
  { path: 'movimentacoes', component: MovimentacaoListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { GamesDetailComponent } from './components/games-detail/games-detail.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'detail/:id', component: GamesDetailComponent },
  { path: 'games', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

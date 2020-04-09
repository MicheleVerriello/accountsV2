import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //Root page
  { path: 'accounts', loadChildren: './pages/accounts/accounts.module#AccountsPageModule' },
  { path: 'new-account', loadChildren: './pages/new-account/new-account.module#NewAccountPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'tutorial', loadChildren: './pages/tutorial/tutorial.module#TutorialPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { Page404Component } from './page404/page404.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { CreditsComponent } from './credits/credits.component';

export const routes: Routes = [

{path: "market", component:MarketComponent, title:"Market"},
{path: "wallet", component:MyWalletComponent, title:"Wallet"},
{path: "credits", component:CreditsComponent, title:"Credits"},
{path: "", redirectTo:'market', pathMatch:'full'},
{path: "**", component:Page404Component, title:"Error 404"}
    
];

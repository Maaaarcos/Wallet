import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FootComponent } from './foot/foot.component';
import { MarketComponent } from './market/market.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { Page404Component } from './page404/page404.component';
import { CreditsComponent } from './credits/credits.component';
import { CoinCardComponent } from './coin-card/coin-card.component';
import { AssetActionsComponent } from './asset-actions/asset-actions.component';
import { AssetQuantityComponent } from './asset-quantity/asset-quantity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeadComponent,NavMenuComponent,FootComponent,MarketComponent,MyWalletComponent,Page404Component,CreditsComponent,CoinCardComponent,AssetActionsComponent,AssetQuantityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wallet';
}

import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WalletService } from '../wallet.service';
import { AssetActionsComponent } from '../asset-actions/asset-actions.component';
import { AssetQuantityComponent } from '../asset-quantity/asset-quantity.component';

@Component({
  selector: 'app-my-wallet',
  standalone: true,
  imports: [CurrencyPipe,AssetActionsComponent,AssetQuantityComponent],
  templateUrl: './my-wallet.component.html',
  styleUrl: './my-wallet.component.css'
})
export class MyWalletComponent {


  private walletServ = inject(WalletService)

  getWallet(){

    return this.walletServ.getWallet()
  }

  getWalletTotal(){

    return this.walletServ.getWalletTotal()
  }


}

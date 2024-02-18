import { Component,Input,inject } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-coin-card',
  standalone: true,
  imports: [],
  templateUrl: './coin-card.component.html',
  styleUrl: './coin-card.component.css'
})
export class CoinCardComponent {

  @Input() coin:any

  walletServ=inject(WalletService) 

  addToWallet(){

    this.walletServ.addtoWallet(this.coin)
  }
}

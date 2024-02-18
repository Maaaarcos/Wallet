import { Component,Input,inject } from '@angular/core';
import { WalletService } from '../wallet.service';


@Component({
  selector: 'app-asset-actions',
  standalone: true,
  imports: [],
  templateUrl: './asset-actions.component.html',
  styleUrl: './asset-actions.component.css'
})
export class AssetActionsComponent {

  @Input() asset:any

  walletServ=inject(WalletService) 

  delArt(c:any){

    return this.walletServ.delArt(c);
  }
}

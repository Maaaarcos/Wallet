import { Component,Input,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WalletService } from '../wallet.service';
@Component({
  selector: 'app-asset-quantity',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './asset-quantity.component.html',
  styleUrl: './asset-quantity.component.css'
})
export class AssetQuantityComponent {
 @Input() asset:any

  private walletService=inject(WalletService)

}

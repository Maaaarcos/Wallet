import { Component, inject } from '@angular/core';
import { MarketDataService } from '../market-data.service';
import { FormsModule } from '@angular/forms';
import { CoinCardComponent } from '../coin-card/coin-card.component';
import { PatronPipe } from '../pipes/patron.pipe';


@Component({
  selector: 'app-market',
  standalone: true,
  imports: [FormsModule,CoinCardComponent,PatronPipe],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {
  private bd = inject(MarketDataService)

  patron=""


  getMarketData(){

  
    return this.bd.getMarketData();

  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  constructor() { }

  private marketData = [
    {id: 1, name:"Bitcoin",symbol:"BTC",img:"assets/img/wwlogo.png",precio:42000},
    {id: 2, name:"Ethereum",symbol:"ETH",img:"assets/img/wwlogo.png",precio:2300},
    {id: 3, name:"Solana",symbol:"SIK",img:"assets/img/wwlogo.png",precio:90},
    {id: 4, name:"Cardano",symbol:"ADA",img:"assets/img/wwlogo.png",precio:0.52},
    {id: 5, name:"Avalanche",symbol:"AVAX",img:"assets/img/wwlogo.png",precio:6.52},
    {id: 6, name:"Dogecoin",symbol:"DOGE",img:"assets/img/wwlogo.png",precio:0.6}
  ]

  getMarketData(){

  return this.marketData;
  }

}

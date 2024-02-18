import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private wallet:Array<any>


  constructor() {

    this.wallet=JSON.parse(localStorage.getItem("wallet") || "[]")
   }


  addtoWallet(c:any){

    let c2=this.isAlreadyInWallet(c)

    if(c2){

      c.unidades++

    } else {

    let newC={...c}
    
    newC.unidades=0

    this.wallet.push(newC)

    }

    this.saveToLocalStorage()

   

  }

  getWallet(){

    return this.wallet
  }

  getWalletTotal(){

  let total=0

  this.wallet.forEach( c => total += c.unidades*c.precio)

  return total
  }

  isAlreadyInWallet(c:any){

    return this.wallet.find( c2 => c2.id == c.id)
  }

  decrUnits(c:any){
    
    if(c.unidades>0){
      c.unidades--
      this.saveToLocalStorage()
    }

  }

  incrUnits(c:any){

    if(c.unidades>0){

      c.unidades++
      this.saveToLocalStorage()

    }

  }

  delArt(c:any){

  let posicion=this.wallet.findIndex(c2=> c2.id==c.id)

  if (posicion>=0){

  this.wallet.splice(posicion,1)

  this.saveToLocalStorage()

}
  }


  saveToLocalStorage(){

    localStorage.setItem("wallet",JSON.stringify(this.wallet))
  }



}

function snapCrackle(maxValue){
    let stringFinal = ""
    for (let loop = 1; loop < maxValue + 1; loop++){
          if(loop % 2 != 0 && loop % 5 != 0) {
         stringFinal = stringFinal  + "Snap, "
        } else if(loop % 5 == 0 && loop % 2 == 0){
            stringFinal = stringFinal  + "Crackle, "
        } else if(loop % 2 != 0 && loop % 5 == 0) {
            stringFinal = stringFinal  + "Snapcrackle, "
        }  else{
            stringFinal = stringFinal + loop + ", "
        }
        
        
    }
    return stringFinal.substr(0, stringFinal.length -2)
}
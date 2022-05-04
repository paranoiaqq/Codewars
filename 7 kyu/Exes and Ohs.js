function XO(str) {
    let sum = 0
    for (let i = 0; i < str.length; i++){
      if (str[i].toUpperCase() == 'X') { sum++ }
      else if (str[i].toUpperCase() == 'O') { sum-- }
    }
    if ( sum == 0 ) { return true }
    else { return false }
  }
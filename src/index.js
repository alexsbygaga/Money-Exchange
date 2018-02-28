// PLEASE DON'T change function name H Q D N P
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};
    var ex_Currency = Number (currency);
  if (ex_Currency <= 0){
    result = {};
  }else if (ex_Currency > 10000){
    result.error = "You are rich, my friend! We don't have so much coins for exchange";
  }else{
        if (ex_Currency/50 < 1){
            if(ex_Currency/25 < 1){
                if(ex_Currency/10 < 1){
                    if(ex_Currency/5 < 1){
                        result.P = ex_Currency;
                    }else{
                        result.N = Math.floor(ex_Currency/5);
                        result.P = ex_Currency - result.N*5;
                    }
                }else{
                    result.D = Math.floor(ex_Currency/10);
                        if ((ex_Currency % 10)/5 <1){
                            result.P = ex_Currency - result.D*10;
                        }else{
                            result.N = Math.floor((ex_Currency % 10)/5);
                            result.P = ex_Currency - (result.D*10 + result.N*5);
                        }
                }
            }else{
                result.Q = Math.floor(ex_Currency/25);
                if((ex_Currency % 25)/10 < 1){
                    if ((ex_Currency % 25)/5 < 1){
                        result.P = ex_Currency - result.Q*25;
                    }else{
                        result.N = Math.floor(((ex_Currency % 25))/5);
                        result.P = ex_Currency - (result.Q*25 + result.N*5);
                    }           
                }else{
                    result.D  = Math.floor((ex_Currency % 25)/ 10);
                    if(((ex_Currency % 25) % 10)/5 < 1){
                        result.P = ex_Currency - (result.Q*25 + result.D*10); 
                    }else{
                        result.N = Math.floor(((ex_Currency % 25) % 10)/5);
                        result.P = ex_Currency - (result.Q*25 + result.D*10 + result.N*5);
                    }
                }
            }
        }else{
            result.H = Math.floor(ex_Currency/50);
            if((ex_Currency%50)/25<1){
                if((ex_Currency%50)/10<1){
                    if((ex_Currency%50)/5<1){
                        result.P = ex_Currency - result.H*50;
                    }else{
                        result.N = Math.floor((ex_Currency%50)/5);
                        result.P = ex_Currency - (result.H*50+result.N*5);
                    }
                }else{
                    result.D = Math.floor((ex_Currency%50)/10);
                    if(((ex_Currency%50)%10)/5<1){
                        result.P = ex_Currency - (result.H*50 + result.D*10);
                    }else{
                        result.N = Math.floor(((ex_Currency%50)%10)/5);
                        result.P = ex_Currency - (result.H*50 + result.D*10 + result.N*5);
                    }
                }
            }else{
                result.Q = Math.floor((ex_Currency % 50)/25);
                    if (((ex_Currency % 50) % 25)/10 <1) {
                        if((ex_Currency%50)/5 < 1){
                            result.P = ex_Currency - (result.H*50+result.Q*25);
                        }else{
                            result.N = Math.floor(((ex_Currency%50)%25)/5);
                            result.P = ex_Currency - (result.H*50+result.Q*25 + result.N*5)
                        }
                    }else{
                        result.D = Math.floor(((ex_Currency % 50 ) % 25)/10);
                            if ((((ex_Currency % 50) % 25) % 10)/5 < 1){
                                result.P = ex_Currency - (result.H*50+result.Q*25 + result.D*10);
                            }else{
                                result.N = Math.floor((((ex_Currency % 50) % 25) % 10)/ 5);
                                result.P = ex_Currency - (result.H*50 + result.Q*25 + result.D*10 + result.N*5);
                            }
                    }
            }
        }
  }
    for (var key in result){
        if (result[key] == 0){
            delete result[key];
        }
    }
    return result;
}

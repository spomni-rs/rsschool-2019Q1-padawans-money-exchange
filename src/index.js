// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  
  if (currency <= 0){
    return {}
  }
  
  let config = [
    ["H", 50],
    ["Q", 25],
    ["D", 10],
    ["N", 5],
    ["P", 1]
  ];
  
  let res = {};
  
  let length = config.length;
  for (let i=0; i<length; i++){
  
    if (currency === 0){
      return res;
    }
  
    let coin = config[i][0];
    let volume = config[i][1];
    
    let count = (currency/volume) | 0;
    
    if (count !== 0){
      res[coin] = count;
      currency = currency - count * volume;
    }
  }
  
  return res;
}
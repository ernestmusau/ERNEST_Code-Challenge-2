function isPrime(n) {
    if (n < 2) {
        return false;
      }
    for (let p = 2; p <= Math.sqrt(n); p++) {
        if (n % p === 0) {
            return false;
        }
    }
    return true;
  }
  
  function checkPrimeNumbers(){
  
  
   let startNumber = parseInt(prompt("Enter the First Number: "));
   
    let endNumber = parseInt(prompt("Enter the Last Number: "));
  
    let primeNumbers = []; 
    
    
    for (let n = startNumber; n <= endNumber; n++) {
    if (isPrime(n)) {
        primeNumbers.push(n);
    }
  }
  
    console.log( primeNumbers);
    window.alert(primeNumbers);
  }
  
  checkPrimeNumbers()
    
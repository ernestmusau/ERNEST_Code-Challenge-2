function generateArray(first, last) {
  
    let result = []
    for (let i = first; i <= last; i++) {
    result.push(i)
    }
    return result;
  }
  
  
    const first = parseInt(prompt("Enter the first number: "));
    const last = parseInt(prompt("Enter the last number: "));
  
  
  
    let result = generateArray(first, last);
  
  
  
    console.log(result);
    window.alert(result);
  
  
  
    generateArray()
function caseSwap(string){
    let scan = "";
    for (let i = 0; i < input.length; i++) {
        let char = string.charAt(i);
        if (char === char.toUpperCase()) {
            scan += char.toLowerCase();
        } else {
            scan += char.toUpperCase();
        }
  }
    return scan;
    console.log(scan);
  }
  
  
  const input = prompt("Enter a string: ");
  
  
  let result = caseSwap(input)
  
  console.log(result);
  
  window.alert(result);
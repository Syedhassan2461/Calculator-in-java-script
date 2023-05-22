function appendCharacter(character) {
    document.getElementById('result').value += character;
  }
  
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  function evaluateExpression() {
    const expression = document.getElementById('result').value;
  
    try {
      const result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      // Handle invalid expressions or errors
      document.getElementById('result').value = 'Error';
    }
  }
  
// app.js
document.getElementById('obfuscateBtn').addEventListener('click', () => {
  const inputCode = document.getElementById('inputCode').value;

  // Check if input is empty
  if (!inputCode.trim()) {
    alert('Please enter some JavaScript code to obfuscate.');
    return;
  }

  // Obfuscate the code
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(inputCode, {
    compact: true,
    controlFlowFlattening: true,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArrayThreshold: 0.75
  }).getObfuscatedCode();

  // Display the obfuscated code
  document.getElementById('outputCode').value = obfuscatedCode;
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const c1 = parseFloat(document.getElementById('initial-concentration').value);
    const v1 = parseFloat(document.getElementById('initial-volume').value);
    const cf = parseFloat(document.getElementById('final-concentration').value);
    const ca = parseFloat(document.getElementById('additional-concentration').value);
    
    // Calculate additional volume needed
    const va = ((cf * v1) - (c1 * v1)) / ca;
    
    // Display result
    const resultElement = document.getElementById('calculated-volume');
    if (isNaN(va) || !isFinite(va)) {
        resultElement.textContent = "Invalid input values";
    } else if (va < 0) {
        resultElement.textContent = "No additional caustic needed";
    } else {
        resultElement.textContent = `Additional Volume (Vₐ) needed: ${va.toFixed(0)} HL of soda at ${ca}% concentration`;
        
        // Add blinking class
        resultElement.classList.add('blinking-result');
        
        // Remove blinking class after 30 seconds
        setTimeout(() => {
            resultElement.classList.remove('blinking-result');
        }, 30000);
    }
});
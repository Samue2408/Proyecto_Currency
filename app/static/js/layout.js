const exchangeRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.27
    }
};

// Función para calcular el cambio
function calculateExchange() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        const result = (amount * rate).toFixed(2);
        document.getElementById('result').innerHTML = `Resultado: ${result} ${toCurrency}`;
    } else {
        document.getElementById('result').innerHTML = 'No se encontraron tasas de cambio válidas.';
    }
}

// Agregar un controlador de eventos al botón de cálculo
document.getElementById('calculate-button').addEventListener('click', calculateExchange);
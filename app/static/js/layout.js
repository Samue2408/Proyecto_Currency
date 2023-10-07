
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  var miDiv = document.getElementById("alerta");  
  const wrapper = document.createElement('div')
  if(miDiv){
    miDiv.remove();
  }  
  wrapper.innerHTML = [
    `<div class="alert alert-${type}" role="alert" id="alerta">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

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
        message_send = `Result: ${result} ${toCurrency}`;
        appendAlert(message_send, 'success')
    } else {
        appendAlert('No se encontraron tasas de cambio válidas.', 'danger')
    }
}

// Agregar un controlador de eventos al botón de cálculo
document.getElementById('calculate-button').addEventListener('click', calculateExchange);
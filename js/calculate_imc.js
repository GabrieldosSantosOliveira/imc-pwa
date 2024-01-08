const CLASSIFICATIONS_IMC_RANGE = {
  UNDER_WEIGHT: 18.5,
  NORMAL: 24.9,
  OVER_WEIGHT: 29.9,
  OBESITY_CLASS_1: 34.9,
  OBESITY_CLASS_2: 39.9,
};
const weightSpan = document.getElementById('weight_input_message_error');
function showWeightErrorMessage(message) {
  weightSpan.textContent = message;
}
const heightSpan = document.getElementById('height_input_message_error');
function showHeightErrorMessage(message) {
  heightSpan.textContent = message;
}
function calculatorImc() {
  const WEIGHT = document.getElementById('weight_input').value;
  const HEIGHT = document.getElementById('height_input').value;

  if (!WEIGHT) {
    showWeightErrorMessage('Informe o seu peso');
    return;
  }
  if (Number.isNaN(Number(WEIGHT)) || Number(WEIGHT) === 0) {
    showWeightErrorMessage('Informe um peso valido');
    return;
  }
  showWeightErrorMessage(undefined);
  if (!HEIGHT) {
    showHeightErrorMessage('Informe a sua altura');
    return;
  }
  if (Number.isNaN(Number(HEIGHT)) || Number(HEIGHT) === 0) {
    showHeightErrorMessage('Informe uma altura valida');
    return;
  }
  showHeightErrorMessage(undefined);

  const classification = Math.round(WEIGHT / (HEIGHT * HEIGHT));
  let category;

  if (classification < CLASSIFICATIONS_IMC_RANGE.UNDER_WEIGHT) {
    category = 'Abaixo do peso normal';
  } else if (classification < CLASSIFICATIONS_IMC_RANGE.NORMAL) {
    category = 'Peso normal';
  } else if (classification < CLASSIFICATIONS_IMC_RANGE.OVER_WEIGHT) {
    category = 'Excesso de peso';
  } else if (classification < CLASSIFICATIONS_IMC_RANGE.OBESITY_CLASS_1) {
    category = 'Obesidade classe 1';
  } else if (classification < CLASSIFICATIONS_IMC_RANGE.OBESITY_CLASS_2) {
    category = 'Obesidade classe 2';
  } else {
    category = 'Obesidade classe 3';
  }
  openModal();
  document.getElementById('modal_imc_category').innerText =
    `Você se encontra na categoria: ${category}`;
  document.getElementById('modal_imc_body_index').innerText =
    `O seu índice de massa corporal é ${classification}`;
}

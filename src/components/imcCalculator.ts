export default function imcCalculator(
  event: any,
  weight: number,
  height: number,
  setValue: any,
  setDescription: any,
  setColor: any
) {
  /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
  event.preventDefault();

  const bmi: number = Number((weight / (height * height)).toFixed(2));

  let description = '';

  if (bmi < 18.5) {
    description = 'Cuidado! Você está abaixo do peso!';
    setColor('text-blue-500')
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = 'Você está no peso ideal!';
    setColor('text-green-600')
  } else if (bmi > 25 && bmi <= 30) {
    description = 'Cuidado! Você está com sobrepeso!';
    setColor('text-yellow-500')
  } else if (bmi > 30 && bmi <= 35) {
    description = 'Cuidado! Você está com obesidade moderada!';
    setColor('text-orange-500')
  } else if (bmi > 35 && bmi <= 40) {
    description = 'Cuidado! Você está com obesidade severa!';
    setColor('text-red-500')
  } else {
    description = 'Cuidado! Você está com obesidade morbida!';
    setColor('text-black')
  }

  setValue(String(bmi).replace('.', ','));
  setDescription(description);
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const phrases = {
    saludo: [
      "Hola, ¿cómo estás?",
      "Buenos días, ¿qué tal?",
      "Hola, es un gusto verte."
    ],
    despedida: [
      "Hasta luego, cuídate.",
      "Adiós, que tengas un buen día.",
      "Nos vemos pronto."
    ],
    pregunta: [
      "¿Puedo hacerte una pregunta?",
      "¿Qué opinas de esto?",
      "¿Podrías ayudarme con algo?"
    ],
    agradecimiento: [
      "Gracias por tu ayuda.",
      "Te lo agradezco mucho.",
      "Gracias, eres muy amable."
    ],
    presentacion: [
      "Hola, mi nombre es Juan, ¿y tú cómo te llamas?",
      "Encantado de conocerte, soy Laura.",
      "Me llamo Carlos, es un placer conocerte."
    ],
    felicitacion: [
      "¡Felicidades por tu logro!",
      "¡Bien hecho! Estoy muy feliz por ti.",
      "¡Qué gran noticia, te lo mereces!"
    ],
    disculpa: [
      "Lo siento, no era mi intención.",
      "Perdón si te hice sentir mal.",
      "Disculpa, cometí un error."
    ],
    conversacion: [
      "¿Viste la serie nueva en Netflix?",
      "¿Qué planes tienes para el fin de semana?",
      "He estado pensando en ir a ese nuevo restaurante, ¿has ido?"
    ]
  };

  const buttons = document.querySelectorAll('.social-btn');
  const output = document.getElementById('social-phrase');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const situation = button.getAttribute('data-situation');
      const randomPhrase = phrases[situation][Math.floor(Math.random() * phrases[situation].length)];
      output.textContent = randomPhrase;
    });
  });
});

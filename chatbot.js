// Definir una función que sintetice el texto a voz
function speakText(text) {
    // Crear una instancia del objeto SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance();
  
    // Establecer el texto a sintetizar y el idioma
    utterance.text = text;
    utterance.lang = "es-ES";
  
    // Sintetizar el texto a voz
    speechSynthesis.speak(utterance);
  }
  
  // Obtener el historial de mensajes, el formulario de chat y el botón de enviar
  const messageHistory = document.getElementById("message-history");
  const chatForm = document.getElementById("chat-form");
  const sendButton = document.getElementById("send-button");
  
  // Agregar un controlador de eventos de envío para el formulario de chat
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Obtener el mensaje de entrada del usuario
    const input = document.getElementById("convenio-select");
    const userInput = input.value.trim();
  
    // Obtener el valor seleccionado del select
    const select = document.getElementById("convenio-select");
    const selectedValue = select.value;
  
    // Agregar el mensaje del usuario al historial de mensajes
    const userMessage = createMessage("user", userInput);
    messageHistory.appendChild(userMessage);
  
    // Determinar la respuesta del chatbot y agregarla al historial de mensajes
    let botResponse = "";
  
    if (selectedValue === "Su nombre completo es") {
      botResponse = "Carlos Javier Tellez Martinez.";
  } else if (selectedValue === "Carlos es de") {
      botResponse = "La provincia de Malaga, municipio Torre del mar";
    } else if (selectedValue === "La profesion de Carlos es") {
      botResponse = "Programador Python, especializado en Machine Learning y Redes neuronales";  
         } else if (selectedValue === "Las habilidades de Carlos son") {
      botResponse = "HTML, CSS, SQL, GitLab, Amazon-AWS, Ingles Nivel B1"; 
    } else if (selectedValue === "Carlos se educo en") {
      botResponse = "Bachiller Colegio: Antonio Machado año 2008-2009, Programacion Python Tokio School 2022-2023, Especializacion Machine Learning Tokio School 2023-2024, Especializacion Deep Learning Tokio School 2024 Aun cursando";
    } else if (selectedValue === "La experiencia de Carlos es") {
      botResponse = "Carretillero en Cuetara 7 años, Comercial en Gas natural Fenosa 10 años, Programador de IA en Overstand Intelligence 1 año";
    } else if (selectedValue === "Sobre Carlos") {
      botResponse = "Le apasiona el mundo de la tecnología, en estos casi tres años que lleva en este mundo ha aprendido a controlar muchos tipos de tecnologías y lenguajes, le encantan los retos, la disciplina y la organización, siempre trabaja duro para dar el 100% de si mismo y ser un gran activo donde ofrezca sus servicios.";
    } else if (selectedValue === "Sus datos de contacto son") { 
      botResponse = "Telefono: 667598481, Email: Fortun2531@gmail.com";
    }
  
    const botMessage = createMessage("bot", botResponse);
    messageHistory.appendChild(botMessage);
  // Sintetizar la pregunta del usuario a voz
  speakText(userInput);
  
    // Sintetizar la respuesta del chatbot a voz
    speakText(botResponse);
  });
  
  
  // Definir una función para crear un mensaje de chat
  function createMessage(sender, text) {
    const message = document.createElement("li");
    message.classList.add("message", sender);
  
    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content");
    messageContent.innerHTML = text;
  
    message.appendChild(messageContent);
  
    return message;
  }
  // Saludar al abrir el index.html
  window.onload = function() {
    const botMessage = createMessage("bot", "Hola, selecciona la pregunta en el menú desplegable");
    messageHistory.appendChild(botMessage);
    speakText("Hola, selecciona la pregunta en el menú desplegable");
  };
  let timeoutId;
  
  function resetTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const botResponse = "¿Necesitas algo más?";
      const botMessage = createMessage("bot", botResponse);
      messageHistory.appendChild(botMessage);
      speakText(botResponse);
    }, 90000);
  }
  
  document.addEventListener("mousemove", resetTimer);
  const exportButton = document.getElementById("export-button");
  exportButton.addEventListener("click", exportChat);
  function exportChat() {
    // Obtener todo el contenido del chat
    const messages = document.querySelectorAll(".message-content");
    let chatContent = "";
    messages.forEach((message) => {
      chatContent += message.textContent + "\n";
    });
  
    // Crear un objeto Blob con el contenido del chat
    const chatBlob = new Blob([chatContent], { type: "text/plain" });
  
    // Crear un objeto URL a partir del Blob
    const chatURL = URL.createObjectURL(chatBlob);
  
    // Crear un enlace de descarga y hacer clic en él para descargar el archivo
    const downloadLink = document.createElement("a");
    downloadLink.href = chatURL;
    downloadLink.download = "chat.txt";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  
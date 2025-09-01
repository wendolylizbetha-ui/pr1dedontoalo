// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  databaseURL: "https://prb1-odontoalo-default-rtdb.firebaseio.com/"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Captura de formulario
const form = document.getElementById('formCita');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const motivo = document.getElementById('motivo').value;
  const correo = document.getElementById('correo').value;
  const fecha = document.getElementById('fecha').value;

  // Guardar en Firebase
  push(ref(database, 'citas'), {
    nombre,
    edad,
    motivo,
    correo,
    fecha,
    timestamp: Date.now()
  });

  alert("✅ Tu cita ha sido registrada. Te contactaremos pronto.");
  form.reset();
});

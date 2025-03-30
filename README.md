# Tutorial de Validación de Formulario

Link para ver resultado: [VALIDACION DE FORMULARIOS](https://validacion-formulario-js2.netlify.app/)

Este es un tutorial paso a paso sobre cómo crear una aplicación de validación de formulario utilizando JavaScript. La aplicación permite a los usuarios ingresar su nombre, correo electrónico y contraseña. A continuación, se explica el funcionamiento del código JavaScript:

## Validación del Formulario

El siguiente paso es validar los campos del formulario cuando se envía. Se agrega un evento de escucha al elemento con el ID "formulario" para capturar el evento de envío.

    document.getElementById('formulario').addEventListener('submit', (event) => {
      event.preventDefault();
      // Código de validación del formulario
    });

Dentro del evento de envío, realizamos la validación de los campos del formulario uno por uno.

### Validación del campo de nombre

    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');
    
    if (entradaNombre.value.trim() === '') {
      errorNombre.textContent = 'Por favor, introducí tu nombre';
      errorNombre.classList.add('error-message');
    } else {
      errorNombre.textContent = '';
      errorNombre.classList.remove('error-message');
    }

Verificamos si el valor del campo de nombre está en blanco. Si es así, mostramos un mensaje de error y aplicamos una clase CSS para resaltar el error. De lo contrario, eliminamos cualquier mensaje de error y la clase CSS correspondiente.

### Validación del correo electrónico

    let entradaEmail = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico
    
    if (!emailPattern.test(entradaEmail.value)) {
      emailError.textContent = 'Por favor, introducí un mail válido';
      emailError.classList.add('error-message');
    } else {
      emailError.textContent = '';
      emailError.classList.remove('error-message');
    }

Utilizamos una expresión regular (`emailPattern`) para validar el formato básico de una dirección de correo electrónico. Si el valor del campo de correo electrónico no cumple con el patrón, mostramos un mensaje de error y aplicamos la clase CSS correspondiente.

### Validación de la contraseña

    let passwordEntrada = document.getElementById('password');
    let passwordError = document.getElementById('passwordError');
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    
    if (!passwordPattern.test(passwordEntrada.value)) {
      passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales';
      passwordError.classList.add('error-message');
    } else {
      passwordError.textContent = '';
      passwordError.classList.remove('error-message');
    }

Utilizamos otra expresión regular (`passwordPattern`) para validar la contraseña. La contraseña debe tener entre 8 y 15 caracteres, al menos una letra minúscula, una letra mayúscula, un número y un carácter especial. Si la contraseña no cumple con el patrón, mostramos un mensaje de error y aplicamos la clase CSS correspondiente.

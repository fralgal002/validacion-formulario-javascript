document.getElementById('formulario').addEventListener('submit',(event)=>{
    event.preventDefault()

    // Validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introduzca un nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }
    // Validar correo electronico
    let entradaEmail = document.getElementById('email')
    let errorEmail = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico

    if(!emailPattern.test(entradaEmail.value)){
        errorEmail.textContent = 'Por favor, introduzca un email válido'
        errorEmail.classList.add('error-message')
    }else {
        errorEmail.textContent = ''
        errorEmail.classList.remove('error-message')    
    }

    // Validar contraseña
    let entradaPassword = document.getElementById('password')
    let passwordError = document.getElementById('passwordError')
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if(!passwordPattern.test(entradaPassword.value)){
        passwordError.textContent = 'La contraseña debe tener 8 caracteres mínimo, con numeros, mayúsculas y minúsculas y un caracter especial'
        passwordError.classList.add('error-message')
    } else {
        passwordError.textContent = ''
        passwordError.classList.remove('error-message')
    }
    // Si todos los cambios son correctos enviar formulario
    if (!errorNombre.textContent && !errorEmail.textContent && !passwordError.textContent){
        alert("El formulario se ha enviado correctamente")
        document.getElementById('formulario').reset()
    }
})
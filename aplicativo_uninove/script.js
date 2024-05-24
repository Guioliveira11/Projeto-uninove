var emailLabel = document.querySelector('#loginEmailLabel'), 
    email = document.querySelector('#loginEmail'), 
    passwordLabel = document.querySelector('#loginPasswordLabel'), 
    password = document.querySelector('#loginPassword'), 
    showPasswordCheck = document.querySelector('#showPasswordCheck'), 
    showPasswordToggle = document.querySelector('#showPasswordToggle'), 
    mySVG = document.querySelector('.svgContainer'), 
    twoFingers = document.querySelector('.twoFingers'), 
    armL = document.querySelector('.armL'), 
    armR = document.querySelector('.armR'), 
    eyeL = document.querySelector('.eyeL'), 
    eyeR = document.querySelector('.eyeR'), 
    nose = document.querySelector('.nose'), 
    mouth = document.querySelector('.mouth'), 
    mouthBG = document.querySelector('.mouthBG'), 
    mouthSmallBG = document.querySelector('.mouthSmallBG'), 
    mouthMediumBG = document.querySelector('.mouthMediumBG'), 
    mouthLargeBG = document.querySelector('.mouthLargeBG'), 
    mouthMaskPath = document.querySelector('#mouthMaskPath'), 
    mouthOutline = document.querySelector('.mouthOutline'), 
    tooth = document.querySelector('.tooth'), 
    tongue = document.querySelector('.tongue'), 
    chin = document.querySelector('.chin'), 
    face = document.querySelector('.face'), 
    eyebrow = document.querySelector('.eyebrow'), 
    outerEarL = document.querySelector('.earL .outerEar'), 
    outerEarR = document.querySelector('.earR .outerEar'), 
    earHairL = document.querySelector('.earL .earHair'), 
    earHairR = document.querySelector('.earR .earHair'), 
    hair = document.querySelector('.hair'), 
    bodyBG = document.querySelector('.bodyBGnormal'), 
    bodyBGchanged = document.querySelector('.bodyBGchanged');

var activeElement, showPasswordClicked = false;

function onPasswordToggleBlur(e) {
    activeElement = "password";
    if (!showPasswordClicked) {
        setTimeout(function () {
            if (activeElement == "password" || activeElement == "toggle") {
            } else {
                uncoverEyes();
            }
        }, 100);
    }
}

function onPasswordToggleMouseDown(e) {
    showPasswordClicked = true;
}

function onPasswordToggleMouseUp(e) {
    showPasswordClicked = false;
    // Ao soltar o botão do mouse no botão de alternância, atualize a visibilidade da senha
    updatePasswordVisibility();
}

function updatePasswordVisibility() {
    // Verifique se a caixa de seleção de mostrar senha está marcada
    if (showPasswordCheck.checked) {
        // Se estiver marcado, altere o tipo do campo de senha para "text" para mostrar a senha
        password.setAttribute('type', 'text');
    } else {
        // Se não estiver marcado, volte ao tipo padrão "password" para ocultar a senha
        password.setAttribute('type', 'password');
    }
}

// Adicionar ouvintes de evento para os eventos relevantes
showPasswordToggle.addEventListener('blur', onPasswordToggleBlur);
showPasswordToggle.addEventListener('mousedown', onPasswordToggleMouseDown);
showPasswordToggle.addEventListener('mouseup', onPasswordToggleMouseUp);


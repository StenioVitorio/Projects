document.getElementById('botaoBotao').onclick = openMenu;

//vars
let menuState = false;

const menu1 = document.getElementById('menuBotao');
const cabecario = document.getElementById('cabecario');
const cabecarioText = document.getElementById('textoCima');
const botao = document.getElementById('botaoBotao');
const botao2 = document.getElementById('botaoBotao2');
const botao3 = document.getElementById('botaoBotao3');
const menu1Css = menu1.style;
const cabecarioCss = cabecario.style;
const botaoCss = botao.style;
const botao2Css = botao2.style;
const botao3Css = botao3.style;



//functions
function openMenu() {

    if (window.innerWidth <= 980) {

        if (menuState == false) {

            menu1Css.width = '45%';
            cabecarioCss.height = '80%';
            botaoCss.maxWidth = '100%';
            botaoCss.maxHeight = '10%';
            botao.innerText = 'Fechar'
            botaoCss.fontSize = '15px';

            botao2Css.maxWidth = '100%';
            botao2Css.maxHeight = '10%';
            botao2Css.fontSize = '15px';
            botao2Css.visibility='visible';

            botao3Css.maxWidth = '100%';
            botao3Css.maxHeight = '10%';
            botao3Css.fontSize = '15px';
            botao3Css.visibility='visible';
            cabecarioText.innerHTML = '<h2> Bem Vindo(a)! <span style=" font-size:15px;">Versão android</span></h2>' +
                '<br> Este site foi feito por Stenio vitorio, foram utilizados somente HTML5, CSS e JavaScript no desenvolvimento deste site';
            menuState = true;
        } else {

            menu1Css.width = '7%';
            cabecarioCss.height = '7%';
            botaoCss.maxWidth = '100%';
            botaoCss.maxHeight = '100%';
            botaoCss.fontSize = '25px';

            botao2Css.maxWidth = '100%';
            botao2Css.maxHeight = '100%';
            botao2Css.fontSize = '25px';
            botao2Css.visibility='collapse';

            botao3Css.maxWidth = '100%';
            botao3Css.maxHeight = '100%';
            botao3Css.fontSize = '25px';
            botao3Css.visibility='collapse';
            botao.innerText = '='
            cabecarioText.innerText = 'Bem Vindo(a)!';

            menuState = false;
        }


    } else {

        if (menuState == false) {

            menu1Css.width = '45%';
            cabecarioCss.height = '80%';
            botaoCss.maxWidth = '100%';
            botaoCss.maxHeight = '10%';
            botao.innerText = 'Fechar'
            botaoCss.fontSize = '15px';

            botao2Css.maxWidth = '100%';
            botao2Css.maxHeight = '10%';
            botao2Css.fontSize = '15px';
            botao2Css.visibility='visible';

            botao3Css.maxWidth = '100%';
            botao3Css.maxHeight = '10%';
            botao3Css.fontSize = '15px';
            botao3Css.visibility='visible';
            document.body.style.animation ='Open-Menu 1s ease-in 0 1 foward both';
            
            cabecarioText.innerHTML = '<h2> Bem Vindo(a)! <span style=" font-size:15px;">Versão PC</span></h2>' +
                '<br> Este site foi feito por Stenio vitorio, foram utilizados somente HTML5, CSS e JavaScript no desenvolvimento deste site';
           
            
                menuState = true;
        } else {

            menu1Css.width = '7%';
            cabecarioCss.height = '10%';
            botaoCss.maxWidth = '100%';
            botaoCss.maxHeight = '100%';
            botaoCss.fontSize = '25px';
            
            botao2Css.maxWidth = '100%';
            botao2Css.maxHeight = '100%';
            botao2Css.fontSize = '25px';
            botao2Css.visibility='collapse';

            botao3Css.maxWidth = '100%';
            botao3Css.maxHeight = '100%';
            botao3Css.fontSize = '25px';
            botao3Css.visibility='collapse';

            document.body.style.animation ='Open-Menu 1s ease-in 0 1 reverse both';

            botao.innerText = '='
            cabecarioText.innerText = 'Bem Vindo(a)!';

            menuState = false;
        }


    }


}



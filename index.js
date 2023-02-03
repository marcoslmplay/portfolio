const botaoMenu = document.querySelector('.cabecalho_menu')
const menu = document.querySelector('.menu-lateral')
const menuIcon = document.querySelector('.menu-icon')
const xIcon = document.querySelector('.x-icon')
var a = 0

botaoMenu.addEventListener('click', () => {
	menu.classList.toggle('menu-lateral--ativo')
	if (a==1){
		menuIcon.classList.toggle('icon-ativo')
		xIcon.classList.toggle('icon-ativo')
		a = 0
	}else {
		xIcon.classList.toggle('icon-ativo')
		menuIcon.classList.toggle('icon-ativo')
		a = 1
	}
})

function sendMail() {
    var link = "marcoslmplay@gmail.com"
             + document.getElementById('email').value
             + "&subject=" + escape(document.getElementById('nome').value + " - " + document.getElementById('assunto').value)
             + "&body=" + escape(document.getElementById('texto').value)
    ;

    window.location.href = link;
}
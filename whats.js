$(document).ready(function () {
var cookieMessagePrimary = $.cookie("wc_whatsapp_primary");
if (cookieMessagePrimary !== '1') {
$.cookie("wc_whatsapp_primary", 1, {expires: 30}); //Mensagem Principal volta exibir após de 30 dias
setTimeout(showMessagePrimary, 4000);
} else {
//se tiver no mobile, a mensagem primária não exibe
if (screen.width > 550) {
setTimeout(showMessageSecondary, 4000);
}
}
//esconde mensagem secundária ao clicar
$('.wc_whatsapp_secondary').click(function () {
$(this).fadeOut(400);
});
//esconde mensagem primária ao clicar
$('.wc_whatsapp_primary').click(function () {
$(this).fadeOut(400);
});
//controla botão de fechar da mensagem primária
$('.wc_whatsapp_primary .close').click(function () {
$('.wc_whatsapp_primary').fadeOut(400);
return false;
});
//esconde mensagem secundária ao passar o mouse no botão
$('.wc_whatsapp').hover(function () {
$('.wc_whatsapp_secondary').fadeOut(400);
});

//função para exibir mensagem secundária
function showMessageSecondary() {
$('.wc_whatsapp_secondary').fadeIn(400);
}

//função para exibir mensagem primária
function showMessagePrimary() {
$('.wc_whatsapp_primary').fadeIn(400).css("display", "flex");
}
});
/* Eventos de scroll da página */

window.addEventListener('scroll', function() {
    var div = document.querySelector('.hidden_1');
    var position = div.getBoundingClientRect();
  
    if (position.top < window.innerHeight) {
      div.style.opacity = 1;
      div.style.transform = 'translateX(0)';
    }
  });
  
  window.addEventListener('scroll', function() {
    var div = document.querySelector('.hidden_2');
    var position = div.getBoundingClientRect();
  
    if (position.top < window.innerHeight) {
      div.style.opacity = 1;
      div.style.transform = 'translateX(0)';
    }
  });
  
  window.addEventListener('scroll', function() {
    var div = document.querySelector('.hidden_3');
    var position = div.getBoundingClientRect();
  
    if (position.top < window.innerHeight) {
      div.style.opacity = 1;
      div.style.transform = 'translateX(0)';
    }
});

/* Eventos de manipulação dos boxes de descrição do meu perfil */

function switchLanguage(languageBoxToShow, languageBoxesToHide) {
  if (languageBoxToShow.hasClass('active')) {
    return;
  }

  languageBoxesToHide.filter('.active').fadeOut(1000, () => {
    languageBoxToShow.fadeIn(1000);
  });

  languageBoxToShow.addClass('active');
  languageBoxesToHide.removeClass('active');
}

$("#pt").click(function(){
  switchLanguage($("#ptBox"), $("#enBox, #esBox"));
});

$("#en").click(function(){
  switchLanguage($("#enBox"), $("#ptBox, #esBox"));
});

$("#es").click(function(){
  switchLanguage($("#esBox"), $("#ptBox, #enBox"));
});


$(document).ready(function() {
  // Elementos que são filhos do body exceto o primeiro
  const bodyChildren = $('body').children().not(':first-child');
  $(bodyChildren).hide();
  
  // Exibir o container inicial, em seguida, fazer os elementos do body aparecerem gradualmente
  $(".welcome").appendTo('body').hide().fadeIn(1000, function() {
    // Manter a mensagem de boas-vindas visível por 1 segundos antes de desaparecer
    setTimeout(() => {
      $(this).fadeOut(1000, function() {
        $(bodyChildren).fadeIn(1000);
      });
    }, 1500);
  });
});



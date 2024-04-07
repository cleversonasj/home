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


let isTransitioning = false;

async function switchLanguage(languageBoxToShow, languageBoxesToHide) {
  if (isTransitioning || languageBoxToShow.hasClass('active')) {
    return;
  }

  isTransitioning = true;

  await Promise.all(languageBoxesToHide.filter('.active').map(async function() {
    await $(this).fadeOut(500).promise();
    $(this).removeClass('active');
  }));

  languageBoxToShow.fadeIn(500, function() {
    isTransitioning = false;
  });
  languageBoxToShow.addClass('active');
}

$("#pt").click(async function(){
  if (isTransitioning) return;
  $("#pt").removeClass("unselected");
  $("#en, #es").addClass("unselected");
  await switchLanguage($("#ptBox"), $("#enBox, #esBox"));
});

$("#en").click(async function(){
  if (isTransitioning) return;
  $("#en").removeClass("unselected");
  $("#pt, #es").addClass("unselected");
  await switchLanguage($("#enBox"), $("#ptBox, #esBox"));
});

$("#es").click(async function(){
  if (isTransitioning) return;
  $("#es").removeClass("unselected");
  $("#pt, #en").addClass("unselected");
  await switchLanguage($("#esBox"), $("#ptBox, #enBox"));
});
var tnum = 'en';

$(document).ready(function(){
  
  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');     
  });
  
  $('.translate_wrapper .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent().toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });
  

  /*TRANSLATE*/
  translate(tnum);
  
  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');  
    
    var img = $(this).find('img').attr('src');    
    var lang = $(this).attr('data-value');
    var tnum = lang;
    translate(tnum);
    
    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);
    
    if(lang == 'ar'){
      $('body').attr('dir', 'rtl');
    }else{
      $('body').attr('dir', 'ltr');
    }
  });
});

function translate(tnum){
  $('.intro').text(trans[0][tnum]);
}

var trans = [ 
{ 
    en : 'INDYCAR and the Indianapolis Motor Speedway are moving full speed ahead in the “Race for Equality and Change.” The past few months have been filled with announcements that have built the engine that will drive fundamental change and support diversity and inclusivity across the motorsports industry. But we’ve just taken the green flag.',
    es : 'INDYCAR y el Indianapolis Motor Speedway avanzan a toda velocidad en la 'Carrera por la igualdad y el cambio'. Los últimos meses han estado llenos de anuncios que han construido el motor que impulsará un cambio fundamental y apoyará la diversidad y la inclusión en la industria del automovilismo. Pero acabamos de tomar la bandera verde.',
  }
];



$('#burger').click(function(){
    $('#menu').toggle('.is-active');
});
$('#close').click(function(){
    $('#menu').toggle('.is-active');
});
$('.events-share').hide();


$( document ).ready(function(){
    $('.maraphon').mouseenter(function(){
        $('.emj').hide(100);
        $('.events-share').show(500);
    });
    $('.maraphon').mouseleave(function(){
        $('.emj').show(500);
        $('.events-share').hide(100);
    });
});

$('#timetable-text8').hide();
if(window.matchMedia('(min-width: 768px)').matches){
     $('.timetable-item8').mouseenter(function(){
        $('#timetable-text8').show(700);
    });
    $('.timetable-item8').mouseleave(function(){
        $('#timetable-text8').hide(500);
    });

}

$(function(){
    $('.events-share').on('click', function(){
        $('.menu-marathon').css('display', 'flex');
    });

    $('.menu-marathon').on('click', function(event){
        if(event.target === this) {
             $('.menu-marathon').css('display', 'none');
        }
    });

    $('.cross').on('click', function(){
       $('.menu-marathon').css('display', 'none');
    });
});

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      mail: {
        required: true,
        email: true
      },
    },
  });
        
new WOW(
    {
        animateClass: 'animate__animated',
    }
).init();

$('.seller').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,

    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
                infinite: true,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                dots: true,
                variableWidth: false,
                infinite: true,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.one-time').slick(
    {
        // settings: "unslick"
        responsive: [

            {
                breakpoint: 99999,
                settings: "unslick"
            },
            {
                breakpoint: 570,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    arrows: false
                }
            }

            // instead of a settings object
        ]
    });
$('.second-time').slick(
    {
        // settings: "unslick"
        responsive: [

            {
                breakpoint: 99999,
                settings: "unslick"
            },
            {
                breakpoint: 770,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    arrows: false
                }
            }

            // instead of a settings object
        ]
    });
let Kal = $('.menu-nav ul li');
let Kalian = $('.Kalian');
let Zakuski = $('.Zakuski');
let Tea = $('.Tea');
let alc = $('.Alcogol');
let a = [Kalian, Zakuski, Tea, alc];

let pred = Kalian;

for (let i = 0; i < 4; i++) {
    Kal.eq(i).click(
        function () {
            if (pred !== a[i]) {
                pred.css('display', 'none');
                a[i].css('display', 'grid');
                pred = a[i];
            }
        }
    )
}

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

$('.btn').click( function () {
    document.getElementsByClassName('order')[0].scrollIntoView({block: "center", behavior: "smooth"});
})

let loader = $(".loader-block");
$('#submit').click( function () {
    let name = $('#name');
    let number = $('#number');
    let flagError = false;
    $('.error__input').hide();
    $('.order__input').css('border-color', '#6224df');
    if(!name.val()){
        name.next().show();
        name.css('border-color', 'red');
        flagError = true;
    }
    if(!number.val()){
        number.next().show();
        number.css('border-color', 'red');
        flagError = true;
    }
    if(!flagError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { name: name.val(), phone: number.val() }
        })
            .done( function (message){
                loader.hide();
                if(message.success){
                    $('.order-form').html('<div class="order__thanks__text">Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</div>')
                }
                else
                {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
                // try {
                //     result = JSON.parse(http.responseText);
                // }catch (e) {}

            });
    }

})
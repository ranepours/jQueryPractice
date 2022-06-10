//1
$(() => {
    console.log("Let's get ready to party with jQuery!");
})

//2
$('img').addClass('image-center');

//3
const $lastP = $('p').eq(5);
$lastP.remove();

//4
const randomFontSize = Math.floor(Math.random() * 100);
console.log(randomFontSize);
$('h1').css('font-size', randomFontSize);

//5
$('ol').append('<li>puede decir lo que quieras</li>');

//6
$('aside').empty().html("<p>JK Lists are very dumb. Especially OL's because I wasn't paying attention to the numbers and attempted to append my new addition to a - nonexistent - UL tag. *sigh* My humblest of apologies. pls forgiv. Forever yours, R.</p>");

//7 => frustrated
$(".form-control").on('keyup blur change', function () {
    let $r = $(".form-control").eq(0).val();
    let $b = $(".form-control").eq(1).val();
    let $g = $(".form-control").eq(2).val();

    $("body").css("background-color", "rgb(" + $r + "," + $g + "," + $b + ")");
});


//8
$('img').on('click', () => {
    $(this).remove();
})
$('h1').text(); //gets the text from h1
$('h1').text('WOOP'); //selects and updates value of text

$('li').text(); //grabs all text found in li descendants including anchor tags
$('li').text("I AM LI"); //changes ALL li's to have the same now updated text => they all change at once, no need for a loop
$('li').html(); //retrieves only inner HTML of the first matching li
$('li').html("<b>i'm bold</b>"); //updates ALL inner html of EACH li to now have a bold tag with a text of "i'm bold"

//attr()
$('a'); //selects all anchor tags on page
$('a').attr('href') //retrieves first match
$('a').attr('href', 'github.com/ranepours'); //updates ALL anchor tags to now have a link to my github lol => which would work p well if there were any tags on the page we're "making"
const newAttrs = {
    src: 'lavaflow.com/',
    alt: 'lava flow'
}
$('img').attr(newAttrs); //will update all images to have new src and an alt text of what was listed above

//inputs
$('input'); //selects all inputs on page
$('input').val(); //grabs values from first input on page
$().eq(); //pass in a # and gives the element that matches whatever we're trying to select based on its index (so remember 0 is first then so and so forth) => typically we'd use the name attr or something meaningful to select something specific on the page

//adding styles
$('a').css('color') //can retrieve a value 
$('a').css('font-size', '30px') //can set values with second argument
//set mult at once by passing in an object
const bigTealStyles = {color: 'teal', fontSize: '40px'};
$('a').css(bigTealStyles);

$('h1').addClass('highlight'); //adds on a class - similar to classList
$('h1').removeClass('highlight');
$('li').addClass('highlight');
$('li').toggleClass('highlight');

//METHOD CHAINING
const $h1 = $('h1');
$h1.addClass('highlight').css('background-color', 'red').text("We're chaining");

//TRAVERSAL METHODS - given an element we find a sibling/parent/nect or previous sibling/blahblahblah
const $specialLi = $('li').eq(3);
$specialLi.next(); //shows next sibling
$specialLi.prev(); //shows previous sibling
$specialLi.parent(); //gives parent element => in this case ul
$('ul').children(); //shows DIRECT children - not multilevel
$('ul').find('a'); //will traverse multilevel to find the match => goes through children and their children and their children etc.
//children => direct, find => hitman

//CREATING APPENDING REMOVING
$('ul').append('<li class="highlight">NEW LI</li>');
$('li').prepend('<input type="checkbox"/>'); //adds a checkbox to ALL li's on page
$('<h2>This is an h2</h2>').css('color', 'orange').appendTo('p'); //CREATES A NEW H2 ON PAGE then appends TO each match => in our case, appends to end of each p-tag 
$('h2').remove(); //removes h2's lol

//EVENTS & EVENT DELEGATION
$('img').on('click', function(){
    alert("Hello")
}) //click has been deprecated => use "on" or "trigger"
$('img').on('mouseleave', function(){
    console.log('leaving image');
    $(this).css('border', '10px solid purple')//makes jquery version of js => will now add specific style to specific element
})
    //on() is best for event delegation
    $('#add-input').on('click', function(){
        $('form').append('<type="text"/>'); //when button is clicked we append a new form with a type of text, no event delegation at this point
    })
    $('input').on('focus', () => {
        $(this).val("BAMBOOZLED"); //notice how when we add new inputs this does not apply, this is bc there is no event delegation
        //event delegation => add eL to a parent element, check the target in the callback of the event
            /* EXAMPLE: listen for clicks on elements with a class of meme IN the meme container
            $('#meme-container').on('click', ".meme", (e) => {
                deleteMeme(e.target)
            })  */
    }) // so this code now looks like this =>

    $('form').on('focus', 'input', () => {
        $(this).val('BAMBOOZLED'); //adds "bamboozled" value to ALL inputs when clicked/focused on, not just the ones there on page load
    })

//ANIMATIONS - extra shit...
//fadeout => fades to transparent
$('img').on('click', () => {
    $(this).fadeOut(() => {
        $(this).remove(); //removes foto after fade runs
    }); //sets display to none
})
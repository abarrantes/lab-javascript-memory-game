var initialDeck = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  
  var theGame = new MemoryGame()
  var gameCards = theGame.shuffleCard(initialDeck.splice(0));

  var html = '';
  gameCards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
    $('#memory_board').html(html);
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function
$('.back').on('click', function () {
  $(this).parent().children().toggle();
  theGame.pickedCards.push($(this).attr('name'));
  console.log(theGame.pickedCards);

  if(theGame.pickedCards.length === 2){
    theGame.pairsClicked= theGame.checkIfPair();
    $('#pairs_clicked').text(theGame.pairsClicked)
    $('#pairs_guessed').text(theGame.pairsGuessed)
    


  }


});

$('.front').on('click', function () {
  $(this).parent().children().toggle();
  
  

  
  // console.log(indexOf(cards($(this).parent())).attr('id'));
  // var x = $(this).parent().attr('id');
  // console.log(x);
  // var y = cards(x);
  //console.log(gameCards.x);

  // gameCards.forEach(function (card) {
  //   console.log(card.name);
  //   console.log($(this).parent().attr('id'));
  //   if (card.name === $(this).parent().attr('id')) {
  //     console.log('funciono')
  //   }
  //   else { console.log('no funciono') }

  //  });

});



});

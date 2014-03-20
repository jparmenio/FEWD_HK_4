
var countMoves = 0

console.log(countMoves);

var kingSelected
var queenSelected

var firstCard = 0
var secondCard = 0
var thirdCard = 0
var fourthCard = 0

$(document).ready(function(){
	shuffleAllCards();

	$('#reset').click(function(){
		shuffleAllCards();
	});


function shuffleAllCards() {
	removeAllCards();
	var cards = ['king', 'king', 'queen', 'queen'];
	shuffle(cards);

	$('.cards').each(function(index){
		$(this).addClass(cards[index]);
	});
}

function removeAllCards(){
	$('.cards').removeClass('king');
	$('.cards').removeClass('queen');
}

function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] - x);
	return o;
};

$('.cards').click(function(){
	$(this).addClass('selected');
	});
$('.cards').click(function(){
	countMoves = countMoves + 1;
	console.log(countMoves);
	})
});
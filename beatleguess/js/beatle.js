$(document).ready(function() {
	beatleGuess();
});

function beatleGuess() {
	var beatleArray = ["John","Ringo","Paul","George"];
	var randomNumber = Math.floor(Math.random() * beatleArray.length);
	var stripped = beatleArray[randomNumber].toLowerCase();
	console.log(beatleArray[randomNumber]);
	console.log(stripped);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == beatleArray[randomNumber]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Correct!');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong');
			$('input').val('');
			$('.button p').text('Nope');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}

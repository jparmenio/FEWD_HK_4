// // Implementation in Code

// // DISPLAY Displayed an image
//   * An array of images
//   * Display the image corresponding to the number in the sequence the user is at

var foodPix = [
  '/images/food1.jpg',
  '/images/food2.jpg',
  '/images/food3.jpg'
]

var currentPosition = 0

function displayImage(position){
  $(‘#image-to-vote-on’).attr(‘src’,foodPix[position])
}

// foodPix.forEach(function(element, index){
  // $('#image-to-vote-on').append('<img src="' + element + '">');
// });

// // LOGIC End the rating series
//   Once the user reaches the last image in the array, end the series (disable the skip button, show the score()
//   // DISPLAY Show the deliciousness score
//   *  Add the scores, divide by total number of images
//   * display score 

// // NAVIGATION Return to a previously visited image
//   * Display the Previous image ()

// // NAVIGATION Skipping the current image
//   * Display the Next image ()

// // RATING Ability to rate the image

// var totalScore = scores.sum()

var scores = [ ]

// function getRating {
  $('#your-vote').change(function(){
    console.log("hello");
    $(this).val()
  })
// }

// function updateRating {
  // scores.push [ ];
  // console.log("scores");
// }


//   * Store the user score in an array with the same index as the image in the images array
//   // NAVIGATION Display the subsequent image on rating
//   * Display Next Image ()

// // RATING Rerate the images
  // * Call the rating function  ()

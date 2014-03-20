

function errorCallback(e) {
  if (e.code == 1) {
    alert('User denied access to their camera');
  } else {
    alert('getUserMedia() not supported in your browser.');
  }
  //e.target.src = 'http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.ogv';
}

(function() {
var video = document.querySelector('#screenshot-stream');
var button = document.querySelector('#screenshot-button');
var canvas = document.querySelector('#screenshot-canvas');
var img = document.querySelector('#screenshot');
var ctx = canvas.getContext('2d');
var localMediaStream = null;

function sizeCanvas() {
  // video.onloadedmetadata not firing in Chrome so we have to hack.
  // See crbug.com/110938.
  setTimeout(function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    img.height = video.videoHeight;
    img.width = video.videoWidth;
  }, 100);
}

function snapshot() {
  ctx.drawImage(video, 0, 0);
  img.src = canvas.toDataURL('image/webp');
}

button.addEventListener('click', function(e) {
  if (localMediaStream) {
    snapshot();
	$('#screenshot-stop-button').fadeIn();
    return;
  }

  if (navigator.getUserMedia) {
    navigator.getUserMedia('video', function(stream) {
      video.src = stream;
      localMediaStream = stream;
      sizeCanvas();
      button.textContent = 'Take Shot';
    }, errorCallback);
  } else if (navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia({video: true}, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      localMediaStream = stream;
      sizeCanvas();
      button.textContent = 'Take Shot';
    }, errorCallback);
  } else {
    errorCallback({target: video});
  }
}, false);

video.addEventListener('click', snapshot, false);

document.querySelector('#screenshot-stop-button').addEventListener('click', function(e) {
  video.pause();
  localMediaStream.stop();
  $('#capturebox').slideUp(500);
  $('#gamebox').slideDown(500);
  bobanka(img.src);// Doesn't do anything in Chrome.
}, false);
})();


function bobanka(src){
	var canvasElem = document.getElementById("game");
	var world = boxbox.createWorld(canvasElem);

	world.createEntity({
	  name: "player",
	  shape: "circle",
	  image: src,
	  imageStretchToFit: true,
	  density: 4,
	  radius: 1,
	  x: 2,
	  onKeyUp: function(e) {
	  	this.applyImpulse(150, 2, 3);
	  }
	});

	world.createEntity({
	  name: "ground",
	  shape: "square",
	  type: "static",
	  color: "rgb(0,100,0)",
	  width: 20,
	  height: .25,
	  y: 10,  
	});

	var block = {
		name: "block",
		shape: "square",
		color: "pink",
		width: .5,
		height: 4,
	};

	world.createEntity(block, {
		x: 15,
		width: 1.3,
		onImpact:crash
	});

	world.createEntity(block, {
		x: 17,
		width: 1.5,
	});

	world.createEntity(block, {
		x: 16,
		width: 3,
		height: .5,
		y: 1,
	});
}

function crash(){
	// console.log("oy")
}
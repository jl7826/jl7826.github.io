var video; //set variable for video

var vScale = 16;

function setup() {
	createCanvas(640, 480);
	pixelDensity(1);
	video = createCapture(VIDEO);//call video capture library
	video.size(width/vScale, height/vScale);//video size
}

function draw() {
	background (50);

	video.loadPixels();
	loadPixels();
	for(var y = 0; y < video.height; y++){
		for(var x = 0; x < video.width; x++){
			var index= (x + y * video.width)*4;
			var r = video.pixels[index+0];
			var g = video.pixels[index+1];
			var b = video.pixels[index+2];

			// r = 255;
			// g = random (255);
			// b = 0;

			var bright = (r+g+b)/3;
			fill(bright);
			ellipse (x*vScale,y*vScale,vScale,vScale);
			// pixels[index+0] = bright;
			// pixels[index+1] = bright;
			// pixels[index+2] = bright;
			// pixels[index+3] = 200;


		}
	}

	// updatePixels();
}

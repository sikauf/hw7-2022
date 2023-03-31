let video = document.getElementById("player1");
let volume = document.getElementById("volume");

video.loop = false;
video.autoplay = false;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")
});

let volumeChanged = false;

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	if(video.currentTime == 0 && !volumeChanged){
		volume.innerHTML = "100%";
	}
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
   video.playbackRate = video.playbackRate * 0.9;
   console.log("Speed is ", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
   video.playbackRate = video.playbackRate / .9;
   console.log("Speed is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if(video.currentTime == video.duration){
		video.currentTime = 0;
		video.pause();
	}
	console.log("Video current time is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		console.log("Mute");
	} else {
		video.muted = false;
		console.log("Unmute");
	}
});


document.querySelector("#slider").addEventListener("change", function() {
	volumeChanged = true;
	console.log("The current value is ", video.volume);
	video.volume = document.querySelector("#slider").value / 100;
	console.log("The current value is ", video.volume);
	volume.innerHTML = document.querySelector("#slider").value + "%"
	console.log(volume);
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
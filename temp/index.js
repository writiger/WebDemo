let music
if(window.HTMLAudioElement){
	music = document.querySelector('#music');
	// 播放按钮
}

music.volume = 0.5
// 播放按钮
let mainControl = document.querySelector("#mainControl");
// 暂停
let stopControl = document.querySelector("#stopControl");

mainControl.addEventListener('click',function(){
	// 播放音乐
	music.play();
	mainControl.style.display='none';
	stopControl.style.display='';
})

stopControl.addEventListener('click',function(){
	// 暂停音乐
	music.pause();
	mainControl.style.display='';
	stopControl.style.display='none';
})

function voiceUp(){
    music.volume += 0.1
}
function voiceDown(){
    music.volume -= 0.1
}

let startController = document.querySelector("#start")
// let audioImg = document.querySelector("#audioImg")
let music
if (window.HTMLAudioElement) {
    music = document.querySelector('#music');
    // 播放按钮
}
let img = $('#audioImg')

music.volume = 0.3

startController.addEventListener('click', function () {
    if (startController.innerText == 'START'){
        startController.innerText = 'STOP'
    }else{
        startController.innerText = 'START'
    }
    if (img.hasClass("pause")) {
        img.toggleClass("pause");
    }
    img.toggleClass("rotating"); //控制音乐图标 自转或暂停


    //控制背景音乐 播放或暂停            
    if (img.hasClass("rotating")) {
        music.play();
    } else {
        img.toggleClass("pause"); //控制音乐图标暂停
        music.pause();
    }
})

function voiceUp(){
    if(music.volume < 0.9)
        music.volume += 0.1
}
function voiceDown(){
    if(music.volume > 0.1)
        music.volume -= 0.1
}
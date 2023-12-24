function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    console.log(name + "=" + (value || "")  + expires + "; path=/")
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
if(getCookie('theme')==null){
    setCookie('theme', '0', 365)
}
console.log(getCookie('theme'))
if(getCookie('theme')=='1'){
    theme = 'black'
    document.getElementById('themeimg').src = '../Images/sun.png';
    document.getElementById('bottominstaimg').src = '../Images/instaw.png'
    document.getElementById('bottomgitimg').src = '../Images/gitw.png'
    revtheme = 'white'
}
else{
    theme = 'white'
    document.getElementById('themeimg').src = '../Images/moon.png'; 
    document.getElementById('bottominstaimg').src = '../Images/instab.png'
    document.getElementById('bottomgitimg').src = '../Images/gitb.png'
    revtheme = 'black'
}
changetheme()
function changetheme(){
    if(theme == 'black'){
        theme = 'white'
        document.getElementById('themeimg').src = '../Images/moon.png'; 
        document.getElementById('bottominstaimg').src = '../Images/instaw.png';
        document.getElementById('bottomgitimg').src = '../Images/gitw.png';
        revtheme = 'black'
        setCookie('theme','1',365)
    }
    else{
        theme = 'black'
        document.getElementById('themeimg').src = '../Images/sun.png';
        
        document.getElementById('bottominstaimg').src = '../Images/instab.png';
        document.getElementById('bottomgitimg').src = '../Images/gitb.png';
        revtheme = 'white'
        setCookie('theme','0',365)
    }
    document.getElementById('nav').style.backgroundColor = theme;
    document.getElementsByTagName('body')[0].style.backgroundColor = theme;
    document.getElementById('nav').style.color = revtheme;
    document.getElementById('nav').style.borderColor = revtheme;
    document.getElementById('menu1').style.color = revtheme;
    document.getElementById('name1').style.color = revtheme;
    document.getElementById('gear').style.color=revtheme;
    document.getElementById('contact').style.color=revtheme;
    document.getElementById('home').style.color=revtheme;
    document.getElementById('feedback').style.color=revtheme;
    document.getElementById('about').style.color=revtheme;
    document.getElementById('bottomname3').style.color= revtheme;
    document.getElementById('w1').style.color= revtheme;
    document.getElementById('w2').style.color= revtheme;
    document.getElementById('w3').style.color= revtheme;
    document.getElementById('w4').style.color= revtheme;
    document.getElementById('w5').style.color= revtheme;
    document.getElementById('w6').style.color= revtheme;
    document.getElementById('w7').style.color= revtheme;
    document.getElementById('w8').style.color= revtheme;
    document.getElementById('w9').style.color= revtheme;
    document.getElementById('w10').style.color= revtheme;
    document.getElementById('w11').style.color= revtheme;
    document.getElementById('w12').style.color= revtheme;
    document.getElementById('w13').style.color= revtheme;
    document.getElementById('w14').style.color= revtheme;
    document.getElementById('w15').style.color= revtheme;
    document.getElementById('w16').style.color= revtheme;

    if(theme == 'white'){
        document.getElementById('bottom').style.backgroundColor = 'rgb(228,228,228)';
    }
    else{
        document.getElementById('bottom').style.backgroundColor = 'rgb(32,32,32)';
    }
}
function fs() {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement)
            return false;
    else
            return true;
}
v1 = document.getElementById('v1')
v2 = document.getElementById('v2')
v3 = document.getElementById('v3')
v4 = document.getElementById('v4')
v5 = document.getElementById('v5')
v6 = document.getElementById('v6')
v7 = document.getElementById('v7')
v8 = document.getElementById('v8')
v9 = document.getElementById('v9')
v10 = document.getElementById('v10')
v11 = document.getElementById('v11')
v12 = document.getElementById('v12')
v13 = document.getElementById('v13')
v14 = document.getElementById('v14')
v15 = document.getElementById('v15')
v16 = document.getElementById('v16')
function pauseall(v){
    if(v != v1){
        v1.pause()
    }
    if(v != v2){
        v2.pause()
    }
    if(v != v3){
        v3.pause()
    }
    if(v != v4){
        v4.pause()
    }
    if(v != v5){
        v5.pause()
    }
    if(v != v6){
        v6.pause()
    }
    if(v != v7){
        v7.pause()
    }
    if(v != v8){
        v8.pause()
    }
    if(v != v9){
        v9.pause()
    }
    if(v != v10){
        v10.pause()
    }
    if(v != v11){
        v11.pause()
    }
    if(v != v12){
        v12.pause()
    }
    if(v != v13){
        v13.pause()
    }
    if(v != v14){
        v14.pause()
    }
    if(v != v15){
        v15.pause()
    }
    if(v != v16){
        v16.pause()
    }

}
v1.addEventListener('click', function () {
    if(fs()){
        if (v1.paused == false) {
            v1.pause();
        } else {
            v1.play();
            pauseall(v1)
        }}
});
v2.addEventListener('click', function () {
    if(fs()){
        if (v2.paused == false) {
            v2.pause();
        } else {
            v2.play();
            pauseall(v2)
        }}
    });
v3.addEventListener('click', function () {
    if(fs()){
        if (v3.paused == false) {
            v3.pause();
        } else {
            v3.play();
            pauseall(v3)
        }}
});
v4.addEventListener('click', function () {
    if(fs()){
        if (v4.paused == false) {
            v4.pause();
        } else {
            v4.play();
            pauseall(v4)
        }}
    });
    v5.addEventListener('click', function () {
        if (v5.paused == false) {
            v5.pause();
    } else {
        v5.play();
            pauseall(v5)
    }
});
v6.addEventListener('click', function () {
    if(fs()){
        if (v6.paused == false) {
            v6.pause();
        } else {
            v6.play();
            pauseall(v6)
        }}
    });
v7.addEventListener('click', function () {
    if(fs()){
        if (v7.paused == false) {
            v7.pause();
        } else {
            v7.play();
            pauseall(v7)
        }}
    });
v8.addEventListener('click', function () {
    if(fs()){
        if (v8.paused == false) {
            v8.pause();
        } else {
            v8.play();
            pauseall(v8)
        }}
    });
    v9.addEventListener('click', function () {
        if(fs()){
        if (v9.paused == false) {
            v9.pause();
        } else {
            v9.play();
            pauseall(v9)
        }}
    });
    v10.addEventListener('click', function () {
        if(fs()){
        if (v10.paused == false) {
            v10.pause();
        } else {
            v10.play();
            pauseall(v10)
        }}
    });
    v11.addEventListener('click', function () {
        if(fs()){
        if (v11.paused == false) {
            v11.pause();
        } else {
            v11.play();
            pauseall(v11)
        }}
    });
    v12.addEventListener('click', function () {
        if(fs()){
        if (v12.paused == false) {
            v12.pause();
        } else {
            v12.play();
            pauseall(v12)
        }}
    });
    v13.addEventListener('click', function () {
        if(fs()){
        if (v13.paused == false) {
            v13.pause();
        } else {
            v13.play();
            pauseall(v13)
        }}
    });
    v14.addEventListener('click', function () {
        if(fs()){
        if (v14.paused == false) {
            v14.pause();
        } else {
            v14.play();
            pauseall(v14)
        }}
    });
    v15.addEventListener('click', function () {
        if(fs()){
        if (v15.paused == false) {
            v15.pause();
        } else {
            v15.play();
            pauseall(v15)
        }}
    });
    v16.addEventListener('click', function () {
        if(fs()){
        if (v16.paused == false) {
            v16.pause();
        } else {
            v16.play();
            pauseall(v16)
        }}
    });
function w1(){
    var elem = document.getElementById("v1");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w2(){
    var elem = document.getElementById("v2");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w3(){
    var elem = document.getElementById("v3");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w4(){
    var elem = document.getElementById("v4");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w5(){
    var elem = document.getElementById("v5");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w6(){
    var elem = document.getElementById("v6");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w7(){
    var elem = document.getElementById("v7");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w8(){
    var elem = document.getElementById("v8");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w9(){
    var elem = document.getElementById("v9");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w10(){
    var elem = document.getElementById("v10");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w11(){
    var elem = document.getElementById("v11");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w12(){
    var elem = document.getElementById("v12");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w13(){
    var elem = document.getElementById("v13");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w14(){
    var elem = document.getElementById("v14");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w15(){
    var elem = document.getElementById("v15");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w16(){
    var elem = document.getElementById("v16");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
//ahead of top
function donothing(){}
a = document.getElementById('name2')
a.innerHTML = ''
c = 'JS Programmer'
d=0
e = 0
// alert(c.slice(0,12))
function text(){
    if(d<c.length && e == 0){
        d++
        a.innerHTML = c.slice(0,d)
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); }
    }
    else if(e == 0){
        e = 1
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 1){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==1){
        e = 2
        c = 'C Programmer'
    }
    if(d<c.length && e == 2){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==2){
        e = 3
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 3){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==3){
        e = 4
        c = 'HTML Programmer'
    }
    if(d<c.length && e == 4){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==4){
        e = 5
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 5){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==5){
        e = 6
        c = 'Python Programmer'
    }
    if(d<c.length && e == 6){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==6){
        e = 7
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 7){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==7){
        e = 8
        c = 'Java Programmer'
    }
    if(d<c.length && e == 8){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==8){
        e = 9
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 9){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==9){
        e = 0
        c = 'JS Programmer'
    }
}
setInterval(text, 25)
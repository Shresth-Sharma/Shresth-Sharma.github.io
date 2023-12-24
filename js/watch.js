function getRandomInt(min, max) {
  min = Math.ceil(min); // Round up to ensure it's inclusive
  max = Math.floor(max); // Round down to ensure it's inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
function changecolor(){
  setCookie('color', getRandomInt(0,2), 7)
  setcolor();
}
if(getCookie('color') == null){
  setCookie('color', getRandomInt(0,2), 7)
}
if(getCookie('theme')==null){
  setCookie('theme', '0', 365)
}
color = getCookie('color')
if(getCookie('theme')=='1'){
  theme = 'black'
  if(color == 0){
      document.getElementById('themechangebtimg').src = '../Images/sun.png';
  }
  else if(color == 1){
      document.getElementById('themechangebtimg').src = '../Images/sun1.png';
  }
  else{
      document.getElementById('themechangebtimg').src = '../Images/sun2.png';
  }

  document.getElementById('bottominstaimg').src = '../Images/instaw.png';
  document.getElementById('bottomgitimg').src = '../Images/gitw.png';
  revtheme = 'white'
}
else{
  theme = 'white'
  document.getElementById('themechangebtimg').src = '../Images/moon.png'; 
  
  document.getElementById('bottominstaimg').src = '../Images/instab.png';
  document.getElementById('bottomgitimg').src = '../Images/gitb.png';
  revtheme = 'black'
}
function setcolor(){
  console.log(getCookie('color'))
  if(getCookie('color') == 0){
      color = 'blueviolet'
      document.getElementById('name').style.color = color;
      document.querySelector('.navbt').style.color = color;
      document.getElementById('mygear').style.textDecorationColor = color;
      document.getElementById('about').style.textDecorationColor = color;
      document.getElementById('feedback').style.textDecorationColor = color;
      document.getElementById('home').style.textDecorationColor = color;
      document.getElementById('contact').style.textDecorationColor = color;
      document.getElementById('between1').style.color = color;
      document.getElementById('between3').style.color = color;
      document.getElementById('bottomname').style.color = color;
      document.getElementsByClassName('bt')[0].style.backgroundColor = color;
      document.getElementsByClassName('bt')[1].style.backgroundColor = color;
      document.getElementsByClassName('bt')[2].style.backgroundColor = color;
      document.getElementsByClassName('bt')[3].style.backgroundColor = color;
      document.getElementsByClassName('bt')[4].style.backgroundColor = color;
      document.getElementsByClassName('bt')[5].style.backgroundColor = color;
      document.getElementsByClassName('bt')[6].style.backgroundColor = color;
      document.getElementsByClassName('bt')[7].style.backgroundColor = color;
      document.getElementsByClassName('bt')[8].style.backgroundColor = color;
      document.getElementsByClassName('bt')[9].style.backgroundColor = color;
      document.getElementsByClassName('bt')[10].style.backgroundColor = color;
      document.getElementsByClassName('bt')[11].style.backgroundColor = color;
      document.getElementsByClassName('bt')[12].style.backgroundColor = color;
      document.getElementsByClassName('bt')[13].style.backgroundColor = color;
      document.getElementsByClassName('bt')[14].style.backgroundColor = color;
      document.getElementsByClassName('bt')[15].style.backgroundColor = color;
      document.getElementsByClassName('div')[0].style.borderColor = color;
      document.getElementsByClassName('div')[1].style.borderColor = color;
      document.getElementsByClassName('div')[2].style.borderColor = color;
      document.getElementsByClassName('div')[3].style.borderColor = color;
      document.getElementsByClassName('div')[4].style.borderColor = color;
      document.getElementsByClassName('div')[5].style.borderColor = color;
      document.getElementsByClassName('div')[6].style.borderColor = color;
      document.getElementsByClassName('div')[7].style.borderColor = color;
      document.getElementsByClassName('div')[8].style.borderColor = color;
      document.getElementsByClassName('div')[9].style.borderColor = color;
      document.getElementsByClassName('div')[10].style.borderColor = color;
      document.getElementsByClassName('div')[11].style.borderColor = color;
      document.getElementsByClassName('div')[12].style.borderColor = color;
      document.getElementsByClassName('div')[13].style.borderColor = color;
      document.getElementsByClassName('div')[14].style.borderColor = color;
      document.getElementsByClassName('div')[15].style.borderColor = color;
      document.getElementsByClassName('div')[16].style.borderColor = color;
      document.getElementsByClassName('div')[17].style.borderColor = color;
      document.getElementsByClassName('div')[18].style.borderColor = color;
      if(theme == 'black'){
          document.getElementById('themechangebtimg').src='../Images/sun.png'
      }
  }
  else if(getCookie('color') == 1){
      color = 'rgb(255,153,51)'
      document.getElementById('name').style.color = color;
      document.querySelector('.navbt').style.color = color;
      document.getElementById('mygear').style.textDecorationColor = color;
      document.getElementById('about').style.textDecorationColor = color;
      document.getElementById('feedback').style.textDecorationColor = color;
      document.getElementById('home').style.textDecorationColor = color;
      document.getElementById('contact').style.textDecorationColor = color;
      document.getElementById('between1').style.color = color;
      document.getElementById('between3').style.color = color;
      document.getElementById('bottomname').style.color = color;
      document.getElementsByClassName('bt')[0].style.backgroundColor = color;
      document.getElementsByClassName('bt')[1].style.backgroundColor = color;
      document.getElementsByClassName('bt')[2].style.backgroundColor = color;
      document.getElementsByClassName('bt')[3].style.backgroundColor = color;
      document.getElementsByClassName('bt')[4].style.backgroundColor = color;
      document.getElementsByClassName('bt')[5].style.backgroundColor = color;
      document.getElementsByClassName('bt')[6].style.backgroundColor = color;
      document.getElementsByClassName('bt')[7].style.backgroundColor = color;
      document.getElementsByClassName('bt')[8].style.backgroundColor = color;
      document.getElementsByClassName('bt')[9].style.backgroundColor = color;
      document.getElementsByClassName('bt')[10].style.backgroundColor = color;
      document.getElementsByClassName('bt')[11].style.backgroundColor = color;
      document.getElementsByClassName('bt')[12].style.backgroundColor = color;
      document.getElementsByClassName('bt')[13].style.backgroundColor = color;
      document.getElementsByClassName('bt')[14].style.backgroundColor = color;
      document.getElementsByClassName('bt')[15].style.backgroundColor = color;
      document.getElementsByClassName('div')[0].style.borderColor = color;
      document.getElementsByClassName('div')[1].style.borderColor = color;
      document.getElementsByClassName('div')[2].style.borderColor = color;
      document.getElementsByClassName('div')[3].style.borderColor = color;
      document.getElementsByClassName('div')[4].style.borderColor = color;
      document.getElementsByClassName('div')[5].style.borderColor = color;
      document.getElementsByClassName('div')[6].style.borderColor = color;
      document.getElementsByClassName('div')[7].style.borderColor = color;
      document.getElementsByClassName('div')[8].style.borderColor = color;
      document.getElementsByClassName('div')[9].style.borderColor = color;
      document.getElementsByClassName('div')[10].style.borderColor = color;
      document.getElementsByClassName('div')[11].style.borderColor = color;
      document.getElementsByClassName('div')[12].style.borderColor = color;
      document.getElementsByClassName('div')[13].style.borderColor = color;
      document.getElementsByClassName('div')[14].style.borderColor = color;
      document.getElementsByClassName('div')[15].style.borderColor = color;
      document.getElementsByClassName('div')[16].style.borderColor = color;
      document.getElementsByClassName('div')[17].style.borderColor = color;
      document.getElementsByClassName('div')[18].style.borderColor = color;
      if(theme == 'black'){
          document.getElementById('themechangebtimg').src='../Images/sun1.png'
      }
  }
  else{
      color = 'rgb(0,153,0)'
      document.getElementById('name').style.color = color;
      document.querySelector('.navbt').style.color = color;
      document.getElementById('mygear').style.textDecorationColor = color;
      document.getElementById('about').style.textDecorationColor = color;
      document.getElementById('feedback').style.textDecorationColor = color;
      document.getElementById('home').style.textDecorationColor = color;
      document.getElementById('contact').style.textDecorationColor = color;
      document.getElementById('between1').style.color = color;
      document.getElementById('between3').style.color = color;
      document.getElementById('bottomname').style.color = color;
      document.getElementsByClassName('bt')[0].style.backgroundColor = color;
      document.getElementsByClassName('bt')[1].style.backgroundColor = color;
      document.getElementsByClassName('bt')[2].style.backgroundColor = color;
      document.getElementsByClassName('bt')[3].style.backgroundColor = color;
      document.getElementsByClassName('bt')[4].style.backgroundColor = color;
      document.getElementsByClassName('bt')[5].style.backgroundColor = color;
      document.getElementsByClassName('bt')[6].style.backgroundColor = color;
      document.getElementsByClassName('bt')[7].style.backgroundColor = color;
      document.getElementsByClassName('bt')[8].style.backgroundColor = color;
      document.getElementsByClassName('bt')[9].style.backgroundColor = color;
      document.getElementsByClassName('bt')[10].style.backgroundColor = color;
      document.getElementsByClassName('bt')[11].style.backgroundColor = color;
      document.getElementsByClassName('bt')[12].style.backgroundColor = color;
      document.getElementsByClassName('bt')[13].style.backgroundColor = color;
      document.getElementsByClassName('bt')[14].style.backgroundColor = color;
      document.getElementsByClassName('bt')[15].style.backgroundColor = color;
      document.getElementsByClassName('div')[0].style.borderColor = color;
      document.getElementsByClassName('div')[1].style.borderColor = color;
      document.getElementsByClassName('div')[2].style.borderColor = color;
      document.getElementsByClassName('div')[3].style.borderColor = color;
      document.getElementsByClassName('div')[4].style.borderColor = color;
      document.getElementsByClassName('div')[5].style.borderColor = color;
      document.getElementsByClassName('div')[6].style.borderColor = color;
      document.getElementsByClassName('div')[7].style.borderColor = color;
      document.getElementsByClassName('div')[8].style.borderColor = color;
      document.getElementsByClassName('div')[9].style.borderColor = color;
      document.getElementsByClassName('div')[10].style.borderColor = color;
      document.getElementsByClassName('div')[11].style.borderColor = color;
      document.getElementsByClassName('div')[12].style.borderColor = color;
      document.getElementsByClassName('div')[13].style.borderColor = color;
      document.getElementsByClassName('div')[14].style.borderColor = color;
      document.getElementsByClassName('div')[15].style.borderColor = color;
      document.getElementsByClassName('div')[16].style.borderColor = color;
      document.getElementsByClassName('div')[17].style.borderColor = color;
      document.getElementsByClassName('div')[18].style.borderColor = color;
      if(theme == 'black'){
          document.getElementById('themechangebtimg').src='../Images/sun2.png'
      }
  }
}
setcolor();
if(getCookie('theme')=='1'){
  theme = 'black'
  if(color == 0){
      document.getElementById('themechangebtimg').src = '../Images/sun.png';
  }
  else if(color == 1){
      document.getElementById('themechangebtimg').src = '../Images/sun1.png';
  }
  else{
      document.getElementById('themechangebtimg').src = '../Images/sun2.png';
  }

  document.getElementById('bottominstaimg').src = '../Images/instaw.png';
  document.getElementById('bottomgitimg').src = '../Images/gitw.png';
  revtheme = 'white'
}
console.log(getCookie('theme'))
// changecolor()

changetheme()
function changetheme(){
  if(theme == 'black'){
      theme = 'white'
      document.getElementById('themechangebtimg').src = '../Images/moon.png'; 
     
      document.getElementById('bottominstaimg').src = '../Images/instaw.png';
      document.getElementById('bottomgitimg').src = '../Images/gitw.png';
      revtheme = 'black'
      setCookie('theme','1',365)
  }
  else{
      theme = 'black'
      if(color == 0){
          document.getElementById('themechangebtimg').src = '../Images/sun.png';
      }
      else if(color == 1){
          document.getElementById('themechangebtimg').src = '../Images/sun1.png';
      }
      else{
          document.getElementById('themechangebtimg').src = '../Images/sun2.png';
      }
      
      document.getElementById('bottominstaimg').src = '../Images/instab.png';
      document.getElementById('bottomgitimg').src = '../Images/gitb.png';
      revtheme = 'white'
      setCookie('theme','0',365)
  }
    document.getElementById('nav').style.backgroundColor = theme;
    document.getElementsByTagName('body')[0].style.backgroundColor = theme;
    document.getElementById('nav').style.color = revtheme;
    document.getElementById('nav').style.borderColor = revtheme;
    // document.getElementById('signinbt').style.color = revtheme;
    document.getElementById('mygear').style.color=revtheme;
    document.getElementById('contact').style.color=revtheme;
    document.getElementById('home').style.color=revtheme;
    document.getElementById('feedback').style.color=revtheme;
    document.getElementById('about').style.color=revtheme;
    document.getElementById('between2').style.color= revtheme;
    document.getElementById('between2').style.color= revtheme;
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
    document.getElementById('w17').style.color= revtheme;
    document.getElementById('w18').style.color= revtheme;
    document.getElementById('w19').style.color= revtheme;

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
v17 = document.getElementById('v17')
v18 = document.getElementById('v18')
v19 = document.getElementById('v19')
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
    if(v != v17){
        v17.pause()
    }
    if(v != v18){
        v18.pause()
    }
    if(v != v19){
        v19.pause()
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
    v17.addEventListener('click', function () {
        if(fs()){
        if (v17.paused == false) {
            v17.pause();
        } else {
            v17.play();
            pauseall(v17)
        }}
    });
    v18.addEventListener('click', function () {
        if(fs()){
        if (v18.paused == false) {
            v18.pause();
        } else {
            v18.play();
            pauseall(v18)
        }}
    });
    v19.addEventListener('click', function () {
        if(fs()){
        if (v19.paused == false) {
            v19.pause();
        } else {
            v19.play();
            pauseall(v19)
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
function w17(){
    var elem = document.getElementById("v17");
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
function w18(){
    var elem = document.getElementById("v18");
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
function w19(){
    var elem = document.getElementById("v19");
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
a = document.getElementById('between3')
a.innerHTML = ''
c = 'Solve Physics Equations'
d=0
e = 0
// alert(c.slice(0,12))
setcolor();
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
        c = 'Solve Maths Equations'
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
        c = 'Play Interesting Games'
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
        c = 'Check Typing Speed'
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
        c = 'Enjoy My Edits'
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
        c = 'Solve Physics Equations'
    }
}
setInterval(text, 25)
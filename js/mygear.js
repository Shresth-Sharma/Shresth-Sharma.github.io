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
    document.getElementById('pc1').style.color= revtheme;
    document.getElementById('phone1').style.color= revtheme;
    document.getElementById('keyboard1').style.color= revtheme;
    document.getElementById('cpu1').style.color= revtheme;
    document.getElementById('ram1').style.color= revtheme;
    document.getElementById('graphic1').style.color= revtheme;
    document.getElementById('mouse1').style.color= revtheme;
    document.getElementById('ssd1').style.color= revtheme;
    document.getElementById('sys1').style.color= revtheme;

    if(theme == 'white'){
        document.getElementById('bottom').style.backgroundColor = 'rgb(228,228,228)';
    }
    else{
        document.getElementById('bottom').style.backgroundColor = 'rgb(32,32,32)';
    }
}
//ahead of top
function donothing(){}
a = document.getElementById('between3')
a.innerHTML = ''
c = 'JS Programmer'
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
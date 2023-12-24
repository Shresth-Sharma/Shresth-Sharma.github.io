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
    document.getElementById('angrydes').style.color= revtheme;
    document.getElementById('msdes').style.color= revtheme;
    document.getElementById('ticdes').style.color= revtheme;
    document.getElementById('truthdes').style.color= revtheme;
    document.getElementById('lvl1').style.color= revtheme;
    document.getElementById('lvl2').style.color= revtheme;
    document.getElementById('lvl3').style.color= revtheme;
    document.getElementById('lvl4').style.color= revtheme;
    document.getElementById('msbt').style.color= revtheme;
    document.getElementById('ticbt').style.color= revtheme;
    document.getElementById('truthbt').style.color= revtheme;

    if(theme == 'white'){
        document.getElementById('bottom').style.backgroundColor = 'rgb(228,228,228)';
    }
    else{
        document.getElementById('bottom').style.backgroundColor = 'rgb(32,32,32)';
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
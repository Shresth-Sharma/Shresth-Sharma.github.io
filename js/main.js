let width = window.innerWidth;
let height = window.innerHeight;

if (width / height < 1) {
  // Your code here to execute if width divided by height is less than 1
//   console.log("Width is less than height");
//   alert('h1')
document.getElementById('cssfile').href = 'css/main1.css';
}



function donothing(){}
a = document.getElementById('thirdtext')
a.innerHTML = ''
c = 'Thesis Writing'
d=0
e = 0
// alert(c.slice(0,12))
// setcolor();
function text(){
    if(d<c.length && e == 0){
        d++
        a.innerHTML = c.slice(0,d)+'|'
        let now = Date.now(),
        end = now + 50;
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
        a.innerHTML = c.slice(0,d)+'|'
    }
    else if(e==1){
        e = 2
        c = 'Binding'
    }
    if(d<c.length && e == 2){
        d++
        a.innerHTML = c.slice(0,d)+'|' 
        let now = Date.now(),
        end = now + 50;
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
        a.innerHTML = c.slice(0,d)+'|'
    }
    else if(e==3){
        e = 4
        c = 'Colour Printing'
    }
    if(d<c.length && e == 4){
        d++
        a.innerHTML = c.slice(0,d)+'|'
        let now = Date.now(),
        end = now + 50;
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
        a.innerHTML = c.slice(0,d)+'|'
    }
    else if(e==5){
        e = 6
        c = 'Unicode Typing'
    }
    if(d<c.length && e == 6){
        d++
        a.innerHTML = c.slice(0,d)+'|'
        let now = Date.now(),
        end = now + 50;
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
        a.innerHTML = c.slice(0,d)+'|'
    }
    else if(e==7){
        e = 8
        c = 'Lamination'
    }
    if(d<c.length && e == 8){
        d++
        a.innerHTML = c.slice(0,d)+'|' 
        let now = Date.now(),
        end = now + 50;
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
        a.innerHTML = c.slice(0,d) + '|'
    }
    else if(e==9){
        e = 0
        c = 'Thesis Writing'
    }
}
setInterval(text, 20)
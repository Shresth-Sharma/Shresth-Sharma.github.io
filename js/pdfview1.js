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
    // document.getElementById('name1').style.color = revtheme;
    document.getElementById('gear').style.color=revtheme;
    document.getElementById('contact').style.color=revtheme;
    document.getElementById('home').style.color=revtheme;
    document.getElementById('feedback').style.color=revtheme;
    document.getElementById('about').style.color=revtheme;
    document.getElementById('bottomname3').style.color= revtheme;
    // document.getElementById('between2').style.color= revtheme;
    // document.getElementById('maintext').style.color= revtheme;

    if(theme == 'white'){
        document.getElementById('bottom').style.backgroundColor = 'rgb(228,228,228)';
    }
    else{
        document.getElementById('bottom').style.backgroundColor = 'rgb(32,32,32)';
    }
}
//ahead of top
function getPDFFileName() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('pdf'); // The query parameter should be ?pdf=yourfile.pdf
}

const pdfFile = '/pdfs/'+getPDFFileName()+'.pdf';

if (pdfFile) {
    const url = pdfFile;
    const pdfContainer = document.getElementById('pdf-container');

    // Load the PDF document
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc) {
        const totalPages = pdfDoc.numPages;

        // Function to render a specific page
        function renderPage(pageNumber) {
            pdfDoc.getPage(pageNumber).then(function(page) {
                const viewport = page.getViewport({ scale: 1.5 });

                // Create a canvas element for each page
                const canvas = document.createElement('canvas');
                canvas.classList.add('pdf-page');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Append the canvas to the container
                pdfContainer.appendChild(canvas);

                // Render the page on the canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        }

        // Loop through all pages and render them
        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
            renderPage(pageNumber);
        }
    });
} else {
    document.body.innerHTML = '<h2>No PDF file specified in the URL.</h2>';
}
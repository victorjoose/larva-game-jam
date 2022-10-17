const text_ =[
"Ola eu sou ferdinando",
"Tudo bem?",
"Venho aqui para informar que voce nao",
"eh um ROBO !",
""
]

const elementText = document.getElementById("text")

const removeAllClassName = (el, input, classe) => {
    const elems = el.querySelectorAll(input);
    [].forEach.call(elems, function(e) {
        e.className = e.className.replace(classe, "");
    });
}

const createParagraph = (el) =>{
    const p = document.createElement('p')    
    if(el){
        el.appendChild(p)
        let ps = el.querySelectorAll('p')        
        return ps[ps.length -1 ] 
    }
    return p
}


let worlds = []
var pElement = createParagraph(elementText)
const frameLooper = () => {    
    // removeAllClassName(element, '.type', 'type')
    worlds = (worlds.length == 0 && text_.length > 0) 
        ? text_.shift().split("") 
        : worlds

    const letter = worlds.shift()
    !letter ? '' : pElement.innerHTML += letter 
    //!letter ? console.log("pulou") : element.innerHTML += letter 

	if (worlds.length == 0 && text_.length == 0) {
        pElement.innerHTML += ' <span class="cursor_console">|</span>' 
        console.log("completed");
        return
	}

    if( worlds.length == 0 ){
        pElement = createParagraph(elementText)
        console.log("pulou")
    }

    setTimeout('frameLooper()',100);
}

//frameLooper();
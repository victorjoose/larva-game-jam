let text_ = []
let elementText = document.getElementById("text")
let prox = -1

const removeAllClassName = (el, input, classe) => {
    const elems = el.querySelectorAll(input);
    [].forEach.call(elems, function(e) {
        e.className = e.className.replace(classe, "");
    });
}

const createParagraph = (el) =>{
    const p = document.createElement('div') 
    p.classList.add('parag')   
    if(el){
        el.appendChild(p)
        let ps = el.querySelectorAll('div')        
        return ps[ps.length -1 ] 
    }
    return p
}


let worlds_ = []
var pElement = createParagraph(elementText)
const frameLooper = () => {    
    // removeAllClassName(element, '.type', 'type')
    worlds_ = (worlds_.length == 0 && text_.length > 0) 
        ? text_.shift().split("") 
        : worlds_

    const letter = worlds_.shift()
    !letter ? '' : pElement.innerHTML += letter 
    //!letter ? console.log("pulou") : element.innerHTML += letter 

	if (worlds_.length == 0 && text_.length == 0) {
        pElement.innerHTML += ' <span class="cursor_console">|</span>'         
        proxPages()
        return
	}

    if( worlds_.length == 0 ){
        pElement = createParagraph(elementText)
        //console.log("pulou")
    }

    setTimeout('frameLooper()',100);
}


const firstPage = () => {
    text_ = [
        "Ano: 2155",
        "Lugar: America do Sul", 
    ]
    
    
    frameLooper();
}


const secondPage = () => {
    text_ = [
        "Sistema de Extincao dos Humanos",
    ]
    // elementText = document.getElementById("text2")
    
    frameLooper();
}


const thirdPage = () => {
    text_ = [
        "Atualmente eh quase impossivel",
        "diferenciar um robo de um humano. . .",
        "Para acessar o sistema voce deve provar que eh um robo",
        "E so existe um jeito de saber se voce eh um robo . . .",
    ]
    // elementText = document.getElementById("text3")
    
    frameLooper();
}

const fourthPage = () => {
    text_ = [
        "Encontre o gato nas imagens a seguir . . .",
    ]
    // elementText = document.getElementById("text4")
    
    frameLooper();
}

const proxPages = () => {
    prox++
    elementText.innerHTML = ""    
    pElement = createParagraph(elementText)
    return (prox == 0) 
            ? firstPage()
            : (prox == 1)
            ? secondPage() 
            : (prox == 2)
            ? thirdPage()
            : (prox == 3)
            ? fourthPage()
            : ''
}

proxPages()

window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        // Do something for "down arrow" key press.
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        // Do something for "up arrow" key press.
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        // Do something for "right arrow" key press.
        break;
      case "Enter":
        console.log('enter')
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        // Do something for "esc" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

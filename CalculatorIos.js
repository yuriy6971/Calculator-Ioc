window.addEventListener("DOMContentLoaded", (e) => {
    const calc = document.getElementById("button-calc");
    let screenElem = document.getElementById("screen");

    calc.addEventListener("click",displayContent);

    function displayContent(event){
        let targElement = event.target;

        if (targElement.classList.contains("plusminus")){
           screenElem.innerHTML = "-";
        }
        if(targElement.classList.contains("percent")){
           screenElem.innerHTML  = "Кнопка на ремонте!"
           setTimeout(hiddenMessage,2500);
        }
        if(!targElement.classList.contains("egualy") && !targElement.classList.contains("plusminus") && !targElement.classList.contains("percent")){
            let dispElement = targElement.innerHTML;
            screenElem.innerHTML += dispElement;
        }

        if(targElement.classList.contains("egualy")){
            screenElem.innerHTML = eval(screenElem.innerHTML);
        }

        if(targElement.classList.contains("discharge")){
            screenElem.innerHTML = "";
        }
    }
          
   
   function hiddenMessage(){
       document.getElementById("screen").innerHTML = "";
   }

        
 }, false);
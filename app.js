const displayKey = document.querySelector('.keys h2'); //KEY THAT IS SHOWN
const displayKeyCode = document.querySelector('.keyCode h2'); //NUMBER THAT IS SHOWN
const keyCodeDiv = document.querySelector('.keyCode');//KEY CODE BOX


/*KEY CODE GENERATOR*/
window.addEventListener('keydown',(event)=>{
    displayKey.innerText = event.key;
    displayKeyCode.innerText = event.keyCode;
    if (event.keyCode === 32){
        displayKey.innerText = 'space'
    }
})



/*COPYING TO CLIPBOARD*/ 
keyCodeDiv.addEventListener('click',(event)=>{
    const textArea = document.createElement('textarea');
    textArea.value = keyCodeDiv.querySelector('h2').innerText;
    if(navigator.clipboard){
        navigator.clipboard.writeText(displayKeyCode.innerText).then(()=> {
            alert('copied to clipboard')
        })
    }else{
        console.log('Browser Not Compatible')
    }
})



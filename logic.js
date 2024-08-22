const btn = document.querySelector(".buttons");
const btnCopiar = document.querySelector(".copiar");
const inputContent = document.querySelector("#textContent");
const resultContent = document.querySelector(".secondContainer p")
const add = document.querySelector(".add");

function encriptar(inputText){
    let resultText="";
    
    for(letter of inputText){
        if (letter==="a") letter+="i";
        if (letter==="e") letter+="nter";
        if (letter==="i") letter+="mes";
        if (letter==="o") letter+="ber";
        if (letter==="u") letter+="fat";
        resultText+=letter;
    }
    resultContent.textContent=resultText;
    btnCopiar.style.display="block";
};

function desencriptar(inputText){
    let resultText="";

    for (let i = 0; i < inputText.length; i++) {       
        resultText+=inputText[i];

        if(inputText[i]==="a")
            i++;
        else if(inputText[i]==="e") 
            i=i+4;
        else if(inputText[i]==="i") 
            i=i+3;
        else if(inputText[i]==="o") 
            i=i+3;
        else if(inputText[i]==="u") 
            i=i+3;
    }
    resultContent.textContent=resultText;
    btnCopiar.style.display="block";
}

function validarCadena(cadena){
    const expreRegular=/[ÁÉÍÓÚáéíóúA-Z]/;
    if(expreRegular.test(cadena)){
        add.style.color="red";
        add.style.transform="scale(1.2)";
        add.style.textAlign="center";
        return false;
    }else{
        add.style.color="#495057";
        add.style.transform="scale(1)";
        add.style.textAlign="left";
        return true;
    }
}

btn.addEventListener("click",(e)=>{
    let inputText=inputContent.value;
    
    if(e.target.classList.contains("btn")){
        if(inputText===""){
            resultContent.innerHTML='<img src="./img/Muñeco.png" alt="muñeco"><br><strong>Ningún mensaje fue encontrado</strong><br><br> Ingrese el texto que desee encriptar o desencriptar';
            btnCopiar.style.display="none"
        }else if(validarCadena(inputText)){
            if(e.target.classList.contains("enc"))
                encriptar(inputText);
            else if(e.target.classList.contains("desenc"))
                desencriptar(inputText);
        }
    }
})

btnCopiar.addEventListener("click", ()=>{
    navigator.clipboard.writeText(resultContent.textContent);
})

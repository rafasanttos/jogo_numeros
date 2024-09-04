const valorInput = document.getElementById('input-valor');
const btnApostar = document.getElementById('btn-apostar');
const btnJogarNovamente = document.getElementById('btn-jnovamente');
const saidaErros = document.getElementById('saida-erros');
const outDicas = document.getElementById('outDicas');
const respChances = document.getElementById('saida-chances');

const erro = [];

const sorteado = Math.floor(Math.random()*100+1);

const chances = 6;


btnApostar.addEventListener('click',()=>{
    const valordoInput = Number(valorInput.value);
    if(valordoInput==sorteado){
        outDicas.innerText=`Parabéns, você acertou, o número sorteado foi (${sorteado})`
        let z= document.getElementById('myaudio3');
        z.play();
        outDicas.style.color="green"
        btnApostar.disabled=true;
        btnJogarNovamente.className="exibir"

    }else{
        if(erro.includes(valordoInput)){
            alert(`Você já digitou o número (${valordoInput}) digite outro...`)
        }else{
            erro.push(valordoInput);
            const numErros = erro.length;
            const numChances = chances-numErros;
            saidaErros.innerText=`${numErros} (${erro.join(",")})`;
            respChances.innerText=`${numChances}`;
            let y = document.getElementById('myaudio2')
            y.play();
        
            if(numChances==0){
                alert("Acabaram suas chances...")
                btnApostar.disabled=true;
                btnJogarNovamente.className="exibir";
                outDicas.innerText=`Poxa,mais sorte da próxima! Número sorteado: (${sorteado})`
                outDicas.style.color="red"
                let x = document.getElementById('myaudio');
                x.play();
            }else{
                const dica = valordoInput<sorteado?"Maior":"Menor"
                outDicas.innerText=`Dica: Tente um número ${dica} que ${valordoInput}`
            }
        
        }
    }
    valorInput.value="";
    valorInput.focus();
});

btnJogarNovamente.addEventListener("click",()=>{
    location.reload()
})
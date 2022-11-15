/*

1 - criar evento de envio
    1.1 - esse evento vai pegar o valor digitado e criar nova li
        1.1.1 - valor digitado !== de '' string vazia
    1.1 - li deve conter checkBox
*/

const botao = document.querySelector('#add'); 

// evento para adicionar item 

botao.addEventListener('click', function(){

    

    const conteudo = document.querySelector('#tarefa');

    if(conteudo.value !== ''){
        const item = document.querySelector('#lista>div').cloneNode(true); 
    item.style.display = 'block'
    item.lastChild.textContent = conteudo.value ;
   

    document.querySelector('#lista').append(item)


    conteudo.value = ''
    }
    

}); 

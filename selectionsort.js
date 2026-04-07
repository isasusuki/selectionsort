function selectionSort (arr) { //define a função que recebe um array arr como parametro.
    for (let i=0 < arr.length; i++;){ //este e um loop externo.ele percorre todo o array.
        //a variavel i representa a posiçao atual que estamos tentando preencher o valor correto.
        //o menor valor restante.
       let min=i; //aqui,assumimos temporariamente que o menor valor que resta array esta na posiçao i.
       // guardamos esse indice variavel min.
       for(let j=i+1; j < arr.length; j++){
         // este e um lopp interno. ele começa com i+1 (a proxima posiçao)
        //e vai ate o final do array pra procurar se existe um numero ainda menor que esta em arr[min].
        if (arr [j] < arr [min] ) min=j; // se encotrarmos um valor na posiçao j que seja menor.
        //que o valor na posiçao min, atualizamos o mi pra que seja o novo indice j.
        // atençao: aqui guardamos a posiçao do menor numero, ainda nao trocamos nada.
       }//fim do loop interno.agora temos certeza de que o min e indice de menor numero,ainda nao trocamos nada.
       [arr[i],arr[min] = arr[min],arr[i]];//esta linha usa destructuring assignment pra trocar.
       //os valores do lugar.o valor estava em arr[i] vai a arr[min] e vice-versa.
       //e o mometo que o menor valor encontrado vai pro inincio da parte nao ordenada.
    } // fim do loop externo.repetimos o processo para a proxima posiçao i.
return arr; // apos organizar todosos elementos, a funçao retorna o array agora ordenado.

}
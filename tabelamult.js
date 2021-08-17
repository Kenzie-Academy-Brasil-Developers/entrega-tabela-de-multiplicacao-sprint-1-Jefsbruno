function tabelaMulti(n=10) {

    let meuArray = []


    for (let l = 0; l <= n; l++) {
        meuArray.push([])

        for (let c = 0; c <= n; c++) {
            meuArray[l].push(l * c)
        }
    }

    console.table(meuArray)
   return meuArray
}








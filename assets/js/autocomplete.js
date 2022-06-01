function autoComplete(cidade) {

const destino = ['São Paulo'];
     return destino.filter((valor) => {
                const valorMinusculo = valor.toLowerCase()
                const cidadeMinusculo = cidade.toLowerCase()

                return valorMinusculo.includes(cidadeMinusculo)
          })
   }
  const campo = document.querySelector('.cidade')
  const sugestoes = document.querySelector('.sugestoes')

  campo.addEventListener('input', ({ target }) => {
      const dadosDoCampo = target.value
      if(dadosDoCampo.length) {
         const autoCompleteValores = autoComplete(dadosDoCampo)
         sugestoes.innerHTML = `
            ${autoCompleteValores.map((value) => {
                return (
                   `<li>${value}</li>`
                        )
             }).join('')}
           `
       }
})


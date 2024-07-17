const abreCarrinho = document.getElementById('carrinho')
    abreCarrinho.addEventListener('click',function(){
        if(abreCarrinho){
            setTimeout(function(){
                const carrinhoDeCompras = document.getElementById('carrinho-de-compras')
                carrinhoDeCompras.style.display = 'block'
            },1000)
        }
        else{
                const fecharPedidos = document.getElementById('fechar-pedidos')
                fecharPedidos.style.display = 'none'
        }
    })
let produtos
produto1 = '<li>'
produto1 += `<img src="./imagens/carrosel/combo-hamburguer-acompanhamentos.jpg" alt="">`
produto1 += `<div class="description__laches">`
produto1 += `<h5>Combo Hamburguer</h5>`
produto1 += `<p>2 carnes, queijo, presunto + acompanhamentos</p>`
produto1 += `<span>R$30,00</span>`
produto1 += '</li>'

const conteudoLateral = document.getElementById(‘conteúdos ')
conteudoLateral.innerHtml = produtos.value
alert(conteudoLateral)


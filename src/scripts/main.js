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


const abreCarrinho = document.getElementById('carrinho')
    abreCarrinho.addEventListener('click',function(){
        if(abreCarrinho){
            setTimeout(function(){
                const carrinhoDeCompras = document.getElementById('carrinho-de-compras')
                carrinhoDeCompras.style.display = 'block'
            },2000)
        }
        else{
            setTimeout(function(){
                const fecharPedidos = document.getElementById('fechar-pedidos')
                fecharPedidos.style.display = 'none'
            },2000)
        }
    })

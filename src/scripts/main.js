const abreCarrinho = document.getElementById('carrinho')
    abreCarrinho.addEventListener('click',function(){
        if(abreCarrinho){
        const carrinhoDeCompras = document.getElementById('carrinho-de-compras')
        carrinhoDeCompras.style.display = 'block'
        }
        else{
            const fecharPedidos = document.getElementById('fechar-pedidos')
            fecharPedidos.style.display = 'none'
        }
    })

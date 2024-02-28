import * as S from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img className='food-image' src={item.foto} alt={`${item.nome} imagem`} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <S.RemoveIcon onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))
          }
        </ul>
        <S.PriceContainer>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </S.PriceContainer>
        <S.CartBtn>Continuar com a entrega</S.CartBtn>
      </S.Sidebar>
    </S.CartContainer>
    </>
  )
}

export default Cart

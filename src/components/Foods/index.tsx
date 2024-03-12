import * as S from './styles'

import closeIcon from '../../assets/images/close_icon.png'
import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { FoodItem } from '../../pages/Profile'

type Props = {
  photo: string
  price: number
  id: number
  name: string
  description: string
  portion: string
  food: FoodItem
}

const Food = ({ photo, price, name, description, portion, food }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  const [modal, setModal] = useState(false)

  const getDescricao = (description: string) => {
    if (description.length > 155) {
      return description.slice(0, 152) + '...'
    }
    return description
  }
  const getDescricaoModal = (description: string) => {
    if (description.length > 695) {
      return description.slice(0, 692) + '...'
    }
    return description
  }

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <S.Card>
        <S.FoodImage src={photo} alt={`Imagem de ${photo}`} />
        <S.CardInfo>
          <S.FoodName>{name}</S.FoodName>
          <S.FoodDescription>{getDescricao(description)}</S.FoodDescription>
          <S.DetailsBtn onClick={() => setModal(true)}>
            Mais detalhes
          </S.DetailsBtn>
        </S.CardInfo>
      </S.Card>
      {modal ? (
        <S.Modal>
          <S.ModalContent className="container">
            <img
              onClick={() => setModal(false)}
              className="close"
              src={closeIcon}
              alt="Ícone de fechar"
            />
            <img src={photo} alt={`Imagem de ${photo}`} />
            <S.ModalInfoDiv>
              <h3>{name}</h3>
              <p>{getDescricaoModal(description)}</p>
              <p>Serve: de {portion}</p>
              <S.AddBtn onClick={addToCart}>
                Adicionar ao carrinho - {formatPrice(price)}
              </S.AddBtn>
            </S.ModalInfoDiv>
          </S.ModalContent>
          <div onClick={() => setModal(false)} className="overlay"></div>
        </S.Modal>
      ) : (
        ''
      )}
    </>
  )
}

export default Food

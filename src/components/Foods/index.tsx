import * as S from './styles'

import closeIcon from '../../assets/images/close_icon.png'
import { useState } from 'react';

type Props = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

const Food = ({ foto, preco, id, nome, descricao, porcao }: Props) => {
  const [modal, setModal] = useState(false)

  const getDescricao = (descricao: string) => {
  if (descricao.length > 155) {
    return descricao.slice(0, 152) + '...'
  }
  return descricao
}
const getDescricaoModal = (descricao: string) => {
  if (descricao.length > 695) {
    return descricao.slice(0, 692) + '...'
  }
  return descricao
}

const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

  return (
    <>
      <S.Card>
        <S.FoodImage src={foto} alt={`Imagem de ${foto}`} />
        <S.CardInfo>
          <S.FoodName>{nome}</S.FoodName>
          <S.FoodDescription>{getDescricao(descricao)}</S.FoodDescription>
          <S.DetailsBtn onClick={() => setModal(true)}>Mais detalhes</S.DetailsBtn>
        </S.CardInfo>
      </S.Card>
      {modal ? (
        <S.Modal>
          <S.ModalContent className="container">
            <img onClick={() => setModal(false)} className='close' src={closeIcon} alt="Ícone de fechar" />
            <img src={foto} alt={`Imagem de ${foto}`} />
            <S.ModalInfoDiv>
              <h3>{nome}</h3>
              <p>{getDescricaoModal(descricao)}</p>
              <p>Serve: de {porcao}</p>
              <S.AddBtn>Adicionar ao carrinho - {formatPrice(preco)}</S.AddBtn>
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

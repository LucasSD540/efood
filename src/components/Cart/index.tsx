import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isError }] = usePurchaseMutation()
  const [formContent, setFormContent] = useState(false)
  const [deliveryForm, setDeliveryForm] = useState(false)
  const [paymentForm, setPaymentForm] = useState(false)

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      description: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(10, 'O cep precisa ter pelo menos 10 caracteres')
        .max(10, 'O cep deve ter no máximo 10 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caractere')
        .max(6, 'O número deve ter no máximo 6 caracteres')
        .required('O campo é obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        paymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        paymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        paymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        paymentForm ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.cep,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          preco: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const closeCart = () => {
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
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

  const ShowCheckout = () => {
    if (form.isValid) {
      setFormContent(false)
    }
  }

  const FinishOrder = () => {
    if (form.isValid) {
      form.handleSubmit()
      clearCart()
      closeCart()
      form.initialStatus
    }
  }

  const enterForm = () => {
    setFormContent(true)
    setDeliveryForm(true)
  }

  const enterPayment = () => {
    if (form.isValid) {
      setDeliveryForm(false)
      setPaymentForm(true)
    }
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          {formContent ? (
            <S.FormContainer>
              <form onSubmit={form.handleSubmit}>
                {deliveryForm ? (
                  <div>
                    <h3>Entrega</h3>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        columnGap: '34px'
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="cep">CEP</label>
                        <InputMask
                          type="text"
                          id="cep"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('fullName') ? 'error' : ''
                          }
                          mask="99.999-999"
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="number">Número</label>
                        <input
                          type="text"
                          id="number"
                          name="number"
                          value={form.values.number}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('fullName') ? 'error' : ''
                          }
                        />
                      </div>
                    </div>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <S.CartBtn type="button" onClick={enterPayment}>
                      Continuar com o pagamento
                    </S.CartBtn>
                    <S.CartBtn
                      type="button"
                      onClick={() => setFormContent(false)}
                    >
                      Voltar para o carrinho
                    </S.CartBtn>
                  </div>
                ) : paymentForm ? (
                  <div>
                    <h3>
                      Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                    </h3>
                    <label htmlFor="cardName">name no cartão</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '3fr 1fr',
                        columnGap: '30px'
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          style={{ maxWidth: '228px', width: '100%' }}
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('fullName') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          style={{ maxWidth: '87px', width: '100%' }}
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('fullName') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        columnGap: '34px'
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <InputMask
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('fullName') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('fullName') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </div>
                    </div>
                    <S.CartBtn type="submit" onClick={ShowCheckout}>
                      Finalizar pagamento
                    </S.CartBtn>
                    <S.CartBtn
                      type="button"
                      onClick={() => setFormContent(false)}
                    >
                      Voltar para o carrinho
                    </S.CartBtn>
                  </div>
                ) : (
                  ''
                )}
              </form>
            </S.FormContainer>
          ) : isSuccess && data ? (
            <S.CheckoutDiv>
              {isError ? (
                <p>Preencha os dados corretamente</p>
              ) : (
                <div>
                  <h3>Pedido realizado - {data.orderId}</h3>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                  <S.CompletedBtn to="/" onClick={FinishOrder}>
                    Concluir
                  </S.CompletedBtn>
                </div>
              )}
            </S.CheckoutDiv>
          ) : (
            <div>
              {items.length > 0 ? (
                <div>
                  <ul>
                    {items.map((item) => (
                      <S.CartItem key={item.id}>
                        <img
                          className="food-image"
                          src={item.foto}
                          alt={`${item.nome} imagem`}
                        />
                        <div>
                          <h3>{item.nome}</h3>
                          <p>{formatPrice(item.preco)}</p>
                        </div>
                        <S.RemoveIcon onClick={() => removeItem(item.id)} />
                      </S.CartItem>
                    ))}
                  </ul>
                  <S.PriceContainer>
                    <p>Valor total</p>
                    <p>{formatPrice(getTotalPrice())}</p>
                  </S.PriceContainer>
                  <S.CartBtn type="button" onClick={enterForm}>
                    Continuar com a entrega
                  </S.CartBtn>
                </div>
              ) : (
                <p>O carrinho está vazio</p>
              )}
            </div>
          )}
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart

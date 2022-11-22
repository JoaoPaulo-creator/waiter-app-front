import { useEffect } from 'react'
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from '../../interfaces/Order'
import { localHostWithPort } from '../../utils/api'
import { formatCurrency } from '../../utils/formatCurrency'
import { Overlay, ModalBody, OrderDetails, Actions } from './styles'

interface OrderModalProps {
  visible: boolean
  order: Order | null
  onClose: () => void
  onCancelOrder: () => void
  isLoading: boolean
  onChangeStatus: () => void
}

export function OrderModal({ visible, order, onClose, onCancelOrder, isLoading, onChangeStatus }: OrderModalProps){

  useEffect(() => {

    function handleKeyDown(event: KeyboardEvent) {
      if(event.key === 'Escape'){
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])


  if(!visible || !order){
    return null
  }

  // realizando o calculo para saber o valor total do meu pedido
  // o caálculo basicamente vai ser multiplicar a quantidade de itens pelo valor unitário
  // e se necessário somar quando tiver mais itens no meu pedido

  /***
   * acc inicia valendo 0
  */
  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity)
  }, 0)

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt='ícone de fechar modal'/>
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕒'}
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>

            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>


        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity  }) => (
              <div className='item' key={_id}>
                <img
                  src={`http://${localHostWithPort}/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='56'
                  height='28.51'
                />

                <span className='quantity'>{quantity}x</span>

                <div className='product-details'>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>

              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button type='button' className='primary' disabled={isLoading} onClick={onChangeStatus}>
              <span>
                {order.status === 'WAITING' && '🧑‍🍳'}
                {order.status === 'IN_PRODUCTION' && '✅'}
              </span>
              <span>
                {order.status === 'WAITING' && 'Iniciar Produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
              </span>
            </button>
          )}

          <button type='button' className='secondary' onClick={onCancelOrder} disabled={isLoading}>
            <span>{order.status !== 'DONE' ? 'Cancelar Pedido' : 'Limpar'}</span>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}
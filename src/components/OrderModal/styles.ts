import styled from 'styled-components'

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: center;
`

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0px;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

`

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      /**

      Quando se utiliza do E comercial (&), + o nome do className de uma div (nesse caso é de uma div)
      todos os elementos precedidos terão as mesmas característas. Nesse caso, todo terão
      margin-top. Isso é usado quando se tem uma lista de produtos na tela, e os elementos
      de cada produto precisam ter as mesmas configurações

      Obs.: Essa característica é valida somente para a estilização desse componente
      */

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;

        span {
          font-weight: 500;
          font-size: 14px;
          opacity: 0.8;
        }
      }
`


export const Actions = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  .primary {
    background: #333;
    border-radius: 48px;
    border: 0px;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    padding: 14px 24px;
    color: #D73035;
    font-weight: bold;
    border: 0px;
    background: transparent;
    margin-top: 12px;
  }

`
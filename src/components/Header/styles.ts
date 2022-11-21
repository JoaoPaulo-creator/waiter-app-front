import styled from 'styled-components'

export const Container = styled.header`
  background: #DF3035;
  display: flex;
  justify-content: center;
  height: 198px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details{
    h1 {
      color: #fff;
      font-size: 32px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }


`
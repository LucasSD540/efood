import styled from "styled-components"
import { breakpoints } from "../../styles"

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    margin: 40px auto;
    row-gap: 32px;
  }
`

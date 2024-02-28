import styled from "styled-components"
import { breakpoints } from "../../styles"

export const FoodContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 56px;
    padding-top: 56px;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

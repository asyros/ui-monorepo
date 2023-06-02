import styled from 'styled-components'
import { spacer } from '../utils/spacer'

export const Text = styled.p`
    color: ${(props) => props.$color};
    font-family: Arial, sans-serif;
    ${spacer};
`

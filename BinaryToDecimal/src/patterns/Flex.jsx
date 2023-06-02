import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    justify-content: ${(props) => props.$justifyContent};
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
`

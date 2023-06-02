import styled from 'styled-components'
import { Flex } from '../../patterns'
import { BinaryToDecimal } from './sections'

const Container = styled.div`
    background-color: blue;
    width: 100%;
    height: 100vh;
`

const Heading = styled.h1`
    font-family: 'Arial', Helvetica, sans-serif;
    color: #ffffff;
    display: inline-block;
`

const data = {
    heading: 'Binary To Decimal',
    errorText: 'INVALID NUMBER: Number other than 0 or 1 has been entered',
    binary: {
        label: 'Binary number',
    },
    decimal: {
        label: 'Decimal number',
    },
}

export const Home = () => {
    return (
        <Container>
            <Flex $flexDirection="column" $alignItems="center">
                <Heading as="h1">Home</Heading>
            </Flex>
            <BinaryToDecimal {...data} />
        </Container>
    )
}

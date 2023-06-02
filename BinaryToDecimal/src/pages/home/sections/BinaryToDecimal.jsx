import { useState } from 'react'
import { Box, Flex, Input, Text } from '../../../patterns'

export const BinaryToDecimal = ({ heading, errorText, binary, decimal }) => {
    const [binaryNum, setBinaryNum] = useState(0)
    const [decimalNumber, setDecimalNumber] = useState('')
    const [error, setError] = useState(false)

    const inputHandler = (e) => {
        let value = e.target.value
        let result = value.search(/[^0-1]/)
        console.log(result)
        result !== -1 ? setError(true) : setError(false)
        setBinaryNum(value)
        convertBinaryToDecimal(value)
    }

    const convertBinaryToDecimal = (value) => {
        let binaryArr = Array.from(value)
        let j = 0
        let decimalValue = 0
        for (let i = binaryArr.length - 1; i >= 0; --i) {
            decimalValue += binaryArr[i] * 2 ** j
            j += 1
        }
        setDecimalNumber(decimalValue)
    }

    return (
        <>
            {heading && (
                <Text as="h2" $marginLeft={16} $color="white">
                    {heading}
                </Text>
            )}
            {error && (
                <Text as="p" $color="red" $marginLeft={16}>
                    {errorText}
                </Text>
            )}
            {binary && decimal && (
                <Box $marginTop={40}>
                    <Flex $flexDirection="row">
                        <Flex $flexDirection="row">
                            <Text as="p" $color="white" $marginLeft={16}>
                                {binary.label}
                            </Text>
                            <Input
                                $marginLeft={16}
                                type="tel"
                                maxLength={8}
                                onChange={inputHandler}
                            />
                        </Flex>
                        <Flex $flexDirection="row">
                            <Text as="p" $color="white" $marginLeft={16}>
                                {decimal.label}
                            </Text>
                            <Input
                                $marginLeft={16}
                                type="tel"
                                maxLength={8}
                                defaultValue={decimalNumber}
                            />
                        </Flex>
                    </Flex>
                </Box>
            )}
        </>
    )
}

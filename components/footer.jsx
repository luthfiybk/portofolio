import { Box } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box opacity={0.4} align="center" fontSize="sm">
            &copy; {new Date().getFullYear} Luthfi Arya Manggala. All Rights Reserved.
        </Box>
    )
}

export default Footer
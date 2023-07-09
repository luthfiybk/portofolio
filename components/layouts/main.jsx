import Head from "next/head"
import Navbar from "../navbar"
import { Box, Container } from "@chakra-ui/react"
import Footer from "../footer"
import dynamic from "next/dynamic"
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="luthfiybk's Homepage"/>
                <meta name="author" content="Luthfi Arya Manggala"/>
                <meta name="author" content="luthfiybk"/>
                <meta rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <meta name="twitter:title" content="luthfiybk" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@upichulo" />
                <meta name="twitter:creator" content="@upichulo" />
                <meta property="og:site_name" content="luthfiybk" />
                <meta name="og:title" content="luthfiybk" />
                <meta property="og:type" content="website" />
                <title>luthfiybk - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
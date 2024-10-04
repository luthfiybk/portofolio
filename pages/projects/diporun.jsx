import { Container,
    Badge,
    Link,
    List, 
    ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, ProjectImage, Meta } from "../../components/project"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"
import { Button } from "@chakra-ui/react"

const Project = () => (
<Layout title="Presensi">
    <Container>
        <Title>
            Diporun <Badge>2023</Badge>
        </Title>
        <P>
            A simple web-based company profile with Next.js to reveal Diporun 2023 event.
        </P>
        <List ml={4} my={4}>
            <ListItem>
                <Meta>Platform</Meta>
                <span>Web application</span>
            </ListItem>
            <ListItem>
                <Meta>Stack</Meta>
                <span>Next.js, Shadcn</span>
            </ListItem>
        </List>
        <Container
            flex={1}
            display="flex"
            justifyContent="center"
        >
        
            <Link
                href="https://diporun.vercel.app"
                isExternal
            >
                <Button
                    leftIcon={<ExternalLinkIcon />}
                    mt={2}
                    mb={5}
                    justifyContent={"center"}
                >
                    Link
                </Button>
            </Link>
        </Container>
    </Container>
</Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
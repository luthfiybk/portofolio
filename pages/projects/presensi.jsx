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
                Presensi <Badge>2023</Badge>
            </Title>
            <P>
                A simple web-based application with Laravel Framework that make it easier 
                for employee to take attendance using latitude and longitude.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web application</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Laravel Framework, Bootstrap CSS, Plain Javascript</span>
                </ListItem>
            </List>
            <Container
            flex={1}
            display="flex"
            justifyContent="center"
        >
        
            <Link
                href="https://github.com/luthfiybk/presensi"
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
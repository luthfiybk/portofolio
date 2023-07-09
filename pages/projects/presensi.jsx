import { Container,
        Badge,
        Link,
        List, 
        ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, ProjectImage, Meta } from "../../components/project"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

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
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
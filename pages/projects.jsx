import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { ProjectGridItem } from "../components/grid-item"

import thumbPresensi from '../public/images/projects/presensi.png'
import thumbDiporun from '../public/images/projects/diporun.png'

const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section>
                    <ProjectGridItem 
                        id="presensi" 
                        title="Presensi" 
                        thumbnail={thumbPresensi}
                    >
                        A simple web-based application with Laravel Framework that make it easier 
                        for employee to take attendance using latitude and longitude
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem 
                        id="diporun" 
                        title="Diporun" 
                        thumbnail={thumbDiporun}
                    >
                        A simple web-based company profile with Next.js.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
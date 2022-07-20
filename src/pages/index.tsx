import type { GetStaticProps, NextPage } from 'next'
import { Box } from '@clear/design-system'
import PageTitle from '../components/PageTitle'
import { prismicClient } from '../prismic'
import { PrismicDocument, TitleField } from '@prismicio/types'
import { PrismicText } from '@prismicio/react'

export type HomepageDocument = PrismicDocument<{
  title: TitleField
}>

export interface HomeProps {
  doc: HomepageDocument
}

const Home: NextPage<HomeProps> = ({ doc }) => {
  return (
    <Box m={5} data-cy="home-page">
      <PageTitle>
        <PrismicText field={doc?.data.title} />
      </PageTitle>
    </Box>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      doc: await prismicClient.getSingle<HomepageDocument>('homepage'),
    },
  }
}

export default Home

import { createClient } from '@prismicio/client'
import { PRISMIC_REPO } from '../config'

export const prismicClient = createClient(PRISMIC_REPO)

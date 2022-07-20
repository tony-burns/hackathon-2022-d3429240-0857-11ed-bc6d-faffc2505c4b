import _env from 'env-var'

// need to reference process.env directly for webpack define plugin to work
const env = _env.from({
  PRISMIC_REPO: process.env.NEXT_PUBLIC_PRISMIC_REPO,
})

export const PRISMIC_REPO = env.get('PRISMIC_REPO').required().asString()

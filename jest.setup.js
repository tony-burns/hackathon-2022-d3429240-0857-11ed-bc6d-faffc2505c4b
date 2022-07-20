// https://github.com/vercel/next.js/issues/26749
jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub'
  },
}))

// https://github.com/vercel/next.js/discussions/23034
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: '/',
    route: '/',
    asPath: '/',
    query: '',
  })),
}))

import '@testing-library/jest-dom/extend-expect'

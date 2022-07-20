const config = {
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage/jest',
  coverageReporters: ['json', 'lcov', 'text'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', 'jest-canvas-mock'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    // remove and switch back to SWC when this issue is resolved
    // https://github.com/vercel/next.js/issues/33255
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}

export default config

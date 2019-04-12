module.exports = {
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '/test/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  modulePaths: ['<rootDir>/lib'],
  collectCoverageFrom: [
    'lib/**/*.ts'
  ]
  // moduleNameMapper: {
  //   '@lib/*': '<rootDir>/lib',
  // }
};
module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'test/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/__mocks__/',
    '<rootDir>/node_modules/',
    '<rootDir>/configs/',
    '<rootDir>/test/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^layouts/(.*)$': '<rootDir>/layouts/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^plugins/(.*)$': '<rootDir>/plugins/$1',
    '^store/(.*)$': '<rootDir>/store/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup-test.js'
}

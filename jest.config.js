module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testURL: 'http://localhost/',
  collectCoverage: true, // 收集测试时的覆盖率信息
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs}'], // 需要收集覆盖率信息的文件
  coverageDirectory: '<rootDir>/coverage', // 输出覆盖信息文件的目录
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.js'], // 统计覆盖信息时需要忽略的文件
  moduleNameMapper: {
    testMatch: [
      '<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}',
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    ],
  }
}

const {defaults} = require('jest-config');

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};

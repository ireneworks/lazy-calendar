// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  plugins: [
    'html',
    'standard',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    'indent': [ 'error', 4 ],
    'brace-style': [ 'error', '1tbs' ],
    'semi': [ 'error', 'always' ],
    'no-console': 'error',
    'comma-dangle': [ 'error', {
      'arrays': 'never',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxBOF': 1 }],
    'no-undef': 'error',
    'space-in-parens': ['error', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'quotes': ['error', 'single'],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'no-empty': 'error',
    'no-duplicate-imports': 'error'
  }
}

const path = require('path');

module.exports = {
  title: 'Styleguide',
  webpackConfig: require('./config/webpack.config.dev.js'),
  showCode: true,
  showUsage: true,
  ignore: ['**/button/**','**/hello/**', '**/IconCard/**' ],
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon',
    },
    fontFamily: {
      base: '"Arial"'
    }
  },
  styles: {
    Logo: {
      logo: {
        color: '#1c8598'
      }
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, './styleguide/Wrapper')
  }
};

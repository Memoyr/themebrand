module.exports = {
  title: 'React Icon Styleguide',
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
  }
};

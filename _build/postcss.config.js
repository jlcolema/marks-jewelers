module.exports = ({ mode }) => {
  const plugins = [
    require('postcss-media-minmax'),
    require('postcss-custom-media'),
    require('postcss-inline-svg')({ paths: ['./assets/'] })
  ];

  if (mode === 'production') {
    plugins.push(
      require('@fullhuman/postcss-purgecss')({
        content: [
          './layout/*.liquid',
          './templates/**/*.liquid',
          './sections/*.liquid',
          './snippets/*.liquid',
          './src/**/*.js'
        ],
        defaultExtractor: content => content.match(/[\w-/:%@]+(?<!:)/g) || [],
        safelist: {
          greedy: [/^(is-|has-|will-|js)/, /(--is-|--no-|--animate-)/],
        },
      })
    );
    plugins.push(require('autoprefixer'));
  }

  return { plugins };
};

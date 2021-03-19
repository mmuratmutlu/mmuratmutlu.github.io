const main = process.env.DEPLOY_TARGET === 'gh-main';

module.exports = {
  assetPrefix: main ? '/mmuratmutlu.github.io/' : ''   // customize this value
};
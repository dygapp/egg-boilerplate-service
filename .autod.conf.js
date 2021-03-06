'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  test: [
    'test',
    'benchmark',
  ],
  exclude: [
    'test/fixtures',
    'boilerplate',
    'dist',
  ],
  devdep: [
    'autod',
    'eslint',
    'eslint-config-egg',
    'egg-ci',
    'egg-init',
    'npminstall',
    'webstorm-disable-index',
  ],
  keep: [
  ],
  semver: [
  ],
};

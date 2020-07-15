exports.config = {
  runner: 'local',
  path: '/wd/hub',
  port: 4000,
  specs: ['e2e/specs/**.spec.js'],

  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
      }
    }
  ],

  logLevel: 'silent',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  reporters: ['spec'],
  coloredLogs: true,

  mochaOpts: {
    ui: 'bdd',
    timeout: 90000
  }
};

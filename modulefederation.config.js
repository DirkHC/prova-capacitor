const isCapBuild = process.env.CAP_BUILD;

const remotes =
  isCapBuild == null
    // Configuration for when developing locally
    ? {
        account: 'account@http://localhost:3004/remoteEntry.js',
        checkout: 'checkout@http://localhost:3005/remoteEntry.js',
        helpinfo: 'helpinfo@http://localhost:3006/remoteEntry.js',
      }
    // Configuration for when building for capacitor
    : {
        account: `account@account/remoteEntry.js`,
        checkout: `checkout@checkout/remoteEntry.js`,
        helpinfo: `helpinfo@helpinfo/remoteEntry.js`,
      };

module.exports = {
  name: 'shell',
  remotes
}
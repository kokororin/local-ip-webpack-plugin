const ip = require('ip');
const webpack = require('webpack');

class LocalIpPlugin extends webpack.DefinePlugin {
  constructor() {
    super({
      'process.env.LOCAL_IP': JSON.stringify(ip.address())
    });
  }
}

module.exports = LocalIpPlugin;

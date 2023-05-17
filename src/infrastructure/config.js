const configPackage = require('config');

const config = {
    get: (setting) => configPackage.get(setting)
};

module.exports = config;

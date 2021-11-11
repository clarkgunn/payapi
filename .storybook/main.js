const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.pushyout('');
rootMain.stories.push(...['../components/**/*.stories.@(js|jsx|ts|tsx)']);

module.exports = rootMain;

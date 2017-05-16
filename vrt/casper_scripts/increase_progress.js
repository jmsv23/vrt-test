module.exports = function (casper, scenario, vp) {
  console.log('onReady.js has run for: ', vp.name);
  casper.click('#progress-bar');
  casper.wait(500);
};

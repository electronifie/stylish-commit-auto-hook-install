var assert = require('chai').assert;
var path = require('path');
var TemporaryRepository = require('./_helpers').Repository;

describe('stylish-commit', function () {
  it('automatically installs and removes a git pre-commit hook on npm install/remove', function () {
    this.timeout(10000);
    var temporaryRepository = new TemporaryRepository();
    temporaryRepository.createFile('package.json', '{ "name": "test", "version": "0.0.1" }');

    assert.notOk(temporaryRepository.containsFile('.git/hooks/pre-commit'));

    var moduleRoot = path.dirname(__dirname);
    temporaryRepository.runAtRoot('npm install --save "' + moduleRoot + '"');
    var precommitFileContents = temporaryRepository.getFileContents('.git/hooks/pre-commit');
    assert.include(precommitFileContents, 'stylish-commit precommit hook');

    temporaryRepository.runAtRoot('npm --verbose uninstall --save stylish-commit');
    assert.notOk(temporaryRepository.containsFile('.git/hooks/pre-commit'));
  });
});

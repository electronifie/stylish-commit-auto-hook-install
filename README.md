stylish-commit-auto-hook-install [![Build Status](https://travis-ci.org/electronifie/stylish-commit-auto-hook-install.svg)](https://travis-ci.org/electronifie/stylish-commit-auto-hook-install) [![npm](https://img.shields.io/npm/v/stylish-commit-auto-hook-install.svg)](https://www.npmjs.com/package/stylish-commit-auto-hook-install)
================================

Automatically installs a git pre-commit hook for [stylish-commit](https://github.com/electronifie/stylish-commit).

Usage:
 - Create a .style directory in your repo, and fill it with [style scripts](https://github.com/electronifie/stylish-commit).
 - Run `npm install stylish-commit-auto-hook-install --save-dev`

 The next time dev dependencies for your project are installed, the git hook will automatically be added.

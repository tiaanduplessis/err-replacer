
<h1 align="center">err-replacer</h1>
<div align="center">
  <strong>JSON stringify replacer to add support for error serialization</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/err-replacer">
    <img src="https://img.shields.io/npm/v/err-replacer.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/err-replacer">
  <img src="https://img.shields.io/npm/dm/err-replacer.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/err-replacer">
    <img src="https://img.shields.io/travis/tiaanduplessis/err-replacer.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/err-replacer/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/err-replacer.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/err-replacer/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/err-replacer.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/err-replacer/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/err-replacer.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20err-replacer!%20https://github.com/tiaanduplessis/err-replacer%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/err-replacer.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/err-replacer/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install err-replacer
# OR
$ yarn add err-replacer
```

## Usage

```js
const errReplacer = require('err-replacer')

const err = new Error('Foo')

console.log(JSON.stringify(err, errReplacer))
// {"stack":"Error: Foo\n    at Object.<anonymous> (/Users/Tiaan/Workspace/err-replacer/index.js:16:13)\n    at Module._compile (module.js:569:30)\n
//  at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Functio
// n.Module._load (module.js:458:3)\n    at Function.Module.runMain (module.js:605:10)\n    at startup (bootstrap_node.js:158:16)\n    at bootstrap_nod
// e.js:575:3","message":"Foo"}
 
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/err-replacer/issues).

## License

Licensed under the MIT License.

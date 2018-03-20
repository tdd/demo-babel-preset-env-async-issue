# babel-preset-env failing to use native async/await support in Node

This is a demo repo that showcases how `babel-preset-env`, despite being configured with a `"node": "current"` target option, will still require `regeneratorRuntime` when encountering an `async`/`await` call.

This is apparently due to the presence of another target option for `browsers`, that does target a browsers list that would require async transpiling. But IMHO this _shouldn't impact Node-side transpiling_.

## Steps to reproduce

1.  `git clone` this repository
2.  `npm install`
3.  `npm start`

## Configuration and bootstrap aspects

Babel is registered as a require hook in `server.js`, using `require('babel-register')`.

It is configured via the `babel` key in `package.json`.

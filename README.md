# goolyuyi の Eslint :heart:
goolyuyi's eslint and seamless in jetbrain IDE(such as webstorm)
:lizard:
# Installation
```bash
yarn add -D eslint eslint-config-goolyuyi-node eslint-plugin-import eslint-plugin-mocha eslint-plugin-node eslint-plugin-promise 
```
## Useage
add this to your `.eslint.rc`
```json
{
    "extends": "myconfig/my-special-config"
}
```

## Some happy tips :pig:
### Define Global Vars
```js
/* global var1, var2 */
/* global var1:writable, var2:writable */
```

### `.eslintrc`

```js
{
    // ...
    "plugins": [
        "jquery",   // eslint-plugin-jquery
        "@foo/foo", // @foo/eslint-plugin-foo
        "@bar"      // @bar/eslint-plugin
    ],
    "extends": [
        "plugin:@foo/foo/recommended",
        "plugin:@bar/recommended"
    ],
    "rules": {
        "jquery/a-rule": "error",
        "@foo/foo/some-rule": "error",
        "@bar/another-rule": "error"
    },
    "env": {
        "jquery/jquery": true,
        "@foo/foo/env-foo": true,
        "@bar/env-bar": true,
    }
    // ...
}
```

### Config in code's comments

```js
/* eslint eqeqeq: "off", curly: "error" */
```

### Disable/Enable

```js
/* eslint-disable */
alert('foo');
/* eslint-enable */

parseInt(10); // eslint-disable-line rule-name

// eslint disable-next-line rule-name
x = parseInt(10);
```

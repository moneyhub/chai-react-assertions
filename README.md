chai-react-assertions [![Build Status](https://img.shields.io/travis/momentumft/chai-react-assertions.svg?style=flat)](https://travis-ci.org/momentumft/chai-react-assertions) [![Downloads](https://img.shields.io/npm/dm/chai-react-assertions.svg)](https://npmjs.com/package/chai-react-assertions) [![NPM](https://img.shields.io/npm/v/chai-react-assertions.svg)](https://npmjs.com/package/chai-react-assertions)
=================================

Helper assertions for Chai which makes it easier to test React components.

## Installation

```sh
$ npm install chai-react-assertions --save-dev
```

## Example usage

```javascript
import chai, {expect} from 'chai'
import reactAssertions, {shallowRender} from 'chai-react-assertions'
import React from 'react'

chai.use(reactAssertions)

const renderedTree = shallowRender(
  <div>
    <span>This is a test!</span>
  </div>
)

expect(renderedTree).to.contain.elementWithText('This is a test!') === true
expect(renderedTree).to.contain.elementWithProps('span', { children: 'This is a test!' }) === true
```

## API

### Top level API

#### shallowRender(JSX)

Returns an instance of a React tree using the [skin-deep](https://github.com/glenjamin/skin-deep) library.

### Chai assertions

#### .elementWithText(textToFind: string)

Tries to find the given text in the rendered children. This will be able to find text which spans across multiple elements, for example:

```javascript
const renderedTree = shallowRender(
  <div>
    <span>Part of this sentence is in</span>
    <strong>bold!</strong>
  </div>
)

expect(renderedTree).to.contain.elementWithText('Part of this sentence is in bold!') === true
```

#### .elementWithProps(selector: string, props: object?)

Tries to find a rendered component with the given selector and props.

The selector can be the display name of a component, or `*` to catch all component types which will find any element based on props.

#### .numberOfElements(selector: string, count: number)

**TODO**

#### .elementWithStyledText(textToFind: string, style: object|array)

**TODO**

## License

Licensed under the MIT License.

View the full license [here](https://raw.githubusercontent.com/momentumft/chai-react-assertions/master/LICENSE).

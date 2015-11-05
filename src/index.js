import elementWithText from './element-with-text'
import elementWithProps from './element-with-props'
import elementWithStyledText from './element-with-styled-text'

export default function (chai, utils) {
  elementWithText(chai)
  elementWithProps(chai)
  elementWithStyledText(chai)
}

export * from './render-utils'

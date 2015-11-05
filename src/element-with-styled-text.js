import {flatten, compose, equals, pick, __, keys} from 'ramda'

export default function (chai) {
  chai.Assertion.addMethod('elementWithStyledText', function (text, expectedStyle) {
    const tree = this._obj

    const elements = tree.everySubTreeLike('*', { children: text })

    const elementsWithStyle = elements
    .filter(element => element.props.style)
    .map(element => flatten([element.props.style]).reduce((flattened, part) => Object.assign(flattened, part), {}))

    for (const styleToCheck of elementsWithStyle) {
      if (compose(
        equals(expectedStyle),
        pick(__, styleToCheck),
        keys,
      )(expectedStyle)) {
        return this.assert(true)
      }
    }

    // No style matched, second pass to find first style for debugging message
    for (const styleToCheck of elementsWithStyle) {
      return this.assert(
        false,
        'expected React tree to contain an element with text and style #{exp}, but none found. Instead might be #{act}.',
        'expected React tree to not contain an element with text and style #{exp}, but some were found.',
        text + ', ' + JSON.stringify(expectedStyle),
        text + ', ' + JSON.stringify(styleToCheck),
      )
    }

    this.assert(
      false,
      'expected React tree to contain an element with text and style #{exp}, but none found.',
      'expected React tree to not contain an element with text and style #{exp}, but some were found.',
      text + ', ' + JSON.stringify(expectedStyle),
    )
  })
}

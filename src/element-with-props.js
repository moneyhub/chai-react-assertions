export default function (chai) {
  chai.Assertion.addMethod('elementWithProps', function (selector, props) {
    const tree = this._obj

    const matchedElement = tree.subTreeLike(selector, props) !== false

    if (matchedElement) {
      // we don't need to do any more!
      return this.assert(true)
    }

    // if no element found, try and find another element by selector so we can show what props there actually are.
    const possibleMatch = tree.subTreeLike(selector)

    if (possibleMatch) {
      this.assert(
        false,
        'expected React tree to contain an element with props #{exp}, but none found. Props instead might be #{act}.',
        'expected React tree to not contain an element with props #{exp}, but some were found.',
        JSON.stringify(props),
        JSON.stringify(possibleMatch.props),
      )
    } else {
      this.assert(
        false,
        'expected React tree to contain an element with props #{exp}, but none found.',
        'expected React tree to not contain an element with props #{exp}, but some were found.',
        JSON.stringify(props),
      )
    }
  })
}

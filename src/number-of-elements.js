export default function (chai) {
  chai.Assertion.addMethod('numberOfElements', function (selector, numberOfElements) {
    const tree = this._obj

    const matchedElements = tree.everySubTreeLike(selector)

    this.assert(
      matchedElements.length === numberOfElements,
      'expected React tree to contain #{exp} elements, but #{act} found.',
      'expected React tree to not contain #{exp} elements.',
      numberOfElements,
      matchedElements.length,
    )
  })
}

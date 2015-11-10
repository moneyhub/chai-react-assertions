import {filter, pathEq, length} from 'ramda'

export default function (chai) {
  chai.Assertion.addMethod('numberOfElements', function (selector, numberOfElements) {
    const tree = this._obj

    const matchedElements = filter(
      pathEq(['type', 'displayName'], selector),
      tree.getRenderOutput().props.children
    )

    this.assert(
      length(matchedElements) === numberOfElements,
      'expected React tree to contain #{exp} elements, but #{act} found.',
      'expected React tree to not contain #{exp} elements.',
      numberOfElements,
      length(matchedElements),
    )
  })
}

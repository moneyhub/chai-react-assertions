import cheerio from 'cheerio'

export default function (chai) {
  chai.Assertion.addMethod('elementWithText', function (text) {
    const tree = this._obj

    const matches = cheerio(':contains(' + text + ')', tree.toString()).length

    if (matches > 0) {
      // we don't need to do any more!
      return this.assert(true)
    }

    // calculate all text of the tree as it might be helpful for debugging.
    const allText = cheerio(':root', tree.toString()).text()

    if (allText.trim().length > 0) {
      this.assert(
        false,
        'expected React tree to contain an element with text #{exp}, but none found. All text is (for debugging) #{act}',
        'expected React tree to not contain an element with text #{exp}, but some were found.',
        text,
        allText,
      )
    } else {
      this.assert(
        false,
        'expected React tree to contain an element with text #{exp}, but none found.',
        'expected React tree to not contain an element with text #{exp}, but some were found.',
        text,
      )
    }
  })
}

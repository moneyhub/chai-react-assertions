/* eslint-env mocha */
import chai, {expect} from 'chai'
import React from 'react'
import reactAssertions, {shallowRender} from '../'

chai.use(reactAssertions)

describe('elementWithText assertion', function () {
  before(function () {
    this.tree = shallowRender(
      <div>
        <p>I am a paragraph woo!</p>
        <span>And</span>
        <span>I</span>
        <span>span</span>
        <span>across</span>
        <span>multiple</span>
        <p align="center">elements.</p>
      </div>
    )
  })

  it('should match text which is inside one element', function () {
    expect(this.tree).to.contain.elementWithText('I am a paragraph woo!')
  })

  it('shouldn\'t match text which isn\'t included', function () {
    expect(this.tree).to.not.contain.elementWithText('I\'mnotfound')
  })

  it('should match partial text which is inside one element', function () {
    expect(this.tree).to.contain.elementWithText('paragraph')
  })

  it('should match text which spans across multiple elements', function () {
    expect(this.tree).to.contain.elementWithText('AndIspanacrossmultipleelements.')
  })

  it('should match partial text which spans across multiple elements', function () {
    expect(this.tree).to.contain.elementWithText('spanacrossmultip')
  })

  it('shouldn\'t match text which doesn\'t consecutively span across elements', function () {
    expect(this.tree).to.not.contain.elementWithText('AndIacrosselements.')
  })
})

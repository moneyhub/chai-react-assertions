/* eslint-env mocha */
import chai, {expect} from 'chai'
import React from 'react'
import reactAssertions, {shallowRender} from '../'

chai.use(reactAssertions)

describe('numberOfElements assertion', function () {
  before(function () {
    this.tree = shallowRender(
      <div>
        <span>Hello!</span>
        <em>I am an em</em>
        <strong>I am strong!</strong>
        <p>I am all alone...</p>
        <strong>No you are not!</strong>
      </div>
    )
  })

  it('should return the number of matched elements by display name', function () {
    expect(this.tree).to.have.numberOfElements('strong', 2)
  })
})

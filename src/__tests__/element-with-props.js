/* eslint-env mocha */
import chai, {expect} from 'chai'
import React from 'react'
import reactAssertions, {shallowRender} from '../'

chai.use(reactAssertions)

const ProgressBar = React.createClass({ render() { return <div /> } })

describe('elementWithProps assertion', function () {
  before(function () {
    this.tree = shallowRender(
      <div>
        <ProgressBar percent={0.4} size="large" />
        <span>Hello</span>
        <span>world</span>
        <p align="center">And I{'\''}m in the middle!</p>
      </div>
    )
  })

  it('should match elements via display name', function () {
    expect(this.tree).to.contain.elementWithProps('ProgressBar')
    expect(this.tree).to.contain.elementWithProps('span')
    expect(this.tree).to.contain.elementWithProps('p')
  })

  it('shouln\'t match elements with non existant display name', function () {
    expect(this.tree).to.not.contain.elementWithProps('strong')
  })

  it('should match elements via display name and props', function () {
    expect(this.tree).to.contain.elementWithProps('ProgressBar', { percent: 0.4 })
    expect(this.tree).to.contain.elementWithProps('p', { align: 'center' })
  })

  it('should\'t match elements with incorrect props', function () {
    expect(this.tree).to.not.contain.elementWithProps('ProgressBar', { percent: 0.5 })
    expect(this.tree).to.not.contain.elementWithProps('p', { align: 'left' })
  })
})

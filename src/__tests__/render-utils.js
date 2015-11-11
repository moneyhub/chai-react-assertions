/* eslint-env mocha */
import {expect} from 'chai'
import React, {PropTypes} from 'react'
import {shallowRender} from '../'

describe('render utils', function () {
  describe('shallowRender', function () {
    it('should shallow render a react tree of elements', function () {
      const tree = shallowRender(
        <div>
          <span>Hello</span>
          <span>World</span>
        </div>
      )

      expect(tree.getRenderOutput().type).to.equal('div')
    })

    it('should allow passing down context', function () {
      const ComponentWhichNeedsContext = React.createClass({
        contextTypes: {
          label: PropTypes.func
        },
        render() {
          return <div>{this.context.label()}</div>
        }
      })

      const tree = shallowRender(
        <ComponentWhichNeedsContext />
      , {
        label: () => 'Hello World'
      })

      expect(tree.getRenderOutput().props.children).to.equal('Hello World')
    })
  })
})

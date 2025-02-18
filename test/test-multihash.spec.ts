/* eslint-env mocha */

import { expect } from 'aegir/chai'
import * as isIPFS from '../src/index.js'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'

describe('ipfs multihash', () => {
  it('isIPFS.multihash should match a valid multihash', (done) => {
    const actual = isIPFS.multihash('QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o')
    expect(actual).to.equal(true)
    done()
  })

  it('isIPFS.multihash should match a valid multihash Uint8Array', (done) => {
    const actual = isIPFS.multihash(uint8ArrayFromString('QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o', 'base58btc'))
    expect(actual).to.equal(true)
    done()
  })

  it('isIPFS.multihash should not match a Uint8Array', (done) => {
    const actual = isIPFS.multihash(uint8ArrayFromString('QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE70'))
    expect(actual).to.equal(false)
    done()
  })

  it('isIPFS.multihash should not match an invalid multihash (with a typo)', (done) => {
    const actual = isIPFS.multihash('QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE70')
    expect(actual).to.equal(false)
    done()
  })

  it('isIPFS.multihash should not match an invalid multihash', (done) => {
    const actual = isIPFS.multihash('noop')
    expect(actual).to.equal(false)
    done()
  })

  it('isIPFS.multihash should not match an invalid multihash data type', (done) => {
    // @ts-expect-error invalid input
    const actual = isIPFS.multihash(4)
    expect(actual).to.equal(false)
    done()
  })
})

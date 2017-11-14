'use strict'

const resolve = require('path').resolve
const expect = require('chai').expect

const FlatMapXmlParser = require(resolve('lib/parser/xml/flat-map-xml'))

describe('FlatMapXmlParser', () => {
    let flatMapXmlParser = null
    beforeEach(() => {
        flatMapXmlParser = new FlatMapXmlParser()
    })
    describe('asFlatMap', () => {
        it('should parse xml', () => {
            const object = flatMapXmlParser.asFlatMap('<xml><name><first>stf</first><second>pl</second></xml>')
            expect(object['xml.name.first']).to.equal('stf')
            expect(object['xml.name.second']).to.equal('pl')
        })
        it('should parse pretty printed xml', () => {
            const object = flatMapXmlParser.asFlatMap(`
                <xml>
                    <name>
                        <first>
                            stf
                        </first>
                        <second>
                            pl
                        </second>
                    </name>
                </xml>
            `)
            expect(object['xml.name.first']).to.equal('stf')
            expect(object['xml.name.second']).to.equal('pl')
        })
    })
})
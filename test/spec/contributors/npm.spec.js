'use strict'

const resolve = require('path').resolve
const NpmInfoContributor = require(resolve('lib/contributors/npm'))

const expect = require('chai').expect

describe('NpmInfoContributor', () => {
    
    let npmInfoContributor

    beforeEach(() => {
        npmInfoContributor = new NpmInfoContributor()
    })

    describe('.getName', () => {
        it('should return build', () => {
            expect(npmInfoContributor.getName()).to.equal('build')
        })
    })
    describe('.getInfo', () => {
        it('should return the application name', () => {
            expect(npmInfoContributor.getInfo().name).to.equal(process.env.NPM_PACKAGE_NAME)
        })
        it('should return the application version', () => {
            expect(npmInfoContributor.getInfo().version).to.equal(process.env.NPM_PACKAGE_VERSION)
        })
        it('should return the application description', () => {
            expect(npmInfoContributor.getInfo().description).to.equal(process.env.NPM_PACKAGE_DESCRIPTION)
        })
    })
})
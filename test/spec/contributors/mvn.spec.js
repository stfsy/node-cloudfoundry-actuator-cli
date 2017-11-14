'use strict'

const resolve = require('path').resolve
const MvnInfoContributor = require(resolve('lib/contributors/mvn'))

const expect = require('chai').expect

describe('MvnInfoContributor', () => {
    
    let mvnInfoContributor

    beforeEach(() => {
        mvnInfoContributor = new MvnInfoContributor()
    })

    describe('.getName', () => {
        it('should return build', () => {
            expect(mvnInfoContributor.getName()).to.equal('mvn')
        })
    })
    describe('.getContext', () => {
        it('should return build', () => {
            expect(mvnInfoContributor.getContext()).to.equal('build')
        })
    })
    describe('.getInfo', () => {
       
    })
})
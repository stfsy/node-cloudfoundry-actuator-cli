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
        it('should return the artifactId', () => {
            expect(mvnInfoContributor.getInfo().artifactId).to.equal('my-project')
        })
        it('should return the groupId', () => {
            expect(mvnInfoContributor.getInfo().groupId).to.equal('org.just.4.testing')
        })
        it('should return the version', () => {
            expect(mvnInfoContributor.getInfo().version).to.equal('2.0')
        })
    })
})
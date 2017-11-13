'use strict'

const resolve = require('path').resolve
const expect = require('chai').expect

const GitContributor = require(resolve('lib/contributors/git'))
const NpmContributor = require(resolve('lib/contributors/npm'))
const Registry = require(resolve('lib/registry'))

describe('Registry', () => {
    let registry = null
    beforeEach(() => {
        registry = new Registry()
    })
    describe('.getContributors', () => {
        it('should return git and npm info contributor', () => {
            const contributors = registry.getContributors(['git', 'npm'])
            expect(contributors.length).to.equal(2)
            const filtered = contributors.filter(contributor => {
                const name = contributor.getName()
                return (name != 'git' && name != 'npm')
            })
            expect(filtered.length).to.equal(0)
        })
        it('should return npm info contributor', () => {
            const contributors = registry.getContributors(['npm'])
            expect(contributors.length).to.equal(1)
            expect(contributors[0].getName()).to.equal('npm')
        })
        it('should return git info contributor', () => {
            const contributors = registry.getContributors(['git'])
            expect(contributors.length).to.equal(1)
            expect(contributors[0].getName()).to.equal('git')
        })
    })
})
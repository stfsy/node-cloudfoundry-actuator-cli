'use strict'

const resolve = require('path').resolve
const packageJson = require('../../../package')
const GitInfoContributor = require(resolve('lib/contributors/git'))

const expect = require('chai').expect

describe('GitInfoContributor', () => {

    let gitInfoContributor = null

    beforeEach(() => {
        gitInfoContributor = new GitInfoContributor()
    })
    describe('.getName', () => {
        it('should return git', () => {
            expect(gitInfoContributor.getName()).to.equal('git')
        })
    })
    describe('.getContext', () => {
        it('should return git', () => {
            expect(gitInfoContributor.getContext()).to.equal('git')
        })
    })
    describe('.getInfo', () => {
        it('should return a branch', () => {
            expect(gitInfoContributor.getInfo().branch).not.to.be.undefined
        })
        it('should return the remote repo', () => {
            expect(gitInfoContributor.getInfo().remote.origin.url).to.equal(packageJson.repository.url + '.git')
        })
        it('should return the commit id', () => {
            expect(gitInfoContributor.getInfo().commit.id).not.to.be.undefined
        })
        it('should return the commit message', () => {
            expect(gitInfoContributor.getInfo().commit.message.short).not.to.be.undefined
        })
        it('should return the commit authors email', () => {
            expect(gitInfoContributor.getInfo().commit.user.email).not.to.be.undefined
        })
    })
    describe('.getInfo', () => {
        beforeEach(() => {
            packageJson.repository = 'https://www.github.com/stfsy/node-cloudfoundry-actuator'
        })
        it('should return the remote repo', () => {
            expect(gitInfoContributor.getInfo().remote.origin.url).to.equal(packageJson.repository + '.git')
        })
    })
    describe('.getInfo', () => {
        beforeEach(() => {
            packageJson.repository = {}
        })
        it('should return no remote repo', () => {
            expect(gitInfoContributor.getInfo().remote.origin.url).to.be.undefined
        })
    })
})
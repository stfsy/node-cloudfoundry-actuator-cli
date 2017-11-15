'use strict'

const spawn = require('./spawn')
const resolve = require('path').resolve
const fs = require('fs-extra')

const expect = require('chai').expect

describe('Cli', () => {
    afterEach(() => {
        fs.removeSync(resolve('.actuator/info.json'))
    })
    describe('started with flag --git', () => {
        beforeEach(() => {
            return spawn('node', ['bin/cli', '--git'])
        })
        it('should only write git info', () => {
            const json = fs.readJSONSync(resolve('.actuator/info.json'))
            expect(Object.keys(json).length).to.equal(1)
            expect(json.git).not.to.be.undefined
            expect(json.git.commit).not.to.be.undefined
            expect(json.git.branch).not.to.be.undefined
        })
    })
    describe('started with flag --npm', () => {
        beforeEach(() => {
            return spawn('node', ['bin/cli', '--npm'])
        })
        it('should only write npm build info', () => {
            const json = fs.readJSONSync(resolve('.actuator/info.json'))
            expect(Object.keys(json).length).to.equal(1)
            expect(json.build).not.to.be.undefined
            expect(json.build.name).not.to.be.undefined
            expect(json.build.version).not.to.be.undefined
            expect(json.build.description).not.to.be.undefined
        })
    })
    describe('started with flag --mvn', () => {
        beforeEach(() => {
            return spawn('node', ['bin/cli', '--mvn'])
        })
        it('should only write npm build info', () => {
            const json = fs.readJSONSync(resolve('.actuator/info.json'))
            expect(Object.keys(json).length).to.equal(1)
            expect(json.build).not.to.be.undefined
            expect(json.build.artifactId).not.to.be.undefined
            expect(json.build.groupId).not.to.be.undefined
            expect(json.build.version).not.to.be.undefined
        })
    })
    describe('started with flags --git --mvn', () => {
        beforeEach(() => {
            return spawn('node', ['bin/cli', '--mvn', '--git'])
        })
        it('should only write git and npm build info', () => {
            const json = fs.readJSONSync(resolve('.actuator/info.json'))
            expect(Object.keys(json).length).to.equal(2)
            expect(json.git).not.to.be.undefined
            expect(json.git.commit).not.to.be.undefined
            expect(json.git.branch).not.to.be.undefined
            expect(json.build).not.to.be.undefined
            expect(json.build.artifactId).not.to.be.undefined
            expect(json.build.groupId).not.to.be.undefined
            expect(json.build.version).not.to.be.undefined
        })
    })
    describe('started with flags --git --npm', () => {
        beforeEach(() => {
            return spawn('node', ['bin/cli', '--npm', '--git'])
        })
        it('should only write git and npm build info', () => {
            const json = fs.readJSONSync(resolve('.actuator/info.json'))
            expect(Object.keys(json).length).to.equal(2)
            expect(json.git).not.to.be.undefined
            expect(json.git.commit).not.to.be.undefined
            expect(json.git.branch).not.to.be.undefined
            expect(json.build).not.to.be.undefined
            expect(json.build.name).not.to.be.undefined
            expect(json.build.version).not.to.be.undefined
            expect(json.build.description).not.to.be.undefined
        })
    })
})
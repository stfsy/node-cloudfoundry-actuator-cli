'use strict'

const expect = require('chai').expect
const resolve = require('path').resolve

const requireType = require(resolve('lib/require/require-type'))
const BaseType = require(resolve('lib/contributors/base'))
const dir = resolve('lib/contributors')

describe('RequireType', () => {
    it('should return only subtypes', () => {
        const contributors = requireType(dir, BaseType, {excludeBaseType: true}).map(Constructor => new Constructor())
        expect(contributors.length).to.equal(3)
        contributors.forEach((contributor) => {
            expect(contributor.getName()).to.be.oneOf(['mvn', 'npm', 'git'])
        })
    })
    it('should return include the base type', () => {
        const contributors = requireType(dir, BaseType).map(Constructor => new Constructor())
        expect(contributors.length).to.equal(3)
        contributors.forEach((contributor) => {
            expect(contributor.getName()).to.be.oneOf(['mvn', 'npm', 'git', undefined])
        })
    })
})
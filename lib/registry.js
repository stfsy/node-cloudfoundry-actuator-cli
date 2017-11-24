'use strict'

const resolve = require('path').resolve
const requireType = require('./require/require-type')
const BaseInfoContributor = require('./contributors/base')
/**
 * 
 */
class Registry {

    constructor() {
        this._contributors = requireType(resolve(__dirname, '../lib/contributors'), BaseInfoContributor, {
            excludeBaseType: true
        }).map(Constructor => new Constructor())
    }

    getContributors(wantedContributors) {
        return this._contributors.filter((contributor) => {
            return wantedContributors.find(wantedContributor => contributor.getName() === wantedContributor)
        })
    }
}

module.exports = Registry
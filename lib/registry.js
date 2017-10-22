'use strict'

const GitInfoContributor = require('./contributors/git')
const NpmInfoContributor = require('./contributors/npm')

/**
 * 
 */
class Registry {

    constructor() {
        this._contributors = [
            new GitInfoContributor(),
            new NpmInfoContributor()
        ]
    }

    getContributors(wantedContributors) {
        return this._contributors.filter((contributor) => {
            return wantedContributors.find(wantedContributor => contributor.getName() === wantedContributor)
        })
    }
}

module.exports = Registry
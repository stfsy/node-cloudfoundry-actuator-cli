'use strict'

const GitInfoContributor = require('./contributors/git')
const NpmInfoContributor = require('./contributors/npm')
const MvnInfoContributor = require('./contributors/mvn')

/**
 * 
 */
class Registry {

    constructor() {
        this._contributors = [
            new GitInfoContributor(),
            new NpmInfoContributor(),
            new MvnInfoContributor()
        ]
    }

    getContributors(wantedContributors) {
        return this._contributors.filter((contributor) => {
            return wantedContributors.find(wantedContributor => contributor.getName() === wantedContributor)
        })
    }
}

module.exports = Registry
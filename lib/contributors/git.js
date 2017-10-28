'use strict'

const gitRepoInfo = require('git-repo-info')

const BaseContributor = require('./base')
const packageJson = require('../../package')
/**
 * 
 */
class GitInfoContributor extends BaseContributor {

    /**
     * 
     * @returns {string} the context this instance contributes information to
     */
    getName() {
        return 'git'
    }

    /**
     * 
     * @returns {object} an object containing arbitrary information
     */
    getInfo() {
        const {
            branch,
            tag,
            commitId: commitId,
            abbreviatedSha: shortCommitId,
            committerDate: commitTime,
            commitMessage: commitMessage,
            author: commitAuthor,
        } = gitRepoInfo()

        return {
            branch,
            tag,
            remote: {
                origin: packageJson.repository
            },
            commit: {
                commitId,
                time: commitTime,
                message: commitMessage,
            }
        }
    }
}

module.exports = GitInfoContributor
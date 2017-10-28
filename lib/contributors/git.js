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

        const email = commitAuthor.match(/(<)(.*)(>)/)[2]

        // TODO
        // check if repo is object or string
        let repo = packageJson.repository

        if (!repo.url.endsWith('.git')) {
            repo.url += '.git'
        }

        return {
            branch,
            tag,
            remote: {
                origin: repo
            },
            commit: {
                id: shortCommitId,
                time: commitTime,
                message: {
                    short: commitMessage
                },
            },
            user: {
                email: email
            }
        }
    }
}

module.exports = GitInfoContributor
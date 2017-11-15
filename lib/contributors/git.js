'use strict'

const gitRepoInfo = require('git-repo-info')

const BaseContributor = require('./base')
const resolve = require('path').resolve
// TODO
// process.cwd ist not very robust
const packageJson = require(resolve(process.cwd(), 'package'))
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
     * @returns {string} the context this instance contributes information to
     */
    getContext() {
        return 'git'
    }

    /**
     * 
     */

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

        let email = null

        if (commitAuthor) {
            email = commitAuthor.match(/(<)(.*)(>)/)[2]
        }

        // TODO
        // check if repo is object or string
        let repo = packageJson.repository
        let url = null

        if (typeof repo === 'string') {
            url = repo
        } else {
            url = repo.url
        }

        if (url) {
            if (!url.endsWith('.git')) {
                url += '.git'
            }

            url = url.match(/^[git+]*(.*)/)[1]
        }

        return {
            branch,
            tag,
            remote: {
                origin: {
                    url: url
                }
            },
            commit: {
                id: shortCommitId,
                time: commitTime,
                message: {
                    short: commitMessage
                },
                user: {
                    email: email
                }
            },
        }
    }
}

module.exports = GitInfoContributor
'use strict'

const resolve = require('path').resolve
const BaseContributor = require('./base')

/**
 * 
 */
class NpmInfoContributor extends BaseContributor {

    /**
     * 
     * @returns {string} the context this instance contributes information to
     */
    getName() {
        return 'build'
    }

    /**
     * 
     * @returns {object} an object containing arbitrary information
     */
    getInfo() {
        return {
            name: process.env.NPM_PACKAGE_NAME,
            version: process.env.NPM_PACKAGE_VERSION,
            description: process.env.NPM_PACKAGE_DESCRIPTION
        }
    }
}

module.exports = NpmInfoContributor
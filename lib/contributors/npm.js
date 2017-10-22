'use strict'

const resolve = require('path').resolve
const BaseContributor = require('./base')

const packageJson = require('../../package')

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
        const {
            name,
            version,
            description
        } = packageJson
        return {
            name,
            version,
            description
        }
    }
}

module.exports = NpmInfoContributor
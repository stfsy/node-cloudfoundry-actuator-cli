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
        return 'npm'
    }

   /**
     * 
     * @returns {string} the context this instance contributes information to
     */
    getContext() {
        return 'build' 
    }

    /**
     * 
     * @returns {object} an object containing arbitrary information
     */
    getInfo() {
        return {
            name: process.env.npm_package_name,
            version: process.env.npm_package_version,
            description: process.env.npm_package_description
        }
    }
}

module.exports = NpmInfoContributor
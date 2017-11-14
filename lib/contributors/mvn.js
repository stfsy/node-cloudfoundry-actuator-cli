'use strict'

const resolve = require('path').resolve
const fs = require('fs-extra')
const sax = require('sax')
const BaseContributor = require('./base')

/**
 * 
 */
class MvnInfoContributor extends BaseContributor {

    /**
     * 
     * @returns {string} the context this instance contributes information to
     */
    getName() {
        return 'mvn'
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
            name: process.env.NPM_PACKAGE_NAME,
            version: process.env.NPM_PACKAGE_VERSION,
            description: process.env.NPM_PACKAGE_DESCRIPTION
        }
    }
}

module.exports = MvnInfoContributor
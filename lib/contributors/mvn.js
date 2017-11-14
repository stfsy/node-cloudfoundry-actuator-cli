'use strict'

const resolve = require('path').resolve
const fs = require('fs-extra')
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
        return {}
    }
}

module.exports = MvnInfoContributor
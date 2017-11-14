'use strict'

const path = require('path')
const Registry = require('./registry')

const fs = require('fs-extra')

/**
 * 
 */
class InfoGenerator {

    constructor() {
        this._registry = new Registry()
    }

    /**
     * 
     * @param {object} param
     * @returns {Promise}
     */
    generateBuildInfo({
        contributors = [],
        outputFolder = '.actuator'
    }) {
        const registeredContributors = this._registry.getContributors(contributors)

        const info = registeredContributors.reduce((context, next) => {
            context[next.getContext()] = next.getInfo()
            return context
        }, {})

        return this._write(info, outputFolder)
    }

    /**
     * 
     * @private
     * @param {object} object 
     * @param {string} folder
     * @returns {Promise} 
     */
    _write(object, folder) {
        return new Promise((resolve, reject) => {
            // using process.cwd is not very robust
            const dir = process.cwd()
            fs.outputFile(path.join(dir, folder, 'info.json'), JSON.stringify(object, null, 2), (err) => {
                if (err) {
                    reject(err)
                }
                resolve();
            })
        })
    }
}

module.exports = InfoGenerator
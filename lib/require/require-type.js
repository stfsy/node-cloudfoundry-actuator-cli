'use strict'

const fs = require('fs')
const resolve = require('path').resolve

/**
 * 
 * @param {string} path 
 * @param {object} options
 * @returns {Array<T>} a list of modules that match the search criteria 
 */
module.exports = (path, type, options = {}) => {
    const files = fs.readdirSync(path)
    const modules = []
    files.forEach((file) => {
        const module = require(resolve(path, file))

        if (module.prototype instanceof type) {
            modules.push(module)
        } else if (!options.excludeBaseType && module.prototype == type.prototype) {
            modules.push(module)
        }
    })
    return modules
}
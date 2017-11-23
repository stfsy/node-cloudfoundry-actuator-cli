'use strict'

const fs = require('fs')
const resolve = require('path').resolve

const findFiles = (path, type, options) => {
    const contents = fs.readdirSync(resolve(path))
    const modules = []

    contents.forEach((content) => {
        const contentPath = resolve(path, content)
        const stats = fs.lstatSync(contentPath)

        if (stats.isDirectory()) {
            if (options.recursive) {
                findFiles(contentPath, type, options).forEach((module) => {
                    modules.push(module)
                })
            }
        } else if (stats.isFile()) {
            const module = require(contentPath)
            if (module.prototype instanceof type) {
                modules.push(module)
            } else if (!options.excludeBaseType && module.prototype === type.prototype) {
                modules.push(module)
            }
        }
    })

    return modules
}

/**
 * 
 * @param {string} path 
 * @param {object} options
 * @returns {Array<T>} a list of modules that match the search criteria 
 */
module.exports = (path, type, options = {}) => {
   return findFiles(path, type, options)
}
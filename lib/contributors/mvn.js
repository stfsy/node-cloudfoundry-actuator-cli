'use strict'

const resolve = require('path').resolve
const fs = require('fs-extra')
const BaseContributor = require('./base')

const FlatMapXmlParser = require('../parser/xml/flat-map-xml')
const flatMapXmlParser = new FlatMapXmlParser()
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

        const content = fs.readFileSync(resolve(process.cwd(), 'pom.xml'))
        const flatMap = flatMapXmlParser.asFlatMap(content)

        return {
            artifactId: flatMap['project.artifactid'] ? flatMap['project.artifactid'] : flatMap['project.parent.artifactid'],
            groupId: flatMap['project.groupid'] ? flatMap['project.groupid'] :  flatMap['project.parent.groupid'],
            version: flatMap['project.version'] ? flatMap['project.version'] : flatMap['project.parent.version']
        }
    }
}

module.exports = MvnInfoContributor
'use strict'

const sax = require('sax')
const parser = sax.parser()

class FlatMapXmlParser {

    asFlatMap(xml) {
        const project = {}
        let path = ''
        let level = 0

        parser.onopentag = function (node) {
            if (!path) {
                path = node.name.toLowerCase()
            } else {
                path += '.' + node.name.toLowerCase()
            }
        };

        parser.onclosetag = function (node) {
            const lastIndexOf = path.lastIndexOf('.')

            if (lastIndexOf > -1) {
                path = path.substring(0, lastIndexOf)
            } else {
                path = path
            }
        }

        parser.ontext = function (text) {
            project[path] = text.replace(/[\n\r ]*/g, '')
        }

        parser.write(xml).close()
        return project
    }
}

module.exports = FlatMapXmlParser
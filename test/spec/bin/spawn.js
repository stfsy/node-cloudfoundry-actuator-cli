'use strict'

const spawn = require('child_process').spawn
const resolve = require('path').resolve
const cwd = resolve(__dirname, '../../../')

module.exports = (command, args) => {
    return new Promise((resolve, reject) => {
        const proc = spawn(command, args, {
            cwd: cwd
        })

        proc.stderr.on('error', (data) => {
            console.log(data)
        })

        proc.on('close', (code) => {
            if (code != 0) {
                reject(code)
            } else {
                resolve(code)
            }
        })
    })
}
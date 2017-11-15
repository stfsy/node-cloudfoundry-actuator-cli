'use strict'

const spawn = require('child_process').spawn

module.exports = (command, args) => {
    return new Promise((resolve, reject) => {
        const proc = spawn(command, args, {
            cwd: process.cwd()
        })

        proc.stderr.on('data', (data) => {
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
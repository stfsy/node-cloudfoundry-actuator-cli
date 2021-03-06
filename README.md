# node-cloudfoundry-actuator-cli

[![Build Status](https://travis-ci.org/stfsy/node-cloudfoundry-actuator-cli.svg)](https://travis-ci.org/stfsy/node-cloudfoundry-actuator-cli)
[![Dependency Status](https://img.shields.io/david/stfsy/node-cloudfoundry-actuator-cli.svg)](https://github.com/stfsy/node-cloudfoundry-actuator-cli/blob/master/package.json)
[![DevDependency Status](https://img.shields.io/david/dev/stfsy/node-cloudfoundry-actuator-cli.svg)](https://github.com/stfsy/node-cloudfoundry-actuator-cli/blob/master/package.json)
[![Npm downloads](https://img.shields.io/npm/dm/node-cloudfoundry-actuator-cli.svg)](https://www.npmjs.com/package/node-cloudfoundry-actuator-cli)
[![Npm Version](https://img.shields.io/npm/v/node-cloudfoundry-actuator-cli.svg)](https://www.npmjs.com/package/node-cloudfoundry-actuator-cli)
[![Git tag](https://img.shields.io/github/tag/stfsy/node-cloudfoundry-actuator-cli.svg)](https://github.com/stfsy/node-cloudfoundry-actuator-cli/releases)
[![Github issues](https://img.shields.io/github/issues/stfsy/node-cloudfoundry-actuator-cli.svg)](https://github.com/stfsy/node-cloudfoundry-actuator-cli/issues)
[![License](https://img.shields.io/npm/l/node-cloudfoundry-actuator-cli.svg)](https://github.com/stfsy/node-cloudfoundry-actuator-cli/blob/master/LICENSE)

Build time info file generation for Cloud Foundry actuator endpoints. 

Generates a .json file, that can be consumed by [Express Cloud Foundry Actuator Middleware](https://github.com/stfsy/express-cloudfoundry-actuator-middleware) to show build information in the Cloud Foundry Apps Manager.

The file is by default placed in **.actuator** and is called **info.json**.

See [Express Actuator Middleware Example](https://github.com/stfsy/express-cloudfoundry-actuator-middleware-example) for an example application with full integration of this cli and [Express Cloud Foundry Actuator Middleware](https://github.com/stfsy/express-cloudfoundry-actuator-middleware).

## Installation

```
npm install node-cloudfoundry-actuator-cli --save
```

## Example

Add actuator script to your package.json:

```json
{
    "scripts": {
        "actuator": "cloudfoundry-actuator-cli --git --npm"
    }
}
```

Available options are:
- --git: Enables git repository information contribution
- --npm: Enables npm build information contribution
- --mvn: Enables maven build information contribution

No option is enabled by default.

Run **actuator** script:

```bash
npm run actuator
```

Voilà, see generated File **.actuator/info.json**:

```json
{
  "git": {
    "branch": "dev",
    "tag": null,
    "remote": {
      "origin": {
        "type": "git",
        "url": "https://github.com/stfsy/node-cloudfoundry-actuator-cli.git"
      }
    },
    "commit": {
      "id": "fdaea68f36",
      "time": "2017-11-03T10:58:12.000Z",
      "message": {
        "short": "chore: ignore vs code files"
      }
    },
    "user": {
      "email": "none@gmail.com"
    }
  },
  "build": {
    "name": "express-cloudfoundry-actuator-middleware",
    "version": "0.1.0",
    "description": "Express actuator middleware for Cloud Foundry Applications"
  }
}

```

## License

This project is distributed under the MIT license.
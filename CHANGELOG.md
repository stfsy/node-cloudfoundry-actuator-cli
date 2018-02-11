<a name="2.0.1"></a>
## [2.0.1](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v2.0.0...v2.0.1) (2018-02-11)


### Bug Fixes

* fix cli is not executable ([0ac24ee](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/0ac24ee))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v1.0.4...v2.0.0) (2017-11-24)


### Bug Fixes

* delete blank from shebang ([ff76c24](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/ff76c24))
* use correct dirname for contributor lookup ([64b5231](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/64b5231))
* use lowercase key names for env variables ([a38560d](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/a38560d))


### Features

* **bin/cli:** add mvn build info option ([e979534](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/e979534))
* **mvn.js:** return maven artifact info ([8539411](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/8539411))


### BREAKING CHANGES

* **bin/cli:** by default no build info will be collected. make sure
to add options like --git, --npm or --mvn to the actuator script



<a name="1.0.4"></a>
## [1.0.4](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v1.0.3...v1.0.4) (2017-11-15)


### Bug Fixes

* fix .git is not appended to git repo urls ([a13e21a](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/a13e21a))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v1.0.2...v1.0.3) (2017-11-14)


### Bug Fixes

* type error if repository not a obj with props ([53c5e79](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/53c5e79))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v1.0.1...v1.0.2) (2017-11-13)


### Bug Fixes

* **git.js:** fix reads wrong package json info ([63ff605](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/63ff605))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v1.0.0...v1.0.1) (2017-11-10)


### Bug Fixes

* fix commander is not a dependency ([4455435](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/4455435))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v0.4.0...v1.0.0) (2017-11-04)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v0.3.0...v0.4.0) (2017-10-28)


### Bug Fixes

* fix user is  not a property of commit ([08a75b9](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/08a75b9))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v0.2.0...v0.3.0) (2017-10-28)


### Features

* remove git+ from repo urls ([a9bfd09](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/a9bfd09))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/stfsy/node-cloudfoundry-actuator-cli/compare/v0.1.0...v0.2.0) (2017-10-28)


### Bug Fixes

* add missing commit id ([92ab4a1](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/92ab4a1))
* fix message does not contain short message ([3d4da33](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/3d4da33))
* fix remote origin url is undefined ([3f957c4](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/3f957c4))
* fix remote url does not end with .git ([f8f0f87](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/f8f0f87))


### Features

* add user email to info ([9f6354d](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/9f6354d))



<a name="0.1.0"></a>
# 0.1.0 (2017-10-27)


### Features

* add cli file ([d8bb879](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/d8bb879))
* **git.js:** add git info contributor ([2e70d00](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/2e70d00))
* **npm.js:** add npm info contributor ([04fb9ad](https://github.com/stfsy/node-cloudfoundry-actuator-cli/commit/04fb9ad))




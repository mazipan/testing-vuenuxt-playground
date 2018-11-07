# testing-nuxtjs-like-a-boss

[![Travis](https://img.shields.io/travis/mazipan/testing-nuxtjs-like-a-boss.svg)](https://travis-ci.org/mazipan/testing-nuxtjs-like-a-boss)
[![Codecov](https://codecov.io/gh/mazipan/testing-nuxtjs-like-a-boss/branch/master/graph/badge.svg)](https://codecov.io/gh/mazipan/testing-nuxtjs-like-a-boss)

> 🕺 Code to show how we can easily add unit test into our Nuxt project

## Why we need this code sample

Nuxt already have sample for creating unit test for it's project with [Ava](https://github.com/avajs), you can read [here](https://nuxtjs.org/examples/testing). But in this sample, we will treat Nuxt project as a pure Vue project. We create unit test using [@vue/test-utils](https://vue-test-utils.vuejs.org/) because it have many sample for solving many case in real world project, and move from Ava to Jest as our unit test runner.

## Sample application

This project is based on [vue-realworld-example-app](https://github.com/gothinkster/vue-realworld-example-app)

Demo application available in: [https://vue-vuex-realworld.netlify.com/](https://vue-vuex-realworld.netlify.com/)

Check code coverage on codecov in: [here](https://codecov.io/gh/mazipan/testing-nuxtjs-like-a-boss/branch/master)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate

# running unit test
$ yarn test
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

------

Copyright © 2018

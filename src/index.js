#! /usr/bin/env node

// @flow

/* eslint-disable no-console */

import processAls from './core'

const path = process.argv[2] || 'main.als'

processAls(path)

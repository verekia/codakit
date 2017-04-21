#! /usr/bin/env node

// @flow

/* eslint-disable no-console */

import { argv } from 'yargs'

import processAls from './core'

const path = argv._[0] || 'main.als'

processAls(path)

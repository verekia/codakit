#! /usr/bin/env node

// @flow

/* eslint-disable no-console */

import { argv } from 'yargs'

import processAls from './core'

const path = argv.file || 'main.als'

processAls(path)

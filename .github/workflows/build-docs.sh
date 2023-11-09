#!/bin/bash

- name: Install Node.js
uses: actions/setup-node@v2
with:
    node-version: '18' # Change this to the version of Node.js you need

- name: Install dependencies
run: npm install

- name: Build documentation
run: npm run build:docs

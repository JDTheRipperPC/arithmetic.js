# arithmetic.js

> Simple javascript arithmetic operations

## Table of Contents

## Install

This project uses [npm](https://www.npmjs.com/) as package manager. Go and check it out if you don't have it locally installed.

To install the lastest version from the master branch:

    $ npm install --save https://github.com/JDTheRipperPC/arithmetic.js/tree/master

## Usage

First import the arithmetic.js:

    import * as arithmetic from "arithmetic.js";

or require it:

    const arithmetic = require('arithmetic.js');

Use the `arithmetic.operations` to access the methods and attributes of an operation, calling `arithmetic.addition(a, b)` is meaningless since you can `a + b`.

    operation = arithmetic.operations.ADDITION;

    operation.operate(a, b);

    operation.entity_decimal;
    operation.entity_hex;
    operation.entity_named;


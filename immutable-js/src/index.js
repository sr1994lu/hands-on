/* @flow */
const { List, Map, Record, isCollection } = require('immutable');

const DataRecord = Record({a: 1, b: 2});

const data = new DataRecord({a: 1, b: 2, c: 3});

const x = data;
const y = data.toJSON();
const z = isCollection(data);

const zzz = {};

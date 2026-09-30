import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slug } from './slug.js';
test('lowercase words', () => assert.equal(slug('Hello World'), 'hello-world'));

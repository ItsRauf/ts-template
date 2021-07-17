import test from 'ava';
import { add } from './add';

test('add(1, 1) eql 2', t => {
  t.is(add(1, 1), 2);
});

test('add(2, 2) eql 4', t => {
  t.is(add(2, 2), 4);
});

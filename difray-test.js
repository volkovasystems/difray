
const assert = require( "assert" );
const difray = require( "./difray.js" );

assert.deepEqual( difray( "hello", "world" ), [ ], "should return empty array" );

assert.deepEqual( difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] ), [ 1, 2, 5, 6 ], "should be deeply equal" );

let test1 = difray( [ Array, Object ], [ Array, Object, Object, Date, RegExp ] );
assert.deepEqual( test1, [ Date, RegExp ], "should be deeply equal" );

console.log( "ok" );

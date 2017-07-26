
const assert = require( "assert" );
const difray = require( "./difray.js" );

assert.deepEqual( difray( "hello", "world" ), [ "hello", "world" ], "should return [ 'hello', 'world' ]" );

assert.deepEqual( difray( "hello", [ "hello", "world" ] ), [ "world" ], "should return [ 'world' ]" );

assert.deepEqual( difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] ), [ 1, 2, 5, 6 ], "should return [ 1, 2, 5, 6 ]" );

console.log( "ok" );

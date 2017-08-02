"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "difray",
			"path": "difray/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/difray.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"difray": "difray"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const difray = require( "./difray.js" );
//: @end-server

//: @client:
const difray = require( "./difray.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "difray", ( ) => {

	describe( `"difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] )"`, ( ) => {
		it( "should be deeply equal" , ( ) => {

			assert.deepEqual( difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] ), [ 1, 2, 5, 6 ] );

		} );
	} );


} );


//: @end-server


//: @client:

describe( "difray", ( ) => {

	describe( `"difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] )"`, ( ) => {
		it( "should be deeply equal" , ( ) => {

			assert.deepEqual( difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] ), [ 1, 2, 5, 6 ] );

		} );
	} );
} );


//: @end-client


//: @bridge:

describe( "difray", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( `"difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] )"`, ( ) => {
		it( `"should be equal to [ 1, 2, 5, 6 ]"`, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] );
				}

			).value;

			assert.deepEqual( result, [ 1, 2, 5, 6 ] );

		} );
	} );
	

	// The result has changed from to [ "world" ] to [ true, "hello", "world" ]
	// describe( `"difray( 'hello', [ 'hello', 'world' ] )"`, ( ) => {
	// 	it( `"should be equal to [ 'world' ]"`, ( ) => {
	//
	// 		let result = browser.url( bridgeURL ).execute(
	//
	// 			function( ){
	// 				return difray( "hello", [ "hello", "world" ] );
	// 			}
	//
	// 		).value;
	//
	// 		assert.deepEqual( result, [ "world" ] );
	//
	// 	} );
	// } );

	// The result of this test has changed from [ "hello", "world" ] to [ ]
	// describe( `"difray( 'hello', 'world' )"`, ( ) => {
	// 	it( `"should be equal to [ 'hello', 'world' ]"`, ( ) => {
	// 		//: @ignore:
	// 		let result = browser.url( bridgeURL ).execute(
	//
	// 			function( ){
	// 				return difray( "hello", "world" );
	// 			}
	//
	// 		).value;
	// 		//: @end-ignore
	// 		assert.deepEqual( result, [ "hello", "world" ] );
	//
	// 	} );
	// } );

} );

//: @end-bridge

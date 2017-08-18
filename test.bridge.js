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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("difray", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("\"difray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] )\"", function () {
		it("\"should be equal to [ 1, 2, 5, 6 ]\"", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return difray([1, 2, 3, 4], [3, 4, 5, 6]);
			}).

			value;

			assert.deepEqual(result, [1, 2, 5, 6]);

		});
	});


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

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImRpZnJheSIsInZhbHVlIiwiZGVlcEVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILDBEQUF3RCxZQUFPO0FBQzlESSw4Q0FBMkMsWUFBTzs7QUFFakQsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsT0FBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBUixFQUF3QixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBeEIsQ0FBUDtBQUNBLElBSlc7O0FBTVhDLFFBTkY7O0FBUUFiLFVBQU9jLFNBQVAsQ0FBa0JOLE1BQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUExQjs7QUFFQSxHQVpEO0FBYUEsRUFkRDs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7Ozs7OztBQVNBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0F6REQ7O0FBMkRBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImRpZnJheVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJkaWZyYXkvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RpZnJheS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImRpZnJheVwiOiBcImRpZnJheVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuZGVzY3JpYmUoIFwiZGlmcmF5XCIsICggKSA9PiB7XHJcblxyXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImRpZnJheSggWyAxLCAyLCAzLCA0IF0sIFsgMywgNCwgNSwgNiBdIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggYFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgNSwgNiBdXCJgLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBkaWZyYXkoIFsgMSwgMiwgMywgNCBdLCBbIDMsIDQsIDUsIDYgXSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgMSwgMiwgNSwgNiBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHRcclxuXHJcblx0Ly8gVGhlIHJlc3VsdCBoYXMgY2hhbmdlZCBmcm9tIHRvIFsgXCJ3b3JsZFwiIF0gdG8gWyB0cnVlLCBcImhlbGxvXCIsIFwid29ybGRcIiBdXHJcblx0Ly8gZGVzY3JpYmUoIGBcImRpZnJheSggJ2hlbGxvJywgWyAnaGVsbG8nLCAnd29ybGQnIF0gKVwiYCwgKCApID0+IHtcclxuXHQvLyBcdGl0KCBgXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAnd29ybGQnIF1cImAsICggKSA9PiB7XHJcblx0Ly9cclxuXHQvLyBcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cdC8vXHJcblx0Ly8gXHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0Ly8gXHRcdFx0XHRyZXR1cm4gZGlmcmF5KCBcImhlbGxvXCIsIFsgXCJoZWxsb1wiLCBcIndvcmxkXCIgXSApO1xyXG5cdC8vIFx0XHRcdH1cclxuXHQvL1xyXG5cdC8vIFx0XHQpLnZhbHVlO1xyXG5cdC8vXHJcblx0Ly8gXHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBcIndvcmxkXCIgXSApO1xyXG5cdC8vXHJcblx0Ly8gXHR9ICk7XHJcblx0Ly8gfSApO1xyXG5cclxuXHQvLyBUaGUgcmVzdWx0IG9mIHRoaXMgdGVzdCBoYXMgY2hhbmdlZCBmcm9tIFsgXCJoZWxsb1wiLCBcIndvcmxkXCIgXSB0byBbIF1cclxuXHQvLyBkZXNjcmliZSggYFwiZGlmcmF5KCAnaGVsbG8nLCAnd29ybGQnIClcImAsICggKSA9PiB7XHJcblx0Ly8gXHRpdCggYFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2hlbGxvJywgJ3dvcmxkJyBdXCJgLCAoICkgPT4ge1xyXG5cdC8vIFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0Ly8gXHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHQvL1xyXG5cdC8vIFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdC8vIFx0XHRcdFx0cmV0dXJuIGRpZnJheSggXCJoZWxsb1wiLCBcIndvcmxkXCIgKTtcclxuXHQvLyBcdFx0XHR9XHJcblx0Ly9cclxuXHQvLyBcdFx0KS52YWx1ZTtcclxuXHQvLyBcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdC8vIFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXCJoZWxsb1wiLCBcIndvcmxkXCIgXSApO1xyXG5cdC8vXHJcblx0Ly8gXHR9ICk7XHJcblx0Ly8gfSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map

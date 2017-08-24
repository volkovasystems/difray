"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "difray",
              			"path": "difray/difray.js",
              			"file": "difray.js",
              			"module": "difray",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/difray.git",
              			"test": "difray-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Array difference.
              
              		This will get the difference of target from source and vice versa.
              	@end-module-documentation
              
              	@include:
              		{
              			"apiqe": "apiqe",
              			"een": "een",
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var apiqe = require("apiqe");
var een = require("een");
var raze = require("raze");
var truly = require("truly");

var difray = function difray(source, target) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"source:required": "[*]",
                                              			"target:required": "[*]"
                                              		}
                                              	@end-meta-configuration
                                              */

	source = raze(source).filter(truly);

	target = raze(target).filter(truly);

	return apiqe(
	source.filter(function (element) {return !een(target, element);}),
	target.filter(function (element) {return !een(source, element);}));

};

module.exports = difray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZnJheS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFwaXFlIiwicmVxdWlyZSIsImVlbiIsInJhemUiLCJ0cnVseSIsImRpZnJheSIsInNvdXJjZSIsInRhcmdldCIsImZpbHRlciIsImVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxNQUF6QixFQUFpQztBQUMvQzs7Ozs7Ozs7O0FBU0FELFVBQVNILEtBQU1HLE1BQU4sRUFBZUUsTUFBZixDQUF1QkosS0FBdkIsQ0FBVDs7QUFFQUcsVUFBU0osS0FBTUksTUFBTixFQUFlQyxNQUFmLENBQXVCSixLQUF2QixDQUFUOztBQUVBLFFBQU9KO0FBQ05NLFFBQU9FLE1BQVAsQ0FBZSxVQUFFQyxPQUFGLFVBQWUsQ0FBQ1AsSUFBS0ssTUFBTCxFQUFhRSxPQUFiLENBQWhCLEVBQWYsQ0FETTtBQUVORixRQUFPQyxNQUFQLENBQWUsVUFBRUMsT0FBRixVQUFlLENBQUNQLElBQUtJLE1BQUwsRUFBYUcsT0FBYixDQUFoQixFQUFmLENBRk0sQ0FBUDs7QUFJQSxDQWxCRDs7QUFvQkFDLE9BQU9DLE9BQVAsR0FBaUJOLE1BQWpCIiwiZmlsZSI6ImRpZnJheS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaWZyYXlcIixcblx0XHRcdFwicGF0aFwiOiBcImRpZnJheS9kaWZyYXkuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRpZnJheS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkaWZyYXlcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RpZnJheS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImRpZnJheS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEFycmF5IGRpZmZlcmVuY2UuXG5cblx0XHRUaGlzIHdpbGwgZ2V0IHRoZSBkaWZmZXJlbmNlIG9mIHRhcmdldCBmcm9tIHNvdXJjZSBhbmQgdmljZSB2ZXJzYS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXBpcWVcIjogXCJhcGlxZVwiLFxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFwaXFlID0gcmVxdWlyZSggXCJhcGlxZVwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IGRpZnJheSA9IGZ1bmN0aW9uIGRpZnJheSggc291cmNlLCB0YXJnZXQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCJbKl1cIixcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCJbKl1cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0c291cmNlID0gcmF6ZSggc291cmNlICkuZmlsdGVyKCB0cnVseSApO1xuXG5cdHRhcmdldCA9IHJhemUoIHRhcmdldCApLmZpbHRlciggdHJ1bHkgKTtcblxuXHRyZXR1cm4gYXBpcWUoXG5cdFx0c291cmNlLmZpbHRlciggKCBlbGVtZW50ICkgPT4gIWVlbiggdGFyZ2V0LCBlbGVtZW50ICkgKSxcblx0XHR0YXJnZXQuZmlsdGVyKCAoIGVsZW1lbnQgKSA9PiAhZWVuKCBzb3VyY2UsIGVsZW1lbnQgKSApXG5cdCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZnJheTtcbiJdfQ==
//# sourceMappingURL=difray.support.js.map

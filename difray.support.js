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
              			"arid": "arid",
              			"doubt": "doubt",
              			"een": "een",
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var apiqe = require("apiqe");
var arid = require("arid");
var doubt = require("doubt");
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

	if (!doubt(source, AS_ARRAY)) {
		source = [source].map(truly);
	}

	if (!doubt(target, AS_ARRAY)) {
		target = [target].map(truly);
	}

	source = raze(source);

	target = raze(target);

	if (arid(source) && arid(target)) {
		return [];
	}

	if (arid(source)) {
		return target;
	}

	if (arid(target)) {
		return source;
	}

	return apiqe(source.filter(function (element) {return !een(target, element);}),
	target.filter(function (element) {return !een(source, element);}));
};

module.exports = difray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZnJheS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFwaXFlIiwicmVxdWlyZSIsImFyaWQiLCJkb3VidCIsImVlbiIsInJhemUiLCJ0cnVseSIsImRpZnJheSIsInNvdXJjZSIsInRhcmdldCIsIkFTX0FSUkFZIiwibWFwIiwiZmlsdGVyIiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxNQUFNSCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssUUFBUUwsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTU0sU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0M7Ozs7Ozs7OztBQVNBLEtBQUksQ0FBQ04sTUFBT0ssTUFBUCxFQUFlRSxRQUFmLENBQUwsRUFBZ0M7QUFDL0JGLFdBQVMsQ0FBRUEsTUFBRixFQUFXRyxHQUFYLENBQWdCTCxLQUFoQixDQUFUO0FBQ0E7O0FBRUQsS0FBSSxDQUFDSCxNQUFPTSxNQUFQLEVBQWVDLFFBQWYsQ0FBTCxFQUFnQztBQUMvQkQsV0FBUyxDQUFFQSxNQUFGLEVBQVdFLEdBQVgsQ0FBZ0JMLEtBQWhCLENBQVQ7QUFDQTs7QUFFREUsVUFBU0gsS0FBTUcsTUFBTixDQUFUOztBQUVBQyxVQUFTSixLQUFNSSxNQUFOLENBQVQ7O0FBRUEsS0FBSVAsS0FBTU0sTUFBTixLQUFrQk4sS0FBTU8sTUFBTixDQUF0QixFQUFzQztBQUNyQyxTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFJUCxLQUFNTSxNQUFOLENBQUosRUFBb0I7QUFDbkIsU0FBT0MsTUFBUDtBQUNBOztBQUVELEtBQUlQLEtBQU1PLE1BQU4sQ0FBSixFQUFvQjtBQUNuQixTQUFPRCxNQUFQO0FBQ0E7O0FBRUQsUUFBT1IsTUFBT1EsT0FBT0ksTUFBUCxDQUFlLFVBQUVDLE9BQUYsVUFBZSxDQUFDVCxJQUFLSyxNQUFMLEVBQWFJLE9BQWIsQ0FBaEIsRUFBZixDQUFQO0FBQ05KLFFBQU9HLE1BQVAsQ0FBZSxVQUFFQyxPQUFGLFVBQWUsQ0FBQ1QsSUFBS0ksTUFBTCxFQUFhSyxPQUFiLENBQWhCLEVBQWYsQ0FETSxDQUFQO0FBRUEsQ0FwQ0Q7O0FBc0NBQyxPQUFPQyxPQUFQLEdBQWlCUixNQUFqQiIsImZpbGUiOiJkaWZyYXkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaWZyYXlcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZGlmcmF5L2RpZnJheS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJkaWZyYXkuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJkaWZyYXlcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RpZnJheS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGlmcmF5LXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0QXJyYXkgZGlmZmVyZW5jZS5cclxuXHJcblx0XHRUaGlzIHdpbGwgZ2V0IHRoZSBkaWZmZXJlbmNlIG9mIHRhcmdldCBmcm9tIHNvdXJjZSBhbmQgdmljZSB2ZXJzYS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFwaXFlXCI6IFwiYXBpcWVcIixcclxuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXBpcWUgPSByZXF1aXJlKCBcImFwaXFlXCIgKTtcclxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcblxyXG5jb25zdCBkaWZyYXkgPSBmdW5jdGlvbiBkaWZyYXkoIHNvdXJjZSwgdGFyZ2V0ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCJbKl1cIixcclxuXHRcdFx0XHRcInRhcmdldDpyZXF1aXJlZFwiOiBcIlsqXVwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFkb3VidCggc291cmNlLCBBU19BUlJBWSApICl7XHJcblx0XHRzb3VyY2UgPSBbIHNvdXJjZSBdLm1hcCggdHJ1bHkgKTtcclxuXHR9XHJcblxyXG5cdGlmKCAhZG91YnQoIHRhcmdldCwgQVNfQVJSQVkgKSApe1xyXG5cdFx0dGFyZ2V0ID0gWyB0YXJnZXQgXS5tYXAoIHRydWx5ICk7XHJcblx0fVxyXG5cclxuXHRzb3VyY2UgPSByYXplKCBzb3VyY2UgKTtcclxuXHJcblx0dGFyZ2V0ID0gcmF6ZSggdGFyZ2V0ICk7XHJcblxyXG5cdGlmKCBhcmlkKCBzb3VyY2UgKSAmJiBhcmlkKCB0YXJnZXQgKSApe1xyXG5cdFx0cmV0dXJuIFsgXTtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmlkKCBzb3VyY2UgKSApe1xyXG5cdFx0cmV0dXJuIHRhcmdldDtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmlkKCB0YXJnZXQgKSApe1xyXG5cdFx0cmV0dXJuIHNvdXJjZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhcGlxZSggc291cmNlLmZpbHRlciggKCBlbGVtZW50ICkgPT4gIWVlbiggdGFyZ2V0LCBlbGVtZW50ICkgKSxcclxuXHRcdHRhcmdldC5maWx0ZXIoICggZWxlbWVudCApID0+ICFlZW4oIHNvdXJjZSwgZWxlbWVudCApICkgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGlmcmF5O1xyXG4iXX0=
//# sourceMappingURL=difray.support.js.map

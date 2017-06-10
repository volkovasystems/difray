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
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
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

//# sourceMappingURL=difray.support.js.map
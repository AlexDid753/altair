/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/assets/js/libs/bootstrap.min.js":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
      if (void 0 !== a.style[c]) return { end: b[c] };
    }return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
      } });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);if (i.length) {
          var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function g() {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;if (!a) {
      var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
    }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
        h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function c(b) {
    this.element = a(b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);

/***/ }),

/***/ "./resources/assets/js/libs/jquery-3.2.1.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == "function" && __webpack_require__("./node_modules/webpack/buildin/amd-options.js") && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return r;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/libs/jquery-ui.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery UI - v1.12.1 - 2016-11-06
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(jQuery);
})(function (t) {
  function e(t) {
    for (var e = t.css("visibility"); "inherit" === e;) {
      t = t.parent(), e = t.css("visibility");
    }return "hidden" !== e;
  }function i(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;t = t.parent();
    }return 0;
  }function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }function n(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout", i, function () {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
    }).on("mouseover", i, o);
  }function o() {
    t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
  }function a(e, i) {
    t.extend(e, i);for (var s in i) {
      null == i[s] && (e[s] = i[s]);
    }return e;
  }function r(t) {
    return function () {
      var e = this.element.val();t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
    };
  }t.ui = t.ui || {}, t.ui.version = "1.12.1";var h = 0,
      l = Array.prototype.slice;t.cleanData = function (e) {
    return function (i) {
      var s, n, o;for (o = 0; null != (n = i[o]); o++) {
        try {
          s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      }e(i);
    };
  }(t.cleanData), t.widget = function (e, i, s) {
    var n,
        o,
        a,
        r = {},
        h = e.split(".")[0];e = e.split(".")[1];var l = h + "-" + e;return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function (e) {
      return !!t.data(e, l);
    }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function (t, e) {
      return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
    }, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
      return t.isFunction(s) ? (r[e] = function () {
        function t() {
          return i.prototype[e].apply(this, arguments);
        }function n(t) {
          return i.prototype[e].apply(this, t);
        }return function () {
          var e,
              i = this._super,
              o = this._superApply;return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
        };
      }(), void 0) : (r[e] = s, void 0);
    }), o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: h, widgetName: e, widgetFullName: l }), n ? (t.each(n._childConstructors, function (e, i) {
      var s = i.prototype;t.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
  }, t.widget.extend = function (e) {
    for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++) {
      for (i in n[o]) {
        s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
      }
    }return e;
  }, t.widget.bridge = function (e, i) {
    var s = i.prototype.widgetFullName || e;t.fn[e] = function (n) {
      var o = "string" == typeof n,
          a = l.call(arguments, 1),
          r = this;return o ? this.length || "instance" !== n ? this.each(function () {
        var i,
            o = t.data(this, s);return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
      }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
        var e = t.data(this, s);e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
      })), r;
    };
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function _createWidget(e, i) {
      i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(t) {
          t.target === i && this.destroy();
        } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    }, _getCreateOptions: function _getCreateOptions() {
      return {};
    }, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function destroy() {
      var e = this;this._destroy(), t.each(this.classesElementLookup, function (t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    }, _destroy: t.noop, widget: function widget() {
      return this.element;
    }, option: function option(e, i) {
      var s,
          n,
          o,
          a = e;if (0 === arguments.length) return t.widget.extend({}, this.options);if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
          n[s[o]] = n[s[o]] || {}, n = n[s[o]];
        }if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];n[e] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];a[e] = i;
      }return this._setOptions(a), this;
    }, _setOptions: function _setOptions(t) {
      var e;for (e in t) {
        this._setOption(e, t[e]);
      }return this;
    }, _setOption: function _setOption(t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    }, _setOptionClasses: function _setOptionClasses(e) {
      var i, s, n;for (i in e) {
        n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 })));
      }
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    }, enable: function enable() {
      return this._setOptions({ disabled: !1 });
    }, disable: function disable() {
      return this._setOptions({ disabled: !0 });
    }, _classes: function _classes(e) {
      function i(i, o) {
        var a, r;for (r = 0; i.length > r; r++) {
          a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
      }var s = [],
          n = this;return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
    }, _untrackClassesElement: function _untrackClassesElement(e) {
      var i = this;t.each(i.classesElementLookup, function (s, n) {
        -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    }, _removeClass: function _removeClass(t, e, i) {
      return this._toggleClass(t, e, i, !1);
    }, _addClass: function _addClass(t, e, i) {
      return this._toggleClass(t, e, i, !0);
    }, _toggleClass: function _toggleClass(t, e, i, s) {
      s = "boolean" == typeof s ? s : i;var n = "string" == typeof t || null === t,
          o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };return o.element.toggleClass(this._classes(o), s), this;
    }, _on: function _on(e, i, s) {
      var n,
          o = this;"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
        function r() {
          return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
        }"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + o.eventNamespace,
            u = h[2];u ? n.on(l, u, r) : i.on(l, r);
      });
    }, _off: function _off(e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
    }, _delay: function _delay(t, e) {
      function i() {
        return ("string" == typeof t ? s[t] : t).apply(s, arguments);
      }var s = this;return setTimeout(i, e || 0);
    }, _hoverable: function _hoverable(e) {
      this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function mouseenter(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-hover");
        }, mouseleave: function mouseleave(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-hover");
        } });
    }, _focusable: function _focusable(e) {
      this.focusable = this.focusable.add(e), this._on(e, { focusin: function focusin(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-focus");
        }, focusout: function focusout(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-focus");
        } });
    }, _trigger: function _trigger(e, i, s) {
      var n,
          o,
          a = this.options[e];if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
        n in i || (i[n] = o[n]);
      }return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    } }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
    t.Widget.prototype["_" + e] = function (s, n, o) {
      "string" == typeof n && (n = { effect: n });var a,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  }), t.widget, function () {
    function e(t, e, i) {
      return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)];
    }function i(e, i) {
      return parseInt(t.css(e, i), 10) || 0;
    }function s(e) {
      var i = e[0];return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
    }var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        h = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        u = /^\w+/,
        c = /%$/,
        d = t.fn.position;t.position = { scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== n) return n;var e,
            i,
            s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
      }, getScrollInfo: function getScrollInfo(e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;return { width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 };
      }, getWithinInfo: function getWithinInfo(e) {
        var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;return { element: i, isWindow: s, isDocument: n, offset: o ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() };
      } }, t.fn.position = function (n) {
      if (!n || !n.of) return d.apply(this, arguments);n = t.extend({}, n);var c,
          p,
          f,
          m,
          g,
          v,
          _ = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          x = {};return v = s(_), _[0].preventDefault && (n.at = "left top"), p = v.width, f = v.height, m = v.offset, g = t.extend({}, m), t.each(["my", "at"], function () {
        var t,
            e,
            i = (n[this] || "").split(" ");1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [u.exec(i[0])[0], u.exec(i[1])[0]];
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? g.left += p : "center" === n.at[0] && (g.left += p / 2), "bottom" === n.at[1] ? g.top += f : "center" === n.at[1] && (g.top += f / 2), c = e(x.at, p, f), g.left += c[0], g.top += c[1], this.each(function () {
        var s,
            r,
            h = t(this),
            l = h.outerWidth(),
            u = h.outerHeight(),
            d = i(this, "marginLeft"),
            v = i(this, "marginTop"),
            k = l + d + i(this, "marginRight") + y.width,
            C = u + v + i(this, "marginBottom") + y.height,
            D = t.extend({}, g),
            T = e(x.my, h.outerWidth(), h.outerHeight());"right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= u : "center" === n.my[1] && (D.top -= u / 2), D.left += T[0], D.top += T[1], s = { marginLeft: d, marginTop: v }, t.each(["left", "top"], function (e, i) {
          t.ui.position[w[e]] && t.ui.position[w[e]][i](D, { targetWidth: p, targetHeight: f, elemWidth: l, elemHeight: u, collisionPosition: s, collisionWidth: k, collisionHeight: C, offset: [c[0] + T[0], c[1] + T[1]], my: n.my, at: n.at, within: b, elem: h });
        }), n.using && (r = function r(t) {
          var e = m.left - D.left,
              i = e + p - l,
              s = m.top - D.top,
              r = s + f - u,
              c = { target: { element: _, left: m.left, top: m.top, width: p, height: f }, element: { element: h, left: D.left, top: D.top, width: l, height: u }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle" };l > p && p > a(e + i) && (c.horizontal = "center"), u > f && f > a(s + r) && (c.vertical = "middle"), c.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, c);
        }), h.offset(t.extend(D, { using: r }));
      });
    }, t.ui.position = { fit: { left: function left(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              h = n - r,
              l = r + e.collisionWidth - a - n;e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left);
        }, top: function top(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              h = n - r,
              l = r + e.collisionHeight - a - n;e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top);
        } }, flip: { left: function left(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = t.left - e.collisionPosition.marginLeft,
              u = l - h,
              c = l + e.collisionWidth - r - h,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];0 > u ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(u) > i) && (t.left += d + p + f)) : c > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || c > a(s)) && (t.left += d + p + f));
        }, top: function top(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = t.top - e.collisionPosition.marginTop,
              u = l - h,
              c = l + e.collisionHeight - r - h,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              m = -2 * e.offset[1];0 > u ? (s = t.top + p + f + m + e.collisionHeight - r - o, (0 > s || a(u) > s) && (t.top += p + f + m)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, (i > 0 || c > a(i)) && (t.top += p + f + m));
        } }, flipfit: { left: function left() {
          t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
        }, top: function top() {
          t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
        } } };
  }(), t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
      return function (i) {
        return !!t.data(i, e);
      };
    }) : function (e, i, s) {
      return !!t.data(e, s[3]);
    } }), t.fn.extend({ disableSelection: function () {
      var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";return function () {
        return this.on(t + ".ui-disableSelection", function (t) {
          t.preventDefault();
        });
      };
    }(), enableSelection: function enableSelection() {
      return this.off(".ui-disableSelection");
    } }), t.ui.focusable = function (i, s) {
    var n,
        o,
        a,
        r,
        h,
        l = i.nodeName.toLowerCase();return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)));
  }, t.extend(t.expr[":"], { focusable: function focusable(e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"));
    } }), t.ui.focusable, t.fn.form = function () {
    return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
  }, t.ui.formResetMixin = { _formResetHandler: function _formResetHandler() {
      var e = t(this);setTimeout(function () {
        var i = e.data("ui-form-reset-instances");t.each(i, function () {
          this.refresh();
        });
      });
    }, _bindFormResetHandler: function _bindFormResetHandler() {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data("ui-form-reset-instances") || [];t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t);
      }
    }, _unbindFormResetHandler: function _unbindFormResetHandler() {
      if (this.form.length) {
        var e = this.form.data("ui-form-reset-instances");e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
      }
    } }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
    function s(e, i, s, o) {
      return t.each(n, function () {
        i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
      }), i;
    }var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        o = i.toLowerCase(),
        a = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };t.fn["inner" + i] = function (e) {
      return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
        t(this).css(o, s(this, e) + "px");
      });
    }, t.fn["outer" + i] = function (e, n) {
      return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
        t(this).css(o, s(this, e, !0, n) + "px");
      });
    };
  }), t.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  }), t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function () {
    var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function (e) {
      return e.replace(t, "\\$1");
    };
  }(), t.fn.labels = function () {
    var e, i, s, n, o;return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n));
  }, t.fn.scrollParent = function (e) {
    var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents().filter(function () {
      var e = t(this);return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
    }).eq(0);return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
  }, t.extend(t.expr[":"], { tabbable: function tabbable(e) {
      var i = t.attr(e, "tabindex"),
          s = null != i;return (!s || i >= 0) && t.ui.focusable(e, s);
    } }), t.fn.extend({ uniqueId: function () {
      var t = 0;return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++t);
        });
      };
    }(), removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
      });
    } }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var u = !1;t(document).on("mouseup", function () {
    u = !1;
  }), t.widget("ui.mouse", { version: "1.12.1", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function _mouseInit() {
      var e = this;this.element.on("mousedown." + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).on("click." + this.widgetName, function (i) {
        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    }, _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function _mouseDown(e) {
      if (!u) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;var i = this,
            s = 1 === e.which,
            n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return i._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return i._mouseUp(t);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), u = !0, !0)) : !0;
      }
    }, _mouseMove: function _mouseMove(e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    }, _mouseUp: function _mouseUp(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, u = !1, e.preventDefault();
    }, _mouseDistanceMet: function _mouseDistanceMet(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    }, _mouseStart: function _mouseStart() {}, _mouseDrag: function _mouseDrag() {}, _mouseStop: function _mouseStop() {}, _mouseCapture: function _mouseCapture() {
      return !0;
    } }), t.ui.plugin = { add: function add(e, i, s) {
      var n,
          o = t.ui[e].prototype;for (n in s) {
        o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]);
      }
    }, call: function call(t, e, i, s) {
      var n,
          o = t.plugins[e];if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) {
        t.options[o[n][0]] && o[n][1].apply(t.element, i);
      }
    } }, t.ui.safeActiveElement = function (t) {
    var e;try {
      e = t.activeElement;
    } catch (i) {
      e = t.body;
    }return e || (e = t.body), e.nodeName || (e = t.body), e;
  }, t.ui.safeBlur = function (e) {
    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
  }, t.widget("ui.draggable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
    }, _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
    }, _destroy: function _destroy() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
    }, _mouseCapture: function _mouseCapture(e) {
      var i = this.options;return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
    }, _blockFrames: function _blockFrames(e) {
      this.iframeBlocks = this.document.find(e).map(function () {
        var e = t(this);return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
      });
    }, _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _blurActiveElement: function _blurActiveElement(e) {
      var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);s.closest(i).length || t.ui.safeBlur(i);
    }, _mouseStart: function _mouseStart(e) {
      var i = this.options;return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === t(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
    }, _refreshOffsets: function _refreshOffsets(t) {
      this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top };
    }, _mouseDrag: function _mouseDrag(e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;this.position = s.position;
      }return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
    }, _mouseStop: function _mouseStop(e) {
      var i = this,
          s = !1;return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger("stop", e) !== !1 && i._clear();
      }) : this._trigger("stop", e) !== !1 && this._clear(), !1;
    }, _mouseUp: function _mouseUp(e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
    }, cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this;
    }, _getHandle: function _getHandle(e) {
      return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
    }, _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
    }, _removeHandleClassName: function _removeHandleClassName() {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    }, _createHelper: function _createHelper(e) {
      var i = this.options,
          s = t.isFunction(i.helper),
          n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
    }, _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    }, _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    }, _isRootNode: function _isRootNode(t) {
      return (/(html|body)/i.test(t.tagName) || t === this.document[0]
      );
    }, _getParentOffset: function _getParentOffset() {
      var e = this.offsetParent.offset(),
          i = this.document[0];return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return { top: 0, left: 0 };var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) };
    }, _cacheMargins: function _cacheMargins() {
      this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 };
    }, _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function _setContainment() {
      var e,
          i,
          s,
          n = this.options,
          o = this.document[0];return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
    }, _convertPositionTo: function _convertPositionTo(t, e) {
      e || (e = this.position);var i = "absolute" === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i };
    }, _generatePosition: function _generatePosition(t, e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = t.pageX,
          l = t.pageY;return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) };
    }, _clear: function _clear() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    }, _trigger: function _trigger(e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s);
    }, plugins: {}, _uiHash: function _uiHash() {
      return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    } }), t.ui.plugin.add("draggable", "connectToSortable", { start: function start(e, i, s) {
      var n = t.extend({}, i, { item: s.element });s.sortables = [], t(s.options.connectToSortable).each(function () {
        var i = t(this).sortable("instance");i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
      });
    }, stop: function stop(e, i, s) {
      var n = t.extend({}, i, { item: s.element });s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
        var t = this;t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n));
      });
    }, drag: function drag(e, i, s) {
      t.each(s.sortables, function () {
        var n = !1,
            o = this;o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n;
        })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
          return i.helper[0];
        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
          this.refreshPositions();
        }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
          this.refreshPositions();
        }));
      });
    } }), t.ui.plugin.add("draggable", "cursor", { start: function start(e, i, s) {
      var n = t("body"),
          o = s.options;n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
    }, stop: function stop(e, i, s) {
      var n = s.options;n._cursor && t("body").css("cursor", n._cursor);
    } }), t.ui.plugin.add("draggable", "opacity", { start: function start(e, i, s) {
      var n = t(i.helper),
          o = s.options;n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
    }, stop: function stop(e, i, s) {
      var n = s.options;n._opacity && t(i.helper).css("opacity", n._opacity);
    } }), t.ui.plugin.add("draggable", "scroll", { start: function start(t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    }, drag: function drag(e, i, s) {
      var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
    } }), t.ui.plugin.add("draggable", "snap", { start: function start(e, i, s) {
      var n = s.options;s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var e = t(this),
            i = e.offset();this !== s.element[0] && s.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left });
      });
    }, drag: function drag(e, i, s) {
      var n,
          o,
          a,
          r,
          h,
          l,
          u,
          c,
          d,
          p,
          f = s.options,
          m = f.snapTolerance,
          g = i.offset.left,
          v = g + s.helperProportions.width,
          _ = i.offset.top,
          b = _ + s.helperProportions.height;for (d = s.snapElements.length - 1; d >= 0; d--) {
        h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, u = s.snapElements[d].top - s.margins.top, c = u + s.snapElements[d].height, h - m > v || g > l + m || u - m > b || _ > c + m || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), o = m >= Math.abs(c - _), a = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: c, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - _), o = m >= Math.abs(c - b), a = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: c - s.helperProportions.height, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = n || o || a || r || p);
      }
    } }), t.ui.plugin.add("draggable", "stack", { start: function start(e, i, s) {
      var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
      });a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
        t(this).css("zIndex", n + e);
      }), this.css("zIndex", n + a.length));
    } }), t.ui.plugin.add("draggable", "zIndex", { start: function start(e, i, s) {
      var n = t(i.helper),
          o = s.options;n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
    }, stop: function stop(e, i, s) {
      var n = s.options;n._zIndex && t(i.helper).css("zIndex", n._zIndex);
    } }), t.ui.draggable, t.widget("ui.droppable", { version: "1.12.1", widgetEventPrefix: "drop", options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function _create() {
      var e,
          i = this.options,
          s = i.accept;this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
        return t.is(s);
      }, this.proportions = function () {
        return arguments.length ? (e = arguments[0], void 0) : e ? e : e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };
      }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
    }, _addToManager: function _addToManager(e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
    }, _splice: function _splice(t) {
      for (var e = 0; t.length > e; e++) {
        t[e] === this && t.splice(e, 1);
      }
    }, _destroy: function _destroy() {
      var e = t.ui.ddmanager.droppables[this.options.scope];this._splice(e);
    }, _setOption: function _setOption(e, i) {
      if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
        return t.is(i);
      };else if ("scope" === e) {
        var s = t.ui.ddmanager.droppables[this.options.scope];this._splice(s), this._addToManager(i);
      }this._super(e, i);
    }, _activate: function _activate(e) {
      var i = t.ui.ddmanager.current;this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
    }, _deactivate: function _deactivate(e) {
      var i = t.ui.ddmanager.current;this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
    }, _over: function _over(e) {
      var i = t.ui.ddmanager.current;i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
    }, _out: function _out(e) {
      var i = t.ui.ddmanager.current;i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
    }, _drop: function _drop(e, i) {
      var s = i || t.ui.ddmanager.current,
          n = !1;return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var i = t(this).droppable("instance");return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && c(s, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e) ? (n = !0, !1) : void 0;
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1;
    }, ui: function ui(t) {
      return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs };
    }, _addHoverClass: function _addHoverClass() {
      this._addClass("ui-droppable-hover");
    }, _removeHoverClass: function _removeHoverClass() {
      this._removeClass("ui-droppable-hover");
    }, _addActiveClass: function _addActiveClass() {
      this._addClass("ui-droppable-active");
    }, _removeActiveClass: function _removeActiveClass() {
      this._removeClass("ui-droppable-active");
    } });var c = t.ui.intersect = function () {
    function t(t, e, i) {
      return t >= e && e + i > t;
    }return function (e, i, s, n) {
      if (!i.offset) return !1;var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          a = (e.positionAbs || e.position.absolute).top + e.margins.top,
          r = o + e.helperProportions.width,
          h = a + e.helperProportions.height,
          l = i.offset.left,
          u = i.offset.top,
          c = l + i.proportions().width,
          d = u + i.proportions().height;switch (s) {case "fit":
          return o >= l && c >= r && a >= u && d >= h;case "intersect":
          return o + e.helperProportions.width / 2 > l && c > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > u && d > h - e.helperProportions.height / 2;case "pointer":
          return t(n.pageY, u, i.proportions().height) && t(n.pageX, l, i.proportions().width);case "touch":
          return (a >= u && d >= a || h >= u && d >= h || u > a && h > d) && (o >= l && c >= o || r >= l && c >= r || l > o && r > c);default:
          return !1;}
    };
  }();t.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function prepareOffsets(e, i) {
      var s,
          n,
          o = t.ui.ddmanager.droppables[e.options.scope] || [],
          a = i ? i.type : null,
          r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();t: for (s = 0; o.length > s; s++) {
        if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
          for (n = 0; r.length > n; n++) {
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;continue t;
            }
          }o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight }));
        }
      }
    }, drop: function drop(e, i) {
      var s = !1;return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && c(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
      }), s;
    }, dragStart: function dragStart(e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    }, drag: function drag(e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s,
              n,
              o,
              a = c(e, this, this.options.tolerance, i),
              r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
            return t(this).droppable("instance").options.scope === n;
          }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
        }
      });
    }, dragStop: function dragStop(e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    } }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function _addActiveClass() {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
    }, _removeActiveClass: function _removeActiveClass() {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
    }, _addHoverClass: function _addHoverClass() {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
    }, _removeHoverClass: function _removeHoverClass() {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
    } }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function _num(t) {
      return parseFloat(t) || 0;
    }, _isNumber: function _isNumber(t) {
      return !isNaN(parseFloat(t));
    }, _hasScroll: function _hasScroll(e, i) {
      if ("hidden" === t(e).css("overflow")) return !1;var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n);
    }, _create: function _create() {
      var e,
          i = this.options,
          s = this;this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
        i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show());
      }).on("mouseleave", function () {
        i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide());
      }), this._mouseInit();
    }, _destroy: function _destroy() {
      this._mouseDestroy();var e,
          i = function i(e) {
        t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
      };return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    }, _setOption: function _setOption(t, e) {
      switch (this._super(t, e), t) {case "handles":
          this._removeHandles(), this._setupHandles();break;default:}
    }, _setupHandles: function _setupHandles() {
      var e,
          i,
          s,
          n,
          o,
          a = this.options,
          r = this;if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) {
        e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({ zIndex: a.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
      }this._renderAxis = function (e) {
        var i, s, n, o;e = e || this.element;for (i in this.handles) {
          this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: r._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
        }
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
        r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se");
      }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    }, _removeHandles: function _removeHandles() {
      this._handles.remove();
    }, _mouseCapture: function _mouseCapture(e) {
      var i,
          s,
          n = !1;for (i in this.handles) {
        s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
      }return !this.options.disabled && n;
    }, _mouseStart: function _mouseStart(e) {
      var i,
          s,
          n,
          o = this.options,
          a = this.element;return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: a.width(), height: a.height() }, this.originalSize = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }, this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0;
    }, _mouseDrag: function _mouseDrag(e) {
      var i,
          s,
          n = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - n.left || 0,
          r = e.pageY - n.top || 0,
          h = this._change[o];return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1;
    }, _mouseStop: function _mouseStop(e) {
      this.resizing = !1;var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.options,
          u = this;return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = s ? 0 : u.sizeDiff.width, a = { width: u.helper.width() - o, height: u.helper.height() - n }, r = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null, h = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1;
    }, _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height };
    }, _applyChanges: function _applyChanges() {
      var t = {};return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t;
    }, _updateVirtualBoundaries: function _updateVirtualBoundaries(t) {
      var e,
          i,
          s,
          n,
          o,
          a = this.options;o = { minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0, maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0, minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0, maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o;
    }, _updateCache: function _updateCache(t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width);
    }, _updateRatio: function _updateRatio(t) {
      var e = this.position,
          i = this.size,
          s = this.axis;return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t;
    }, _respectSize: function _respectSize(t) {
      var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          u = /nw|ne|n/.test(i);return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && u && (t.top = h - e.minHeight), n && u && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t;
    }, _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(t) {
      for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) {
        i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
      }return { height: i[0] + i[2], width: i[1] + i[3] };
    }, _proportionallyResize: function _proportionallyResize() {
      if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) {
        t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 });
      }
    }, _renderProxy: function _renderProxy() {
      var e = this.element,
          i = this.options;this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    }, _change: { e: function e(t, _e) {
        return { width: this.originalSize.width + _e };
      }, w: function w(t, e) {
        var i = this.originalSize,
            s = this.originalPosition;return { left: s.left + e, width: i.width - e };
      }, n: function n(t, e, i) {
        var s = this.originalSize,
            n = this.originalPosition;return { top: n.top + i, height: s.height - i };
      }, s: function s(t, e, i) {
        return { height: this.originalSize.height + i };
      }, se: function se(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
      }, sw: function sw(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
      }, ne: function ne(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
      }, nw: function nw(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
      } }, _propagate: function _propagate(e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui());
    }, plugins: {}, ui: function ui() {
      return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
    } }), t.ui.plugin.add("resizable", "animate", { stop: function stop(e) {
      var i = t(this).resizable("instance"),
          s = i.options,
          n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName),
          a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          h = { width: i.size.width - r, height: i.size.height - a },
          l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;i.element.animate(t.extend(h, u && l ? { top: u, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function step() {
          var s = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };n && n.length && t(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", e);
        } });
    } }), t.ui.plugin.add("resizable", "containment", { start: function start() {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = t(this).resizable("instance"),
          l = h.options,
          u = h.element,
          c = l.containment,
          d = c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;d && (h.containerElement = t(d), /document/.test(c) || c === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
        i[t] = h._num(e.css("padding" + s));
      }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = { element: d, left: s.left, top: s.top, width: a, height: r }));
    }, resize: function resize(e) {
      var i,
          s,
          n,
          o,
          a = t(this).resizable("instance"),
          r = a.options,
          h = a.containerOffset,
          l = a.position,
          u = a._aspectRatio || e.shiftKey,
          c = { top: 0, left: 0 },
          d = a.containerElement,
          p = !0;d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - c.left), u && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), u && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - c.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - c.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, u && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, u && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
    }, stop: function stop() {
      var e = t(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          h = a.outerWidth() - e.sizeDiff.width,
          l = a.outerHeight() - e.sizeDiff.height;e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l });
    } }), t.ui.plugin.add("resizable", "alsoResize", { start: function start() {
      var e = t(this).resizable("instance"),
          i = e.options;t(i.alsoResize).each(function () {
        var e = t(this);e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) });
      });
    }, resize: function resize(e, i) {
      var s = t(this).resizable("instance"),
          n = s.options,
          o = s.originalSize,
          a = s.originalPosition,
          r = { height: s.size.height - o.height || 0, width: s.size.width - o.width || 0, top: s.position.top - a.top || 0, left: s.position.left - a.left || 0 };
      t(n.alsoResize).each(function () {
        var e = t(this),
            s = t(this).data("ui-resizable-alsoresize"),
            n = {},
            o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];t.each(o, function (t, e) {
          var i = (s[e] || 0) + (r[e] || 0);i && i >= 0 && (n[e] = i || null);
        }), e.css(n);
      });
    }, stop: function stop() {
      t(this).removeData("ui-resizable-alsoresize");
    } }), t.ui.plugin.add("resizable", "ghost", { start: function start() {
      var e = t(this).resizable("instance"),
          i = e.size;e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper);
    }, resize: function resize() {
      var e = t(this).resizable("instance");e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width });
    }, stop: function stop() {
      var e = t(this).resizable("instance");e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
    } }), t.ui.plugin.add("resizable", "grid", { resize: function resize() {
      var e,
          i = t(this).resizable("instance"),
          s = i.options,
          n = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          u = h[1] || 1,
          c = Math.round((n.width - o.width) / l) * l,
          d = Math.round((n.height - o.height) / u) * u,
          p = o.width + c,
          f = o.height + d,
          m = s.maxWidth && p > s.maxWidth,
          g = s.maxHeight && f > s.maxHeight,
          v = s.minWidth && s.minWidth > p,
          _ = s.minHeight && s.minHeight > f;s.grid = h, v && (p += l), _ && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - c) : ((0 >= f - u || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = u - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - c) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p));
    } }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, { version: "1.12.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function _create() {
      var e = this;this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
          var i = t(this),
              s = i.offset(),
              n = { left: s.left - e.elementPos.left, top: s.top - e.elementPos.top };t.data(this, "selectable-item", { element: this, $element: i, left: n.left, top: n.top, right: n.left + i.outerWidth(), bottom: n.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") });
        });
      }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
    }, _destroy: function _destroy() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy();
    }, _mouseStart: function _mouseStart(e) {
      var i = this,
          s = this.options;this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var s = t.data(this, "selectable-item");s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, { unselecting: s.element }));
      }), t(e.target).parents().addBack().each(function () {
        var s,
            n = t.data(this, "selectable-item");return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, { selecting: n.element }) : i._trigger("unselecting", e, { unselecting: n.element }), !1) : void 0;
      }));
    }, _mouseDrag: function _mouseDrag(e) {
      if (this.dragged = !0, !this.options.disabled) {
        var i,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY;return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({ left: o, top: a, width: r - o, height: h - a }), this.selectees.each(function () {
          var i = t.data(this, "selectable-item"),
              l = !1,
              u = {};i && i.element !== s.element[0] && (u.left = i.left + s.elementPos.left, u.right = i.right + s.elementPos.left, u.top = i.top + s.elementPos.top, u.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(u.left > r || o > u.right || u.top > h || a > u.bottom) : "fit" === n.tolerance && (l = u.left > o && r > u.right && u.top > a && h > u.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, { unselecting: i.element })))));
        }), !1;
      }
    }, _mouseStop: function _mouseStop(e) {
      var i = this;return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
        var s = t.data(this, "selectable-item");i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, { unselected: s.element });
      }), t(".ui-selecting", this.element[0]).each(function () {
        var s = t.data(this, "selectable-item");i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, { selected: s.element });
      }), this._trigger("stop", e), this.helper.remove(), !1;
    } }), t.widget("ui.sortable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function _isOverAxis(t, e, i) {
      return t >= e && e + i > t;
    }, _isFloating: function _isFloating(t) {
      return (/left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
      );
    }, _create: function _create() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    }, _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName();
    }, _setHandleClassName: function _setHandleClassName() {
      var e = this;this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
        e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    }, _destroy: function _destroy() {
      this._mouseDestroy();for (var t = this.items.length - 1; t >= 0; t--) {
        this.items[t].item.removeData(this.widgetName + "-item");
      }return this;
    }, _mouseCapture: function _mouseCapture(e, i) {
      var s = null,
          n = !1,
          o = this;return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
        return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
      }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
        this === e.target && (n = !0);
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
    }, _mouseStart: function _mouseStart(e, i, s) {
      var n,
          o,
          a = this.options;if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) {
        this.containers[n]._trigger("activate", e, this._uiHash(this));
      }return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0;
    }, _mouseDrag: function _mouseDrag(e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = !1;for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
        if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;this._rearrange(e, s), this._trigger("change", e, this._uiHash());break;
        }
      }return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    }, _mouseStop: function _mouseStop(e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(e);
          });
        } else this._clear(e, i);return !1;
      }
    }, cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp(new t.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();for (var e = this.containers.length - 1; e >= 0; e--) {
          this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
        }
      }return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
    }, serialize: function serialize(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];return e = e || {}, t(i).each(function () {
        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
      }), !s.length && e.key && s.push(e.key + "="), s.join("&");
    }, toArray: function toArray(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];return e = e || {}, i.each(function () {
        s.push(t(e.item || this).attr(e.attribute || "id") || "");
      }), s;
    }, _intersectsWith: function _intersectsWith(t) {
      var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          u = this.offset.click.left,
          c = "x" === this.options.axis || s + l > r && h > s + l,
          d = "y" === this.options.axis || e + u > o && a > e + u,
          p = c && d;return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
    }, _intersectsWithPointer: function _intersectsWithPointer(t) {
      var e,
          i,
          s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          o = s && n;return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1;
    }, _intersectsWithSides: function _intersectsWithSides(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e);
    }, _getDragVerticalDirection: function _getDragVerticalDirection() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;return 0 !== t && (t > 0 ? "down" : "up");
    }, _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;return 0 !== t && (t > 0 ? "right" : "left");
    }, refresh: function refresh(t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
    }, _connectWith: function _connectWith() {
      var t = this.options;return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
    }, _getItemsAsjQuery: function _getItemsAsjQuery(e) {
      function i() {
        r.push(this);
      }var s,
          n,
          o,
          a,
          r = [],
          h = [],
          l = this._connectWith();if (l && e) for (s = l.length - 1; s >= 0; s--) {
        for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) {
          a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
        }
      }for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) {
        h[s][0].each(i);
      }return t(r);
    }, _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");this.items = t.grep(this.items, function (t) {
        for (var i = 0; e.length > i; i++) {
          if (e[i] === t.item[0]) return !1;
        }return !0;
      });
    }, _refreshItems: function _refreshItems(e) {
      this.items = [], this.containers = [this];var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          u = this.items,
          c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]],
          d = this._connectWith();if (d && this.ready) for (i = d.length - 1; i >= 0; i--) {
        for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) {
          o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (c.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o));
        }
      }for (i = c.length - 1; i >= 0; i--) {
        for (a = c[i][1], r = c[i][0], s = 0, l = r.length; l > s; s++) {
          h = t(r[s]), h.data(this.widgetName + "-item", a), u.push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 });
        }
      }
    }, refreshPositions: function refreshPositions(e) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());var i, s, n, o;for (i = this.items.length - 1; i >= 0; i--) {
        s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
      }if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (i = this.containers.length - 1; i >= 0; i--) {
        o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      }return this;
    }, _createPlaceholder: function _createPlaceholder(e) {
      e = e || this;var i,
          s = e.options;s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function element() {
          var s = e.currentItem[0].nodeName.toLowerCase(),
              n = t("<" + s + ">", e.document[0]);return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
        }, update: function update(t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
        } }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder);
    }, _createTrPlaceholder: function _createTrPlaceholder(e, i) {
      var s = this;e.children().each(function () {
        t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
      });
    }, _contactContainers: function _contactContainers(e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          u,
          c,
          d = null,
          p = null;for (i = this.containers.length - 1; i >= 0; i--) {
        if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
          if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;d = this.containers[i], p = i;
        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      }if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);else {
        for (n = 1e4, o = null, u = d.floating || this._isFloating(this.currentItem), a = u ? "left" : "top", r = u ? "width" : "height", c = u ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) {
          t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[c] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[c] - h) && (n = Math.abs(e[c] - h), o = this.items[s], this.direction = l ? "up" : "down"));
        }if (!o && !this.options.dropOnEmpty) return;if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
      }
    }, _createHelper: function _createHelper(e) {
      var i = this.options,
          s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
    }, _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    }, _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();var e = this.offsetParent.offset();return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" === this.cssPosition) {
        var t = this.currentItem.position();return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
      }return { top: 0, left: 0 };
    }, _cacheMargins: function _cacheMargins() {
      this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
    }, _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function _setContainment() {
      var e,
          i,
          s,
          n = this.options;"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    }, _convertPositionTo: function _convertPositionTo(e, i) {
      i || (i = this.position);var s = "absolute" === e ? 1 : -1,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s };
    }, _generatePosition: function _generatePosition(e) {
      var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) };
    }, _rearrange: function _rearrange(t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;var n = this.counter;this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    }, _clear: function _clear(t, e) {
      function i(t, e, i) {
        return function (s) {
          i._trigger(t, s, e._uiHash(e));
        };
      }this.reverting = !1;var s,
          n = [];if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS) {
          ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        }this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
      } else this.currentItem.show();for (this.fromOutside && !e && n.push(function (t) {
        this._trigger("receive", t, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
        this._trigger("update", t, this._uiHash());
      }), this !== this.currentContainer && (e || (n.push(function (t) {
        this._trigger("remove", t, this._uiHash());
      }), n.push(function (t) {
        return function (e) {
          t._trigger("receive", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), n.push(function (t) {
        return function (e) {
          t._trigger("update", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) {
        e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      }if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (s = 0; n.length > s; s++) {
          n[s].call(this, t);
        }this._trigger("stop", t, this._uiHash());
      }return this.fromOutside = !1, !this.cancelHelperRemoval;
    }, _trigger: function _trigger() {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    }, _uiHash: function _uiHash(e) {
      var i = e || this;return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null };
    } }), t.widget("ui.accordion", { version: "1.12.1", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function _create() {
      var e = this.options;this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
    }, _getCreateEventData: function _getCreateEventData() {
      return { header: this.active, panel: this.active.length ? this.active.next() : t() };
    }, _createIcons: function _createIcons() {
      var e,
          i,
          s = this.options.icons;s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
    }, _destroyIcons: function _destroyIcons() {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
    }, _destroy: function _destroy() {
      var t;this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "");
    }, _setOption: function _setOption(t, e) {
      return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0);
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
    }, _keydown: function _keydown(e) {
      if (!e.altKey && !e.ctrlKey) {
        var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            o = !1;switch (e.keyCode) {case i.RIGHT:case i.DOWN:
            o = this.headers[(n + 1) % s];break;case i.LEFT:case i.UP:
            o = this.headers[(n - 1 + s) % s];break;case i.SPACE:case i.ENTER:
            this._eventHandler(e);break;case i.HOME:
            o = this.headers[0];break;case i.END:
            o = this.headers[s - 1];}o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault());
      }
    }, _panelKeyDown: function _panelKeyDown(e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
    }, refresh: function refresh() {
      var e = this.options;this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    }, _processPanels: function _processPanels() {
      var t = this.headers,
          e = this.panels;this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
    }, _refresh: function _refresh() {
      var e,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent();this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
        var e = t(this),
            i = e.uniqueId().attr("id"),
            s = e.next(),
            n = s.uniqueId().attr("id");e.attr("aria-controls", n), s.attr("aria-labelledby", i);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () {
        var i = t(this),
            s = i.css("position");"absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
      }), this.headers.each(function () {
        e -= t(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
        var i = t(this).is(":visible");i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
      }).height(e));
    }, _activate: function _activate(e) {
      var i = this._findActive(e)[0];i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
    }, _findActive: function _findActive(e) {
      return "number" == typeof e ? this.headers.eq(e) : t();
    }, _setupEvents: function _setupEvents(e) {
      var i = { keydown: "_keydown" };e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers);
    }, _eventHandler: function _eventHandler(e) {
      var i,
          s,
          n = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          h = r && n.collapsible,
          l = h ? t() : a.next(),
          u = o.next(),
          c = { oldHeader: o, oldPanel: u, newHeader: h ? t() : a, newPanel: l };e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, c) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(c), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")));
    }, _toggle: function _toggle(e) {
      var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel;this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function () {
        return 0 === parseInt(t(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    }, _animate: function _animate(t, e, i) {
      var s,
          n,
          o,
          a = this,
          r = 0,
          h = t.css("box-sizing"),
          l = t.length && (!e.length || t.index() < e.index()),
          u = this.options.animate || {},
          c = l && u.down || u,
          d = function d() {
        a._toggleComplete(i);
      };return "number" == typeof c && (o = c), "string" == typeof c && (n = c), n = n || c.easing || u.easing, o = o || c.duration || u.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: n, step: function step(t, e) {
          e.now = Math.round(t);
        } }), t.hide().animate(this.showProps, { duration: o, easing: n, complete: d, step: function step(t, i) {
          i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0);
        } }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d);
    }, _toggleComplete: function _toggleComplete(t) {
      var e = t.oldPanel,
          i = e.prev();this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
    } }), t.widget("ui.menu", { version: "1.12.1", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({ "mousedown .ui-menu-item": function mousedownUiMenuItem(t) {
          t.preventDefault();
        }, "click .ui-menu-item": function clickUiMenuItem(e) {
          var i = t(e.target),
              s = t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        }, "mouseenter .ui-menu-item": function mouseenterUiMenuItem(e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest(".ui-menu-item"),
                s = t(e.currentTarget);i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s));
          }
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function focus(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);e || this.focus(t, i);
        }, blur: function blur(e) {
          this._delay(function () {
            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));i && this.collapseAll(e);
          });
        }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function click(t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
        } });
    }, _destroy: function _destroy() {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
        var e = t(this);e.data("ui-menu-submenu-caret") && e.remove();
      });
    }, _keydown: function _keydown(e) {
      var i,
          s,
          n,
          o,
          a = !0;switch (e.keyCode) {case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);break;case t.ui.keyCode.HOME:
          this._move("first", "first", e);break;case t.ui.keyCode.END:
          this._move("last", "last", e);break;case t.ui.keyCode.UP:
          this.previous(e);break;case t.ui.keyCode.DOWN:
          this.next(e);break;case t.ui.keyCode.LEFT:
          this.collapse(e);break;case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:
          this._activate(e);break;case t.ui.keyCode.ESCAPE:
          this.collapse(e);break;default:
          a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;}a && e.preventDefault();
    }, _activate: function _activate(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
    }, refresh: function refresh() {
      var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          h = this.element.find(this.options.menus);this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () {
        var e = t(this),
            i = e.prev(),
            s = t("<span>").data("ui-menu-submenu-caret", !0);a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"));
      }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
        var e = t(this);a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
      }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
    }, _itemRole: function _itemRole() {
      return { menu: "menuitem", listbox: "option" }[this.options.role];
    }, _setOption: function _setOption(t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
      }this._super(t, e);
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
    }, focus: function focus(t, e) {
      var i, s, n;this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e });
    }, _scrollIntoView: function _scrollIntoView(e) {
      var i, s, n, o, a, r;this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
    }, blur: function blur(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null);
    }, _startOpening: function _startOpening(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    }, _open: function _open(e) {
      var i = t.extend({ of: this.active }, this.options.position);clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    }, collapseAll: function collapseAll(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s;
      }, this.delay);
    }, _close: function _close(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    }, _closeOnDocumentClick: function _closeOnDocumentClick(e) {
      return !t(e.target).closest(".ui-menu").length;
    }, _isDivider: function _isDivider(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    }, collapse: function collapse(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);e && e.length && (this._close(), this.focus(t, e));
    }, expand: function expand(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    }, next: function next(t) {
      this._move("next", "first", t);
    }, previous: function previous(t) {
      this._move("prev", "last", t);
    }, isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    }, isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    }, _move: function _move(t, e, i) {
      var s;this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
    }, nextPage: function nextPage(e) {
      var i, s, n;return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = t(this), 0 > i.offset().top - s - n;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0);
    }, previousPage: function previousPage(e) {
      var i, s, n;return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = t(this), i.offset().top - s + n > 0;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0);
    }, _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    }, select: function select(e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");var i = { item: this.active };this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
    }, _filterMenuItems: function _filterMenuItems(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
      });
    } }), t.widget("ui.autocomplete", { version: "1.12.1", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function _create() {
      var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === n,
          a = "input" === n;this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, { keydown: function keydown(n) {
          if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;e = !1, s = !1, i = !1;var o = t.ui.keyCode;switch (n.keyCode) {case o.PAGE_UP:
              e = !0, this._move("previousPage", n);break;case o.PAGE_DOWN:
              e = !0, this._move("nextPage", n);break;case o.UP:
              e = !0, this._keyEvent("previous", n);break;case o.DOWN:
              e = !0, this._keyEvent("next", n);break;case o.ENTER:
              this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));break;case o.TAB:
              this.menu.active && this.menu.select(n);break;case o.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());break;default:
              i = !0, this._searchTimeout(n);}
        }, keypress: function keypress(s) {
          if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;if (!i) {
            var n = t.ui.keyCode;switch (s.keyCode) {case n.PAGE_UP:
                this._move("previousPage", s);break;case n.PAGE_DOWN:
                this._move("nextPage", s);break;case n.UP:
                this._keyEvent("previous", s);break;case n.DOWN:
                this._keyEvent("next", s);}
          }
        }, input: function input(t) {
          return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
        }, focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        }, blur: function blur(t) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
        } }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, { mousedown: function mousedown(e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
          });
        }, menufocus: function menufocus(e, i) {
          var s, n;return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
            t(e.target).trigger(e.originalEvent);
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: n }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0);
        }, menuselect: function menuselect(e, i) {
          var s = i.item.data("ui-autocomplete-item"),
              n = this.previous;this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
            this.previous = n, this.selectedItem = s;
          })), !1 !== this._trigger("select", e, { item: s }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
        } }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        } });
    }, _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    }, _setOption: function _setOption(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
    }, _isEventTargetInWidget: function _isEventTargetInWidget(e) {
      var i = this.menu.element[0];return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
    }, _closeOnClickOutside: function _closeOnClickOutside(t) {
      this._isEventTargetInWidget(t) || this.close();
    }, _appendTo: function _appendTo() {
      var e = this.options.appendTo;return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    }, _initSource: function _initSource() {
      var e,
          i,
          s = this;t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
        s(t.ui.autocomplete.filter(e, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
        s.xhr && s.xhr.abort(), s.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function success(t) {
            n(t);
          }, error: function error() {
            n([]);
          } });
      }) : this.source = this.options.source;
    }, _searchTimeout: function _searchTimeout(t) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var e = this.term === this._value(),
            i = this.menu.element.is(":visible"),
            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;(!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
      }, this.options.delay);
    }, search: function search(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
    }, _search: function _search(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response());
    }, _response: function _response() {
      var e = ++this.requestIndex;return t.proxy(function (t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }, this);
    }, __response: function __response(t) {
      t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    }, close: function close(t) {
      this.cancelSearch = !0, this._close(t);
    }, _close: function _close(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
    }, _change: function _change(t) {
      this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem });
    }, _normalize: function _normalize(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
        return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label });
      });
    }, _suggest: function _suggest(e) {
      var i = this.menu.element.empty();this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" });
    }, _resizeMenu: function _resizeMenu() {
      var t = this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    }, _renderMenu: function _renderMenu(e, i) {
      var s = this;t.each(i, function (t, i) {
        s._renderItemData(e, i);
      });
    }, _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    }, _renderItem: function _renderItem(e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
    }, _move: function _move(t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
    }, widget: function widget() {
      return this.menu.element;
    }, _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    }, _keyEvent: function _keyEvent(t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
    }, _isContentEditable: function _isContentEditable(t) {
      if (!t.length) return !1;var e = t.prop("contentEditable");return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    } }), t.extend(t.ui.autocomplete, { escapeRegex: function escapeRegex(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }, filter: function filter(e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");return t.grep(e, function (t) {
        return s.test(t.label || t.value || t);
      });
    } }), t.widget("ui.autocomplete", t.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function results(t) {
          return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        } } }, __response: function __response(e) {
      var i;this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
    } }), t.ui.autocomplete;var d = /ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup", { version: "1.12.1", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function _create() {
      this._enhance();
    }, _enhance: function _enhance() {
      this.element.attr("role", "toolbar"), this.refresh();
    }, _destroy: function _destroy() {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
    }, _initWidgets: function _initWidgets() {
      var e = this,
          i = [];t.each(this.options.items, function (s, n) {
        var o,
            a = {};return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function () {
          var e = t(this);e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
        }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : { classes: {} }, e.element.find(n).each(function () {
          var n = t(this),
              o = n[s]("instance"),
              r = t.widget.extend({}, a);if ("button" !== s || !n.parent(".ui-spinner").length) {
            o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);var h = n[s]("widget");t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0]);
          }
        })), void 0) : void 0;
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
    }, _callChildMethod: function _callChildMethod(e) {
      this.childWidgets.each(function () {
        var i = t(this),
            s = i.data("ui-controlgroup-data");s && s[e] && s[e]();
      });
    }, _updateCornerClass: function _updateCornerClass(t, e) {
      var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
          s = this._buildSimpleOptions(e, "label").classes.label;this._removeClass(t, null, i), this._addClass(t, null, s);
    }, _buildSimpleOptions: function _buildSimpleOptions(t, e) {
      var i = "vertical" === this.options.direction,
          s = { classes: {} };return s.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], s;
    }, _spinnerOptions: function _spinnerOptions(t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
    }, _buttonOptions: function _buttonOptions(t) {
      return this._buildSimpleOptions(t, "ui-button");
    }, _checkboxradioOptions: function _checkboxradioOptions(t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    }, _selectmenuOptions: function _selectmenuOptions(t) {
      var e = "vertical" === this.options.direction;return { width: e ? "auto" : !1, classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] };
    }, _resolveClassesValues: function _resolveClassesValues(e, i) {
      var s = {};return t.each(e, function (n) {
        var o = i.options.classes[n] || "";o = t.trim(o.replace(d, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ");
      }), s;
    }, _setOption: function _setOption(t, e) {
      return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0);
    }, refresh: function refresh() {
      var e,
          i = this;this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
        var n = e[s]().data("ui-controlgroup-data");if (n && i["_" + n.widgetName + "Options"]) {
          var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o);
        } else i._updateCornerClass(e[s](), s);
      }), this._callChildMethod("refresh"));
    } }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, { version: "1.12.1", options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function _getCreateOptions() {
      var e,
          i,
          s = this,
          n = this._super() || {};return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
        s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
      }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n;
    }, _create: function _create() {
      var t = this.element[0].checked;this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function focus() {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
        }, blur: function blur() {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
        } });
    }, _readType: function _readType() {
      var e = this.element[0].nodeName.toLowerCase();this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
    }, _enhance: function _enhance() {
      this._updateIcon(this.element[0].checked);
    }, widget: function widget() {
      return this.label;
    }, _getRadioGroup: function _getRadioGroup() {
      var e,
          i = this.element[0].name,
          s = "input[name='" + t.ui.escapeSelector(i) + "']";return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function () {
        return 0 === t(this).form().length;
      }), e.not(this.element)) : t([]);
    }, _toggleClasses: function _toggleClasses() {
      var e = this.element[0].checked;this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
        var e = t(this).checkboxradio("instance");e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
      });
    }, _destroy: function _destroy() {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
    }, _setOption: function _setOption(t, e) {
      return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0;
    }, _updateIcon: function _updateIcon(e) {
      var i = "ui-icon ui-icon-background ";this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
    }, _updateLabel: function _updateLabel() {
      var t = this.label.contents().not(this.element[0]);this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
    }, refresh: function refresh() {
      var t = this.element[0].checked,
          e = this.element[0].disabled;this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e });
    } }]), t.ui.checkboxradio, t.widget("ui.button", { version: "1.12.1", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 }, _getCreateOptions: function _getCreateOptions() {
      var t,
          e = this._super() || {};return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e;
    }, _create: function _create() {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function keyup(e) {
          e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
        } });
    }, _enhance: function _enhance() {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    }, _updateTooltip: function _updateTooltip() {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
    }, _updateIcon: function _updateIcon(e, i) {
      var s = "iconPosition" !== e,
          n = s ? this.options.iconPosition : i,
          o = "top" === n || "bottom" === n;this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n));
    }, _destroy: function _destroy() {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
    }, _attachIconSpace: function _attachIconSpace(t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    }, _attachIcon: function _attachIcon(t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    }, _setOptions: function _setOptions(t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;e || i || (t.showLabel = !0), this._super(t);
    }, _setOption: function _setOption(t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur());
    }, refresh: function refresh() {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip();
    } }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function _create() {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
    }, _setOption: function _setOption(t, e) {
      return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0);
    } }), t.fn.button = function (e) {
    return function () {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments));
    };
  }(t.fn.button), t.fn.buttonset = function () {
    return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == _typeof(arguments[0]) && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments));
  }), t.ui.button, t.extend(t.ui, { datepicker: { version: "1.12.1" } });var p;t.extend(s.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    }, setDefaults: function setDefaults(t) {
      return a(this._defaults, t || {}), this;
    }, _attachDatepicker: function _attachDatepicker(e, i) {
      var s, n, o;s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
    }, _newInst: function _newInst(e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");return { id: s, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
    }, _connectDatepicker: function _connectDatepicker(e, i) {
      var s = t(e);i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
    }, _attachments: function _attachments(e, i) {
      var s,
          n,
          o,
          a = this._get(i, "appendText"),
          r = this._get(i, "isRTL");i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
      }));
    }, _autoSize: function _autoSize(t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e,
            i,
            s,
            n,
            o = new Date(2009, 11, 20),
            a = this._get(t, "dateFormat");a.match(/[DM]/) && (e = function e(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) {
            t[n].length > i && (i = t[n].length, s = n);
          }return s;
        }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
      }
    }, _inlineDatepicker: function _inlineDatepicker(e, i) {
      var s = t(e);s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
    }, _dialogDatepicker: function _dialogDatepicker(e, i, s, n, o) {
      var r,
          h,
          l,
          u,
          c,
          d = this._dialogInst;return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
    }, _destroyDatepicker: function _destroyDatepicker(e) {
      var i,
          s = t(e),
          n = t.data(e, "datepicker");s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), p === n && (p = null));
    }, _enableDatepicker: function _enableDatepicker(e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }));
    }, _disableDatepicker: function _disableDatepicker(e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }), this._disabledInputs[this._disabledInputs.length] = e);
    }, _isDisabledDatepicker: function _isDisabledDatepicker(t) {
      if (!t) return !1;for (var e = 0; this._disabledInputs.length > e; e++) {
        if (this._disabledInputs[e] === t) return !0;
      }return !1;
    }, _getInst: function _getInst(e) {
      try {
        return t.data(e, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    }, _optionDatepicker: function _optionDatepicker(e, i, s) {
      var n,
          o,
          r,
          h,
          l = this._getInst(e);return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0);
    }, _changeDatepicker: function _changeDatepicker(t, e, i) {
      this._optionDatepicker(t, e, i);
    }, _refreshDatepicker: function _refreshDatepicker(t) {
      var e = this._getInst(t);e && this._updateDatepicker(e);
    }, _setDateDatepicker: function _setDateDatepicker(t, e) {
      var i = this._getInst(t);i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    }, _getDateDatepicker: function _getDateDatepicker(t, e) {
      var i = this._getInst(t);return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    }, _doKeyDown: function _doKeyDown(e) {
      var i,
          s,
          n,
          o = t.datepicker._getInst(e.target),
          a = !0,
          r = o.dpDiv.is(".ui-datepicker-rtl");if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {case 9:
          t.datepicker._hideDatepicker(), a = !1;break;case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;case 27:
          t.datepicker._hideDatepicker();break;case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");break;case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");break;case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;break;case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;break;case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");break;case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;break;case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");break;case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;break;default:
          a = !1;} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;a && (e.preventDefault(), e.stopPropagation());
    }, _doKeyPress: function _doKeyPress(e) {
      var i,
          s,
          n = t.datepicker._getInst(e.target);return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
    }, _doKeyUp: function _doKeyUp(e) {
      var i,
          s = t.datepicker._getInst(e.target);if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
      } catch (n) {}return !0;
    }, _showDatepicker: function _showDatepicker(e) {
      if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var s, n, o, r, h, l, u;s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
          return r |= "fixed" === t(this).css("position"), !r;
        }), h = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: h.left + "px", top: h.top + "px" }), s.inline || (l = t.datepicker._get(s, "showAnim"), u = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), u) : s.dpDiv[l || "show"](l ? u : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
      }
    }, _updateDatepicker: function _updateDatepicker(e) {
      this.maxRows = 4, p = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);var i,
          s = this._getNumberOfMonths(e),
          n = s[1],
          a = 17,
          r = e.dpDiv.find("." + this._dayOverClass + " a");r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
      }, 0));
    }, _shouldFocusInput: function _shouldFocusInput(t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
    }, _checkOffset: function _checkOffset(e, i, s) {
      var n = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          a = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
          l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i;
    }, _findPos: function _findPos(e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) {
        e = e[n ? "previousSibling" : "nextSibling"];
      }return i = t(e).offset(), [i.left, i.top];
    }, _hideDatepicker: function _hideDatepicker(e) {
      var i,
          s,
          n,
          o,
          a = this._curInst;!a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function n() {
        t.datepicker._tidyDialog(a);
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
    }, _tidyDialog: function _tidyDialog(t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    }, _checkExternalClick: function _checkExternalClick(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
            s = t.datepicker._getInst(i[0]);(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
      }
    }, _adjustDate: function _adjustDate(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
    }, _gotoToday: function _gotoToday(e) {
      var i,
          s = t(e),
          n = this._getInst(s[0]);this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
    }, _selectMonthYear: function _selectMonthYear(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n);
    }, _selectDay: function _selectDay(e, i, s, n) {
      var o,
          a = t(e);t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    }, _clearDate: function _clearDate(e) {
      var i = t(e);this._selectDate(i, "");
    }, _selectDate: function _selectDate(e, i) {
      var s,
          n = t(e),
          o = this._getInst(n[0]);i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != _typeof(o.input[0]) && o.input.trigger("focus"), this._lastInput = null);
    }, _updateAlternate: function _updateAlternate(e) {
      var i,
          s,
          n,
          o = this._get(e, "altField");o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
    }, noWeekends: function noWeekends(t) {
      var e = t.getDay();return [e > 0 && 6 > e, ""];
    }, iso8601Week: function iso8601Week(t) {
      var e,
          i = new Date(t.getTime());return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
    }, parseDate: function parseDate(e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";if (i = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? "" + i : i + "", "" === i) return null;var n,
          o,
          a,
          r,
          h = 0,
          l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          u = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
          c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          m = -1,
          g = -1,
          v = -1,
          _ = -1,
          b = !1,
          y = function y(t) {
        var i = e.length > n + 1 && e.charAt(n + 1) === t;return i && n++, i;
      },
          w = function w(t) {
        var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(h).match(o);if (!a) throw "Missing number at position " + h;return h += a[0].length, parseInt(a[0], 10);
      },
          x = function x(e, s, n) {
        var o = -1,
            a = t.map(y(e) ? n : s, function (t, e) {
          return [[e, t]];
        }).sort(function (t, e) {
          return -(t[1].length - e[1].length);
        });if (t.each(a, function (t, e) {
          var s = e[1];return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0;
        }), -1 !== o) return o + 1;throw "Unknown name at position " + h;
      },
          k = function k() {
        if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;h++;
      };for (n = 0; e.length > n; n++) {
        if (b) "'" !== e.charAt(n) || y("'") ? k() : b = !1;else switch (e.charAt(n)) {case "d":
            v = w("d");break;case "D":
            x("D", c, d);break;case "o":
            _ = w("o");break;case "m":
            g = w("m");break;case "M":
            g = x("M", p, f);break;case "y":
            m = w("y");break;case "@":
            r = new Date(w("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();break;case "!":
            r = new Date((w("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();break;case "'":
            y("'") ? k() : b = !0;break;default:
            k();}
      }if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;if (-1 === m ? m = new Date().getFullYear() : 100 > m && (m += new Date().getFullYear() - new Date().getFullYear() % 100 + (u >= m ? 0 : -100)), _ > -1) for (g = 1, v = _;;) {
        if (o = this._getDaysInMonth(m, g - 1), o >= v) break;g++, v -= o;
      }if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";return r;
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function formatDate(t, e, i) {
      if (!e) return "";var s,
          n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          h = function h(e) {
        var i = t.length > s + 1 && t.charAt(s + 1) === e;return i && s++, i;
      },
          l = function l(t, e, i) {
        var s = "" + e;if (h(t)) for (; i > s.length;) {
          s = "0" + s;
        }return s;
      },
          u = function u(t, e, i, s) {
        return h(t) ? s[e] : i[e];
      },
          c = "",
          d = !1;if (e) for (s = 0; t.length > s; s++) {
        if (d) "'" !== t.charAt(s) || h("'") ? c += t.charAt(s) : d = !1;else switch (t.charAt(s)) {case "d":
            c += l("d", e.getDate(), 2);break;case "D":
            c += u("D", e.getDay(), n, o);break;case "o":
            c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);break;case "m":
            c += l("m", e.getMonth() + 1, 2);break;case "M":
            c += u("M", e.getMonth(), a, r);break;case "y":
            c += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;break;case "@":
            c += e.getTime();break;case "!":
            c += 1e4 * e.getTime() + this._ticksTo1970;break;case "'":
            h("'") ? c += "'" : d = !0;break;default:
            c += t.charAt(s);}
      }return c;
    }, _possibleChars: function _possibleChars(t) {
      var e,
          i = "",
          s = !1,
          n = function n(i) {
        var s = t.length > e + 1 && t.charAt(e + 1) === i;return s && e++, s;
      };for (e = 0; t.length > e; e++) {
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;else switch (t.charAt(e)) {case "d":case "m":case "y":case "@":
            i += "0123456789";break;case "D":case "M":
            return null;case "'":
            n("'") ? i += "'" : s = !0;break;default:
            i += t.charAt(e);}
      }return i;
    }, _get: function _get(t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    }, _setDateFromField: function _setDateFromField(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
            s = t.lastVal = t.input ? t.input.val() : null,
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? "" : s;
        }t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
      }
    }, _getDefaultDate: function _getDefaultDate(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
    }, _determineDate: function _determineDate(e, i, s) {
      var n = function n(t) {
        var e = new Date();return e.setDate(e.getDate() + t), e;
      },
          o = function o(i) {
        try {
          return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
        } catch (s) {}for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
          switch (l[2] || "d") {case "d":case "D":
              r += parseInt(l[1], 10);break;case "w":case "W":
              r += 7 * parseInt(l[1], 10);break;case "m":case "M":
              a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));break;case "y":case "Y":
              o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));}l = h.exec(i);
        }return new Date(o, a, r);
      },
          a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
    }, _daylightSavingAdjust: function _daylightSavingAdjust(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    }, _setDate: function _setDate(t, e, i) {
      var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
    }, _getDate: function _getDate(t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));return e;
    }, _attachHandlers: function _attachHandlers(e) {
      var i = this._get(e, "stepMonths"),
          s = "#" + e.id.replace(/\\\\/g, "\\");e.dpDiv.find("[data-handler]").map(function () {
        var e = { prev: function prev() {
            t.datepicker._adjustDate(s, -i, "M");
          }, next: function next() {
            t.datepicker._adjustDate(s, +i, "M");
          }, hide: function hide() {
            t.datepicker._hideDatepicker();
          }, today: function today() {
            t.datepicker._gotoToday(s);
          }, selectDay: function selectDay() {
            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          }, selectMonth: function selectMonth() {
            return t.datepicker._selectMonthYear(s, this, "M"), !1;
          }, selectYear: function selectYear() {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1;
          } };t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
      });
    }, _generateHTML: function _generateHTML(t) {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          u,
          c,
          d,
          p,
          f,
          m,
          g,
          v,
          _,
          b,
          y,
          w,
          x,
          k,
          C,
          D,
          T,
          M,
          S,
          I,
          P,
          N,
          A,
          H,
          z,
          O,
          E,
          W,
          F,
          L,
          R = new Date(),
          j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
          Y = this._get(t, "isRTL"),
          B = this._get(t, "showButtonPanel"),
          q = this._get(t, "hideIfNoPrevNext"),
          K = this._get(t, "navigationAsDateFormat"),
          V = this._getNumberOfMonths(t),
          U = this._get(t, "showCurrentAtPos"),
          J = this._get(t, "stepMonths"),
          G = 1 !== V[0] || 1 !== V[1],
          X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          $ = this._getMinMaxDate(t, "min"),
          Q = this._getMinMaxDate(t, "max"),
          Z = t.drawMonth - U,
          te = t.drawYear;if (0 > Z && (Z += 12, te--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - V[0] * V[1] + 1, Q.getDate())), e = $ && $ > e ? $ : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) {
        Z--, 0 > Z && (Z = 11, te--);
      }for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - J, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + J, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? X : j, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; V[0] > x; x++) {
        for (k = "", this.maxRows = 4, C = 0; V[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", M = "", G) {
            if (M += "<div class='ui-datepicker-group", V[1] > 1) switch (C) {case 0:
                M += " ui-datepicker-group-first", T = " ui-corner-" + (Y ? "right" : "left");
                break;case V[1] - 1:
                M += " ui-datepicker-group-last", T = " ui-corner-" + (Y ? "left" : "right");break;default:
                M += " ui-datepicker-group-middle", T = "";}M += "'>";
          }for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? Y ? o : s : "") + (/all|right/.test(T) && 0 === x ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, $, Q, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", S = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) {
            I = (w + u) % 7, S += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[I] + "'>" + p[I] + "</span></th>";
          }for (M += S + "</tr></thead><tbody>", P = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), N = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7, A = Math.ceil((N + P) / 7), H = G ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = H, z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), O = 0; H > O; O++) {
            for (M += "<tr>", E = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; 7 > w; w++) {
              W = g ? g.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], F = z.getMonth() !== Z, L = F && !_ || !W[0] || $ && $ > z || Q && z > Q, E += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + W[1] + (z.getTime() === X.getTime() ? " " + this._currentClass : "") + (z.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === j.getTime() ? " ui-state-highlight" : "") + (z.getTime() === X.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
            }M += E + "</tr>";
          }Z++, Z > 11 && (Z = 0, te++), M += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && C === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M;
        }y += k;
      }return y += l, t._keyEvent = !1, y;
    }, _generateMonthYearHeader: function _generateMonthYearHeader(t, e, i, s, n, o, a, r) {
      var h,
          l,
          u,
          c,
          d,
          p,
          f,
          m,
          g = this._get(t, "changeMonth"),
          v = this._get(t, "changeYear"),
          _ = this._get(t, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          y = "";if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++) {
          (!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + r[u] + "</option>");
        }y += "</select>";
      }if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (c = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function p(t) {
          var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);return isNaN(e) ? d : e;
        }, f = p(c[0]), m = Math.max(f, p(c[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) {
          t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
        }t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
      }return b += this._get(t, "yearSuffix"), _ && (b += (!o && g && v ? "" : "&#xa0;") + y), b += "</div>";
    }, _adjustInstDate: function _adjustInstDate(t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
          a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
    }, _restrictMinMax: function _restrictMinMax(t, e) {
      var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = i && i > e ? i : e;return s && n > s ? s : n;
    }, _notifyChange: function _notifyChange(t) {
      var e = this._get(t, "onChangeMonthYear");e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    }, _getNumberOfMonths: function _getNumberOfMonths(t) {
      var e = this._get(t, "numberOfMonths");return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    }, _getMinMaxDate: function _getMinMaxDate(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    }, _getDaysInMonth: function _getDaysInMonth(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    }, _getFirstDayOfMonth: function _getFirstDayOfMonth(t, e) {
      return new Date(t, e, 1).getDay();
    }, _canAdjustMonth: function _canAdjustMonth(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
    }, _isInRange: function _isInRange(t, e) {
      var i,
          s,
          n = this._getMinMaxDate(t, "min"),
          o = this._getMinMaxDate(t, "max"),
          a = null,
          r = null,
          h = this._get(t, "yearRange");return h && (i = h.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
    }, _getFormatConfig: function _getFormatConfig(t) {
      var e = this._get(t, "shortYearCutoff");return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") };
    }, _formatDate: function _formatDate(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);var n = e ? "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
    } }), t.fn.datepicker = function (e) {
    if (!this.length) return this;t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);var i = Array.prototype.slice.call(arguments, 1);return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
  }, t.datepicker = new s(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", { version: "1.12.1", options: { appendTo: "body", autoOpen: !0, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: !0, closeText: "Close", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function using(e) {
          var i = t(this).css(e).offset().top;0 > i && t(this).css("top", e.top - i);
        } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function _create() {
      this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus();
    }, _init: function _init() {
      this.options.autoOpen && this.open();
    }, _appendTo: function _appendTo() {
      var e = this.options.appendTo;return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
    }, _destroy: function _destroy() {
      var t,
          e = this.originalPosition;this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
    }, widget: function widget() {
      return this.uiDialog;
    }, disable: t.noop, enable: t.noop, close: function close(e) {
      var i = this;this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
        i._trigger("close", e);
      }));
    }, isOpen: function isOpen() {
      return this._isOpen;
    }, moveToTop: function moveToTop() {
      this._moveToTop();
    }, _moveToTop: function _moveToTop(e, i) {
      var s = !1,
          n = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +t(this).css("z-index");
      }).get(),
          o = Math.max.apply(null, n);return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s;
    }, open: function open() {
      var e = this;return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        e._focusTabbable(), e._trigger("focus");
      }), this._makeFocusTarget(), this._trigger("open"), void 0);
    }, _focusTabbable: function _focusTabbable() {
      var t = this._focusedElement;t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
    }, _keepFocus: function _keepFocus(e) {
      function i() {
        var e = t.ui.safeActiveElement(this.document[0]),
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);i || this._focusTabbable();
      }e.preventDefault(), i.call(this), this._delay(i);
    }, _createWrapper: function _createWrapper() {
      this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, { keydown: function keydown(e) {
          if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
            var i = this.uiDialog.find(":tabbable"),
                s = i.filter(":first"),
                n = i.filter(":last");e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
              n.trigger("focus");
            }), e.preventDefault()) : (this._delay(function () {
              s.trigger("focus");
            }), e.preventDefault());
          }
        }, mousedown: function mousedown(t) {
          this._moveToTop(t) && this._focusTabbable();
        } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
    }, _createTitlebar: function _createTitlebar() {
      var e;this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function mousedown(e) {
          t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
        } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function click(t) {
          t.preventDefault(), this.close(t);
        } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
    }, _title: function _title(t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    }, _createButtonPane: function _createButtonPane() {
      this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
    }, _createButtons: function _createButtons() {
      var e = this,
          i = this.options.buttons;return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function (i, s) {
        var n, o;s = t.isFunction(s) ? { click: s, text: i } : s, s = t.extend({ type: "button" }, s), n = s.click, o = { icon: s.icon, iconPosition: s.iconPosition, showLabel: s.showLabel, icons: s.icons, text: s.text }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () {
          n.apply(e.element[0], arguments);
        });
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
    }, _makeDraggable: function _makeDraggable() {
      function e(t) {
        return { position: t.position, offset: t.offset };
      }var i = this,
          s = this.options;this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function start(s, n) {
          i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n));
        }, drag: function drag(t, s) {
          i._trigger("drag", t, e(s));
        }, stop: function stop(n, o) {
          var a = o.offset.left - i.document.scrollLeft(),
              r = o.offset.top - i.document.scrollTop();s.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o));
        } });
    }, _makeResizable: function _makeResizable() {
      function e(t) {
        return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size };
      }var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css("position"),
          a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: s.maxWidth, maxHeight: s.maxHeight, minWidth: s.minWidth, minHeight: this._minHeight(), handles: a, start: function start(s, n) {
          i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n));
        }, resize: function resize(t, s) {
          i._trigger("resize", t, e(s));
        }, stop: function stop(n, o) {
          var a = i.uiDialog.offset(),
              r = a.left - i.document.scrollLeft(),
              h = a.top - i.document.scrollTop();s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o));
        } }).css("position", o);
    }, _trackFocus: function _trackFocus() {
      this._on(this.widget(), { focusin: function focusin(e) {
          this._makeFocusTarget(), this._focusedElement = t(e.target);
        } });
    }, _makeFocusTarget: function _makeFocusTarget() {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    }, _untrackInstance: function _untrackInstance() {
      var e = this._trackingInstances(),
          i = t.inArray(this, e);-1 !== i && e.splice(i, 1);
    }, _trackingInstances: function _trackingInstances() {
      var t = this.document.data("ui-dialog-instances");return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
    }, _minHeight: function _minHeight() {
      var t = this.options;return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
    }, _position: function _position() {
      var t = this.uiDialog.is(":visible");t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
    }, _setOptions: function _setOptions(e) {
      var i = this,
          s = !1,
          n = {};t.each(e, function (t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
    }, _setOption: function _setOption(e, i) {
      var s,
          n,
          o = this.uiDialog;"disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    }, _size: function _size() {
      var t,
          e,
          i,
          s = this.options;this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }, _blockFrames: function _blockFrames() {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var e = t(this);return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0];
      });
    }, _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _allowInteraction: function _allowInteraction(e) {
      return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length;
    }, _createOverlay: function _createOverlay() {
      if (this.options.modal) {
        var e = !0;this._delay(function () {
          e = !1;
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function focusin(t) {
            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
          } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
      }
    }, _destroyOverlay: function _destroyOverlay() {
      if (this.options.modal && this.overlay) {
        var t = this.document.data("ui-dialog-overlays") - 1;t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
      }
    } }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function _createWrapper() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass);
    }, _setOption: function _setOption(t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
    } }), t.ui.dialog, t.widget("ui.progressbar", { version: "1.12.1", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function _create() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
    }, _destroy: function _destroy() {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
    }, value: function value(t) {
      return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0);
    }, _constrainedValue: function _constrainedValue(t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t));
    }, _setOptions: function _setOptions(t) {
      var e = t.value;delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue();
    }, _setOption: function _setOption(t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
    }, _percentage: function _percentage() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, _refreshValue: function _refreshValue() {
      var e = this.options.value,
          i = this._percentage();this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete");
    } }), t.widget("ui.selectmenu", [t.ui.formResetMixin, { version: "1.12.1", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null }, _create: function _create() {
      var e = this.element.uniqueId().attr("id");this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t();
    }, _drawButton: function _drawButton() {
      var e,
          i = this,
          s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function click(t) {
          this.button.focus(), t.preventDefault();
        } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        i._rendered || i._refreshMenu();
      });
    }, _drawMenu: function _drawMenu() {
      var e = this;this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function select(t, i) {
          t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
        }, focus: function focus(t, i) {
          var s = i.item.data("ui-selectmenu-item");null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, { item: s }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
        } }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return !1;
      }, this.menuInstance._isDivider = function () {
        return !1;
      };
    }, refresh: function refresh() {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
    }, _refreshMenu: function _refreshMenu() {
      var t,
          e = this.element.find("option");this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    }, open: function open(t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
    }, _position: function _position() {
      this.menuWrap.position(t.extend({ of: this.button }, this.options.position));
    }, close: function close(t) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t));
    }, widget: function widget() {
      return this.button;
    }, menuWidget: function menuWidget() {
      return this.menu;
    }, _renderButtonItem: function _renderButtonItem(e) {
      var i = t("<span>");return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
    }, _renderMenu: function _renderMenu(e, i) {
      var s = this,
          n = "";t.each(i, function (i, o) {
        var a;o.optgroup !== n && (a = t("<li>", { text: o.optgroup }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o);
      });
    }, _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e);
    }, _renderItem: function _renderItem(e, i) {
      var s = t("<li>"),
          n = t("<div>", { title: i.element.attr("title") });return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e);
    }, _setText: function _setText(t, e) {
      e ? t.text(e) : t.html("&#160;");
    }, _move: function _move(t, e) {
      var i,
          s,
          n = ".ui-menu-item";this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s);
    }, _getSelectedItem: function _getSelectedItem() {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
    }, _toggle: function _toggle(t) {
      this[this.isOpen ? "close" : "open"](t);
    }, _setSelection: function _setSelection() {
      var t;this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
    }, _documentClick: { mousedown: function mousedown(e) {
        this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
      } }, _buttonEvents: { mousedown: function mousedown() {
        var t;window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange();
      }, click: function click(t) {
        this._setSelection(), this._toggle(t);
      }, keydown: function keydown(e) {
        var i = !0;switch (e.keyCode) {case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:
            this.close(e), i = !1;break;case t.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(e);break;case t.ui.keyCode.UP:
            e.altKey ? this._toggle(e) : this._move("prev", e);break;case t.ui.keyCode.DOWN:
            e.altKey ? this._toggle(e) : this._move("next", e);break;case t.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);break;case t.ui.keyCode.LEFT:
            this._move("prev", e);break;case t.ui.keyCode.RIGHT:
            this._move("next", e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:
            this._move("first", e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:
            this._move("last", e);break;default:
            this.menu.trigger(e), i = !1;}i && e.preventDefault();
      } }, _selectFocusedItem: function _selectFocusedItem(t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
    }, _select: function _select(t, e) {
      var i = this.element[0].selectedIndex;this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e);
    }, _setAria: function _setAria(t) {
      var e = this.menuItems.eq(t.index).attr("id");this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e);
    }, _setOption: function _setOption(t, e) {
      if ("icons" === t) {
        var i = this.button.find("span.ui-icon");this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
      }this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton();
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
    }, _appendTo: function _appendTo() {
      var e = this.options.appendTo;return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    }, _toggleAttr: function _toggleAttr() {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    }, _resizeButton: function _resizeButton() {
      var t = this.options.width;return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0);
    }, _resizeMenu: function _resizeMenu() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    }, _getCreateOptions: function _getCreateOptions() {
      var t = this._super();return t.disabled = this.element.prop("disabled"), t;
    }, _parseOptions: function _parseOptions(e) {
      var i = this,
          s = [];e.each(function (e, n) {
        s.push(i._parseOption(t(n), e));
      }), this.items = s;
    }, _parseOption: function _parseOption(t, e) {
      var i = t.parent("optgroup");return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") };
    }, _destroy: function _destroy() {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
    } }]), t.widget("ui.slider", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "slide", options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1;
    }, _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    }, _createHandles: function _createHandles() {
      var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = "<span tabindex='0'></span>",
          a = [];for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) {
        a.push(o);
      }this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
      });
    }, _createRange: function _createRange() {
      var e = this.options;e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null);
    }, _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    }, _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    }, _mouseCapture: function _mouseCapture(e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          u = this,
          c = this.options;return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
        var i = Math.abs(s - u.values(e));(n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, o = t(this), a = e);
      }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - h.left - o.width() / 2, top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0));
    }, _mouseStart: function _mouseStart() {
      return !0;
    }, _mouseDrag: function _mouseDrag(t) {
      var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);return this._slide(t, this._handleIndex, i), !1;
    }, _mouseStop: function _mouseStop(t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    }, _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    }, _normValueFromMouse: function _normValueFromMouse(t) {
      var e, i, s, n, o;return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
    }, _uiHash: function _uiHash(t, e, i) {
      var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s;
    }, _hasMultipleValues: function _hasMultipleValues() {
      return this.options.values && this.options.values.length;
    }, _start: function _start(t, e) {
      return this._trigger("start", t, this._uiHash(e));
    }, _slide: function _slide(t, e, i) {
      var s,
          n,
          o = this.value(),
          a = this.values();this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
    }, _stop: function _stop(t, e) {
      this._trigger("stop", t, this._uiHash(e));
    }, _change: function _change(t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
    }, value: function value(t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    }, values: function values(e, i) {
      var s, n, o;if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;if (!arguments.length) return this._values();if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) {
        s[o] = this._trimAlignValue(n[o]), this._change(null, o);
      }this._refreshValue();
    }, _setOption: function _setOption(e, i) {
      var s,
          n = 0;switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");break;case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;break;case "values":
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) {
            this._change(null, s);
          }this._animateOff = !1;break;case "step":case "min":case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;break;case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;}
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
    }, _value: function _value() {
      var t = this.options.value;return t = this._trimAlignValue(t);
    }, _values: function _values(t) {
      var e, i, s;if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
          i[s] = this._trimAlignValue(i[s]);
        }return i;
      }return [];
    }, _trimAlignValue: function _trimAlignValue(t) {
      if (this._valueMin() >= t) return this._valueMin();if (t >= this._valueMax()) return this._valueMax();var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
    }, _calculateNewMax: function _calculateNewMax() {
      var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
    }, _precision: function _precision() {
      var t = this._precisionOf(this.options.step);return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    }, _precisionOf: function _precisionOf(t) {
      var e = "" + t,
          i = e.indexOf(".");return -1 === i ? 0 : e.length - i - 1;
    }, _valueMin: function _valueMin() {
      return this.options.min;
    }, _valueMax: function _valueMax() {
      return this.max;
    }, _refreshRange: function _refreshRange(t) {
      "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" });
    }, _refreshValue: function _refreshValue() {
      var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};this._hasMultipleValues() ? this.handles.each(function (s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i;
      }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
    }, _handleEvents: { keydown: function keydown(e) {
        var i,
            s,
            n,
            o,
            a = t(e.target).data("ui-slider-handle-index");switch (e.keyCode) {case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return;}switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {case t.ui.keyCode.HOME:
            n = this._valueMin();break;case t.ui.keyCode.END:
            n = this._valueMax();break;case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);break;case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;n = this._trimAlignValue(s + o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;n = this._trimAlignValue(s - o);}this._slide(e, a, n);
      }, keyup: function keyup(e) {
        var i = t(e.target).data("ui-slider-handle-index");this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
      } } }), t.widget("ui.spinner", { version: "1.12.1", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function _create() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        } });
    }, _getCreateOptions: function _getCreateOptions() {
      var e = this._super(),
          i = this.element;return t.each(["min", "max", "step"], function (t, s) {
        var n = i.attr(s);null != n && n.length && (e[s] = n);
      }), e;
    }, _events: { keydown: function keydown(t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      }, keyup: "_stop", focus: function focus() {
        this.previous = this.element.val();
      }, blur: function blur(t) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0);
      }, mousewheel: function mousewheel(t, e) {
        if (e) {
          if (!this.spinning && !this._start(t)) return !1;this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(t);
          }, 100), t.preventDefault();
        }
      }, "mousedown .ui-spinner-button": function mousedownUiSpinnerButton(e) {
        function i() {
          var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);e || (this.element.trigger("focus"), this.previous = s, this._delay(function () {
            this.previous = s;
          }));
        }var s;s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, i.call(this);
        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
      }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function mouseenterUiSpinnerButton(e) {
        return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0;
      }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function _enhance() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
    }, _draw: function _draw() {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
    }, _keydown: function _keydown(e) {
      var i = this.options,
          s = t.ui.keyCode;switch (e.keyCode) {case s.UP:
          return this._repeat(null, 1, e), !0;case s.DOWN:
          return this._repeat(null, -1, e), !0;case s.PAGE_UP:
          return this._repeat(null, i.page, e), !0;case s.PAGE_DOWN:
          return this._repeat(null, -i.page, e), !0;}return !1;
    }, _start: function _start(t) {
      return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
    }, _repeat: function _repeat(t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, e, i);
      }, t), this._spin(e * this.options.step, i);
    }, _spin: function _spin(t, e) {
      var i = this.value() || 0;this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, { value: i }) === !1 || (this._value(i), this.counter++);
    }, _increment: function _increment(e) {
      var i = this.options.incremental;return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
    }, _precision: function _precision() {
      var t = this._precisionOf(this.options.step);return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    }, _precisionOf: function _precisionOf(t) {
      var e = "" + t,
          i = e.indexOf(".");return -1 === i ? 0 : e.length - i - 1;
    }, _adjustValue: function _adjustValue(t) {
      var e,
          i,
          s = this.options;return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t;
    }, _stop: function _stop(t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t));
    }, _setOption: function _setOption(t, e) {
      var i, s, n;return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0);
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
    }, _setOptions: r(function (t) {
      this._super(t);
    }), _parse: function _parse(t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
    }, _format: function _format(t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
    }, _refresh: function _refresh() {
      this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
    }, isValid: function isValid() {
      var t = this.value();return null === t ? !1 : t === this._adjustValue(t);
    }, _value: function _value(t, e) {
      var i;"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh();
    }, _destroy: function _destroy() {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    }, stepUp: r(function (t) {
      this._stepUp(t);
    }), _stepUp: function _stepUp(t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    }, stepDown: r(function (t) {
      this._stepDown(t);
    }), _stepDown: function _stepDown(t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
    }, pageUp: r(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }), pageDown: r(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }), value: function value(t) {
      return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val());
    }, widget: function widget() {
      return this.uiSpinner;
    } }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, { _enhance: function _enhance() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
    }, _uiSpinnerHtml: function _uiSpinnerHtml() {
      return "<span>";
    }, _buttonHtml: function _buttonHtml() {
      return "<a></a><a></a>";
    } }), t.ui.spinner, t.widget("ui.tabs", { version: "1.12.1", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () {
      var t = /#.*$/;return function (e) {
        var i, s;i = e.href.replace(t, ""), s = location.href.replace(t, "");try {
          i = decodeURIComponent(i);
        } catch (n) {}try {
          s = decodeURIComponent(s);
        } catch (n) {}return e.hash.length > 1 && i === s;
      };
    }(), _create: function _create() {
      var e = this,
          i = this.options;this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
        return e.tabs.index(t);
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
    }, _initialActive: function _initialActive() {
      var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);return null === e && (s && this.tabs.each(function (i, n) {
        return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e;
    }, _getCreateEventData: function _getCreateEventData() {
      return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() };
    }, _tabKeydown: function _tabKeydown(e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
          s = this.tabs.index(i),
          n = !0;if (!this._handlePageNav(e)) {
        switch (e.keyCode) {case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:
            s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:
            n = !1, s--;break;case t.ui.keyCode.END:
            s = this.anchors.length - 1;break;case t.ui.keyCode.HOME:
            s = 0;break;case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;default:
            return;}e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", s);
        }, this.delay));
      }
    }, _panelKeydown: function _panelKeydown(e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"));
    }, _handlePageNav: function _handlePageNav(e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    }, _findNextTab: function _findNextTab(e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e;
      }for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) {
        e = i ? e + 1 : e - 1;
      }return e;
    }, _focusNextTab: function _focusNextTab(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
    }, _setOption: function _setOption(t, e) {
      return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0);
    }, _sanitizeSelector: function _sanitizeSelector(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    }, refresh: function refresh() {
      var e = this.options,
          i = this.tablist.children(":has(a[href])");e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
        return i.index(t);
      }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh();
    }, _refresh: function _refresh() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0);
    }, _processTabs: function _processTabs() {
      var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
        t(this).is(".ui-state-disabled") && e.preventDefault();
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
        t(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
        return t("a", this)[0];
      }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
        var n,
            o,
            a,
            r = t(s).uniqueId().attr("id"),
            h = t(s).closest("li"),
            l = h.attr("aria-controls");e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": a, "aria-labelledby": r }), o.attr("aria-labelledby", r);
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
    }, _getList: function _getList() {
      return this.tablist || this.element.find("ol, ul").eq(0);
    }, _createPanel: function _createPanel(e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
    }, _setOptionDisabled: function _setOptionDisabled(e) {
      var i, s, n;for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) {
        i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
      }this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
    }, _setupEvents: function _setupEvents(e) {
      var i = {};e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function click(t) {
          t.preventDefault();
        } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs);
    }, _setupHeightStyle: function _setupHeightStyle(e) {
      var i,
          s = this.element.parent();"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var e = t(this),
            s = e.css("position");"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= t(this).outerHeight(!0);
      }), this.panels.each(function () {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
        i = Math.max(i, t(this).height("").height());
      }).height(i));
    }, _eventHandler: function _eventHandler(e) {
      var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest("li"),
          a = o[0] === s[0],
          r = a && i.collapsible,
          h = r ? t() : this._getPanelForTab(o),
          l = s.length ? this._getPanelForTab(s) : t(),
          u = { oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h };e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, u));
    }, _toggle: function _toggle(e, i) {
      function s() {
        o.running = !1, o._trigger("activate", e, i);
      }function n() {
        o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
      }var o = this,
          a = i.newPanel,
          r = i.oldPanel;this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
        o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
        return 0 === t(this).attr("tabIndex");
      }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    }, _activate: function _activate(e) {
      var i,
          s = this._findActive(e);s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
    }, _findActive: function _findActive(e) {
      return e === !1 ? t() : this.tabs.eq(e);
    }, _getIndex: function _getIndex(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
    }, _destroy: function _destroy() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
      }), this.tabs.each(function () {
        var e = t(this),
            i = e.data("ui-tabs-aria-controls");i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    }, enable: function enable(e) {
      var i = this.options.disabled;i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
        return t !== e ? t : null;
      }) : t.map(this.tabs, function (t, i) {
        return i !== e ? i : null;
      })), this._setOptionDisabled(i));
    }, disable: function disable(e) {
      var i = this.options.disabled;if (i !== !0) {
        if (void 0 === e) i = !0;else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;i = t.isArray(i) ? t.merge([e], i).sort() : [e];
        }this._setOptionDisabled(i);
      }
    }, load: function load(e, i) {
      e = this._getIndex(e);var s = this,
          n = this.tabs.eq(e),
          o = n.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(n),
          r = { tab: n, panel: a },
          h = function h(t, e) {
        "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr;
      };this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
        setTimeout(function () {
          a.html(t), s._trigger("load", i, r), h(n, e);
        }, 1);
      }).fail(function (t, e) {
        setTimeout(function () {
          h(t, e);
        }, 1);
      })));
    }, _ajaxSettings: function _ajaxSettings(e, i, s) {
      var n = this;return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function beforeSend(e, o) {
          return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s));
        } };
    }, _getPanelForTab: function _getPanelForTab(e) {
      var i = t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#" + i));
    } }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function _processTabs() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
    } }), t.ui.tabs, t.widget("ui.tooltip", { version: "1.12.1", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function content() {
        var e = t(this).attr("title") || "";return t("<a>").text(e).html();
      }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null }, _addDescribedBy: function _addDescribedBy(e, i) {
      var s = (e.attr("aria-describedby") || "").split(/\s+/);s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
    }, _removeDescribedBy: function _removeDescribedBy(e) {
      var i = e.data("ui-tooltip-id"),
          s = (e.attr("aria-describedby") || "").split(/\s+/),
          n = t.inArray(i, s);-1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
    }, _create: function _create() {
      this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]);
    }, _setOption: function _setOption(e, i) {
      var s = this;this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
        s._updateContent(e.element);
      });
    }, _setOptionDisabled: function _setOptionDisabled(t) {
      this[t ? "_disable" : "_enable"]();
    }, _disable: function _disable() {
      var e = this;t.each(this.tooltips, function (i, s) {
        var n = t.Event("blur");n.target = n.currentTarget = s.element[0], e.close(n, !0);
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
        var e = t(this);return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
      }));
    }, _enable: function _enable() {
      this.disabledTitles.each(function () {
        var e = t(this);e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
      }), this.disabledTitles = t([]);
    }, open: function open(e) {
      var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items);s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
        var e,
            s = t(this);s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", ""));
      }), this._registerCloseHandlers(e, s), this._updateContent(s, e));
    }, _updateContent: function _updateContent(t, e) {
      var i,
          s = this.options.content,
          n = this,
          o = e ? e.type : null;return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
        n._delay(function () {
          t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
        });
      }), i && this._open(e, t, i), void 0);
    }, _open: function _open(e, i, s) {
      function n(t) {
        l.of = t, a.is(":hidden") || a.position(l);
      }var o,
          a,
          r,
          h,
          l = t.extend({}, this.options.position);if (s) {
        if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: n }), n(e)) : a.position(t.extend({ of: i }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
          a.is(":visible") && (n(l.of), clearInterval(r));
        }, t.fx.interval)), this._trigger("open", e, { tooltip: a });
      }
    }, _registerCloseHandlers: function _registerCloseHandlers(e, i) {
      var s = { keyup: function keyup(e) {
          if (e.keyCode === t.ui.keyCode.ESCAPE) {
            var s = t.Event(e);s.currentTarget = i[0], this.close(s, !0);
          }
        } };i[0] !== this.element[0] && (s.remove = function () {
        this._removeTooltip(this._find(i).tooltip);
      }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s);
    }, close: function close(e) {
      var i,
          s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n);return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
        s._removeTooltip(t(this));
      }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
        t(i.element).attr("title", i.title), delete s.parents[e];
      }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0);
    }, _tooltip: function _tooltip(e) {
      var i = t("<div>").attr("role", "tooltip"),
          s = t("<div>").appendTo(i),
          n = i.uniqueId().attr("id");return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = { element: e, tooltip: i };
    }, _find: function _find(t) {
      var e = t.data("ui-tooltip-id");return e ? this.tooltips[e] : null;
    }, _removeTooltip: function _removeTooltip(t) {
      t.remove(), delete this.tooltips[t.attr("id")];
    }, _appendTo: function _appendTo(t) {
      var e = t.closest(".ui-front, dialog");return e.length || (e = this.document[0].body), e;
    }, _destroy: function _destroy() {
      var e = this;t.each(this.tooltips, function (i, s) {
        var n = t.Event("blur"),
            o = s.element;n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    } }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function _tooltip() {
      var t = this._superApply(arguments);return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
    } }), t.ui.tooltip;var f = "ui-effects-",
      m = "ui-effects-style",
      g = "ui-effects-animated",
      v = t;t.effects = { effect: {} }, function (t, e) {
    function i(t, e, i) {
      var s = c[e.type] || {};return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
    }function s(i) {
      var s = l(),
          n = s._rgba = [];return i = i.toLowerCase(), f(h, function (t, o) {
        var a,
            r = o.re.exec(i),
            h = r && o.parse(r),
            l = o.space || "rgba";return h ? (a = s[l](h), s[u[l].cache] = a[u[l].cache], n = s._rgba = a._rgba, !1) : e;
      }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i];
    }function n(t, e, i) {
      return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
    }var o,
        a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function parse(t) {
        return [t[1], t[2], t[3], t[4]];
      } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function parse(t) {
        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
      } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function parse(t) {
        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
      } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function parse(t) {
        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
      } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function parse(t) {
        return [t[1], t[2] / 100, t[3] / 100, t[4]];
      } }],
        l = t.Color = function (e, i, s, n) {
      return new t.Color.fn.parse(e, i, s, n);
    },
        u = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
        c = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
        d = l.support = {},
        p = t("<p>")[0],
        f = t.each;p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (t, e) {
      e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 };
    }), l.fn = t.extend(l.prototype, { parse: function parse(n, a, r, h) {
        if (n === e) return this._rgba = [null, null, null, null], this;(n.jquery || n.nodeType) && (n = t(n).css(a), a = e);var c = this,
            d = t.type(n),
            p = this._rgba = [];return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(u.rgba.props, function (t, e) {
          p[e.idx] = i(n[e.idx], e);
        }), this) : "object" === d ? (n instanceof l ? f(u, function (t, e) {
          n[e.cache] && (c[e.cache] = n[e.cache].slice());
        }) : f(u, function (e, s) {
          var o = s.cache;f(s.props, function (t, e) {
            if (!c[o] && s.to) {
              if ("alpha" === t || null == n[t]) return;c[o] = s.to(c._rgba);
            }c[o][e.idx] = i(n[t], e, !0);
          }), c[o] && 0 > t.inArray(null, c[o].slice(0, 3)) && (c[o][3] = 1, s.from && (c._rgba = s.from(c[o])));
        }), this) : e;
      }, is: function is(t) {
        var i = l(t),
            s = !0,
            n = this;return f(u, function (t, o) {
          var a,
              r = i[o.cache];return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
            return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
          })), s;
        }), s;
      }, _space: function _space() {
        var t = [],
            e = this;return f(u, function (i, s) {
          e[s.cache] && t.push(i);
        }), t.pop();
      }, transition: function transition(t, e) {
        var s = l(t),
            n = s._space(),
            o = u[n],
            a = 0 === this.alpha() ? l("transparent") : this,
            r = a[o.cache] || o.to(a._rgba),
            h = r.slice();return s = s[o.cache], f(o.props, function (t, n) {
          var o = n.idx,
              a = r[o],
              l = s[o],
              u = c[n.type] || {};null !== l && (null === a ? h[o] = l : (u.mod && (l - a > u.mod / 2 ? a += u.mod : a - l > u.mod / 2 && (a -= u.mod)), h[o] = i((l - a) * e + a, n)));
        }), this[n](h);
      }, blend: function blend(e) {
        if (1 === this._rgba[3]) return this;var i = this._rgba.slice(),
            s = i.pop(),
            n = l(e)._rgba;return l(t.map(i, function (t, e) {
          return (1 - s) * n[e] + s * t;
        }));
      }, toRgbaString: function toRgbaString() {
        var e = "rgba(",
            i = t.map(this._rgba, function (t, e) {
          return null == t ? e > 2 ? 1 : 0 : t;
        });return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
      }, toHslaString: function toHslaString() {
        var e = "hsla(",
            i = t.map(this.hsla(), function (t, e) {
          return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
        });return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
      }, toHexString: function toHexString(e) {
        var i = this._rgba.slice(),
            s = i.pop();return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
          return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
        }).join("");
      }, toString: function toString() {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      } }), l.fn.parse.prototype = l.fn, u.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];var e,
          i,
          s = t[0] / 255,
          n = t[1] / 255,
          o = t[2] / 255,
          a = t[3],
          r = Math.max(s, n, o),
          h = Math.min(s, n, o),
          l = r - h,
          u = r + h,
          c = .5 * u;return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= c ? l / u : l / (2 - u), [Math.round(e) % 360, i, c, null == a ? 1 : a];
    }, u.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];var e = t[0] / 360,
          i = t[1],
          s = t[2],
          o = t[3],
          a = .5 >= s ? s * (1 + i) : s + i - s * i,
          r = 2 * s - a;return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o];
    }, f(u, function (s, n) {
      var o = n.props,
          a = n.cache,
          h = n.to,
          u = n.from;l.fn[s] = function (s) {
        if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();var n,
            r = t.type(s),
            c = "array" === r || "object" === r ? s : arguments,
            d = this[a].slice();return f(o, function (t, e) {
          var s = c["object" === r ? t : e.idx];null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
        }), u ? (n = l(u(d)), n[a] = d, n) : l(d);
      }, f(o, function (e, i) {
        l.fn[e] || (l.fn[e] = function (n) {
          var o,
              a = t.type(n),
              h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
              l = this[h](),
              u = l[i.idx];return "undefined" === a ? u : ("function" === a && (n = n.call(this, u), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)));
        });
      });
    }), l.hook = function (e) {
      var i = e.split(" ");f(i, function (e, i) {
        t.cssHooks[i] = { set: function set(e, n) {
            var o,
                a,
                r = "";if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
              if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) {
                  try {
                    r = t.css(a, "backgroundColor"), a = a.parentNode;
                  } catch (h) {}
                }n = n.blend(r && "transparent" !== r ? r : "_default");
              }n = n.toRgbaString();
            }try {
              e.style[i] = n;
            } catch (h) {}
          } }, t.fx.step[i] = function (e) {
          e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
        };
      });
    }, l.hook(a), t.cssHooks.borderColor = { expand: function expand(t) {
        var e = {};return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
          e["border" + s + "Color"] = t;
        }), e;
      } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" };
  }(v), function () {
    function e(e) {
      var i,
          s,
          n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) {
        i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
      } else for (i in n) {
        "string" == typeof n[i] && (o[i] = n[i]);
      }return o;
    }function i(e, i) {
      var s,
          o,
          a = {};for (s in i) {
        o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
      }return a;
    }var s = ["add", "remove", "toggle"],
        n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
      t.fx.step[i] = function (t) {
        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (v.style(t.elem, i, t.end), t.setAttr = !0);
      };
    }), t.fn.addBack || (t.fn.addBack = function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.effects.animateClass = function (n, o, a, r) {
      var h = t.speed(o, a, r);return this.queue(function () {
        var o,
            a = t(this),
            r = a.attr("class") || "",
            l = h.children ? a.find("*").addBack() : a;l = l.map(function () {
          var i = t(this);return { el: i, start: e(this) };
        }), o = function o() {
          t.each(s, function (t, e) {
            n[e] && a[e + "Class"](n[e]);
          });
        }, o(), l = l.map(function () {
          return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
        }), a.attr("class", r), l = l.map(function () {
          var e = this,
              i = t.Deferred(),
              s = t.extend({}, h, { queue: !1, complete: function complete() {
              i.resolve(e);
            } });return this.el.animate(this.diff, s), i.promise();
        }), t.when.apply(t, l.get()).done(function () {
          o(), t.each(arguments, function () {
            var e = this.el;t.each(this.diff, function (t) {
              e.css(t, "");
            });
          }), h.complete.call(a[0]);
        });
      });
    }, t.fn.extend({ addClass: function (e) {
        return function (i, s, n, o) {
          return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.addClass), removeClass: function (e) {
        return function (i, s, n, o) {
          return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.removeClass), toggleClass: function (e) {
        return function (i, s, n, o, a) {
          return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, s, n, o);
        };
      }(t.fn.toggleClass), switchClass: function switchClass(e, i, s, n, o) {
        return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o);
      } });
  }(), function () {
    function e(e, i, s, n) {
      return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e;
    }function i(e) {
      return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || e.effect ? !1 : !0 : !0;
    }function s(t, e) {
      var i = e.outerWidth(),
          s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ["", 0, i, s, 0];return { top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? s : parseFloat(o[3]), left: parseFloat(o[4]) || 0 };
    }t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
      return function (i) {
        return !!t(i).data(g) || e(i);
      };
    }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, { save: function save(t, e) {
        for (var i = 0, s = e.length; s > i; i++) {
          null !== e[i] && t.data(f + e[i], t[0].style[e[i]]);
        }
      }, restore: function restore(t, e) {
        for (var i, s = 0, n = e.length; n > s; s++) {
          null !== e[s] && (i = t.data(f + e[s]), t.css(e[s], i));
        }
      }, setMode: function setMode(t, e) {
        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
      }, createWrapper: function createWrapper(e) {
        if (e.parent().is(".ui-effects-wrapper")) return e.parent();var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float") },
            s = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
            n = { width: e.width(), height: e.height() },
            o = document.activeElement;try {
          o.id;
        } catch (a) {
          o = document.body;
        }return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function (t, s) {
          i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
        }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(n), s.css(i).show();
      }, removeWrapper: function removeWrapper(e) {
        var i = document.activeElement;return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e;
      } }), t.extend(t.effects, { version: "1.12.1", define: function define(e, i, s) {
        return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s;
      }, scaledDimensions: function scaledDimensions(t, e, i) {
        if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };var s = "horizontal" !== i ? (e || 100) / 100 : 1,
            n = "vertical" !== i ? (e || 100) / 100 : 1;return { height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s };
      }, clipToBox: function clipToBox(t) {
        return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top };
      }, unshift: function unshift(t, e, i) {
        var s = t.queue();e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
      }, saveStyle: function saveStyle(t) {
        t.data(m, t[0].style.cssText);
      }, restoreStyle: function restoreStyle(t) {
        t[0].style.cssText = t.data(m) || "", t.removeData(m);
      }, mode: function mode(t, e) {
        var i = t.is(":hidden");return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
      }, getBaseline: function getBaseline(t, e) {
        var i, s;switch (t[0]) {case "top":
            i = 0;break;case "middle":
            i = .5;break;case "bottom":
            i = 1;break;default:
            i = t[0] / e.height;}switch (t[1]) {case "left":
            s = 0;break;case "center":
            s = .5;break;case "right":
            s = 1;break;default:
            s = t[1] / e.width;}return { x: s, y: i };
      }, createPlaceholder: function createPlaceholder(e) {
        var i,
            s = e.css("position"),
            n = e.position();return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), "float": e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(f + "placeholder", i)), e.css({ position: s, left: n.left, top: n.top }), i;
      }, removePlaceholder: function removePlaceholder(t) {
        var e = f + "placeholder",
            i = t.data(e);i && (i.remove(), t.removeData(e));
      }, cleanUp: function cleanUp(e) {
        t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
      }, setTransition: function setTransition(e, i, s, n) {
        return n = n || {}, t.each(i, function (t, i) {
          var o = e.cssUnit(i);o[0] > 0 && (n[i] = o[0] * s + o[1]);
        }), n;
      } }), t.fn.extend({ effect: function effect() {
        function i(e) {
          function i() {
            r.removeData(g), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a();
          }function a() {
            t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
          }var r = t(this);s.mode = u.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a);
        }var s = e.apply(this, arguments),
            n = t.effects.effect[s.effect],
            o = n.mode,
            a = s.queue,
            r = a || "fx",
            h = s.complete,
            l = s.mode,
            u = [],
            c = function c(e) {
          var i = t(this),
              s = t.effects.mode(i, l) || o;i.data(g, !0), u.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
        };return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function () {
          h && h.call(this);
        }) : a === !1 ? this.each(c).each(i) : this.queue(r, c).queue(r, i);
      }, show: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);var n = e.apply(this, arguments);return n.mode = "show", this.effect.call(this, n);
        };
      }(t.fn.show), hide: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);var n = e.apply(this, arguments);return n.mode = "hide", this.effect.call(this, n);
        };
      }(t.fn.hide), toggle: function (t) {
        return function (s) {
          if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);var n = e.apply(this, arguments);return n.mode = "toggle", this.effect.call(this, n);
        };
      }(t.fn.toggle), cssUnit: function cssUnit(e) {
        var i = this.css(e),
            s = [];return t.each(["em", "px", "%", "pt"], function (t, e) {
          i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
        }), s;
      }, cssClip: function cssClip(t) {
        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
      }, transfer: function transfer(e, i) {
        var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            h = o ? a.scrollLeft() : 0,
            l = n.offset(),
            u = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() },
            c = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: c.top - r, left: c.left - h, height: s.innerHeight(), width: s.innerWidth(), position: o ? "fixed" : "absolute" }).animate(u, e.duration, e.easing, function () {
          d.remove(), t.isFunction(i) && i();
        });
      } }), t.fx.step.clip = function (e) {
      e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left });
    };
  }(), function () {
    var e = {};t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
      e[i] = function (e) {
        return Math.pow(e, t + 2);
      };
    }), t.extend(e, { Sine: function Sine(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      }, Circ: function Circ(t) {
        return 1 - Math.sqrt(1 - t * t);
      }, Elastic: function Elastic(t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
      }, Back: function Back(t) {
        return t * t * (3 * t - 2);
      }, Bounce: function Bounce(t) {
        for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) {}return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
      } }), t.each(e, function (e, i) {
      t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
        return 1 - i(1 - t);
      }, t.easing["easeInOut" + e] = function (t) {
        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
      };
    });
  }();var _ = t.effects;t.effects.define("blind", "hide", function (e, i) {
    var s = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
        n = t(this),
        o = e.direction || "up",
        a = n.cssClip(),
        r = { clip: t.extend({}, a) },
        h = t.effects.createPlaceholder(n);r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  }), t.effects.define("bounce", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = e.mode,
        h = "hide" === r,
        l = "show" === r,
        u = e.direction || "up",
        c = e.distance,
        d = e.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = e.duration / p,
        m = e.easing,
        g = "up" === u || "down" === u ? "top" : "left",
        v = "up" === u || "left" === u,
        _ = 0,
        b = a.queue().length;for (t.effects.createPlaceholder(a), o = a.css(g), c || (c = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), l && (n = { opacity: 1 }, n[g] = o, a.css("opacity", 0).css(g, v ? 2 * -c : 2 * c).animate(n, f, m)), h && (c /= Math.pow(2, d - 1)), n = {}, n[g] = o; d > _; _++) {
      s = {}, s[g] = (v ? "-=" : "+=") + c, a.animate(s, f, m).animate(n, f, m), c = h ? 2 * c : c / 2;
    }h && (s = { opacity: 0 }, s[g] = (v ? "-=" : "+=") + c, a.animate(s, f, m)), a.queue(i), t.effects.unshift(a, b, p + 1);
  }), t.effects.define("clip", "hide", function (e, i) {
    var s,
        n = {},
        o = t(this),
        a = e.direction || "vertical",
        r = "both" === a,
        h = r || "horizontal" === a,
        l = r || "vertical" === a;s = o.cssClip(), n.clip = { top: l ? (s.bottom - s.top) / 2 : s.top, right: h ? (s.right - s.left) / 2 : s.right, bottom: l ? (s.bottom - s.top) / 2 : s.bottom, left: h ? (s.right - s.left) / 2 : s.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  }), t.effects.define("drop", "hide", function (e, i) {
    var s,
        n = t(this),
        o = e.mode,
        a = "show" === o,
        r = e.direction || "left",
        h = "up" === r || "down" === r ? "top" : "left",
        l = "up" === r || "left" === r ? "-=" : "+=",
        u = "+=" === l ? "-=" : "+=",
        c = { opacity: 0 };t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, c[h] = l + s, a && (n.css(c), c[h] = u + s, c.opacity = 1), n.animate(c, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  }), t.effects.define("explode", "hide", function (e, i) {
    function s() {
      b.push(this), b.length === c * d && n();
    }function n() {
      p.css({ visibility: "visible" }), t(b).remove(), i();
    }var o,
        a,
        r,
        h,
        l,
        u,
        c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = c,
        p = t(this),
        f = e.mode,
        m = "show" === f,
        g = p.show().css("visibility", "hidden").offset(),
        v = Math.ceil(p.outerWidth() / d),
        _ = Math.ceil(p.outerHeight() / c),
        b = [];for (o = 0; c > o; o++) {
      for (h = g.top + o * _, u = o - (c - 1) / 2, a = 0; d > a; a++) {
        r = g.left + a * v, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -a * v, top: -o * _ }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: _, left: r + (m ? l * v : 0), top: h + (m ? u * _ : 0), opacity: m ? 0 : 1 }).animate({ left: r + (m ? 0 : l * v), top: h + (m ? 0 : u * _), opacity: m ? 1 : 0 }, e.duration || 500, e.easing, s);
      }
    }
  }), t.effects.define("fade", "toggle", function (e, i) {
    var s = "show" === e.mode;t(this).css("opacity", s ? 0 : 1).animate({ opacity: s ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  }), t.effects.define("fold", "hide", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = e.size || 15,
        h = /([0-9]+)%/.exec(r),
        l = !!e.horizFirst,
        u = l ? ["right", "bottom"] : ["bottom", "right"],
        c = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = { clip: t.extend({}, p) },
        m = { clip: t.extend({}, p) },
        g = [p[u[0]], p[u[1]]],
        v = s.queue().length;h && (r = parseInt(h[1], 10) / 100 * g[a ? 0 : 1]), f.clip[u[0]] = r, m.clip[u[0]] = r, m.clip[u[1]] = 0, o && (s.cssClip(m.clip), d && d.css(t.effects.clipToBox(m)), m.clip = p), s.queue(function (i) {
      d && d.animate(t.effects.clipToBox(f), c, e.easing).animate(t.effects.clipToBox(m), c, e.easing), i();
    }).animate(f, c, e.easing).animate(m, c, e.easing).queue(i), t.effects.unshift(s, v, 4);
  }), t.effects.define("highlight", "show", function (e, i) {
    var s = t(this),
        n = { backgroundColor: s.css("backgroundColor") };"hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  }), t.effects.define("size", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = ["fontSize"],
        h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        u = e.mode,
        c = "effect" !== u,
        d = e.scale || "both",
        p = e.origin || ["middle", "center"],
        f = a.css("position"),
        m = a.position(),
        g = t.effects.scaledDimensions(a),
        v = e.from || g,
        _ = e.to || t.effects.scaledDimensions(a, 0);t.effects.createPlaceholder(a), "show" === u && (o = v, v = _, _ = o), n = { from: { y: v.height / g.height, x: v.width / g.width }, to: { y: _.height / g.height, x: _.width / g.width } }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (v = t.effects.setTransition(a, h, n.from.y, v), _ = t.effects.setTransition(a, h, n.to.y, _)), n.from.x !== n.to.x && (v = t.effects.setTransition(a, l, n.from.x, v), _ = t.effects.setTransition(a, l, n.to.x, _))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (v = t.effects.setTransition(a, r, n.from.y, v), _ = t.effects.setTransition(a, r, n.to.y, _)), p && (s = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * s.y + m.top, v.left = (g.outerWidth - v.outerWidth) * s.x + m.left, _.top = (g.outerHeight - _.outerHeight) * s.y + m.top, _.left = (g.outerWidth - _.outerWidth) * s.x + m.left), a.css(v), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
      var i = t(this),
          s = t.effects.scaledDimensions(i),
          o = { height: s.height * n.from.y, width: s.width * n.from.x, outerHeight: s.outerHeight * n.from.y, outerWidth: s.outerWidth * n.from.x },
          a = { height: s.height * n.to.y, width: s.width * n.to.x, outerHeight: s.height * n.to.y, outerWidth: s.width * n.to.x };n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), c && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
        c && t.effects.restoreStyle(i);
      });
    })), a.animate(_, { queue: !1, duration: e.duration, easing: e.easing, complete: function complete() {
        var e = a.offset();0 === _.opacity && a.css("opacity", v.opacity), c || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i();
      } });
  }), t.effects.define("scale", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
        a = t.extend(!0, { from: t.effects.scaledDimensions(s), to: t.effects.scaledDimensions(s, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i);
  }), t.effects.define("puff", "hide", function (e, i) {
    var s = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });t.effects.effect.scale.call(this, s, i);
  }), t.effects.define("pulsate", "show", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = o || a,
        h = 2 * (e.times || 5) + (r ? 1 : 0),
        l = e.duration / h,
        u = 0,
        c = 1,
        d = s.queue().length;for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1); h > c; c++) {
      s.animate({ opacity: u }, l, e.easing), u = 1 - u;
    }s.animate({ opacity: u }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
  }), t.effects.define("shake", function (e, i) {
    var s = 1,
        n = t(this),
        o = e.direction || "left",
        a = e.distance || 20,
        r = e.times || 3,
        h = 2 * r + 1,
        l = Math.round(e.duration / h),
        u = "up" === o || "down" === o ? "top" : "left",
        c = "up" === o || "left" === o,
        d = {},
        p = {},
        f = {},
        m = n.queue().length;for (t.effects.createPlaceholder(n), d[u] = (c ? "-=" : "+=") + a, p[u] = (c ? "+=" : "-=") + 2 * a, f[u] = (c ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) {
      n.animate(p, l, e.easing).animate(f, l, e.easing);
    }n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, m, h + 1);
  }), t.effects.define("slide", "show", function (e, i) {
    var s,
        n,
        o = t(this),
        a = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
        r = e.mode,
        h = e.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        u = "up" === h || "left" === h,
        c = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
        d = {};t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (u ? -1 : 1) * c + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  });var _;t.uiBackCompat !== !1 && (_ = t.effects.define("transfer", function (e, i) {
    t(this).transfer(e, i);
  }));
});

/***/ }),

/***/ "./resources/assets/js/libs/jquery.elevatezoom.min.js":
/***/ (function(module, exports) {

if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {};F.prototype = obj;return new F();
  };
}(function ($, window, document, undefined) {
  var ElevateZoom = { init: function init(options, elem) {
      var self = this;self.elem = elem;self.$elem = $(elem);self.imageSrc = self.$elem.data("zoom-image") ? self.$elem.data("zoom-image") : self.$elem.attr("src");self.options = $.extend({}, $.fn.elevateZoom.options, options);if (self.options.tint) {
        self.options.lensColour = "none", self.options.lensOpacity = "1";
      }
      if (self.options.zoomType == "inner") {
        self.options.showLens = !1;
      }
      self.$elem.parent().removeAttr('title').removeAttr('alt');self.zoomImage = self.imageSrc;self.refresh(1);$('#' + self.options.gallery + ' a').click(function (e) {
        if (self.options.galleryActiveClass) {
          $('#' + self.options.gallery + ' a').removeClass(self.options.galleryActiveClass);$(this).addClass(self.options.galleryActiveClass);
        }
        e.preventDefault();if ($(this).data("zoom-image")) {
          self.zoomImagePre = $(this).data("zoom-image");
        } else {
          self.zoomImagePre = $(this).data("image");
        }
        self.swaptheimage($(this).data("image"), self.zoomImagePre);return !1;
      });
    }, refresh: function refresh(length) {
      var self = this;setTimeout(function () {
        self.fetch(self.imageSrc);
      }, length || self.options.refresh);
    }, fetch: function fetch(imgsrc) {
      var self = this;var newImg = new Image();newImg.onload = function () {
        self.largeWidth = newImg.width;self.largeHeight = newImg.height;self.startZoom();self.currentImage = self.imageSrc;self.options.onZoomedImageLoaded(self.$elem);
      };
      newImg.src = imgsrc;return;
    }, startZoom: function startZoom() {
      var self = this;self.nzWidth = self.$elem.width();self.nzHeight = self.$elem.height();self.isWindowActive = !1;self.isLensActive = !1;self.isTintActive = !1;self.overWindow = !1;if (self.options.imageCrossfade) {
        self.zoomWrap = self.$elem.wrap('<div style="height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;" class="zoomWrapper" />');self.$elem.css('position', 'absolute');
      }
      self.zoomLock = 1;self.scrollingLock = !1;self.changeBgSize = !1;self.currentZoomLevel = self.options.zoomLevel;self.nzOffset = self.$elem.offset();self.widthRatio = self.largeWidth / self.currentZoomLevel / self.nzWidth;self.heightRatio = self.largeHeight / self.currentZoomLevel / self.nzHeight;if (self.options.zoomType == "window") {
        self.zoomWindowStyle = "overflow: hidden;" + "background-position: 0px 0px;text-align:center;" + "background-color: " + String(self.options.zoomWindowBgColour) + ";width: " + String(self.options.zoomWindowWidth) + "px;" + "height: " + String(self.options.zoomWindowHeight) + "px;float: left;" + "background-size: " + self.largeWidth / self.currentZoomLevel + "px " + self.largeHeight / self.currentZoomLevel + "px;" + "display: none;z-index:100;" + "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour + ";background-repeat: no-repeat;" + "position: absolute;";
      }
      if (self.options.zoomType == "inner") {
        var borderWidth = self.$elem.css("border-left-width");self.zoomWindowStyle = "overflow: hidden;" + "margin-left: " + String(borderWidth) + ";" + "margin-top: " + String(borderWidth) + ";" + "background-position: 0px 0px;" + "width: " + String(self.nzWidth) + "px;" + "height: " + String(self.nzHeight) + "px;" + "px;float: left;" + "display: none;" + "cursor:" + self.options.cursor + ";" + "px solid " + self.options.borderColour + ";background-repeat: no-repeat;" + "position: absolute;";
      }
      if (self.options.zoomType == "window") {
        if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
          lensHeight = self.nzHeight;
        } else {
          lensHeight = String(self.options.zoomWindowHeight / self.heightRatio);
        }
        if (self.largeWidth < self.options.zoomWindowWidth) {
          lensWidth = self.nzWidth;
        } else {
          lensWidth = self.options.zoomWindowWidth / self.widthRatio;
        }
        self.lensStyle = "background-position: 0px 0px;width: " + String(self.options.zoomWindowWidth / self.widthRatio) + "px;height: " + String(self.options.zoomWindowHeight / self.heightRatio) + "px;float: right;display: none;" + "overflow: hidden;" + "z-index: 999;" + "-webkit-transform: translateZ(0);" + "opacity:" + self.options.lensOpacity + ";filter: alpha(opacity = " + self.options.lensOpacity * 100 + "); zoom:1;" + "width:" + lensWidth + "px;" + "height:" + lensHeight + "px;" + "background-color:" + self.options.lensColour + ";" + "cursor:" + self.options.cursor + ";" + "border: " + self.options.lensBorderSize + "px" + " solid " + self.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;";
      }
      self.tintStyle = "display: block;" + "position: absolute;" + "background-color: " + self.options.tintColour + ";" + "filter:alpha(opacity=0);" + "opacity: 0;" + "width: " + self.nzWidth + "px;" + "height: " + self.nzHeight + "px;";self.lensRound = '';if (self.options.zoomType == "lens") {
        self.lensStyle = "background-position: 0px 0px;" + "float: left;display: none;" + "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour + ";" + "width:" + String(self.options.lensSize) + "px;" + "height:" + String(self.options.lensSize) + "px;" + "background-repeat: no-repeat;position: absolute;";
      }
      if (self.options.lensShape == "round") {
        self.lensRound = "border-top-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" + "border-top-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" + "border-bottom-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" + "border-bottom-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;";
      }
      self.zoomContainer = $('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + self.nzOffset.left + 'px;top:' + self.nzOffset.top + 'px;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;"></div>');$('body').append(self.zoomContainer);if (self.options.containLensZoom && self.options.zoomType == "lens") {
        self.zoomContainer.css("overflow", "hidden");
      }
      if (self.options.zoomType != "inner") {
        self.zoomLens = $("<div class='zoomLens' style='" + self.lensStyle + self.lensRound + "'>&nbsp;</div>").appendTo(self.zoomContainer).click(function () {
          self.$elem.trigger('click');
        });if (self.options.tint) {
          self.tintContainer = $('<div/>').addClass('tintContainer');self.zoomTint = $("<div class='zoomTint' style='" + self.tintStyle + "'></div>");self.zoomLens.wrap(self.tintContainer);self.zoomTintcss = self.zoomLens.after(self.zoomTint);self.zoomTintImage = $('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + self.nzWidth + 'px; height: ' + self.nzHeight + 'px;" src="' + self.imageSrc + '">').appendTo(self.zoomLens).click(function () {
            self.$elem.trigger('click');
          });
        }
      }
      if (isNaN(self.options.zoomWindowPosition)) {
        self.zoomWindow = $("<div style='z-index:999;left:" + self.windowOffsetLeft + "px;top:" + self.windowOffsetTop + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo('body').click(function () {
          self.$elem.trigger('click');
        });
      } else {
        self.zoomWindow = $("<div style='z-index:999;left:" + self.windowOffsetLeft + "px;top:" + self.windowOffsetTop + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(self.zoomContainer).click(function () {
          self.$elem.trigger('click');
        });
      }
      self.zoomWindowContainer = $('<div/>').addClass('zoomWindowContainer').css("width", self.options.zoomWindowWidth);self.zoomWindow.wrap(self.zoomWindowContainer);if (self.options.zoomType == "lens") {
        self.zoomLens.css({ backgroundImage: "url('" + self.imageSrc + "')" });
      }
      if (self.options.zoomType == "window") {
        self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
      }
      if (self.options.zoomType == "inner") {
        self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
      }
      self.$elem.bind('touchmove', function (e) {
        e.preventDefault();var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];self.setPosition(touch);
      });self.zoomContainer.bind('touchmove', function (e) {
        if (self.options.zoomType == "inner") {
          self.showHideWindow("show");
        }
        e.preventDefault();var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];self.setPosition(touch);
      });self.zoomContainer.bind('touchend', function (e) {
        self.showHideWindow("hide");if (self.options.showLens) {
          self.showHideLens("hide");
        }
        if (self.options.tint && self.options.zoomType != "inner") {
          self.showHideTint("hide");
        }
      });self.$elem.bind('touchend', function (e) {
        self.showHideWindow("hide");if (self.options.showLens) {
          self.showHideLens("hide");
        }
        if (self.options.tint && self.options.zoomType != "inner") {
          self.showHideTint("hide");
        }
      });if (self.options.showLens) {
        self.zoomLens.bind('touchmove', function (e) {
          e.preventDefault();var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];self.setPosition(touch);
        });self.zoomLens.bind('touchend', function (e) {
          self.showHideWindow("hide");if (self.options.showLens) {
            self.showHideLens("hide");
          }
          if (self.options.tint && self.options.zoomType != "inner") {
            self.showHideTint("hide");
          }
        });
      }
      self.$elem.bind('mousemove', function (e) {
        if (self.overWindow == !1) {
          self.setElements("show");
        }
        if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
          self.setPosition(e);self.currentLoc = e;
        }
        self.lastX = e.clientX;self.lastY = e.clientY;
      });self.zoomContainer.bind('mousemove', function (e) {
        if (self.overWindow == !1) {
          self.setElements("show");
        }
        if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
          self.setPosition(e);self.currentLoc = e;
        }
        self.lastX = e.clientX;self.lastY = e.clientY;
      });if (self.options.zoomType != "inner") {
        self.zoomLens.bind('mousemove', function (e) {
          if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
            self.setPosition(e);self.currentLoc = e;
          }
          self.lastX = e.clientX;self.lastY = e.clientY;
        });
      }
      if (self.options.tint && self.options.zoomType != "inner") {
        self.zoomTint.bind('mousemove', function (e) {
          if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
            self.setPosition(e);self.currentLoc = e;
          }
          self.lastX = e.clientX;self.lastY = e.clientY;
        });
      }
      if (self.options.zoomType == "inner") {
        self.zoomWindow.bind('mousemove', function (e) {
          if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
            self.setPosition(e);self.currentLoc = e;
          }
          self.lastX = e.clientX;self.lastY = e.clientY;
        });
      }
      self.zoomContainer.add(self.$elem).mouseenter(function () {
        if (self.overWindow == !1) {
          self.setElements("show");
        }
      }).mouseleave(function () {
        if (!self.scrollLock) {
          self.setElements("hide");self.options.onDestroy(self.$elem);
        }
      });if (self.options.zoomType != "inner") {
        self.zoomWindow.mouseenter(function () {
          self.overWindow = !0;self.setElements("hide");
        }).mouseleave(function () {
          self.overWindow = !1;
        });
      }
      if (self.options.zoomLevel != 1) {}
      if (self.options.minZoomLevel) {
        self.minZoomLevel = self.options.minZoomLevel;
      } else {
        self.minZoomLevel = self.options.scrollZoomIncrement * 2;
      }
      if (self.options.scrollZoom) {
        self.zoomContainer.add(self.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {
          self.scrollLock = !0;clearTimeout($.data(this, 'timer'));$.data(this, 'timer', setTimeout(function () {
            self.scrollLock = !1;
          }, 250));var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
          e.stopImmediatePropagation();e.stopPropagation();e.preventDefault();if (theEvent / 120 > 0) {
            if (self.currentZoomLevel >= self.minZoomLevel) {
              self.changeZoomLevel(self.currentZoomLevel - self.options.scrollZoomIncrement);
            }
          } else {
            if (self.options.maxZoomLevel) {
              if (self.currentZoomLevel <= self.options.maxZoomLevel) {
                self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
              }
            } else {
              self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
            }
          }
          return !1;
        });
      }
    }, setElements: function setElements(type) {
      var self = this;if (!self.options.zoomEnabled) {
        return !1;
      }
      if (type == "show") {
        if (self.isWindowSet) {
          if (self.options.zoomType == "inner") {
            self.showHideWindow("show");
          }
          if (self.options.zoomType == "window") {
            self.showHideWindow("show");
          }
          if (self.options.showLens) {
            self.showHideLens("show");
          }
          if (self.options.tint && self.options.zoomType != "inner") {
            self.showHideTint("show");
          }
        }
      }
      if (type == "hide") {
        if (self.options.zoomType == "window") {
          self.showHideWindow("hide");
        }
        if (!self.options.tint) {
          self.showHideWindow("hide");
        }
        if (self.options.showLens) {
          self.showHideLens("hide");
        }
        if (self.options.tint) {
          self.showHideTint("hide");
        }
      }
    }, setPosition: function setPosition(e) {
      var self = this;if (!self.options.zoomEnabled) {
        return !1;
      }
      self.nzHeight = self.$elem.height();self.nzWidth = self.$elem.width();self.nzOffset = self.$elem.offset();if (self.options.tint && self.options.zoomType != "inner") {
        self.zoomTint.css({ top: 0 });self.zoomTint.css({ left: 0 });
      }
      if (self.options.responsive && !self.options.scrollZoom) {
        if (self.options.showLens) {
          if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
            lensHeight = self.nzHeight;
          } else {
            lensHeight = String(self.options.zoomWindowHeight / self.heightRatio);
          }
          if (self.largeWidth < self.options.zoomWindowWidth) {
            lensWidth = self.nzWidth;
          } else {
            lensWidth = self.options.zoomWindowWidth / self.widthRatio;
          }
          self.widthRatio = self.largeWidth / self.nzWidth;self.heightRatio = self.largeHeight / self.nzHeight;if (self.options.zoomType != "lens") {
            if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
              lensHeight = self.nzHeight;
            } else {
              lensHeight = String(self.options.zoomWindowHeight / self.heightRatio);
            }
            if (self.nzWidth < self.options.zoomWindowHeight / self.heightRatio) {
              lensWidth = self.nzWidth;
            } else {
              lensWidth = String(self.options.zoomWindowWidth / self.widthRatio);
            }
            self.zoomLens.css('width', lensWidth);self.zoomLens.css('height', lensHeight);if (self.options.tint) {
              self.zoomTintImage.css('width', self.nzWidth);self.zoomTintImage.css('height', self.nzHeight);
            }
          }
          if (self.options.zoomType == "lens") {
            self.zoomLens.css({ width: String(self.options.lensSize) + 'px', height: String(self.options.lensSize) + 'px' });
          }
        }
      }
      self.zoomContainer.css({ top: self.nzOffset.top });self.zoomContainer.css({ left: self.nzOffset.left });self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);self.mouseTop = parseInt(e.pageY - self.nzOffset.top);if (self.options.zoomType == "window") {
        self.Etoppos = self.mouseTop < self.zoomLens.height() / 2;self.Eboppos = self.mouseTop > self.nzHeight - self.zoomLens.height() / 2 - self.options.lensBorderSize * 2;self.Eloppos = self.mouseLeft < 0 + self.zoomLens.width() / 2;self.Eroppos = self.mouseLeft > self.nzWidth - self.zoomLens.width() / 2 - self.options.lensBorderSize * 2;
      }
      if (self.options.zoomType == "inner") {
        self.Etoppos = self.mouseTop < self.nzHeight / 2 / self.heightRatio;self.Eboppos = self.mouseTop > self.nzHeight - self.nzHeight / 2 / self.heightRatio;self.Eloppos = self.mouseLeft < 0 + self.nzWidth / 2 / self.widthRatio;self.Eroppos = self.mouseLeft > self.nzWidth - self.nzWidth / 2 / self.widthRatio - self.options.lensBorderSize * 2;
      }
      if (self.mouseLeft < 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight) {
        self.setElements("hide");return;
      } else {
        if (self.options.showLens) {
          self.lensLeftPos = String(Math.floor(self.mouseLeft - self.zoomLens.width() / 2));self.lensTopPos = String(Math.floor(self.mouseTop - self.zoomLens.height() / 2));
        }
        if (self.Etoppos) {
          self.lensTopPos = 0;
        }
        if (self.Eloppos) {
          self.windowLeftPos = 0;self.lensLeftPos = 0;self.tintpos = 0;
        }
        if (self.options.zoomType == "window") {
          if (self.Eboppos) {
            self.lensTopPos = Math.max(self.nzHeight - self.zoomLens.height() - self.options.lensBorderSize * 2, 0);
          }
          if (self.Eroppos) {
            self.lensLeftPos = self.nzWidth - self.zoomLens.width() - self.options.lensBorderSize * 2;
          }
        }
        if (self.options.zoomType == "inner") {
          if (self.Eboppos) {
            self.lensTopPos = Math.max(self.nzHeight - self.options.lensBorderSize * 2, 0);
          }
          if (self.Eroppos) {
            self.lensLeftPos = self.nzWidth - self.nzWidth - self.options.lensBorderSize * 2;
          }
        }
        if (self.options.zoomType == "lens") {
          self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * -1);self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * -1);self.zoomLens.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });if (self.changeBgSize) {
            if (self.nzHeight > self.nzWidth) {
              if (self.options.zoomType == "lens") {
                self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
              }
              self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
            } else {
              if (self.options.zoomType == "lens") {
                self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
              }
              self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
            }
            self.changeBgSize = !1;
          }
          self.setWindowPostition(e);
        }
        if (self.options.tint && self.options.zoomType != "inner") {
          self.setTintPosition(e);
        }
        if (self.options.zoomType == "window") {
          self.setWindowPostition(e);
        }
        if (self.options.zoomType == "inner") {
          self.setWindowPostition(e);
        }
        if (self.options.showLens) {
          if (self.fullwidth && self.options.zoomType != "lens") {
            self.lensLeftPos = 0;
          }
          self.zoomLens.css({ left: self.lensLeftPos + 'px', top: self.lensTopPos + 'px' });
        }
      }
    }, showHideWindow: function showHideWindow(change) {
      var self = this;if (change == "show") {
        if (!self.isWindowActive) {
          if (self.options.zoomWindowFadeIn) {
            self.zoomWindow.stop(!0, !0, !1).fadeIn(self.options.zoomWindowFadeIn);
          } else {
            self.zoomWindow.show();
          }
          self.isWindowActive = !0;
        }
      }
      if (change == "hide") {
        if (self.isWindowActive) {
          if (self.options.zoomWindowFadeOut) {
            self.zoomWindow.stop(!0, !0).fadeOut(self.options.zoomWindowFadeOut, function () {
              if (self.loop) {
                clearInterval(self.loop);self.loop = !1;
              }
            });
          } else {
            self.zoomWindow.hide();
          }
          self.isWindowActive = !1;
        }
      }
    }, showHideLens: function showHideLens(change) {
      var self = this;if (change == "show") {
        if (!self.isLensActive) {
          if (self.options.lensFadeIn) {
            self.zoomLens.stop(!0, !0, !1).fadeIn(self.options.lensFadeIn);
          } else {
            self.zoomLens.show();
          }
          self.isLensActive = !0;
        }
      }
      if (change == "hide") {
        if (self.isLensActive) {
          if (self.options.lensFadeOut) {
            self.zoomLens.stop(!0, !0).fadeOut(self.options.lensFadeOut);
          } else {
            self.zoomLens.hide();
          }
          self.isLensActive = !1;
        }
      }
    }, showHideTint: function showHideTint(change) {
      var self = this;if (change == "show") {
        if (!self.isTintActive) {
          if (self.options.zoomTintFadeIn) {
            self.zoomTint.css({ opacity: self.options.tintOpacity }).animate().stop(!0, !0).fadeIn("slow");
          } else {
            self.zoomTint.css({ opacity: self.options.tintOpacity }).animate();self.zoomTint.show();
          }
          self.isTintActive = !0;
        }
      }
      if (change == "hide") {
        if (self.isTintActive) {
          if (self.options.zoomTintFadeOut) {
            self.zoomTint.stop(!0, !0).fadeOut(self.options.zoomTintFadeOut);
          } else {
            self.zoomTint.hide();
          }
          self.isTintActive = !1;
        }
      }
    }, setLensPostition: function setLensPostition(e) {}, setWindowPostition: function setWindowPostition(e) {
      var self = this;if (!isNaN(self.options.zoomWindowPosition)) {
        switch (self.options.zoomWindowPosition) {case 1:
            self.windowOffsetTop = self.options.zoomWindowOffety;self.windowOffsetLeft = +self.nzWidth;break;case 2:
            if (self.options.zoomWindowHeight > self.nzHeight) {
              self.windowOffsetTop = (self.options.zoomWindowHeight / 2 - self.nzHeight / 2) * -1;self.windowOffsetLeft = self.nzWidth;
            } else {}
            break;case 3:
            self.windowOffsetTop = self.nzHeight - self.zoomWindow.height() - self.options.borderSize * 2;self.windowOffsetLeft = self.nzWidth;break;case 4:
            self.windowOffsetTop = self.nzHeight;self.windowOffsetLeft = self.nzWidth;break;case 5:
            self.windowOffsetTop = self.nzHeight;self.windowOffsetLeft = self.nzWidth - self.zoomWindow.width() - self.options.borderSize * 2;break;case 6:
            if (self.options.zoomWindowHeight > self.nzHeight) {
              self.windowOffsetTop = self.nzHeight;self.windowOffsetLeft = (self.options.zoomWindowWidth / 2 - self.nzWidth / 2 + self.options.borderSize * 2) * -1;
            } else {}
            break;case 7:
            self.windowOffsetTop = self.nzHeight;self.windowOffsetLeft = 0;break;case 8:
            self.windowOffsetTop = self.nzHeight;self.windowOffsetLeft = (self.zoomWindow.width() + self.options.borderSize * 2) * -1;break;case 9:
            self.windowOffsetTop = self.nzHeight - self.zoomWindow.height() - self.options.borderSize * 2;self.windowOffsetLeft = (self.zoomWindow.width() + self.options.borderSize * 2) * -1;break;case 10:
            if (self.options.zoomWindowHeight > self.nzHeight) {
              self.windowOffsetTop = (self.options.zoomWindowHeight / 2 - self.nzHeight / 2) * -1;self.windowOffsetLeft = (self.zoomWindow.width() + self.options.borderSize * 2) * -1;
            } else {}
            break;case 11:
            self.windowOffsetTop = self.options.zoomWindowOffety;self.windowOffsetLeft = (self.zoomWindow.width() + self.options.borderSize * 2) * -1;break;case 12:
            self.windowOffsetTop = (self.zoomWindow.height() + self.options.borderSize * 2) * -1;self.windowOffsetLeft = (self.zoomWindow.width() + self.options.borderSize * 2) * -1;break;case 13:
            self.windowOffsetTop = (self.zoomWindow.height() + self.options.borderSize * 2) * -1;self.windowOffsetLeft = 0;break;case 14:
            if (self.options.zoomWindowHeight > self.nzHeight) {
              self.windowOffsetTop = (self.zoomWindow.height() + self.options.borderSize * 2) * -1;self.windowOffsetLeft = (self.options.zoomWindowWidth / 2 - self.nzWidth / 2 + self.options.borderSize * 2) * -1;
            } else {}
            break;case 15:
            self.windowOffsetTop = (self.zoomWindow.height() + self.options.borderSize * 2) * -1;self.windowOffsetLeft = self.nzWidth - self.zoomWindow.width() - self.options.borderSize * 2;break;case 16:
            self.windowOffsetTop = (self.zoomWindow.height() + self.options.borderSize * 2) * -1;self.windowOffsetLeft = self.nzWidth;break;default:
            self.windowOffsetTop = self.options.zoomWindowOffety;self.windowOffsetLeft = self.nzWidth;}
      } else {
        self.externalContainer = $('#' + self.options.zoomWindowPosition);self.externalContainerWidth = self.externalContainer.width();self.externalContainerHeight = self.externalContainer.height();self.externalContainerOffset = self.externalContainer.offset();self.windowOffsetTop = self.externalContainerOffset.top;self.windowOffsetLeft = self.externalContainerOffset.left;
      }
      self.isWindowSet = !0;self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffety;self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffetx;self.zoomWindow.css({ top: self.windowOffsetTop });self.zoomWindow.css({ left: self.windowOffsetLeft });if (self.options.zoomType == "inner") {
        self.zoomWindow.css({ top: 0 });self.zoomWindow.css({ left: 0 });
      }
      self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * -1);self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * -1);if (self.Etoppos) {
        self.windowTopPos = 0;
      }
      if (self.Eloppos) {
        self.windowLeftPos = 0;
      }
      if (self.Eboppos) {
        self.windowTopPos = (self.largeHeight / self.currentZoomLevel - self.zoomWindow.height()) * -1;
      }
      if (self.Eroppos) {
        self.windowLeftPos = (self.largeWidth / self.currentZoomLevel - self.zoomWindow.width()) * -1;
      }
      if (self.fullheight) {
        self.windowTopPos = 0;
      }
      if (self.fullwidth) {
        self.windowLeftPos = 0;
      }
      if (self.options.zoomType == "window" || self.options.zoomType == "inner") {
        if (self.zoomLock == 1) {
          if (self.widthRatio <= 1) {
            self.windowLeftPos = 0;
          }
          if (self.heightRatio <= 1) {
            self.windowTopPos = 0;
          }
        }
        if (self.options.zoomType == "window") {
          if (self.largeHeight < self.options.zoomWindowHeight) {
            self.windowTopPos = 0;
          }
          if (self.largeWidth < self.options.zoomWindowWidth) {
            self.windowLeftPos = 0;
          }
        }
        if (self.options.easing) {
          if (!self.xp) {
            self.xp = 0;
          }
          if (!self.yp) {
            self.yp = 0;
          }
          if (!self.loop) {
            self.loop = setInterval(function () {
              self.xp += (self.windowLeftPos - self.xp) / self.options.easingAmount;self.yp += (self.windowTopPos - self.yp) / self.options.easingAmount;if (self.scrollingLock) {
                clearInterval(self.loop);self.xp = self.windowLeftPos;self.yp = self.windowTopPos;
                self.xp = ((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * -1;self.yp = ((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * -1;if (self.changeBgSize) {
                  if (self.nzHeight > self.nzWidth) {
                    if (self.options.zoomType == "lens") {
                      self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                    }
                    self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                  } else {
                    if (self.options.zoomType != "lens") {
                      self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                    }
                    self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                  }
                  self.changeBgSize = !1;
                }
                self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });self.scrollingLock = !1;self.loop = !1;
              } else if (Math.round(Math.abs(self.xp - self.windowLeftPos) + Math.abs(self.yp - self.windowTopPos)) < 1) {
                clearInterval(self.loop);self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });self.loop = !1;
              } else {
                if (self.changeBgSize) {
                  if (self.nzHeight > self.nzWidth) {
                    if (self.options.zoomType == "lens") {
                      self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                    }
                    self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                  } else {
                    if (self.options.zoomType != "lens") {
                      self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                    }
                    self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                  }
                  self.changeBgSize = !1;
                }
                self.zoomWindow.css({ backgroundPosition: self.xp + 'px ' + self.yp + 'px' });
              }
            }, 16);
          }
        } else {
          if (self.changeBgSize) {
            if (self.nzHeight > self.nzWidth) {
              if (self.options.zoomType == "lens") {
                self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
              }
              self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
            } else {
              if (self.options.zoomType == "lens") {
                self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
              }
              if (self.largeHeight / self.newvaluewidth < self.options.zoomWindowHeight) {
                self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
              } else {
                self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
              }
            }
            self.changeBgSize = !1;
          }
          self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
        }
      }
    }, setTintPosition: function setTintPosition(e) {
      var self = this;self.nzOffset = self.$elem.offset();self.tintpos = String((e.pageX - self.nzOffset.left - self.zoomLens.width() / 2) * -1);self.tintposy = String((e.pageY - self.nzOffset.top - self.zoomLens.height() / 2) * -1);if (self.Etoppos) {
        self.tintposy = 0;
      }
      if (self.Eloppos) {
        self.tintpos = 0;
      }
      if (self.Eboppos) {
        self.tintposy = (self.nzHeight - self.zoomLens.height() - self.options.lensBorderSize * 2) * -1;
      }
      if (self.Eroppos) {
        self.tintpos = (self.nzWidth - self.zoomLens.width() - self.options.lensBorderSize * 2) * -1;
      }
      if (self.options.tint) {
        if (self.fullheight) {
          self.tintposy = 0;
        }
        if (self.fullwidth) {
          self.tintpos = 0;
        }
        self.zoomTintImage.css({ 'left': self.tintpos + 'px' });self.zoomTintImage.css({ 'top': self.tintposy + 'px' });
      }
    }, swaptheimage: function swaptheimage(smallimage, largeimage) {
      var self = this;var newImg = new Image();if (self.options.loadingIcon) {
        self.spinner = $('<div style="background: url(\'' + self.options.loadingIcon + '\') no-repeat center;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>');self.$elem.after(self.spinner);
      }
      self.options.onImageSwap(self.$elem);newImg.onload = function () {
        self.largeWidth = newImg.width;self.largeHeight = newImg.height;self.zoomImage = largeimage;self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });self.swapAction(smallimage, largeimage);return;
      };
      newImg.src = largeimage;
    }, swapAction: function swapAction(smallimage, largeimage) {
      var self = this;var newImg2 = new Image();newImg2.onload = function () {
        self.nzHeight = newImg2.height;self.nzWidth = newImg2.width;self.options.onImageSwapComplete(self.$elem);self.doneCallback();return;
      };
      newImg2.src = smallimage;self.currentZoomLevel = self.options.zoomLevel;self.options.maxZoomLevel = !1;if (self.options.zoomType == "lens") {
        self.zoomLens.css({ backgroundImage: "url('" + largeimage + "')" });
      }
      if (self.options.zoomType == "window") {
        self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
      }
      if (self.options.zoomType == "inner") {
        self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
      }
      self.currentImage = largeimage;if (self.options.imageCrossfade) {
        var oldImg = self.$elem;var newImg = oldImg.clone();self.$elem.attr("src", smallimage);
        self.$elem.after(newImg);newImg.stop(!0).fadeOut(self.options.imageCrossfade, function () {
          $(this).remove();
        });self.$elem.width("auto").removeAttr("width");self.$elem.height("auto").removeAttr("height");oldImg.fadeIn(self.options.imageCrossfade);if (self.options.tint && self.options.zoomType != "inner") {
          var oldImgTint = self.zoomTintImage;var newImgTint = oldImgTint.clone();self.zoomTintImage.attr("src", largeimage);
          self.zoomTintImage.after(newImgTint);newImgTint.stop(!0).fadeOut(self.options.imageCrossfade, function () {
            $(this).remove();
          });oldImgTint.fadeIn(self.options.imageCrossfade);self.zoomTint.css({ height: self.$elem.height() });self.zoomTint.css({ width: self.$elem.width() });
        }
        self.zoomContainer.css("height", self.$elem.height());self.zoomContainer.css("width", self.$elem.width());if (self.options.zoomType == "inner") {
          if (!self.options.constrainType) {
            self.zoomWrap.parent().css("height", self.$elem.height());self.zoomWrap.parent().css("width", self.$elem.width());self.zoomWindow.css("height", self.$elem.height());self.zoomWindow.css("width", self.$elem.width());
          }
        }
        if (self.options.imageCrossfade) {
          self.zoomWrap.css("height", self.$elem.height());self.zoomWrap.css("width", self.$elem.width());
        }
      } else {
        self.$elem.attr("src", smallimage);if (self.options.tint) {
          self.zoomTintImage.attr("src", largeimage);self.zoomTintImage.attr("height", self.$elem.height());self.zoomTintImage.css({ height: self.$elem.height() });self.zoomTint.css({ height: self.$elem.height() });
        }
        self.zoomContainer.css("height", self.$elem.height());self.zoomContainer.css("width", self.$elem.width());if (self.options.imageCrossfade) {
          self.zoomWrap.css("height", self.$elem.height());self.zoomWrap.css("width", self.$elem.width());
        }
      }
      if (self.options.constrainType) {
        if (self.options.constrainType == "height") {
          self.zoomContainer.css("height", self.options.constrainSize);self.zoomContainer.css("width", "auto");if (self.options.imageCrossfade) {
            self.zoomWrap.css("height", self.options.constrainSize);self.zoomWrap.css("width", "auto");self.constwidth = self.zoomWrap.width();
          } else {
            self.$elem.css("height", self.options.constrainSize);self.$elem.css("width", "auto");self.constwidth = self.$elem.width();
          }
          if (self.options.zoomType == "inner") {
            self.zoomWrap.parent().css("height", self.options.constrainSize);self.zoomWrap.parent().css("width", self.constwidth);self.zoomWindow.css("height", self.options.constrainSize);self.zoomWindow.css("width", self.constwidth);
          }
          if (self.options.tint) {
            self.tintContainer.css("height", self.options.constrainSize);self.tintContainer.css("width", self.constwidth);self.zoomTint.css("height", self.options.constrainSize);self.zoomTint.css("width", self.constwidth);self.zoomTintImage.css("height", self.options.constrainSize);self.zoomTintImage.css("width", self.constwidth);
          }
        }
        if (self.options.constrainType == "width") {
          self.zoomContainer.css("height", "auto");self.zoomContainer.css("width", self.options.constrainSize);if (self.options.imageCrossfade) {
            self.zoomWrap.css("height", "auto");self.zoomWrap.css("width", self.options.constrainSize);self.constheight = self.zoomWrap.height();
          } else {
            self.$elem.css("height", "auto");self.$elem.css("width", self.options.constrainSize);self.constheight = self.$elem.height();
          }
          if (self.options.zoomType == "inner") {
            self.zoomWrap.parent().css("height", self.constheight);self.zoomWrap.parent().css("width", self.options.constrainSize);self.zoomWindow.css("height", self.constheight);self.zoomWindow.css("width", self.options.constrainSize);
          }
          if (self.options.tint) {
            self.tintContainer.css("height", self.constheight);self.tintContainer.css("width", self.options.constrainSize);self.zoomTint.css("height", self.constheight);self.zoomTint.css("width", self.options.constrainSize);self.zoomTintImage.css("height", self.constheight);self.zoomTintImage.css("width", self.options.constrainSize);
          }
        }
      }
    }, doneCallback: function doneCallback() {
      var self = this;if (self.options.loadingIcon) {
        self.spinner.hide();
      }
      self.nzOffset = self.$elem.offset();self.nzWidth = self.$elem.width();self.nzHeight = self.$elem.height();self.currentZoomLevel = self.options.zoomLevel;self.widthRatio = self.largeWidth / self.nzWidth;self.heightRatio = self.largeHeight / self.nzHeight;if (self.options.zoomType == "window") {
        if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
          lensHeight = self.nzHeight;
        } else {
          lensHeight = String(self.options.zoomWindowHeight / self.heightRatio);
        }
        if (self.options.zoomWindowWidth < self.options.zoomWindowWidth) {
          lensWidth = self.nzWidth;
        } else {
          lensWidth = self.options.zoomWindowWidth / self.widthRatio;
        }
        if (self.zoomLens) {
          self.zoomLens.css('width', lensWidth);self.zoomLens.css('height', lensHeight);
        }
      }
    }, getCurrentImage: function getCurrentImage() {
      var self = this;return self.zoomImage;
    }, getGalleryList: function getGalleryList() {
      var self = this;self.gallerylist = [];if (self.options.gallery) {
        $('#' + self.options.gallery + ' a').each(function () {
          var img_src = '';if ($(this).data("zoom-image")) {
            img_src = $(this).data("zoom-image");
          } else if ($(this).data("image")) {
            img_src = $(this).data("image");
          }
          if (img_src == self.zoomImage) {
            self.gallerylist.unshift({ href: '' + img_src + '', title: $(this).find('img').attr("title") });
          } else {
            self.gallerylist.push({ href: '' + img_src + '', title: $(this).find('img').attr("title") });
          }
        });
      } else {
        self.gallerylist.push({ href: '' + self.zoomImage + '', title: $(this).find('img').attr("title") });
      }
      return self.gallerylist;
    }, changeZoomLevel: function changeZoomLevel(value) {
      var self = this;self.scrollingLock = !0;self.newvalue = parseFloat(value).toFixed(2);newvalue = parseFloat(value).toFixed(2);maxheightnewvalue = self.largeHeight / (self.options.zoomWindowHeight / self.nzHeight * self.nzHeight);maxwidthtnewvalue = self.largeWidth / (self.options.zoomWindowWidth / self.nzWidth * self.nzWidth);if (self.options.zoomType != "inner") {
        if (maxheightnewvalue <= newvalue) {
          self.heightRatio = self.largeHeight / maxheightnewvalue / self.nzHeight;self.newvalueheight = maxheightnewvalue;self.fullheight = !0;
        } else {
          self.heightRatio = self.largeHeight / newvalue / self.nzHeight;self.newvalueheight = newvalue;self.fullheight = !1;
        }
        if (maxwidthtnewvalue <= newvalue) {
          self.widthRatio = self.largeWidth / maxwidthtnewvalue / self.nzWidth;self.newvaluewidth = maxwidthtnewvalue;self.fullwidth = !0;
        } else {
          self.widthRatio = self.largeWidth / newvalue / self.nzWidth;self.newvaluewidth = newvalue;self.fullwidth = !1;
        }
        if (self.options.zoomType == "lens") {
          if (maxheightnewvalue <= newvalue) {
            self.fullwidth = !0;self.newvaluewidth = maxheightnewvalue;
          } else {
            self.widthRatio = self.largeWidth / newvalue / self.nzWidth;self.newvaluewidth = newvalue;self.fullwidth = !1;
          }
        }
      }
      if (self.options.zoomType == "inner") {
        maxheightnewvalue = parseFloat(self.largeHeight / self.nzHeight).toFixed(2);maxwidthtnewvalue = parseFloat(self.largeWidth / self.nzWidth).toFixed(2);if (newvalue > maxheightnewvalue) {
          newvalue = maxheightnewvalue;
        }
        if (newvalue > maxwidthtnewvalue) {
          newvalue = maxwidthtnewvalue;
        }
        if (maxheightnewvalue <= newvalue) {
          self.heightRatio = self.largeHeight / newvalue / self.nzHeight;if (newvalue > maxheightnewvalue) {
            self.newvalueheight = maxheightnewvalue;
          } else {
            self.newvalueheight = newvalue;
          }
          self.fullheight = !0;
        } else {
          self.heightRatio = self.largeHeight / newvalue / self.nzHeight;if (newvalue > maxheightnewvalue) {
            self.newvalueheight = maxheightnewvalue;
          } else {
            self.newvalueheight = newvalue;
          }
          self.fullheight = !1;
        }
        if (maxwidthtnewvalue <= newvalue) {
          self.widthRatio = self.largeWidth / newvalue / self.nzWidth;if (newvalue > maxwidthtnewvalue) {
            self.newvaluewidth = maxwidthtnewvalue;
          } else {
            self.newvaluewidth = newvalue;
          }
          self.fullwidth = !0;
        } else {
          self.widthRatio = self.largeWidth / newvalue / self.nzWidth;self.newvaluewidth = newvalue;self.fullwidth = !1;
        }
      }
      scrcontinue = !1;if (self.options.zoomType == "inner") {
        if (self.nzWidth >= self.nzHeight) {
          if (self.newvaluewidth <= maxwidthtnewvalue) {
            scrcontinue = !0;
          } else {
            scrcontinue = !1;self.fullheight = !0;self.fullwidth = !0;
          }
        }
        if (self.nzHeight > self.nzWidth) {
          if (self.newvaluewidth <= maxwidthtnewvalue) {
            scrcontinue = !0;
          } else {
            scrcontinue = !1;self.fullheight = !0;self.fullwidth = !0;
          }
        }
      }
      if (self.options.zoomType != "inner") {
        scrcontinue = !0;
      }
      if (scrcontinue) {
        self.zoomLock = 0;self.changeZoom = !0;if (self.options.zoomWindowHeight / self.heightRatio <= self.nzHeight) {
          self.currentZoomLevel = self.newvalueheight;if (self.options.zoomType != "lens" && self.options.zoomType != "inner") {
            self.changeBgSize = !0;self.zoomLens.css({ height: String(self.options.zoomWindowHeight / self.heightRatio) + 'px' });
          }
          if (self.options.zoomType == "lens" || self.options.zoomType == "inner") {
            self.changeBgSize = !0;
          }
        }
        if (self.options.zoomWindowWidth / self.widthRatio <= self.nzWidth) {
          if (self.options.zoomType != "inner") {
            if (self.newvaluewidth > self.newvalueheight) {
              self.currentZoomLevel = self.newvaluewidth;
            }
          }
          if (self.options.zoomType != "lens" && self.options.zoomType != "inner") {
            self.changeBgSize = !0;self.zoomLens.css({ width: String(self.options.zoomWindowWidth / self.widthRatio) + 'px' });
          }
          if (self.options.zoomType == "lens" || self.options.zoomType == "inner") {
            self.changeBgSize = !0;
          }
        }
        if (self.options.zoomType == "inner") {
          self.changeBgSize = !0;if (self.nzWidth > self.nzHeight) {
            self.currentZoomLevel = self.newvaluewidth;
          }
          if (self.nzHeight > self.nzWidth) {
            self.currentZoomLevel = self.newvaluewidth;
          }
        }
      }
      self.setPosition(self.currentLoc);
    }, closeAll: function closeAll() {
      if (self.zoomWindow) {
        self.zoomWindow.hide();
      }
      if (self.zoomLens) {
        self.zoomLens.hide();
      }
      if (self.zoomTint) {
        self.zoomTint.hide();
      }
    }, changeState: function changeState(value) {
      var self = this;if (value == 'enable') {
        self.options.zoomEnabled = !0;
      }
      if (value == 'disable') {
        self.options.zoomEnabled = !1;
      }
    } };$.fn.elevateZoom = function (options) {
    return this.each(function () {
      var elevate = Object.create(ElevateZoom);elevate.init(options, this);$.data(this, 'elevateZoom', elevate);
    });
  };$.fn.elevateZoom.options = { zoomActivation: "hover", zoomEnabled: !0, preloading: 1, zoomLevel: 1, scrollZoom: !1, scrollZoomIncrement: 0.1, minZoomLevel: !1, maxZoomLevel: !1, easing: !1, easingAmount: 12, lensSize: 200, zoomWindowWidth: 400, zoomWindowHeight: 400, zoomWindowOffetx: 0, zoomWindowOffety: 0, zoomWindowPosition: 1, zoomWindowBgColour: "#fff", lensFadeIn: !1, lensFadeOut: !1, debug: !1, zoomWindowFadeIn: !1, zoomWindowFadeOut: !1, zoomWindowAlwaysShow: !1, zoomTintFadeIn: !1, zoomTintFadeOut: !1, borderSize: 4, showLens: !0, borderColour: "#888", lensBorderSize: 1, lensBorderColour: "#000", lensShape: "square", zoomType: "window", containLensZoom: !1, lensColour: "white", lensOpacity: 0.4, lenszoom: !1, tint: !1, tintColour: "#333", tintOpacity: 0.4, gallery: !1, galleryActiveClass: "zoomGalleryActive", imageCrossfade: !1, constrainType: !1, constrainSize: !1, loadingIcon: !1, cursor: "default", responsive: !0, onComplete: $.noop, onDestroy: function onDestroy() {}, onZoomedImageLoaded: function onZoomedImageLoaded() {}, onImageSwap: $.noop, onImageSwapComplete: $.noop };
})(jQuery, window, document);

/***/ }),

/***/ "./resources/assets/js/libs/jquery.fancybox.min.js":
/***/ (function(module, exports) {

(function (window, document, $, undefined) {
  "use strict";
  var H = $("html"),
      W = $(window),
      D = $(document),
      F = $.fancybox = function () {
    F.open.apply(this, arguments);
  },
      IE = navigator.userAgent.match(/msie/i),
      didUpdate = null,
      isTouch = document.createTouch !== undefined,
      isQuery = function isQuery(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  },
      isString = function isString(str) {
    return str && $.type(str) === "string";
  },
      isPercentage = function isPercentage(str) {
    return isString(str) && str.indexOf('%') > 0;
  },
      isScrollable = function isScrollable(el) {
    return el && !(el.style.overflow && el.style.overflow === 'hidden') && (el.clientWidth && el.scrollWidth > el.clientWidth || el.clientHeight && el.scrollHeight > el.clientHeight);
  },
      getScalar = function getScalar(orig, dim) {
    var value = parseInt(orig, 10) || 0;if (dim && isPercentage(orig)) {
      value = F.getViewport()[dim] / 100 * value;
    }
    return Math.ceil(value);
  },
      getValue = function getValue(value, dim) {
    return getScalar(value, dim) + 'px';
  };$.extend(F, { version: '2.1.5', defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !isTouch, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: 'auto', wrapCSS: '', arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3000, preload: 3, modal: !1, loop: !0, ajax: { dataType: 'html', headers: { 'X-fancyBox': !0 } }, iframe: { scrolling: 'auto', preload: !0 }, swf: { wmode: 'transparent', allowfullscreen: 'true', allowscriptaccess: 'always' }, keys: { next: { 13: 'left', 34: 'up', 39: 'left', 40: 'up' }, prev: { 8: 'right', 33: 'down', 37: 'right', 38: 'down' }, close: [27], play: [32], toggle: [70] }, direction: { next: 'left', prev: 'right' }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>', error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: 'fade', openSpeed: 250, openEasing: 'swing', openOpacity: !0, openMethod: 'zoomIn', closeEffect: 'fade', closeSpeed: 250, closeEasing: 'swing', closeOpacity: !0, closeMethod: 'zoomOut', nextEffect: 'elastic', nextSpeed: 250, nextEasing: 'swing', nextMethod: 'changeIn', prevEffect: 'elastic', prevSpeed: 250, prevEasing: 'swing', prevMethod: 'changeOut', helpers: { overlay: !0, title: !0 }, onCancel: $.noop, beforeLoad: $.noop, afterLoad: $.noop, beforeShow: $.noop, afterShow: $.noop, beforeChange: $.noop, beforeClose: $.noop, afterClose: $.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function open(group, opts) {
      if (!group) {
        return;
      }
      if (!$.isPlainObject(opts)) {
        opts = {};
      }
      if (!1 === F.close(!0)) {
        return;
      }
      if (!$.isArray(group)) {
        group = isQuery(group) ? $(group).get() : [group];
      }
      $.each(group, function (i, element) {
        var obj = {},
            href,
            title,
            content,
            type,
            rez,
            hrefParts,
            selector;if ($.type(element) === "object") {
          if (element.nodeType) {
            element = $(element);
          }
          if (isQuery(element)) {
            obj = { href: element.data('fancybox-href') || element.attr('href'), title: element.data('fancybox-title') || element.attr('title'), isDom: !0, element: element };if ($.metadata) {
              $.extend(!0, obj, element.metadata());
            }
          } else {
            obj = element;
          }
        }
        href = opts.href || obj.href || (isString(element) ? element : null);title = opts.title !== undefined ? opts.title : obj.title || '';content = opts.content || obj.content;type = content ? 'html' : opts.type || obj.type;if (!type && obj.isDom) {
          type = element.data('fancybox-type');if (!type) {
            rez = element.prop('class').match(/fancybox\.(\w+)/);type = rez ? rez[1] : null;
          }
        }
        if (isString(href)) {
          if (!type) {
            if (F.isImage(href)) {
              type = 'image';
            } else if (F.isSWF(href)) {
              type = 'swf';
            } else if (href.charAt(0) === '#') {
              type = 'inline';
            } else if (isString(element)) {
              type = 'html';content = element;
            }
          }
          if (type === 'ajax') {
            hrefParts = href.split(/\s+/, 2);href = hrefParts.shift();selector = hrefParts.shift();
          }
        }
        if (!content) {
          if (type === 'inline') {
            if (href) {
              content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href);
            } else if (obj.isDom) {
              content = element;
            }
          } else if (type === 'html') {
            content = href;
          } else if (!type && !href && obj.isDom) {
            type = 'inline';content = element;
          }
        }
        $.extend(obj, { href: href, type: type, content: content, title: title, selector: selector });group[i] = obj;
      });F.opts = $.extend(!0, {}, F.defaults, opts);if (opts.keys !== undefined) {
        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : !1;
      }
      F.group = group;return F._start(F.opts.index);
    }, cancel: function cancel() {
      var coming = F.coming;if (!coming || !1 === F.trigger('onCancel')) {
        return;
      }
      F.hideLoading();if (F.ajaxLoad) {
        F.ajaxLoad.abort();
      }
      F.ajaxLoad = null;if (F.imgPreload) {
        F.imgPreload.onload = F.imgPreload.onerror = null;
      }
      if (coming.wrap) {
        coming.wrap.stop(!0, !0).trigger('onReset').remove();
      }
      F.coming = null;if (!F.current) {
        F._afterZoomOut(coming);
      }
    }, close: function close(event) {
      F.cancel();if (!1 === F.trigger('beforeClose')) {
        return;
      }
      F.unbindEvents();if (!F.isActive) {
        return;
      }
      if (!F.isOpen || event === !0) {
        $('.fancybox-wrap').stop(!0).trigger('onReset').remove();F._afterZoomOut();
      } else {
        F.isOpen = F.isOpened = !1;F.isClosing = !0;$('.fancybox-item, .fancybox-nav').remove();F.wrap.stop(!0, !0).removeClass('fancybox-opened');F.transitions[F.current.closeMethod]();
      }
    }, play: function play(action) {
      var clear = function clear() {
        clearTimeout(F.player.timer);
      },
          set = function set() {
        clear();if (F.current && F.player.isActive) {
          F.player.timer = setTimeout(F.next, F.current.playSpeed);
        }
      },
          stop = function stop() {
        clear();D.unbind('.player');F.player.isActive = !1;F.trigger('onPlayEnd');
      },
          start = function start() {
        if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
          F.player.isActive = !0;D.bind({ 'onCancel.player beforeClose.player': stop, 'onUpdate.player': set, 'beforeLoad.player': clear });set();F.trigger('onPlayStart');
        }
      };if (action === !0 || !F.player.isActive && action !== !1) {
        start();
      } else {
        stop();
      }
    }, next: function next(direction) {
      var current = F.current;if (current) {
        if (!isString(direction)) {
          direction = current.direction.next;
        }
        F.jumpto(current.index + 1, direction, 'next');
      }
    }, prev: function prev(direction) {
      var current = F.current;if (current) {
        if (!isString(direction)) {
          direction = current.direction.prev;
        }
        F.jumpto(current.index - 1, direction, 'prev');
      }
    }, jumpto: function jumpto(index, direction, router) {
      var current = F.current;if (!current) {
        return;
      }
      index = getScalar(index);F.direction = direction || current.direction[index >= current.index ? 'next' : 'prev'];F.router = router || 'jumpto';if (current.loop) {
        if (index < 0) {
          index = current.group.length + index % current.group.length;
        }
        index = index % current.group.length;
      }
      if (current.group[index] !== undefined) {
        F.cancel();F._start(index);
      }
    }, reposition: function reposition(e, onlyAbsolute) {
      var current = F.current,
          wrap = current ? current.wrap : null,
          pos;if (wrap) {
        pos = F._getPosition(onlyAbsolute);if (e && e.type === 'scroll') {
          delete pos.position;wrap.stop(!0, !0).animate(pos, 200);
        } else {
          wrap.css(pos);current.pos = $.extend({}, current.dim, pos);
        }
      }
    }, update: function update(e) {
      var type = e && e.type,
          anyway = !type || type === 'orientationchange';if (anyway) {
        clearTimeout(didUpdate);didUpdate = null;
      }
      if (!F.isOpen || didUpdate) {
        return;
      }
      didUpdate = setTimeout(function () {
        var current = F.current;if (!current || F.isClosing) {
          return;
        }
        F.wrap.removeClass('fancybox-tmp');if (anyway || type === 'load' || type === 'resize' && current.autoResize) {
          F._setDimension();
        }
        if (!(type === 'scroll' && current.canShrink)) {
          F.reposition(e);
        }
        F.trigger('onUpdate');didUpdate = null;
      }, anyway && !isTouch ? 0 : 300);
    }, toggle: function toggle(action) {
      if (F.isOpen) {
        F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;if (isTouch) {
          F.wrap.removeAttr('style').addClass('fancybox-tmp');F.trigger('onUpdate');
        }
        F.update();
      }
    }, hideLoading: function hideLoading() {
      D.unbind('.loading');$('#fancybox-loading').remove();
    }, showLoading: function showLoading() {
      var el, viewport;F.hideLoading();el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');D.bind('keydown.loading', function (e) {
        if ((e.which || e.keyCode) === 27) {
          e.preventDefault();F.cancel();
        }
      });if (!F.defaults.fixed) {
        viewport = F.getViewport();el.css({ position: 'absolute', top: viewport.h * 0.5 + viewport.y, left: viewport.w * 0.5 + viewport.x });
      }
    }, getViewport: function getViewport() {
      var locked = F.current && F.current.locked || !1,
          rez = { x: W.scrollLeft(), y: W.scrollTop() };if (locked) {
        rez.w = locked[0].clientWidth;rez.h = locked[0].clientHeight;
      } else {
        rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
      }
      return rez;
    }, unbindEvents: function unbindEvents() {
      if (F.wrap && isQuery(F.wrap)) {
        F.wrap.unbind('.fb');
      }
      D.unbind('.fb');W.unbind('.fb');
    }, bindEvents: function bindEvents() {
      var current = F.current,
          keys;if (!current) {
        return;
      }
      W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);keys = current.keys;if (keys) {
        D.bind('keydown.fb', function (e) {
          var code = e.which || e.keyCode,
              target = e.target || e.srcElement;if (code === 27 && F.coming) {
            return !1;
          }
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
            $.each(keys, function (i, val) {
              if (current.group.length > 1 && val[code] !== undefined) {
                F[i](val[code]);e.preventDefault();return !1;
              }
              if ($.inArray(code, val) > -1) {
                F[i]();e.preventDefault();return !1;
              }
            });
          }
        });
      }
      if ($.fn.mousewheel && current.mouseWheel) {
        F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
          var target = e.target || null,
              parent = $(target),
              canScroll = !1;while (parent.length) {
            if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
              break;
            }
            canScroll = isScrollable(parent[0]);parent = $(parent).parent();
          }
          if (delta !== 0 && !canScroll) {
            if (F.group.length > 1 && !current.canShrink) {
              if (deltaY > 0 || deltaX > 0) {
                F.prev(deltaY > 0 ? 'down' : 'left');
              } else if (deltaY < 0 || deltaX < 0) {
                F.next(deltaY < 0 ? 'up' : 'right');
              }
              e.preventDefault();
            }
          }
        });
      }
    }, trigger: function trigger(event, o) {
      var ret,
          obj = o || F.coming || F.current;if (!obj) {
        return;
      }
      if ($.isFunction(obj[event])) {
        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
      }
      if (ret === !1) {
        return !1;
      }
      if (obj.helpers) {
        $.each(obj.helpers, function (helper, opts) {
          if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
            F.helpers[helper][event]($.extend(!0, {}, F.helpers[helper].defaults, opts), obj);
          }
        });
      }
      D.trigger(event);
    }, isImage: function isImage(str) {
      return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    }, isSWF: function isSWF(str) {
      return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
    }, _start: function _start(index) {
      var coming = {},
          obj,
          href,
          type,
          margin,
          padding;index = getScalar(index);obj = F.group[index] || null;if (!obj) {
        return !1;
      }
      coming = $.extend(!0, {}, F.opts, obj);margin = coming.margin;padding = coming.padding;if ($.type(margin) === 'number') {
        coming.margin = [margin, margin, margin, margin];
      }
      if ($.type(padding) === 'number') {
        coming.padding = [padding, padding, padding, padding];
      }
      if (coming.modal) {
        $.extend(!0, coming, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } });
      }
      if (coming.autoSize) {
        coming.autoWidth = coming.autoHeight = !0;
      }
      if (coming.width === 'auto') {
        coming.autoWidth = !0;
      }
      if (coming.height === 'auto') {
        coming.autoHeight = !0;
      }
      coming.group = F.group;coming.index = index;F.coming = coming;if (!1 === F.trigger('beforeLoad')) {
        F.coming = null;return;
      }
      type = coming.type;href = coming.href;if (!type) {
        F.coming = null;if (F.current && F.router && F.router !== 'jumpto') {
          F.current.index = index;return F[F.router](F.direction);
        }
        return !1;
      }
      F.isActive = !0;if (type === 'image' || type === 'swf') {
        coming.autoHeight = coming.autoWidth = !1;coming.scrolling = 'visible';
      }
      if (type === 'image') {
        coming.aspectRatio = !0;
      }
      if (type === 'iframe' && isTouch) {
        coming.scrolling = 'scroll';
      }
      coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');$.extend(coming, { skin: $('.fancybox-skin', coming.wrap), outer: $('.fancybox-outer', coming.wrap), inner: $('.fancybox-inner', coming.wrap) });$.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
        coming.skin.css('padding' + v, getValue(coming.padding[i]));
      });F.trigger('onReady');if (type === 'inline' || type === 'html') {
        if (!coming.content || !coming.content.length) {
          return F._error('content');
        }
      } else if (!href) {
        return F._error('href');
      }
      if (type === 'image') {
        F._loadImage();
      } else if (type === 'ajax') {
        F._loadAjax();
      } else if (type === 'iframe') {
        F._loadIframe();
      } else {
        F._afterLoad();
      }
    }, _error: function _error(type) {
      $.extend(F.coming, { type: 'html', autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: 'no', hasError: type, content: F.coming.tpl.error });F._afterLoad();
    }, _loadImage: function _loadImage() {
      var img = F.imgPreload = new Image();img.onload = function () {
        this.onload = this.onerror = null;F.coming.width = this.width / F.opts.pixelRatio;F.coming.height = this.height / F.opts.pixelRatio;F._afterLoad();
      };img.onerror = function () {
        this.onload = this.onerror = null;F._error('image');
      };img.src = F.coming.href;if (img.complete !== !0) {
        F.showLoading();
      }
    }, _loadAjax: function _loadAjax() {
      var coming = F.coming;F.showLoading();F.ajaxLoad = $.ajax($.extend({}, coming.ajax, { url: coming.href, error: function error(jqXHR, textStatus) {
          if (F.coming && textStatus !== 'abort') {
            F._error('ajax', jqXHR);
          } else {
            F.hideLoading();
          }
        }, success: function success(data, textStatus) {
          if (textStatus === 'success') {
            coming.content = data;F._afterLoad();
          }
        } }));
    }, _loadIframe: function _loadIframe() {
      var coming = F.coming,
          iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);$(coming.wrap).bind('onReset', function () {
        try {
          $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
        } catch (e) {}
      });if (coming.iframe.preload) {
        F.showLoading();iframe.one('load', function () {
          $(this).data('ready', 1);if (!isTouch) {
            $(this).bind('load.fb', F.update);
          }
          $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();F._afterLoad();
        });
      }
      coming.content = iframe.appendTo(coming.inner);if (!coming.iframe.preload) {
        F._afterLoad();
      }
    }, _preloadImages: function _preloadImages() {
      var group = F.group,
          current = F.current,
          len = group.length,
          cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
          item,
          i;for (i = 1; i <= cnt; i += 1) {
        item = group[(current.index + i) % len];if (item.type === 'image' && item.href) {
          new Image().src = item.href;
        }
      }
    }, _afterLoad: function _afterLoad() {
      var coming = F.coming,
          previous = F.current,
          placeholder = 'fancybox-placeholder',
          current,
          content,
          type,
          scrolling,
          href,
          embed;F.hideLoading();if (!coming || F.isActive === !1) {
        return;
      }
      if (!1 === F.trigger('afterLoad', coming, previous)) {
        coming.wrap.stop(!0).trigger('onReset').remove();F.coming = null;return;
      }
      if (previous) {
        F.trigger('beforeChange', previous);previous.wrap.stop(!0).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
      }
      F.unbindEvents();current = coming;content = coming.content;type = coming.type;scrolling = coming.scrolling;$.extend(F, { wrap: current.wrap, skin: current.skin, outer: current.outer, inner: current.inner, current: current, previous: previous });href = current.href;switch (type) {case 'inline':case 'ajax':case 'html':
          if (current.selector) {
            content = $('<div>').html(content).find(current.selector);
          } else if (isQuery(content)) {
            if (!content.data(placeholder)) {
              content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
            }
            content = content.show().detach();current.wrap.bind('onReset', function () {
              if ($(this).find(content).length) {
                content.hide().replaceAll(content.data(placeholder)).data(placeholder, !1);
              }
            });
          }
          break;case 'image':
          content = current.tpl.image.replace('{href}', href);break;case 'swf':
          content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';embed = '';$.each(current.swf, function (name, val) {
            content += '<param name="' + name + '" value="' + val + '"></param>';embed += ' ' + name + '="' + val + '"';
          });content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';break;}
      if (!(isQuery(content) && content.parent().is(current.inner))) {
        current.inner.append(content);
      }
      F.trigger('beforeShow');current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : scrolling === 'no' ? 'hidden' : scrolling);F._setDimension();F.reposition();F.isOpen = !1;F.coming = null;F.bindEvents();if (!F.isOpened) {
        $('.fancybox-wrap').not(current.wrap).stop(!0).trigger('onReset').remove();
      } else if (previous.prevMethod) {
        F.transitions[previous.prevMethod]();
      }
      F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();F._preloadImages();
    }, _setDimension: function _setDimension() {
      var viewport = F.getViewport(),
          steps = 0,
          canShrink = !1,
          canExpand = !1,
          wrap = F.wrap,
          skin = F.skin,
          inner = F.inner,
          current = F.current,
          width = current.width,
          height = current.height,
          minWidth = current.minWidth,
          minHeight = current.minHeight,
          maxWidth = current.maxWidth,
          maxHeight = current.maxHeight,
          scrolling = current.scrolling,
          scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
          margin = current.margin,
          wMargin = getScalar(margin[1] + margin[3]),
          hMargin = getScalar(margin[0] + margin[2]),
          wPadding,
          hPadding,
          wSpace,
          hSpace,
          origWidth,
          origHeight,
          origMaxWidth,
          origMaxHeight,
          ratio,
          width_,
          height_,
          maxWidth_,
          maxHeight_,
          iframe,
          body;wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');wPadding = getScalar(skin.outerWidth(!0) - skin.width());hPadding = getScalar(skin.outerHeight(!0) - skin.height());wSpace = wMargin + wPadding;hSpace = hMargin + hPadding;origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;if (current.type === 'iframe') {
        iframe = current.content;if (current.autoHeight && iframe.data('ready') === 1) {
          try {
            if (iframe[0].contentWindow.document.location) {
              inner.width(origWidth).height(9999);body = iframe.contents().find('body');if (scrollOut) {
                body.css('overflow-x', 'hidden');
              }
              origHeight = body.outerHeight(!0);
            }
          } catch (e) {}
        }
      } else if (current.autoWidth || current.autoHeight) {
        inner.addClass('fancybox-tmp');if (!current.autoWidth) {
          inner.width(origWidth);
        }
        if (!current.autoHeight) {
          inner.height(origHeight);
        }
        if (current.autoWidth) {
          origWidth = inner.width();
        }
        if (current.autoHeight) {
          origHeight = inner.height();
        }
        inner.removeClass('fancybox-tmp');
      }
      width = getScalar(origWidth);height = getScalar(origHeight);ratio = origWidth / origHeight;minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);origMaxWidth = maxWidth;origMaxHeight = maxHeight;if (current.fitToView) {
        maxWidth = Math.min(viewport.w - wSpace, maxWidth);maxHeight = Math.min(viewport.h - hSpace, maxHeight);
      }
      maxWidth_ = viewport.w - wMargin;maxHeight_ = viewport.h - hMargin;if (current.aspectRatio) {
        if (width > maxWidth) {
          width = maxWidth;height = getScalar(width / ratio);
        }
        if (height > maxHeight) {
          height = maxHeight;width = getScalar(height * ratio);
        }
        if (width < minWidth) {
          width = minWidth;height = getScalar(width / ratio);
        }
        if (height < minHeight) {
          height = minHeight;width = getScalar(height * ratio);
        }
      } else {
        width = Math.max(minWidth, Math.min(width, maxWidth));if (current.autoHeight && current.type !== 'iframe') {
          inner.width(width);height = inner.height();
        }
        height = Math.max(minHeight, Math.min(height, maxHeight));
      }
      if (current.fitToView) {
        inner.width(width).height(height);wrap.width(width + wPadding);width_ = wrap.width();height_ = wrap.height();if (current.aspectRatio) {
          while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
            if (steps++ > 19) {
              break;
            }
            height = Math.max(minHeight, Math.min(maxHeight, height - 10));width = getScalar(height * ratio);if (width < minWidth) {
              width = minWidth;height = getScalar(width / ratio);
            }
            if (width > maxWidth) {
              width = maxWidth;height = getScalar(width / ratio);
            }
            inner.width(width).height(height);wrap.width(width + wPadding);width_ = wrap.width();height_ = wrap.height();
          }
        } else {
          width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
        }
      }
      if (scrollOut && scrolling === 'auto' && height < origHeight && width + wPadding + scrollOut < maxWidth_) {
        width += scrollOut;
      }
      inner.width(width).height(height);wrap.width(width + wPadding);width_ = wrap.width();height_ = wrap.height();canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;canExpand = current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight);$.extend(current, { dim: { width: getValue(width_), height: getValue(height_) }, origWidth: origWidth, origHeight: origHeight, canShrink: canShrink, canExpand: canExpand, wPadding: wPadding, hPadding: hPadding, wrapSpace: height_ - skin.outerHeight(!0), skinSpace: skin.height() - height });if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
        inner.height('auto');
      }
    }, _getPosition: function _getPosition(onlyAbsolute) {
      var current = F.current,
          viewport = F.getViewport(),
          margin = current.margin,
          width = F.wrap.width() + margin[1] + margin[3],
          height = F.wrap.height() + margin[0] + margin[2],
          rez = { position: 'absolute', top: margin[0], left: margin[3] };if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
        rez.position = 'fixed';
      } else if (!current.locked) {
        rez.top += viewport.y;rez.left += viewport.x;
      }
      rez.top = getValue(Math.max(rez.top, rez.top + (viewport.h - height) * current.topRatio));rez.left = getValue(Math.max(rez.left, rez.left + (viewport.w - width) * current.leftRatio));return rez;
    }, _afterZoomIn: function _afterZoomIn() {
      var current = F.current;if (!current) {
        return;
      }
      F.isOpen = F.isOpened = !0;F.wrap.css('overflow', 'visible').addClass('fancybox-opened');F.update();if (current.closeClick || current.nextClick && F.group.length > 1) {
        F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
          if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
            e.preventDefault();F[current.closeClick ? 'close' : 'next']();
          }
        });
      }
      if (current.closeBtn) {
        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
          e.preventDefault();F.close();
        });
      }
      if (current.arrows && F.group.length > 1) {
        if (current.loop || current.index > 0) {
          $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
        }
        if (current.loop || current.index < F.group.length - 1) {
          $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
        }
      }
      F.trigger('afterShow');if (!current.loop && current.index === current.group.length - 1) {
        F.play(!1);
      } else if (F.opts.autoPlay && !F.player.isActive) {
        F.opts.autoPlay = !1;F.play();
      }
    }, _afterZoomOut: function _afterZoomOut(obj) {
      obj = obj || F.current;$('.fancybox-wrap').trigger('onReset').remove();$.extend(F, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });F.trigger('afterClose', obj);
    } });F.transitions = { getOrigPosition: function getOrigPosition() {
      var current = F.current,
          element = current.element,
          orig = current.orig,
          pos = {},
          width = 50,
          height = 50,
          hPadding = current.hPadding,
          wPadding = current.wPadding,
          viewport = F.getViewport();if (!orig && current.isDom && element.is(':visible')) {
        orig = element.find('img:first');if (!orig.length) {
          orig = element;
        }
      }
      if (isQuery(orig)) {
        pos = orig.offset();if (orig.is('img')) {
          width = orig.outerWidth();height = orig.outerHeight();
        }
      } else {
        pos.top = viewport.y + (viewport.h - height) * current.topRatio;pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
      }
      if (F.wrap.css('position') === 'fixed' || current.locked) {
        pos.top -= viewport.y;pos.left -= viewport.x;
      }
      pos = { top: getValue(pos.top - hPadding * current.topRatio), left: getValue(pos.left - wPadding * current.leftRatio), width: getValue(width + wPadding), height: getValue(height + hPadding) };return pos;
    }, step: function step(now, fx) {
      var ratio,
          padding,
          value,
          prop = fx.prop,
          current = F.current,
          wrapSpace = current.wrapSpace,
          skinSpace = current.skinSpace;if (prop === 'width' || prop === 'height') {
        ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);if (F.isClosing) {
          ratio = 1 - ratio;
        }
        padding = prop === 'width' ? current.wPadding : current.hPadding;value = now - padding;F.skin[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio));F.inner[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio - skinSpace * ratio));
      }
    }, zoomIn: function zoomIn() {
      var current = F.current,
          startPos = current.pos,
          effect = current.openEffect,
          elastic = effect === 'elastic',
          endPos = $.extend({ opacity: 1 }, startPos);delete endPos.position;if (elastic) {
        startPos = this.getOrigPosition();if (current.openOpacity) {
          startPos.opacity = 0.1;
        }
      } else if (effect === 'fade') {
        startPos.opacity = 0.1;
      }
      F.wrap.css(startPos).animate(endPos, { duration: effect === 'none' ? 0 : current.openSpeed, easing: current.openEasing, step: elastic ? this.step : null, complete: F._afterZoomIn });
    }, zoomOut: function zoomOut() {
      var current = F.current,
          effect = current.closeEffect,
          elastic = effect === 'elastic',
          endPos = { opacity: 0.1 };if (elastic) {
        endPos = this.getOrigPosition();if (current.closeOpacity) {
          endPos.opacity = 0.1;
        }
      }
      F.wrap.animate(endPos, { duration: effect === 'none' ? 0 : current.closeSpeed, easing: current.closeEasing, step: elastic ? this.step : null, complete: F._afterZoomOut });
    }, changeIn: function changeIn() {
      var current = F.current,
          effect = current.nextEffect,
          startPos = current.pos,
          endPos = { opacity: 1 },
          direction = F.direction,
          distance = 200,
          field;startPos.opacity = 0.1;if (effect === 'elastic') {
        field = direction === 'down' || direction === 'up' ? 'top' : 'left';if (direction === 'down' || direction === 'right') {
          startPos[field] = getValue(getScalar(startPos[field]) - distance);endPos[field] = '+=' + distance + 'px';
        } else {
          startPos[field] = getValue(getScalar(startPos[field]) + distance);endPos[field] = '-=' + distance + 'px';
        }
      }
      if (effect === 'none') {
        F._afterZoomIn();
      } else {
        F.wrap.css(startPos).animate(endPos, { duration: current.nextSpeed, easing: current.nextEasing, complete: F._afterZoomIn });
      }
    }, changeOut: function changeOut() {
      var previous = F.previous,
          effect = previous.prevEffect,
          endPos = { opacity: 0.1 },
          direction = F.direction,
          distance = 200;if (effect === 'elastic') {
        endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
      }
      previous.wrap.animate(endPos, { duration: effect === 'none' ? 0 : previous.prevSpeed, easing: previous.prevEasing, complete: function complete() {
          $(this).trigger('onReset').remove();
        } });
    } };F.helpers.overlay = { defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !isTouch, fixed: !0 }, overlay: null, fixed: !1, el: $('html'), create: function create(opts) {
      opts = $.extend({}, this.defaults, opts);if (this.overlay) {
        this.close();
      }
      this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);this.fixed = !1;if (opts.fixed && F.defaults.fixed) {
        this.overlay.addClass('fancybox-overlay-fixed');this.fixed = !0;
      }
    }, open: function open(opts) {
      var that = this;opts = $.extend({}, this.defaults, opts);if (this.overlay) {
        this.overlay.unbind('.overlay').width('auto').height('auto');
      } else {
        this.create(opts);
      }
      if (!this.fixed) {
        W.bind('resize.overlay', $.proxy(this.update, this));this.update();
      }
      if (opts.closeClick) {
        this.overlay.bind('click.overlay', function (e) {
          if ($(e.target).hasClass('fancybox-overlay')) {
            if (F.isActive) {
              F.close();
            } else {
              that.close();
            }
            return !1;
          }
        });
      }
      this.overlay.css(opts.css).show();
    }, close: function close() {
      var scrollV, scrollH;W.unbind('resize.overlay');if (this.el.hasClass('fancybox-lock')) {
        $('.fancybox-margin').removeClass('fancybox-margin');scrollV = W.scrollTop();scrollH = W.scrollLeft();this.el.removeClass('fancybox-lock');W.scrollTop(scrollV).scrollLeft(scrollH);
      }
      $('.fancybox-overlay').remove().hide();$.extend(this, { overlay: null, fixed: !1 });
    }, update: function update() {
      var width = '100%',
          offsetWidth;this.overlay.width(width).height('100%');if (IE) {
        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);if (D.width() > offsetWidth) {
          width = D.width();
        }
      } else if (D.width() > W.width()) {
        width = D.width();
      }
      this.overlay.width(width).height(D.height());
    }, onReady: function onReady(opts, obj) {
      var overlay = this.overlay;$('.fancybox-overlay').stop(!0, !0);if (!overlay) {
        this.create(opts);
      }
      if (opts.locked && this.fixed && obj.fixed) {
        if (!overlay) {
          this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : !1;
        }
        obj.locked = this.overlay.append(obj.wrap);obj.fixed = !1;
      }
      if (opts.showEarly === !0) {
        this.beforeShow.apply(this, arguments);
      }
    }, beforeShow: function beforeShow(opts, obj) {
      var scrollV, scrollH;if (obj.locked) {
        if (this.margin !== !1) {
          $('*').filter(function () {
            return $(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap");
          }).addClass('fancybox-margin');this.el.addClass('fancybox-margin');
        }
        scrollV = W.scrollTop();scrollH = W.scrollLeft();this.el.addClass('fancybox-lock');W.scrollTop(scrollV).scrollLeft(scrollH);
      }
      this.open(opts);
    }, onUpdate: function onUpdate() {
      if (!this.fixed) {
        this.update();
      }
    }, afterClose: function afterClose(opts) {
      if (this.overlay && !F.coming) {
        this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
      }
    } };F.helpers.title = { defaults: { type: 'float', position: 'bottom' }, beforeShow: function beforeShow(opts) {
      var current = F.current,
          text = current.title,
          type = opts.type,
          title,
          target;if ($.isFunction(text)) {
        text = text.call(current.element, current);
      }
      if (!isString(text) || $.trim(text) === '') {
        return;
      }
      title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');switch (type) {case 'inside':
          target = F.skin;break;case 'outside':
          target = F.wrap;break;case 'over':
          target = F.inner;break;default:
          target = F.skin;title.appendTo('body');if (IE) {
            title.width(title.width());
          }
          title.wrapInner('<span class="child"></span>');F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));break;}
      title[opts.position === 'top' ? 'prependTo' : 'appendTo'](target);
    } };$.fn.fancybox = function (options) {
    var index,
        that = $(this),
        selector = this.selector || '',
        run = function run(e) {
      var what = $(this).blur(),
          idx = index,
          relType,
          relVal;if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
        relType = options.groupAttr || 'data-fancybox-group';relVal = what.attr(relType);if (!relVal) {
          relType = 'rel';relVal = what.get(0)[relType];
        }
        if (relVal && relVal !== '' && relVal !== 'nofollow') {
          what = selector.length ? $(selector) : that;what = what.filter('[' + relType + '="' + relVal + '"]');idx = what.index(this);
        }
        options.index = idx;if (F.open(what, options) !== !1) {
          e.preventDefault();
        }
      }
    };options = options || {};index = options.index || 0;if (!selector || options.live === !1) {
      that.unbind('click.fb-start').bind('click.fb-start', run);
    } else {
      D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
    }
    this.filter('[data-fancybox-start=1]').trigger('click');return this;
  };D.ready(function () {
    var w1, w2;if ($.scrollbarWidth === undefined) {
      $.scrollbarWidth = function () {
        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
            child = parent.children(),
            width = child.innerWidth() - child.height(99).innerWidth();parent.remove();return width;
      };
    }
    if ($.support.fixedPosition === undefined) {
      $.support.fixedPosition = function () {
        var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
            fixed = elem[0].offsetTop === 20 || elem[0].offsetTop === 15;elem.remove();return fixed;
      }();
    }
    $.extend(F.defaults, { scrollbarWidth: $.scrollbarWidth(), fixed: $.support.fixedPosition, parent: $('body') });w1 = $(window).width();H.addClass('fancybox-lock-test');w2 = $(window).width();H.removeClass('fancybox-lock-test');$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
  });
})(window, document, jQuery);

/***/ }),

/***/ "./resources/assets/js/libs/jquery.jcarousellite.min.js":
/***/ (function(module, exports) {

/*!
 * jCarouselLite - v1.1 - 2014-09-28
 * http://www.gmarwaha.com/jquery/jcarousellite/
 * Copyright (c) 2014 Ganeshji Marwaha
 * Licensed MIT (https://github.com/ganeshmax/jcarousellite/blob/master/LICENSE)
*/

!function (a) {
  a.jCarouselLite = { version: "1.1" }, a.fn.jCarouselLite = function (b) {
    return b = a.extend({}, a.fn.jCarouselLite.options, b || {}), this.each(function () {
      function c(a) {
        return n || (clearTimeout(A), z = a, b.beforeStart && b.beforeStart.call(this, i()), b.circular ? j(a) : k(a), m({ start: function start() {
            n = !0;
          }, done: function done() {
            b.afterEnd && b.afterEnd.call(this, i()), b.auto && h(), n = !1;
          } }), b.circular || l()), !1;
      }function d() {
        if (n = !1, o = b.vertical ? "top" : "left", p = b.vertical ? "height" : "width", q = B.find(">ul"), r = q.find(">li"), x = r.length, w = x < b.visible ? x : b.visible, b.circular) {
          var c = r.slice(x - w).clone(),
              d = r.slice(0, w).clone();q.prepend(c).append(d), b.start += w;
        }s = a("li", q), y = s.length, z = b.start;
      }function e() {
        B.css("visibility", "visible"), s.css({ overflow: "hidden", "float": b.vertical ? "none" : "left" }), q.css({ margin: "0", padding: "0", position: "relative", "list-style": "none", "z-index": "1" }), B.css({ overflow: "hidden", position: "relative", "z-index": "2", left: "0px" }), !b.circular && b.btnPrev && 0 == b.start && a(b.btnPrev).addClass("disabled");
      }function f() {
        t = b.vertical ? s.outerHeight(!0) : s.outerWidth(!0), u = t * y, v = t * w, s.css({ width: s.width(), height: s.height() }), q.css(p, u + "px").css(o, -(z * t)), B.css(p, v + "px");
      }function g() {
        b.btnPrev && a(b.btnPrev).click(function () {
          return c(z - b.scroll);
        }), b.btnNext && a(b.btnNext).click(function () {
          return c(z + b.scroll);
        }), b.btnGo && a.each(b.btnGo, function (d, e) {
          a(e).click(function () {
            return c(b.circular ? w + d : d);
          });
        }), b.mouseWheel && B.mousewheel && B.mousewheel(function (a, d) {
          return c(d > 0 ? z - b.scroll : z + b.scroll);
        }), b.auto && h();
      }function h() {
        A = setTimeout(function () {
          c(z + b.scroll);
        }, b.auto);
      }function i() {
        return s.slice(z).slice(0, w);
      }function j(a) {
        var c;a <= b.start - w - 1 ? (c = a + x + b.scroll, q.css(o, -(c * t) + "px"), z = c - b.scroll) : a >= y - w + 1 && (c = a - x - b.scroll, q.css(o, -(c * t) + "px"), z = c + b.scroll);
      }function k(a) {
        0 > a ? z = 0 : a > y - w && (z = y - w);
      }function l() {
        a(b.btnPrev + "," + b.btnNext).removeClass("disabled"), a(z - b.scroll < 0 && b.btnPrev || z + b.scroll > y - w && b.btnNext || []).addClass("disabled");
      }function m(c) {
        n = !0, q.animate("left" == o ? { left: -(z * t) } : { top: -(z * t) }, a.extend({ duration: b.speed, easing: b.easing }, c));
      }var n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B = a(this);d(), e(), f(), g();
    });
  }, a.fn.jCarouselLite.options = { btnPrev: null, btnNext: null, btnGo: null, mouseWheel: !1, auto: null, speed: 200, easing: null, vertical: !1, circular: !0, visible: 3, start: 0, scroll: 1, beforeStart: null, afterEnd: null };
}(jQuery);

/***/ }),

/***/ "./resources/assets/js/libs/owl.carousel.min.js":
/***/ (function(module, exports) {

"function" !== typeof Object.create && (Object.create = function (f) {
  function g() {}g.prototype = f;return new g();
});
(function (f, g, k) {
  var l = { init: function init(a, b) {
      this.$elem = f(b);this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);this.userOptions = a;this.loadContent();
    }, loadContent: function loadContent() {
      function a(a) {
        var d,
            e = "";if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);else {
          for (d in a.owl) {
            a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          }b.$elem.html(e);
        }b.logIn();
      }var b = this,
          e;"function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);"string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn();
    }, logIn: function logIn() {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));this.$elem.data("owl-originalClasses", this.$elem.attr("class"));this.$elem.css({ opacity: 0 });this.orignalItems = this.options.items;this.checkBrowser();this.wrapperWidth = 0;this.checkVisible = null;this.setVars();
    }, setVars: function setVars() {
      if (0 === this.$elem.children().length) return !1;this.baseClass();this.eventTypes();this.$userItems = this.$elem.children();this.itemsAmount = this.$userItems.length;
      this.wrapItems();this.$owlItems = this.$elem.find(".owl-item");this.$owlWrapper = this.$elem.find(".owl-wrapper");this.playDirection = "next";this.prevItem = 0;this.prevArr = [0];this.currentItem = 0;this.customEvents();this.onStartup();
    }, onStartup: function onStartup() {
      this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);!0 === this.options.autoPlay && (this.options.autoPlay = 5E3);this.play();this.$elem.find(".owl-wrapper").css("display", "block");this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();this.onstartup = !1;this.eachMoveUpdate();"function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
    }, eachMoveUpdate: function eachMoveUpdate() {
      !0 === this.options.lazyLoad && this.lazyLoad();!0 === this.options.autoHeight && this.autoHeight();this.onVisibleItems();"function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]);
    }, updateVars: function updateVars() {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]);
    }, reload: function reload() {
      var a = this;g.setTimeout(function () {
        a.updateVars();
      }, 0);
    }, watchVisibility: function watchVisibility() {
      var a = this;if (!1 === a.$elem.is(":visible")) a.$elem.css({ opacity: 0 }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);else return !1;a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({ opacity: 1 }, 200), g.clearInterval(a.checkVisible));
      }, 500);
    }, wrapItems: function wrapItems() {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");this.$elem.css("display", "block");
    },
    baseClass: function baseClass() {
      var a = this.$elem.hasClass(this.options.baseClass),
          b = this.$elem.hasClass(this.options.theme);a || this.$elem.addClass(this.options.baseClass);b || this.$elem.addClass(this.options.theme);
    }, updateItems: function updateItems() {
      var a, b;if (!1 === this.options.responsive) return !1;if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;a = f(this.options.responsiveBaseWidth).width();a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);if (!1 !== this.options.itemsCustom) for (this.options.itemsCustom.sort(function (a, b) {
        return a[0] - b[0];
      }), b = 0; b < this.options.itemsCustom.length; b += 1) {
        this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      } else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount);
    }, response: function response() {
      var a = this,
          b,
          e;if (!0 !== a.options.responsive) return !1;e = f(g).width();a.resizer = function () {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
          e = f(g).width();a.updateVars();
        }, a.options.responsiveRefreshRate));
      };f(g).resize(a.resizer);
    }, updatePosition: function updatePosition() {
      this.jumpTo(this.currentItem);!1 !== this.options.autoPlay && this.checkAp();
    }, appendItemsSizes: function appendItemsSizes() {
      var a = this,
          b = 0,
          e = a.itemsAmount - a.options.items;a.$owlItems.each(function (c) {
        var d = f(this);d.css({ width: a.itemWidth }).data("owl-item", Number(c));if (0 === c % a.options.items || c === e) c > e || (b += 1);d.data("owl-roundPages", b);
      });
    }, appendWrapperSizes: function appendWrapperSizes() {
      this.$owlWrapper.css({ width: this.$owlItems.length * this.itemWidth * 2, left: 0 });this.appendItemsSizes();
    }, calculateAll: function calculateAll() {
      this.calculateWidth();this.appendWrapperSizes();this.loops();this.max();
    }, calculateWidth: function calculateWidth() {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items);
    }, max: function max() {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);return a;
    }, min: function min() {
      return 0;
    }, loops: function loops() {
      var a = 0,
          b = 0,
          e,
          c;this.positionsInArray = [0];this.pagesInArray = [];for (e = 0; e < this.itemsAmount; e += 1) {
        b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c));
      }
    }, buildControls: function buildControls() {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);!0 === this.options.pagination && this.buildPagination();!0 === this.options.navigation && this.buildButtons();
    }, buildButtons: function buildButtons() {
      var a = this,
          b = f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev = f("<div/>", { "class": "owl-prev", html: a.options.navigationText[0] || "" });a.buttonNext = f("<div/>", { "class": "owl-next", html: a.options.navigationText[1] || "" });b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
        a.preventDefault();
      });b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
        b.preventDefault();f(this).hasClass("owl-next") ? a.next() : a.prev();
      });
    }, buildPagination: function buildPagination() {
      var a = this;a.paginationWrapper = f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
        b.preventDefault();Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0);
      });
    }, updatePagination: function updatePagination() {
      var a, b, e, c, d, g;if (!1 === this.options.pagination) return !1;this.paginationWrapper.html("");a = 0;b = this.itemsAmount - this.itemsAmount % this.options.items;for (c = 0; c < this.itemsAmount; c += 1) {
        0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", { "class": "owl-page" }), g = f("<span></span>", { text: !0 === this.options.paginationNumbers ? a : "", "class": !0 === this.options.paginationNumbers ? "owl-numbers" : "" }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
      }this.checkPagination();
    }, checkPagination: function checkPagination() {
      var a = this;if (!1 === a.options.pagination) return !1;a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"));
      });
    }, checkNavigation: function checkNavigation() {
      if (!1 === this.options.navigation) return !1;!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")));
    }, updateControls: function updateControls() {
      this.updatePagination();this.checkNavigation();this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show());
    }, destroyControls: function destroyControls() {
      this.owlControls && this.owlControls.remove();
    }, next: function next(a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";else return this.currentItem = this.maximumItem, !1;this.goTo(this.currentItem, a);
    }, prev: function prev(a) {
      if (this.isTransition) return !1;this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);if (0 > this.currentItem) if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";else return this.currentItem = 0, !1;this.goTo(this.currentItem, a);
    }, goTo: function goTo(a, b, e) {
      var c = this;if (c.isTransition) return !1;"function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);c.currentItem = c.owl.currentItem = a;if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;a = c.positionsInArray[a];!0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);c.afterGo();
    }, jumpTo: function jumpTo(a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);this.swapSpeed(0);!0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);this.currentItem = this.owl.currentItem = a;this.afterGo();
    }, afterGo: function afterGo() {
      this.prevArr.push(this.currentItem);this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];this.prevArr.shift(0);this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());"function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]);
    }, stop: function stop() {
      this.apStatus = "stop";g.clearInterval(this.autoPlayInterval);
    },
    checkAp: function checkAp() {
      "stop" !== this.apStatus && this.play();
    }, play: function play() {
      var a = this;a.apStatus = "play";if (!1 === a.options.autoPlay) return !1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval = g.setInterval(function () {
        a.next(!0);
      }, a.options.autoPlay);
    }, swapSpeed: function swapSpeed(a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a));
    },
    addCssSpeed: function addCssSpeed(a) {
      return { "-webkit-transition": "all " + a + "ms ease", "-moz-transition": "all " + a + "ms ease", "-o-transition": "all " + a + "ms ease", transition: "all " + a + "ms ease" };
    }, removeTransition: function removeTransition() {
      return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" };
    }, doTranslate: function doTranslate(a) {
      return { "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)", "-moz-transform": "translate3d(" + a + "px, 0px, 0px)", "-o-transform": "translate3d(" + a + "px, 0px, 0px)", "-ms-transform": "translate3d(" + a + "px, 0px, 0px)", transform: "translate3d(" + a + "px, 0px,0px)" };
    }, transition3d: function transition3d(a) {
      this.$owlWrapper.css(this.doTranslate(a));
    }, css2move: function css2move(a) {
      this.$owlWrapper.css({ left: a });
    }, css2slide: function css2slide(a, b) {
      var e = this;e.isCssFinish = !1;e.$owlWrapper.stop(!0, !0).animate({ left: a }, { duration: b || e.options.slideSpeed, complete: function complete() {
          e.isCssFinish = !0;
        } });
    }, checkBrowser: function checkBrowser() {
      var a = k.createElement("div");a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser = { support3d: null !== a && 1 === a.length, isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints };
    }, moveEvents: function moveEvents() {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents();
    }, eventTypes: function eventTypes() {
      var a = ["s", "e", "x"];this.ev_types = {};!0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);this.ev_types.start = a[0];this.ev_types.move = a[1];this.ev_types.end = a[2];
    }, disabledEvents: function disabledEvents() {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault();
      });this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option");
      });
    },
    gestures: function gestures() {
      function a(a) {
        if (void 0 !== a.touches) return { x: a.touches[0].pageX, y: a.touches[0].pageY };if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY };
        }
      }function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end));
      }function e(b) {
        b = b.originalEvent || b || g.event;d.newPosX = a(b).x - h.offsetX;d.newPosY = a(b).y - h.offsetY;d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));(8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);(10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);!0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX);
      }
      function c(a) {
        a = a.originalEvent || a || g.event;var c;a.target = a.target || a.srcElement;h.dragging = !1;!0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
          a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable");
        }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));b("off");
      }var d = this,
          h = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };d.isCssFinish = !0;d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;var e;if (3 === c.which) return !1;if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);!0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");d.newPosX = 0;d.newRelativeX = 0;f(this).css(d.removeTransition());e = f(this).position();h.relativePos = e.left;h.offsetX = a(c).x - e.left;h.offsetY = a(c).y - e.top;b("on");h.sliding = !1;h.targetElement = c.target || c.srcElement;
        }
      });
    }, getNewPosition: function getNewPosition() {
      var a = this.closestItem();a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);return a;
    }, closestItem: function closestItem() {
      var a = this,
          b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
          e = a.newPosX,
          c = null;f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1));
      });return a.currentItem;
    }, moveDirection: function moveDirection() {
      var a;0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");return a;
    }, customEvents: function customEvents() {
      var a = this;a.$elem.on("owl.next", function () {
        a.next();
      });a.$elem.on("owl.prev", function () {
        a.prev();
      });a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;a.play();a.hoverStatus = "play";
      });a.$elem.on("owl.stop", function () {
        a.stop();a.hoverStatus = "stop";
      });a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e);
      });
      a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e);
      });
    }, stopOnHover: function stopOnHover() {
      var a = this;!0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
        a.stop();
      }), a.$elem.on("mouseout", function () {
        "stop" !== a.hoverStatus && a.play();
      }));
    }, lazyLoad: function lazyLoad() {
      var a, b, e, c, d;if (!1 === this.options.lazyLoad) return !1;for (a = 0; a < this.itemsAmount; a += 1) {
        b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)));
      }
    }, lazyPreload: function lazyPreload(a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");b.removeAttr("data-src");"fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();"function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem]);
      }function c() {
        f += 1;d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e();
      }var d = this,
          f = 0,
          k;"DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");c();
    }, autoHeight: function autoHeight() {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height", a + "px");e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
          e.wrapperOuter.addClass("autoHeight");
        }, 0);
      }function b() {
        d += 1;e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "");
      }var e = this,
          c = f(e.$owlItems[e.currentItem]).find("img"),
          d;void 0 !== c.get(0) ? (d = 0, b()) : a();
    }, completeImg: function completeImg(a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0;
    }, onVisibleItems: function onVisibleItems() {
      var a;!0 === this.options.addClassActive && this.$owlItems.removeClass("active");this.visibleItems = [];for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) {
        this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      }this.owl.visibleItems = this.visibleItems;
    }, transitionTypes: function transitionTypes(a) {
      this.outClass = "owl-" + a + "-out";this.inClass = "owl-" + a + "-in";
    }, singleItemTransition: function singleItemTransition() {
      var a = this,
          b = a.outClass,
          e = a.inClass,
          c = a.$owlItems.eq(a.currentItem),
          d = a.$owlItems.eq(a.prevItem),
          f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
          g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;a.isTransition = !0;a.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": g + "px", "-moz-perspective-origin": g + "px", "perspective-origin": g + "px" });d.css({ position: "relative", left: f + "px" }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endPrev = !0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d, b);
      });c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endCurrent = !0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c, e);
      });
    }, clearTransStyle: function clearTransStyle(a, b) {
      a.css({ position: "", left: "" }).removeClass(b);this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1);
    }, owlStatus: function owlStatus() {
      this.owl = { userOptions: this.userOptions, baseElement: this.$elem, userItems: this.$userItems, owlItems: this.$owlItems, currentItem: this.currentItem, prevItem: this.prevItem, visibleItems: this.visibleItems, isTouch: this.browser.isTouch, browser: this.browser, dragDirection: this.dragDirection };
    }, clearEvents: function clearEvents() {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");f(g).off("resize", this.resizer);
    }, unWrap: function unWrap() {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());this.clearEvents();this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"));
    }, destroy: function destroy() {
      this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData();
    }, reinit: function reinit(a) {
      a = f.extend({}, this.userOptions, a);this.unWrap();this.init(a, this.$elem);
    }, addItem: function addItem(a, b) {
      var e;if (!a) return !1;if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;this.unWrap();e = void 0 === b || -1 === b ? -1 : b;e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);this.setVars();
    }, removeItem: function removeItem(a) {
      if (0 === this.$elem.children().length) return !1;a = void 0 === a || -1 === a ? -1 : a;this.unWrap();this.$userItems.eq(a).remove();this.setVars();
    } };f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 === f(this).data("owl-init")) return !1;f(this).data("owl-init", !0);var b = Object.create(l);b.init(a, this);f.data(this, "owlCarousel", b);
    });
  };f.fn.owlCarousel.options = { items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1E3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1,
    responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: g, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1 };
})(jQuery, window, document);

/***/ }),

/***/ "./resources/assets/js/libs/popup.min.js":
/***/ (function(module, exports) {

$(window).on('load', function () {

	var id = '#dialog';

	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(document).width();

	//Set heigth and width to mask to fill up the whole screen
	$('#mask').css({ 'width': maskWidth, 'height': maskHeight });

	//transition effect		
	$('#mask').fadeIn(500);
	$('#mask').fadeTo("slow", 0.5);

	//Get the window height and width
	var winH = $(window).height();
	var winW = $(window).width();

	//Set the popup window to center
	$(id).css('top', winH / 2 - $(id).height() / 2);
	$(id).css('left', winW / 2 - $(id).width() / 2);

	//transition effect
	$(id).fadeIn(2000);

	//if close button is clicked
	$('.window .close-popup').on('click', function (e) {
		//Cancel the link behavior
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});

	//if mask is clicked
	$('#mask').on('click', function () {
		$(this).hide();
		$('.window').hide();
	});
});

/***/ }),

/***/ "./resources/assets/js/libs/timecircles.min.js":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  function e(t) {
    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;t = t.replace(e, function (t, e, a, i) {
      return e + e + a + a + i + i;
    });var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a ? { r: parseInt(a[1], 16), g: parseInt(a[2], 16), b: parseInt(a[3], 16) } : null;
  }function a() {
    var t = document.createElement("canvas");return !(!t.getContext || !t.getContext("2d"));
  }function i() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
  }function n() {
    return i() + i() + "-" + i() + "-" + i() + "-" + i() + "-" + i() + i() + i();
  }function s(t) {
    var e = t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);if (null !== e && e.length > 0) {
      var a = t.split(" "),
          i = a[0].split("-"),
          n = a[1].split(":");return new Date(i[0], i[1] - 1, i[2], n[0], n[1], n[2]);
    }var s = Date.parse(t);return isNaN(s) ? (s = Date.parse(t.replace(/-/g, "/").replace("T", " ")), isNaN(s) ? new Date() : s) : s;
  }function r(t, e, a, i, n) {
    for (var s = {}, r = {}, o = {}, h = {}, d = {}, u = {}, l = null, f = 0; f < i.length; f++) {
      var c,
          p = i[f];c = null === l ? a / m[p] : m[l] / m[p];var _ = t / m[p],
          b = e / m[p];n && (_ = _ > 0 ? Math.floor(_) : Math.ceil(_), b = b > 0 ? Math.floor(b) : Math.ceil(b)), "Days" !== p && (_ %= c, b %= c), s[p] = _, o[p] = Math.abs(_), r[p] = b, u[p] = Math.abs(b), h[p] = Math.abs(_) / c, d[p] = Math.abs(b) / c, l = p;
    }return { raw_time: s, raw_old_time: r, time: o, old_time: u, pct: h, old_pct: d };
  }function o() {
    "undefined" != typeof d.TC_Instance_List ? p = d.TC_Instance_List : d.TC_Instance_List = p, h(d);
  }function h(t) {
    for (var e = ["webkit", "moz"], a = 0; a < e.length && !t.requestAnimationFrame; ++a) {
      t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[e[a] + "CancelAnimationFrame"];
    }t.requestAnimationFrame && t.cancelAnimationFrame || (t.requestAnimationFrame = function (e, a, i) {
      "undefined" == typeof i && (i = { data: { last_frame: 0 } });var n = new Date().getTime(),
          s = Math.max(0, 16 - (n - i.data.last_frame)),
          r = t.setTimeout(function () {
        e(n + s);
      }, s);return i.data.last_frame = n + s, r;
    }, t.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }var d = window;Object.keys || (Object.keys = function () {
    "use strict";
    var t = Object.prototype.hasOwnProperty,
        e = !{ toString: null }.propertyIsEnumerable("toString"),
        a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        i = a.length;return function (n) {
      if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && ("function" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");var s,
          r,
          o = [];for (s in n) {
        t.call(n, s) && o.push(s);
      }if (e) for (r = 0; i > r; r++) {
        t.call(n, a[r]) && o.push(a[r]);
      }return o;
    };
  }());var u = !1,
      l = 200,
      f = ("#debug" === location.hash, ["Days", "Hours", "Minutes", "Seconds"]),
      c = { Seconds: "Minutes", Minutes: "Hours", Hours: "Days", Days: "Years" },
      m = { Seconds: 1, Minutes: 60, Hours: 3600, Days: 86400, Months: 2678400, Years: 31536e3 };Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
    var e = this.length >>> 0,
        a = Number(arguments[1]) || 0;for (a = 0 > a ? Math.ceil(a) : Math.floor(a), 0 > a && (a += e); e > a; a++) {
      if (a in this && this[a] === t) return a;
    }return -1;
  });var p = {},
      _ = function _(t, e) {
    this.element = t, this.container, this.listeners = null, this.data = { paused: !1, last_frame: 0, animation_frame: null, interval_fallback: null, timer: !1, total_duration: null, prev_time: null, drawn_units: [], text_elements: { Days: null, Hours: null, Minutes: null, Seconds: null }, attributes: { canvas: null, context: null, item_size: null, line_width: null, radius: null, outer_radius: null }, state: { fading: { Days: !1, Hours: !1, Minutes: !1, Seconds: !1 } } }, this.config = null, this.setOptions(e), this.initialize();
  };_.prototype.clearListeners = function () {
    this.listeners = { all: [], visible: [] };
  }, _.prototype.addTime = function (t) {
    if (this.data.attributes.ref_date instanceof Date) {
      var e = this.data.attributes.ref_date;e.setSeconds(e.getSeconds() + t);
    } else isNaN(this.data.attributes.ref_date) || (this.data.attributes.ref_date += 1e3 * t);
  }, _.prototype.initialize = function (e) {
    this.data.drawn_units = [];for (var i = 0; i < Object.keys(this.config.time).length; i++) {
      var n = Object.keys(this.config.time)[i];this.config.time[n].show && this.data.drawn_units.push(n);
    }t(this.element).children("div.time_circles").remove(), "undefined" == typeof e && (e = !0), (e || null === this.listeners) && this.clearListeners(), this.container = t("<div>"), this.container.addClass("time_circles"), this.container.appendTo(this.element);var s = this.element.offsetHeight,
        r = this.element.offsetWidth;0 === s && (s = t(this.element).height()), 0 === r && (r = t(this.element).width()), 0 === s && r > 0 ? s = r / this.data.drawn_units.length : 0 === r && s > 0 && (r = s * this.data.drawn_units.length);var o = document.createElement("canvas");o.width = r, o.height = s, this.data.attributes.canvas = t(o), this.data.attributes.canvas.appendTo(this.container);var h = a();h || "undefined" == typeof G_vmlCanvasManager || (G_vmlCanvasManager.initElement(o), u = !0, h = !0), h && (this.data.attributes.context = o.getContext("2d")), this.data.attributes.item_size = Math.min(r / this.data.drawn_units.length, s), this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width, this.data.attributes.radius = (.8 * this.data.attributes.item_size - this.data.attributes.line_width) / 2, this.data.attributes.outer_radius = this.data.attributes.radius + .5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);var i = 0;for (var l in this.data.text_elements) {
      if (this.config.time[l].show) {
        var f = t("<div>");f.addClass("textDiv_" + l), f.css("top", Math.round(.35 * this.data.attributes.item_size)), f.css("left", Math.round(i++ * this.data.attributes.item_size)), f.css("width", this.data.attributes.item_size), f.appendTo(this.container);var c = t("<span class='number'>");c.appendTo(f);var m = t("<span class='text'>");m.text(this.config.time[l].text), m.appendTo(f), this.data.text_elements[l] = c;
      }
    }this.start(), this.config.start || (this.data.paused = !0);var p = this;this.data.interval_fallback = d.setInterval(function () {
      p.update.call(p, !0);
    }, 100);
  }, _.prototype.update = function (t) {
    if ("undefined" == typeof t) t = !1;else if (t && this.data.paused) return;u && this.data.attributes.context.clearRect(0, 0, this.data.attributes.canvas[0].width, this.data.attributes.canvas[0].hright);var e,
        a,
        i = this.data.prev_time,
        n = new Date();if (this.data.prev_time = n, null === i && (i = n), !this.config.count_past_zero && n > this.data.attributes.ref_date) {
      for (var s = 0; s < this.data.drawn_units.length; s++) {
        var o = this.data.drawn_units[s];this.data.text_elements[o].text("0");var h = s * this.data.attributes.item_size + this.data.attributes.item_size / 2,
            c = this.data.attributes.item_size / 2,
            p = this.config.time[o].color;this.drawArc(h, c, p, 0);
      }return void this.stop();
    }e = (this.data.attributes.ref_date - n) / 1e3, a = (this.data.attributes.ref_date - i) / 1e3;var _ = "smooth" !== this.config.animation,
        b = r(e, a, this.data.total_duration, this.data.drawn_units, _),
        g = r(e, a, m.Years, f, _),
        s = 0,
        v = 0,
        y = null,
        w = this.data.drawn_units.slice();for (var s in f) {
      var o = f[s];if (Math.floor(g.raw_time[o]) !== Math.floor(g.raw_old_time[o]) && this.notifyListeners(o, Math.floor(g.time[o]), Math.floor(e), "all"), !(w.indexOf(o) < 0)) {
        if (Math.floor(b.raw_time[o]) !== Math.floor(b.raw_old_time[o]) && this.notifyListeners(o, Math.floor(b.time[o]), Math.floor(e), "visible"), !t) {
          this.data.text_elements[o].text(Math.floor(Math.abs(b.time[o])));var h = v * this.data.attributes.item_size + this.data.attributes.item_size / 2,
              c = this.data.attributes.item_size / 2,
              p = this.config.time[o].color;"smooth" === this.config.animation ? (null === y || u || (Math.floor(b.time[y]) > Math.floor(b.old_time[y]) ? (this.radialFade(h, c, p, 1, o), this.data.state.fading[o] = !0) : Math.floor(b.time[y]) < Math.floor(b.old_time[y]) && (this.radialFade(h, c, p, 0, o), this.data.state.fading[o] = !0)), this.data.state.fading[o] || this.drawArc(h, c, p, b.pct[o])) : this.animateArc(h, c, p, b.pct[o], b.old_pct[o], new Date().getTime() + l);
        }y = o, v++;
      }
    }if (!this.data.paused && !t) {
      var M = this,
          x = function x() {
        M.update.call(M);
      };if ("smooth" === this.config.animation) this.data.animation_frame = d.requestAnimationFrame(x, M.element, M);else {
        var A = e % 1 * 1e3;0 > A && (A = 1e3 + A), A += 50, M.data.animation_frame = d.setTimeout(function () {
          M.data.animation_frame = d.requestAnimationFrame(x, M.element, M);
        }, A);
      }
    }
  }, _.prototype.animateArc = function (t, e, a, i, n, s) {
    if (null !== this.data.attributes.context) {
      var r = n - i;if (Math.abs(r) > .5) 0 === i ? this.radialFade(t, e, a, 1) : this.radialFade(t, e, a, 0);else {
        var o = (l - (s - new Date().getTime())) / l;o > 1 && (o = 1);var h = n * (1 - o) + i * o;if (this.drawArc(t, e, a, h), o >= 1) return;var u = this;d.requestAnimationFrame(function () {
          u.animateArc(t, e, a, i, n, s);
        }, this.element);
      }
    }
  }, _.prototype.drawArc = function (t, e, a, i) {
    if (null !== this.data.attributes.context) {
      var n = Math.max(this.data.attributes.outer_radius, this.data.attributes.item_size / 2);u || this.data.attributes.context.clearRect(t - n, e - n, 2 * n, 2 * n), this.config.use_background && (this.data.attributes.context.beginPath(), this.data.attributes.context.arc(t, e, this.data.attributes.radius, 0, 2 * Math.PI, !1), this.data.attributes.context.lineWidth = this.data.attributes.line_width * this.config.bg_width, this.data.attributes.context.strokeStyle = this.config.circle_bg_color, this.data.attributes.context.stroke());var s,
          r,
          o,
          h = -.5 * Math.PI,
          d = 2 * Math.PI;s = h + this.config.start_angle / 360 * d;var l = 2 * i * Math.PI;"Both" === this.config.direction ? (o = !1, s -= l / 2, r = s + l) : "Clockwise" === this.config.direction ? (o = !1, r = s + l) : (o = !0, r = s - l), this.data.attributes.context.beginPath(), this.data.attributes.context.arc(t, e, this.data.attributes.radius, s, r, o), this.data.attributes.context.lineWidth = this.data.attributes.line_width, this.data.attributes.context.strokeStyle = a, this.data.attributes.context.stroke();
    }
  }, _.prototype.radialFade = function (t, a, i, n, s) {
    var r,
        o = e(i),
        h = this,
        u = .2 * (1 === n ? -1 : 1);for (r = 0; 1 >= n && n >= 0; r++) {
      !function () {
        var e = 50 * r,
            i = "rgba(" + o.r + ", " + o.g + ", " + o.b + ", " + Math.round(10 * n) / 10 + ")";d.setTimeout(function () {
          h.drawArc(t, a, i, 1);
        }, e);
      }(), n += u;
    }void 0 !== (typeof s === "undefined" ? "undefined" : _typeof(s)) && d.setTimeout(function () {
      h.data.state.fading[s] = !1;
    }, 50 * r);
  }, _.prototype.timeLeft = function () {
    if (this.data.paused && "number" == typeof this.data.timer) return this.data.timer;var t = new Date();return (this.data.attributes.ref_date - t) / 1e3;
  }, _.prototype.start = function () {
    d.cancelAnimationFrame(this.data.animation_frame), d.clearTimeout(this.data.animation_frame);var e = t(this.element).data("date");if ("undefined" == typeof e && (e = t(this.element).attr("data-date")), "string" == typeof e) this.data.attributes.ref_date = s(e);else if ("number" == typeof this.data.timer) this.data.paused && (this.data.attributes.ref_date = new Date().getTime() + 1e3 * this.data.timer);else {
      var a = t(this.element).data("timer");"undefined" == typeof a && (a = t(this.element).attr("data-timer")), "string" == typeof a && (a = parseFloat(a)), "number" == typeof a ? (this.data.timer = a, this.data.attributes.ref_date = new Date().getTime() + 1e3 * a) : this.data.attributes.ref_date = this.config.ref_date;
    }this.data.paused = !1, this.update.call(this);
  }, _.prototype.restart = function () {
    this.data.timer = !1, this.start();
  }, _.prototype.stop = function () {
    "number" == typeof this.data.timer && (this.data.timer = this.timeLeft(this)), this.data.paused = !0, d.cancelAnimationFrame(this.data.animation_frame);
  }, _.prototype.destroy = function () {
    this.clearListeners(), this.stop(), d.clearInterval(this.data.interval_fallback), this.data.interval_fallback = null, this.container.remove(), t(this.element).removeAttr("data-tc-id"), t(this.element).removeData("tc-id");
  }, _.prototype.setOptions = function (e) {
    if (null === this.config && (this.default_options.ref_date = new Date(), this.config = t.extend(!0, {}, this.default_options)), t.extend(!0, this.config, e), d = this.config.use_top_frame ? window.top : window, o(), this.data.total_duration = this.config.total_duration, "string" == typeof this.data.total_duration) if ("undefined" != typeof m[this.data.total_duration]) this.data.total_duration = m[this.data.total_duration];else if ("Auto" === this.data.total_duration) for (var a = 0; a < Object.keys(this.config.time).length; a++) {
      var i = Object.keys(this.config.time)[a];if (this.config.time[i].show) {
        this.data.total_duration = m[c[i]];break;
      }
    } else this.data.total_duration = m.Years, console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto");
  }, _.prototype.addListener = function (t, e, a) {
    "function" == typeof t && ("undefined" == typeof a && (a = "visible"), this.listeners[a].push({ func: t, scope: e }));
  }, _.prototype.notifyListeners = function (t, e, a, i) {
    for (var n = 0; n < this.listeners[i].length; n++) {
      var s = this.listeners[i][n];s.func.apply(s.scope, [t, e, a]);
    }
  }, _.prototype.default_options = { ref_date: new Date(), start: !0, animation: "smooth", count_past_zero: !0, circle_bg_color: "#fff", use_background: !0, fg_width: .1, bg_width: 1.2, text_size: .07, total_duration: "Auto", direction: "Clockwise", use_top_frame: !1, start_angle: 0, time: { Days: { show: !0, text: "Days", color: "#FC6" }, Hours: { show: !0, text: "Hours", color: "#9CF" }, Minutes: { show: !0, text: "Minutes", color: "#BFB" }, Seconds: { show: !0, text: "Seconds", color: "#F99" } } };var b = function b(t, e) {
    this.elements = t, this.options = e, this.foreach();
  };b.prototype.getInstance = function (e) {
    var a,
        i = t(e).data("tc-id");if ("undefined" == typeof i && (i = n(), t(e).attr("data-tc-id", i)), "undefined" == typeof p[i]) {
      var s = this.options,
          r = t(e).data("options");"string" == typeof r && (r = JSON.parse(r)), "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (s = t.extend(!0, {}, this.options, r)), a = new _(e, s), p[i] = a;
    } else a = p[i], "undefined" != typeof this.options && a.setOptions(this.options);return a;
  }, b.prototype.addTime = function (t) {
    this.foreach(function (e) {
      e.addTime(t);
    });
  }, b.prototype.foreach = function (t) {
    var e = this;return this.elements.each(function () {
      var a = e.getInstance(this);"function" == typeof t && t(a);
    }), this;
  }, b.prototype.start = function () {
    return this.foreach(function (t) {
      t.start();
    }), this;
  }, b.prototype.stop = function () {
    return this.foreach(function (t) {
      t.stop();
    }), this;
  }, b.prototype.restart = function () {
    return this.foreach(function (t) {
      t.restart();
    }), this;
  }, b.prototype.rebuild = function () {
    return this.foreach(function (t) {
      t.initialize(!1);
    }), this;
  }, b.prototype.getTime = function () {
    return this.getInstance(this.elements[0]).timeLeft();
  }, b.prototype.addListener = function (t, e) {
    "undefined" == typeof e && (e = "visible");var a = this;return this.foreach(function (i) {
      i.addListener(t, a.elements, e);
    }), this;
  }, b.prototype.destroy = function () {
    return this.foreach(function (t) {
      t.destroy();
    }), this;
  }, b.prototype.end = function () {
    return this.elements;
  }, t.fn.TimeCircles = function (t) {
    return new b(this, t);
  };
}(jQuery);

/***/ }),

/***/ "./resources/assets/js/libs/wow.min.js":
/***/ (function(module, exports) {

(function () {
  var MutationObserver,
      Util,
      WeakMap,
      getComputedStyle,
      getComputedStyleRX,
      bind = function bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  },
      indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };Util = function () {
    function Util() {}
    Util.prototype.extend = function (custom, defaults) {
      var key, value;for (key in defaults) {
        value = defaults[key];if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };Util.prototype.isMobile = function (agent) {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
      );
    };Util.prototype.createEvent = function (event, bubble, cancel, detail) {
      var customEvent;if (bubble == null) {
        bubble = !1;
      }
      if (cancel == null) {
        cancel = !1;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };Util.prototype.emitEvent = function (elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if ("on" + event in (elem != null)) {
        return elem["on" + event]();
      }
    };Util.prototype.addEvent = function (elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, !1);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };Util.prototype.removeEvent = function (elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, !1);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };Util.prototype.innerHeight = function () {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };return Util;
  }();WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = function () {
    function WeakMap() {
      this.keys = [];this.values = [];
    }
    WeakMap.prototype.get = function (key) {
      var i, item, j, len, ref;ref = this.keys;for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];if (item === key) {
          return this.values[i];
        }
      }
    };WeakMap.prototype.set = function (key, value) {
      var i, item, j, len, ref;ref = this.keys;for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];if (item === key) {
          this.values[i] = value;return;
        }
      }
      this.keys.push(key);return this.values.push(value);
    };return WeakMap;
  }());MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = function () {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }
    MutationObserver.notSupported = !0;MutationObserver.prototype.observe = function () {};return MutationObserver;
  }());getComputedStyle = this.getComputedStyle || function (el, pseudo) {
    this.getPropertyValue = function (prop) {
      var ref;if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function (_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };return this;
  };getComputedStyleRX = /(\-([a-z]){1})/g;this.WOW = function () {
    WOW.prototype.defaults = { boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null };function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);this.scrollHandler = bind(this.scrollHandler, this);this.resetAnimation = bind(this.resetAnimation, this);this.start = bind(this.start, this);this.scrolled = !0;this.config = this.util().extend(options, this.defaults);if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();this.wowEvent = this.util().createEvent(this.config.boxClass);
    }
    WOW.prototype.init = function () {
      var ref;this.element = window.document.documentElement;if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };WOW.prototype.start = function () {
      var box, j, len, ref;this.stopped = !1;this.boxes = function () {
        var j, len, ref, results;ref = this.element.querySelectorAll("." + this.config.boxClass);results = [];for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];results.push(box);
        }
        return results;
      }.call(this);this.all = function () {
        var j, len, ref, results;ref = this.boxes;results = [];for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];results.push(box);
        }
        return results;
      }.call(this);if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];this.applyStyle(box, !0);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);this.util().addEvent(window, 'resize', this.scrollHandler);this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver(function (_this) {
          return function (records) {
            var k, len1, node, record, results;results = [];for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];results.push(function () {
                var l, len2, ref1, results1;ref1 = record.addedNodes || [];results1 = [];for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];results1.push(this.doSync(node));
                }
                return results1;
              }.call(_this));
            }
            return results;
          };
        }(this)).observe(document.body, { childList: !0, subtree: !0 });
      }
    };WOW.prototype.stop = function () {
      this.stopped = !0;this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);this.util().removeEvent(window, 'resize', this.scrollHandler);if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };WOW.prototype.sync = function (element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };WOW.prototype.doSync = function (element) {
      var box, j, len, ref, results;if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;ref = element.querySelectorAll("." + this.config.boxClass);results = [];for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);this.all.push(box);if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, !0);
          }
          results.push(this.scrolled = !0);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };WOW.prototype.show = function (box) {
      this.applyStyle(box);box.className = box.className + " " + this.config.animateClass;if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);this.util().addEvent(box, 'animationend', this.resetAnimation);this.util().addEvent(box, 'oanimationend', this.resetAnimation);this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);return box;
    };WOW.prototype.applyStyle = function (box, hidden) {
      var delay, duration, iteration;duration = box.getAttribute('data-wow-duration');delay = box.getAttribute('data-wow-delay');iteration = box.getAttribute('data-wow-iteration');return this.animate(function (_this) {
        return function () {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      }(this));
    };WOW.prototype.animate = function () {
      if ('requestAnimationFrame' in window) {
        return function (callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function (callback) {
          return callback();
        };
      }
    }();WOW.prototype.resetStyle = function () {
      var box, j, len, ref, results;ref = this.boxes;results = [];for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];results.push(box.style.visibility = 'visible');
      }
      return results;
    };WOW.prototype.resetAnimation = function (event) {
      var target;if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };WOW.prototype.customStyle = function (box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';if (duration) {
        this.vendorSet(box.style, { animationDuration: duration });
      }
      if (delay) {
        this.vendorSet(box.style, { animationDelay: delay });
      }
      if (iteration) {
        this.vendorSet(box.style, { animationIterationCount: iteration });
      }
      this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });return box;
    };WOW.prototype.vendors = ["moz", "webkit"];WOW.prototype.vendorSet = function (elem, properties) {
      var name, results, value, vendor;results = [];for (name in properties) {
        value = properties[name];elem["" + name] = value;results.push(function () {
          var j, len, ref, results1;ref = this.vendors;results1 = [];for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];results1.push(elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value);
          }
          return results1;
        }.call(this));
      }
      return results;
    };WOW.prototype.vendorCSS = function (elem, property) {
      var j, len, ref, result, style, vendor;style = getComputedStyle(elem);result = style.getPropertyCSSValue(property);ref = this.vendors;for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };WOW.prototype.animationName = function (box) {
      var animationName, error;try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };WOW.prototype.cacheAnimationName = function (box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };WOW.prototype.cachedAnimationName = function (box) {
      return this.animationNameCache.get(box);
    };WOW.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    };WOW.prototype.scrollCallback = function () {
      var box;if (this.scrolled) {
        this.scrolled = !1;this.boxes = function () {
          var j, len, ref, results;ref = this.boxes;results = [];for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];if (!box) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);continue;
            }
            results.push(box);
          }
          return results;
        }.call(this);if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };WOW.prototype.offsetTop = function (element) {
      var top;while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };WOW.prototype.isVisible = function (box) {
      var bottom, offset, top, viewBottom, viewTop;offset = box.getAttribute('data-wow-offset') || this.config.offset;viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;top = this.offsetTop(box);bottom = top + box.clientHeight;return top <= viewBottom && bottom >= viewTop;
    };WOW.prototype.util = function () {
      return this._util != null ? this._util : this._util = new Util();
    };WOW.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };return WOW;
  }();
}).call(this);

/***/ }),

/***/ "./resources/assets/js/theme.js":
/***/ (function(module, exports) {

(function ($) {
	"use strict"; // Start of use strict

	$(function () {
		//Custom Slider
		if ($('.product-custom-slider').length > 0) {
			$('.product-custom-slider').each(function () {
				var self = $(this);
				var next = self.find('.next');
				var prev = self.find('.prev');
				var list = self.find('.list-product');
				var item = self.find('.item-product');
				var current = self.find('.item-current').index() + 1;
				var src_thumb = self.find('.item-current .product-thumb img').attr('src');
				var iwd = item.width();
				var lwd = list.width();
				var total = item.length;
				var current_text, total_text;
				if (total > 9) {
					total_text = total;
				} else {
					total_text = '0' + total;
				}
				if (current > 9) {
					current_text = current;
				} else {
					current_text = '0' + current;
				}
				self.find('.current').text(current_text);
				self.find('.total').text(total_text);
				self.find(".custom-range-max").slider({
					range: "max",
					min: current,
					max: total,
					value: current,
					slide: function slide(event, ui) {
						current = ui.value;
						if (current > 9) {
							current_text = current;
						} else {
							current_text = '0' + current;
						}
						self.find('.current').text(current_text);
						item.removeClass('item-current');
						item.eq(current - 1).addClass('item-current');
						list.css('transform', 'translateX(-' + (current - 1) * iwd + 'px)');
						src_thumb = self.find('.item-current .product-thumb img').attr('src');
						self.parents('.content-scroll-box').find('.custom-product-thumb').attr('src', src_thumb);
					}
				});
				next.on('click', function (event) {
					event.preventDefault();
					current = current + 1;
					if (current > total) {
						current = 1;
					}
					if (current > 9) {
						current_text = current;
					} else {
						current_text = '0' + current;
					}
					self.find('.current').text(current_text);
					item.removeClass('item-current');
					item.eq(current - 1).addClass('item-current');
					list.css('transform', 'translateX(-' + (current - 1) * iwd + 'px)');
					src_thumb = self.find('.item-current .product-thumb img').attr('src');
					self.parents('.content-scroll-box').find('.custom-product-thumb').attr('src', src_thumb);
					self.find(".custom-range-max").slider({
						range: "max",
						max: total,
						value: current
					});
				});
				prev.on('click', function (event) {
					event.preventDefault();
					current = current - 1;
					if (current < 1) {
						current = total;
					}
					if (current > 9) {
						current_text = current;
					} else {
						current_text = '0' + current;
					}
					self.find('.current').text(current_text);
					item.removeClass('item-current');
					item.eq(current - 1).addClass('item-current');
					list.css('transform', 'translateX(-' + (current - 1) * iwd + 'px)');
					src_thumb = self.find('.item-current .product-thumb img').attr('src');
					self.parents('.content-scroll-box').find('.custom-product-thumb').attr('src', src_thumb);
					self.find(".custom-range-max").slider({
						range: "max",
						max: total,
						value: current
					});
				});
			});
		}
		//Product Inner Zoom
		if ($('.inner-zoom').length > 0) {
			$('.inner-zoom').on('mouseover', function () {
				$(this).find('img').elevateZoom({
					zoomType: "lens",
					lensShape: "square",
					lensSize: 100,
					borderSize: 1,
					containLensZoom: true,
					responsive: true
				});
			});
		}
		//Check RTL
		if ($('body').attr('dir') == "rtl") {
			$('body').addClass("right-to-left");
		} else {
			$('body').removeClass("right-to-left");
		}
		//Mini Cart Fixed
		$('body').on('click', function (event) {
			$(this).removeClass('overlay');
			$('.mini-cart-box.aside-box .mini-cart-content').removeClass('active');
			$('.nav-fixed .main-nav').removeClass('active');
		});
		$('.mini-cart-box.aside-box,.nav-fixed').on('click', function () {
			event.stopPropagation();
		});
		$('.mini-cart-box.aside-box .mini-cart-link,.nav-fixed .btn-nav-fixed').on('click', function (event) {
			event.preventDefault();
			$('body').addClass('overlay');
			$(this).next().addClass('active');
		});
		//Attr Color
		$('.list-attr-color a').on('click', function (event) {
			event.preventDefault();
			var self = $(this);
			var image = self.attr('data-image');
			self.parents('.product-thumb').find('.product-thumb-link img').attr('src', image);
		});
		//Full Mega Menu
		if ($('.full-mega-menu').length > 0) {
			$('.main-nav').each(function () {
				if ($('body').attr('dir') == "rtl") {
					var nav_os = $(window).width() - ($(this).offset().left + $(this).outerWidth());
					var par_os = $(window).width() - ($(this).parents('.container,.container-fluid').offset().left + $(this).parents('.container,.container-fluid').outerWidth());
					var nav_right = nav_os - par_os - 15;
					$(this).find('.full-mega-menu').css('margin-right', '-' + nav_right + 'px');
				} else {
					var nav_os = $(this).offset().left;
					var par_os = $(this).parents('.container,.container-fluid').offset().left;
					var nav_left = nav_os - par_os - 15;
					$(this).find('.full-mega-menu').css('margin-left', '-' + nav_left + 'px');
				}
			});
		}
		//Qty Up-Down
		$('.detail-qty').each(function () {
			$(this).find('.qty-up').on('click', function (event) {
				event.preventDefault();
				var qtyval = parseInt($(this).parent().find('.qty-val').text(), 10);
				qtyval = qtyval + 1;
				$(this).parent().find('.qty-val').text(qtyval);
			});
			$(this).find('.qty-down').on('click', function (event) {
				event.preventDefault();
				var qtyval = parseInt($(this).parent().find('.qty-val').text(), 10);
				qtyval = qtyval - 1;
				if (qtyval > 1) {
					$(this).parent().find('.qty-val').text(qtyval);
				} else {
					qtyval = 1;
					$(this).parent().find('.qty-val').text(qtyval);
				}
			});
		});
		//Filter Price
		if ($('.range-filter').length > 0) {
			$('.range-filter').each(function () {
				$(this).find(".slider-range").slider({
					range: true,
					min: 0,
					max: 500,
					values: [25, 400],
					slide: function slide(event, ui) {
						$(this).find(".min-price").text('$' + ui.values[0]);
						$(this).find(".max-price").text('$' + ui.values[1]);
					}
				});
				$(this).find(".min-price").appendTo($(this).find('.ui-slider-handle').first()).text('$' + $(this).find(".slider-range").slider("values", 0));
				$(this).find(".max-price").appendTo($(this).find('.ui-slider-handle').last()).text('$' + $(this).find(".slider-range").slider("values", 1));
			});
		}
		//Toggle Class
		if ($('.list-attr').length > 0) {
			$('.list-attr a').on('click', function (event) {
				event.preventDefault();
				$(this).toggleClass('active');
			});
		}
		//Tag Toggle
		if ($('.toggle-tab').length > 0) {
			$('.toggle-tab').each(function () {
				$(this).find('.item-toggle-tab.active .toggle-tab-content').show();
				$(this).find('.toggle-tab-title').on('click', function (event) {
					if ($(this).next().length > 0) {
						event.preventDefault();
						$(this).parent().siblings().removeClass('active');
						$(this).parent().toggleClass('active');
						$(this).parents('.toggle-tab').find('.toggle-tab-content').slideUp();
						$(this).next().stop(true, false).slideToggle();
					}
				});
			});
		}
		//Hover Active
		if ($('.box-hover-active').length > 0) {
			$('.box-hover-active').each(function () {
				$(this).find('.item-hover-active').on('mouseover', function () {
					$(this).parents('.box-hover-active').find('.item-hover-active').removeClass('active');
					$(this).addClass('active');
				});
				$(this).on('mouseout', function () {
					$(this).find('.item-hover-active').removeClass('active');
					$(this).find('.item-active').addClass('active');
				});
			});
		}
		//Popup Wishlist
		$('.wishlist-link').on('click', function (event) {
			event.preventDefault();
			$('.wishlist-mask').fadeIn();
			var counter = 5;
			var popup;
			popup = setInterval(function () {
				counter--;
				if (counter < 0) {
					clearInterval(popup);
					$('.wishlist-mask').hide();
				} else {
					$(".wishlist-countdown").text(counter.toString());
				}
			}, 1000);
		});
		//Menu Responsive
		$('.toggle-mobile-menu').on('click', function (event) {
			event.preventDefault();
			$(this).parents('.main-nav').toggleClass('active');
		});
		//Custom ScrollBar
		if ($('.custom-scroll').length > 0) {
			$('.custom-scroll').each(function () {
				$(this).mCustomScrollbar({
					advanced: {
						autoScrollOnFocus: false
					}
				});
			});
		}
		//Horizontal Custom ScrollBar
		if ($('.hoz-custom-scroll').length > 0) {
			$('.hoz-custom-scroll').each(function () {
				$(this).mCustomScrollbar({
					horizontalScroll: true
				});
			});
		}
		//Animate
		if ($('.wow').length > 0) {
			new WOW().init();
		}
		//Light Box
		if ($('.fancybox').length > 0) {
			$('.fancybox').fancybox();
		}
		if ($('.quickview-link').length > 0) {
			$('.quickview-link').fancybox({
				afterLoad: function afterLoad() {
					detail_gallery();
				}
			});
		}
		if ($('.fancybox-media').length > 0) {
			$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
				openEffect: 'none',
				closeEffect: 'none',
				prevEffect: 'none',
				nextEffect: 'none',
				arrows: false,
				helpers: {
					media: {},
					buttons: {}
				}
			});
		}
		//Back To Top
		$('.scroll-top').on('click', function (event) {
			event.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		});
		//Box Hover Dir
		$('.box-hover-dir').each(function () {
			$(this).hoverdir();
		});
		//Background Image
		if ($('.banner-background').length > 0) {
			$('.banner-background').each(function () {
				var b_url = $(this).attr("data-image");
				$(this).css('background-image', 'url("' + b_url + '")');
			});
		}
		//Box Parallax	
		if ($('.parallax').length > 0) {
			$('.parallax').each(function () {
				var p_url = $(this).attr("data-image");
				$(this).css('background-image', 'url("' + p_url + '")');
			});
		}
		//Switch Register
		$('.login-to-register').on('click', function (event) {
			event.preventDefault();
			$(this).toggleClass('login-status');
			if ($(this).hasClass('login-status')) {
				$(this).text($(this).attr('data-login'));
				$(this).parents('.register-content-box').find('.block-login').hide();
				$(this).parents('.register-content-box').find('.block-register').show();
			} else {
				$(this).text($(this).attr('data-register'));
				$(this).parents('.register-content-box').find('.block-login').show();
				$(this).parents('.register-content-box').find('.block-register').hide();
			}
		});
		//Box Filter Product	
		if ($('.box-product-filter').length > 0) {
			$('.box-product-filter').each(function () {
				var self = $(this);
				self.find('.btn-filter-product').on('click', function (event) {
					event.preventDefault();
					$(this).next().slideToggle();
				});
			});
		}
	});
	//Offset Menu
	function offset_menu() {
		if ($(window).width() > 767) {
			$('.main-nav .sub-menu').each(function () {
				var wdm = $(window).width();
				var wde = $(this).width();
				var offset = $(this).offset().left;
				var tw = offset + wde;
				if (tw > wdm) {
					$(this).addClass('offset-right');
				}
			});
		} else {
			return false;
		}
	}
	//Fixed Header
	function fixed_header() {
		if ($('.header-ontop').length > 0) {
			if ($(window).width() > 1023) {
				var ht = $('#header').height();
				var st = $(window).scrollTop();
				if (st > ht) {
					$('.header-ontop').addClass('fixed-ontop');
				} else {
					$('.header-ontop').removeClass('fixed-ontop');
				}
			} else {
				$('.header-ontop').removeClass('fixed-ontop');
			}
		}
	}
	//Slider Background
	function background() {
		$('.bg-slider .item-slider').each(function () {
			var src = $(this).find('.banner-thumb a img').attr('src');
			$(this).css('background-image', 'url("' + src + '")');
		});
	}
	//After Action
	function afterAction() {
		$('.banner-slider .owl-item').each(function () {
			var check = $(this).hasClass('active');
			if (check == true) {
				$(this).find('.animated').each(function () {
					var anime = $(this).attr('data-animated');
					$(this).addClass(anime);
				});
			} else {
				$(this).find('.animated').each(function () {
					var anime = $(this).attr('data-animated');
					$(this).removeClass(anime);
				});
			}
		});

		var owl = this;
		var visible = this.owl.visibleItems;
		var first_item = visible[0];
		var last_item = visible[visible.length - 1];
		this.$elem.find('.owl-item').removeClass('first-item');
		this.$elem.find('.owl-item').removeClass('last-item');
		this.$elem.find('.owl-item').eq(first_item).addClass('first-item');
		this.$elem.find('.owl-item').eq(last_item).addClass('last-item');
	}
	function slick_animated() {
		$('.banner-slick .item-slider').each(function () {
			var check = $(this).hasClass('slick-active');
			if (check == true) {
				$(this).find('.animated').each(function () {
					var anime = $(this).attr('data-animated');
					$(this).addClass(anime);
				});
			} else {
				$(this).find('.animated').each(function () {
					var anime = $(this).attr('data-animated');
					$(this).removeClass(anime);
				});
			}
		});
	}
	//Detail Gallery
	function detail_gallery() {
		if ($('.detail-gallery').length > 0) {
			$('.detail-gallery').each(function () {
				var data = $(this).find(".carousel").data();
				$(this).find(".carousel").jCarouselLite({
					btnNext: $(this).find(".gallery-control .next"),
					btnPrev: $(this).find(".gallery-control .prev"),
					speed: 800,
					visible: data.visible,
					vertical: data.vertical
				});
				//Elevate Zoom
				$(this).find('.mid img').elevateZoom({
					zoomType: "lens",
					lensShape: "square",
					lensSize: 100,
					borderSize: 1,
					containLensZoom: true
				});
				$(this).find(".carousel a").on('click', function (event) {
					event.preventDefault();
					$(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
					$(this).addClass('active');
					var z_url = $(this).find('img').attr("src");
					$(this).parents('.detail-gallery').find(".mid img").attr("src", z_url);
					$('.zoomLens').css('background-image', 'url("' + z_url + '")');
				});
			});
		}
	}
	//Menu Responsive
	function menu_responsive() {
		if ($(window).width() < 768) {
			if ($('.btn-toggle-mobile-menu').length > 0) {
				return false;
			} else {
				$('.main-nav li.menu-item-has-children,.main-nav li.has-mega-menu').append('<span class="btn-toggle-mobile-menu"></span>');
				$('.main-nav .btn-toggle-mobile-menu').on('click', function (event) {
					$(this).toggleClass('active');
					$(this).prev().stop(true, false).slideToggle();
				});
			}
		} else {
			$('.btn-toggle-mobile-menu').remove();
			$('.main-nav .sub-menu,.main-nav .mega-menu').slideDown();
		}
	}
	//Document Ready
	jQuery(document).ready(function () {
		//Menu Responsive
		menu_responsive();
		//Detail Gallery
		detail_gallery();
		//Offset Menu
		offset_menu();
		//Video Parallax
		if ($('.block-video-parallax').length > 0) {
			// video controls
			$('.video-button').on('click', function (event) {
				event.preventDefault();
				var video = $('.video-parallax').get(0);
				$(this).toggleClass('active');
				if (video.paused) {
					video.play();
				} else {
					video.pause();
				}
			});
		}
	});
	//Window Load
	jQuery(window).on('load', function () {
		//Pre Load
		$('body').removeClass('preload');
		//Owl Carousel
		if ($('.wrap-item').length > 0) {
			$('.wrap-item').each(function () {
				var data = $(this).data();
				$(this).owlCarousel({
					addClassActive: true,
					stopOnHover: true,
					lazyLoad: true,
					itemsCustom: data.itemscustom,
					autoPlay: data.autoplay,
					transitionStyle: data.transition,
					paginationNumbers: data.paginumber,
					beforeInit: background,
					afterAction: afterAction,
					navigationText: ['<i class="icon ion-ios-arrow-thin-left"></i>', '<i class="icon ion-ios-arrow-thin-right"></i>']
				});
			});
		}
		//Trigger Slider
		$('.control-slider .prev').on('click', function (e) {
			e.preventDefault();
			$('.control-slider .wrap-item').trigger('owl.prev');
		});
		$('.control-slider .next').on('click', function (e) {
			e.preventDefault();
			$('.control-slider .wrap-item').trigger('owl.next');
		});

		//Slick Slider
		if ($('.banner-slick .slick').length > 0) {
			$('.banner-slick .slick').each(function () {
				slick_animated();
				$(this).slick({
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 1,
					autoplay: true,
					prevArrow: '<span class="slick-prev"><i class="icon ion-android-arrow-back"></i></span>',
					nextArrow: '<span class="slick-next"><i class="icon ion-android-arrow-forward"></i></span>',
					responsive: [{
						breakpoint: 767,
						settings: {
							centerPadding: '0px'
						}
					}]
				});
				$('.slick').on('afterChange', function (event) {
					slick_animated();
				});
			});
		}
		//Bx Slider
		if ($('.bx-slider').length > 0) {
			$('.bx-slider').each(function () {
				$(this).find('.bxslider').bxSlider({
					prevText: '<i class="icon ion-android-arrow-back"></i>',
					nextText: '<i class="icon ion-android-arrow-forward"></i>',
					pagerCustom: $(this).find('.bx-pager')
				});
			});
		}
		//Time Countdown
		if ($('.time-countdown').length > 0) {
			$(".time-countdown").each(function () {
				var data = $(this).data();
				$(this).TimeCircles({
					fg_width: data.width,
					bg_width: 0,
					text_size: 0,
					circle_bg_color: data.bg,
					time: {
						Days: {
							show: data.day,
							text: data.text[0],
							color: data.color
						},
						Hours: {
							show: data.hou,
							text: data.text[1],
							color: data.color
						},
						Minutes: {
							show: data.min,
							text: data.text[2],
							color: data.color
						},
						Seconds: {
							show: data.sec,
							text: data.text[3],
							color: data.color
						}
					}
				});
			});
		}
		//Count Down Master
		if ($('.countdown-master').length > 0) {
			$('.countdown-master').each(function () {
				$(this).FlipClock(65100, {
					clockFace: 'HourlyCounter',
					countdown: true,
					autoStart: true
				});
			});
		}
		//List Item Masonry 
		if ($('.list-item-masonry').length > 0) {
			$('.list-item-masonry').masonry({
				itemSelector: '.item-masonry'
			});
		}
		//Percentage
		$('.percentage').each(function () {
			var data = $(this).data();
			// console.log(data);
			$(this).circularloader({
				backgroundColor: "#ffffff", //background colour of inner circle
				fontColor: "#000000", //font color of progress text
				fontSize: "40px", //font size of progress text
				radius: 90, //radius of circle
				progressBarBackground: "#e9e9e9", //background colour of circular progress Bar
				progressBarColor: data.color, //colour of circular progress bar
				progressBarWidth: 10, //progress bar width
				progressPercent: data.value, //progress percentage out of 100
				progressValue: 0, //diplay this value instead of percentage
				showText: false, //show progress text or not
				title: "" //show header title for the progress bar
			});
		});
	});
	//Window Resize
	jQuery(window).on('resize', function () {
		offset_menu();
		fixed_header();
		menu_responsive();
	});
	//Window Scroll
	jQuery(window).on('scroll', function () {
		//Scroll Top
		if ($(this).scrollTop() > $(this).height()) {
			$('.scroll-top').addClass('active');
		} else {
			$('.scroll-top').removeClass('active');
		}
		//Fixed Header
		fixed_header();
		//Parallax Slider
		if ($('.parallax-slider').length > 0) {
			var ot = $('.parallax-slider').offset().top;
			var sh = $('.parallax-slider').height();
			var st = $(window).scrollTop();
			var top = ($(window).scrollTop() - ot) * 0.5 + 'px';
			if (st > ot && st < ot + sh) {
				$('.parallax-slider .item-slider').css({
					'background-position': 'center ' + top
				});
			} else {
				$('.parallax-slider .item-slider').css({
					'background-position': 'center 0'
				});
			}
		}
		//Video Parallax
		if ($('.block-video-parallax').length > 0) {
			var ot = $('.block-video-parallax').offset().top;
			var sh = $('.block-video-parallax').height();
			var st = $(window).scrollTop();
			var top = ($(window).scrollTop() - ot) * 0.5 + 'px';
			if (st > ot && st < ot + sh) {
				$('.block-video-parallax .video-parallax').css({
					'margin-top': top
				});
			} else {
				$('.block-video-parallax .video-parallax').css({
					'margin-top': 0
				});
			}
		}
	});
})(jQuery); // End of use strict

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/libs/jquery-3.2.1.min.js");
__webpack_require__("./resources/assets/js/libs/bootstrap.min.js");
__webpack_require__("./resources/assets/js/libs/jquery.fancybox.min.js");
__webpack_require__("./resources/assets/js/libs/jquery-ui.min.js");
__webpack_require__("./resources/assets/js/libs/owl.carousel.min.js");
__webpack_require__("./resources/assets/js/libs/jquery.jcarousellite.min.js");
__webpack_require__("./resources/assets/js/libs/jquery.elevatezoom.min.js");
__webpack_require__("./resources/assets/js/libs/popup.min.js");
__webpack_require__("./resources/assets/js/libs/timecircles.min.js");
__webpack_require__("./resources/assets/js/libs/wow.min.js");
module.exports = __webpack_require__("./resources/assets/js/theme.js");


/***/ })

/******/ });
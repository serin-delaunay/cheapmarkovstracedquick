"use strict";
// Transcrypt'ed from Python, 2018-07-06 20:06:53
function cmtq_web () {
    var __symbols__ = ['__py3.6__', '__esv6__'];
    var __all__ = {};
    var __world__ = __all__;
    var __nest__ = function (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (var attrib in value) {
            current [attrib] = value [attrib];
        }
    };
    __all__.__nest__ = __nest__;
    var __init__ = function (module) {
        if (!module.__inited__) {
            module.__all__.__init__ (module.__all__);
            module.__inited__ = true;
        }
        return module.__all__;
    };
    __all__.__init__ = __init__;
    var __proxy__ = false;
    var __get__ = function (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }
    __all__.__get__ = __get__;
    var __getcm__ = function (self, func, quotedFuncName) {
        if (self.hasOwnProperty ('__class__')) {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self.__class__] .concat (args));
            };
        }
        else {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
    }
    __all__.__getcm__ = __getcm__;
    var __getsm__ = function (self, func, quotedFuncName) {
        return func;
    }
    __all__.__getsm__ = __getsm__;
    var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
                for (let symbol of Object.getOwnPropertySymbols (base)) {
                    let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                    Object.defineProperty (cls, symbol, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (attribs)) {
                let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    __all__.py_metatype = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            if ('__getattr__' in this || '__setattr__' in this) {
                instance = new Proxy (instance, {
                    get: function (target, name) {
                        let result = target [name];
                        if (result == undefined) {
                            return target.__getattr__ (name);
                        }
                        else {
                            return result;
                        }
                    },
                    set: function (target, name, value) {
                        try {
                            target.__setattr__ (name, value);
                        }
                        catch (exception) {
                            target [name] = value;
                        }
                        return true;
                    }
                })
            }
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    __all__.object = object;
    var __class__ = function (name, bases, attribs, meta) {
        if (meta === undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }
    __all__.__class__ = __class__;
    var __pragma__ = function () {};
    __all__.__pragma__ = __pragma__;
	__nest__ (
		__all__,
		'org.transcrypt.__base__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__base__';
					var __Envir__ = __class__ ('__Envir__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.interpreter_name = 'python';
							self.transpiler_name = 'transcrypt';
							self.transpiler_version = '3.6.101';
							self.target_subdir = '__javascript__';
						});}
					});
					var __envir__ = __Envir__ ();
					__pragma__ ('<all>')
						__all__.__Envir__ = __Envir__;
						__all__.__envir__ = __envir__;
						__all__.__name__ = __name__;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'org.transcrypt.__standard__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__standard__';
					var Exception = __class__ ('Exception', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							var kwargs = dict ();
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
										}
									}
									delete kwargs.__kwargtrans__;
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.__args__ = args;
							try {
								self.stack = kwargs.error.stack;
							}
							catch (__except0__) {
								self.stack = 'No stack trace available';
							}
						});},
						get __repr__ () {return __get__ (this, function (self) {
							if (len (self.__args__)) {
								return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
							}
							else {
								return '{}()'.format (self.__class__.__name__);
							}
						});},
						get __str__ () {return __get__ (this, function (self) {
							if (len (self.__args__) > 1) {
								return str (tuple (self.__args__));
							}
							else if (len (self.__args__)) {
								return str (self.__args__ [0]);
							}
							else {
								return '';
							}
						});}
					});
					var IterableError = __class__ ('IterableError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
						});}
					});
					var StopIteration = __class__ ('StopIteration', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
						});}
					});
					var ValueError = __class__ ('ValueError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var KeyError = __class__ ('KeyError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AssertionError = __class__ ('AssertionError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							if (message) {
								Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
							}
							else {
								Exception.__init__ (self, __kwargtrans__ ({error: error}));
							}
						});}
					});
					var NotImplementedError = __class__ ('NotImplementedError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var IndexError = __class__ ('IndexError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AttributeError = __class__ ('AttributeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var py_TypeError = __class__ ('py_TypeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var Warning = __class__ ('Warning', [Exception], {
						__module__: __name__,
					});
					var UserWarning = __class__ ('UserWarning', [Warning], {
						__module__: __name__,
					});
					var DeprecationWarning = __class__ ('DeprecationWarning', [Warning], {
						__module__: __name__,
					});
					var RuntimeWarning = __class__ ('RuntimeWarning', [Warning], {
						__module__: __name__,
					});
					var __sort__ = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (key) {
							iterable.sort ((function __lambda__ (a, b) {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
											switch (__attrib0__) {
												case 'a': var a = __allkwargs0__ [__attrib0__]; break;
												case 'b': var b = __allkwargs0__ [__attrib0__]; break;
											}
										}
									}
								}
								else {
								}
								return (key (a) > key (b) ? 1 : -(1));
							}));
						}
						else {
							iterable.sort ();
						}
						if (reverse) {
							iterable.reverse ();
						}
					};
					var sorted = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (py_typeof (iterable) == dict) {
							var result = copy (iterable.py_keys ());
						}
						else {
							var result = copy (iterable);
						}
						__sort__ (result, key, reverse);
						return result;
					};
					var map = function (func, iterable) {
						return (function () {
							var __accu0__ = [];
							for (var item of iterable) {
								__accu0__.append (func (item));
							}
							return __accu0__;
						}) ();
					};
					var filter = function (func, iterable) {
						if (func == null) {
							var func = bool;
						}
						return (function () {
							var __accu0__ = [];
							for (var item of iterable) {
								if (func (item)) {
									__accu0__.append (item);
								}
							}
							return __accu0__;
						}) ();
					};
					var __Terminal__ = __class__ ('__Terminal__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.buffer = '';
							try {
								self.element = document.getElementById ('__terminal__');
							}
							catch (__except0__) {
								self.element = null;
							}
							if (self.element) {
								self.element.style.overflowX = 'auto';
								self.element.style.boxSizing = 'border-box';
								self.element.style.padding = '5px';
								self.element.innerHTML = '_';
							}
						});},
						get print () {return __get__ (this, function (self) {
							var sep = ' ';
							var end = '\n';
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
											case 'end': var end = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
								var __accu0__ = [];
								for (var arg of args) {
									__accu0__.append (str (arg));
								}
								return __accu0__;
							}) ()), end).__getslice__ (-(4096), null, 1);
							if (self.element) {
								self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
								self.element.scrollTop = self.element.scrollHeight;
							}
							else {
								console.log (sep.join ((function () {
									var __accu0__ = [];
									for (var arg of args) {
										__accu0__.append (str (arg));
									}
									return __accu0__;
								}) ()));
							}
						});},
						get input () {return __get__ (this, function (self, question) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'question': var question = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
							var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(16), null, 1)));
							self.print (answer);
							return answer;
						});}
					});
					var __terminal__ = __Terminal__ ();
					__pragma__ ('<all>')
						__all__.AssertionError = AssertionError;
						__all__.AttributeError = AttributeError;
						__all__.DeprecationWarning = DeprecationWarning;
						__all__.Exception = Exception;
						__all__.IndexError = IndexError;
						__all__.IterableError = IterableError;
						__all__.KeyError = KeyError;
						__all__.NotImplementedError = NotImplementedError;
						__all__.RuntimeWarning = RuntimeWarning;
						__all__.StopIteration = StopIteration;
						__all__.py_TypeError = py_TypeError;
						__all__.UserWarning = UserWarning;
						__all__.ValueError = ValueError;
						__all__.Warning = Warning;
						__all__.__Terminal__ = __Terminal__;
						__all__.__name__ = __name__;
						__all__.__sort__ = __sort__;
						__all__.__terminal__ = __terminal__;
						__all__.filter = filter;
						__all__.map = map;
						__all__.sorted = sorted;
					__pragma__ ('</all>')
				}
			}
		}
	);
    var __call__ = function (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    };
    __all__.__call__ = __call__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
    var __envir__ = __all__.__envir__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
    var Exception = __all__.Exception;
    var IterableError = __all__.IterableError;
    var StopIteration = __all__.StopIteration;
    var ValueError = __all__.ValueError;
    var KeyError = __all__.KeyError;
    var AssertionError = __all__.AssertionError;
    var NotImplementedError = __all__.NotImplementedError;
    var IndexError = __all__.IndexError;
    var AttributeError = __all__.AttributeError;
    var py_TypeError = __all__.py_TypeError;
    var Warning = __all__.Warning;
    var UserWarning = __all__.UserWarning;
    var DeprecationWarning = __all__.DeprecationWarning;
    var RuntimeWarning = __all__.RuntimeWarning;
    var __sort__ = __all__.__sort__;
    var sorted = __all__.sorted;
    var map = __all__.map;
    var filter = __all__.filter;
    __all__.print = __all__.__terminal__.print;
    __all__.input = __all__.__terminal__.input;
    var __terminal__ = __all__.__terminal__;
    var print = __all__.print;
    var input = __all__.input;
    __envir__.executor_name = __envir__.transpiler_name;
    var __main__ = {__file__: ''};
    __all__.main = __main__;
    var __except__ = null;
    __all__.__except__ = __except__;
    var __kwargtrans__ = function (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    __all__.__kwargtrans__ = __kwargtrans__;
    var __globals__ = function (anObject) {
        if (isinstance (anObject, dict)) {
            return anObject;
        }
        else {
            return dict (anObject)
        }
    }
    __all__.__globals__ = __globals__
    var __super__ = function (aClass, methodName) {
        for (let base of aClass.__bases__) {
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    __all__.__super__ = __super__
    var property = function (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
    }
    __all__.property = property;
    var __setProperty__ = function (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    __all__.__setProperty__ = __setProperty__
    function assert (condition, message) {
        if (!condition) {
            throw AssertionError (message, new Error ());
        }
    }
    __all__.assert = assert;
    var __merge__ = function (object0, object1) {
        var result = {};
        for (var attrib in object0) {
            result [attrib] = object0 [attrib];
        }
        for (var attrib in object1) {
            result [attrib] = object1 [attrib];
        }
        return result;
    };
    __all__.__merge__ = __merge__;
    var dir = function (obj) {
        var aList = [];
        for (var aKey in obj) {
            aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
        }
        aList.sort ();
        return aList;
    };
    __all__.dir = dir;
    var setattr = function (obj, name, value) {
        obj [name] = value;
    };
    __all__.setattr = setattr;
    var getattr = function (obj, name) {
        return name in obj ? obj [name] : obj ['py_' + name];
    };
    __all__.getattr = getattr;
    var hasattr = function (obj, name) {
        try {
            return name in obj || 'py_' + name in obj;
        }
        catch (exception) {
            return false;
        }
    };
    __all__.hasattr = hasattr;
    var delattr = function (obj, name) {
        if (name in obj) {
            delete obj [name];
        }
        else {
            delete obj ['py_' + name];
        }
    };
    __all__.delattr = (delattr);
    var __in__ = function (element, container) {
        if (container === undefined || container === null) {
            return false;
        }
        if (container.__contains__ instanceof Function) {
            return container.__contains__ (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    };
    __all__.__in__ = __in__;
    var __specialattrib__ = function (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    };
    __all__.__specialattrib__ = __specialattrib__;
    var len = function (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    };
    __all__.len = len;
    function __i__ (any) {
        return py_typeof (any) == dict ? any.py_keys () : any;
    }
    function __k__ (keyed, key) {
        var result = keyed [key];
        if (typeof result == 'undefined') {
            if (keyed instanceof Array)
                if (key == +key && key >= 0 && keyed.length > key)
                    return result;
                else
                    throw IndexError (key, new Error());
            else
                throw KeyError (key, new Error());
        }
        return result;
    }
    function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    __all__.__t__ = __t__;
    var float = function (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (any == 'nan') {
            return NaN;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    };
    float.__name__ = 'float';
    float.__bases__ = [object];
    __all__.float = float;
    var int = function (any) {
        return float (any) | 0
    };
    int.__name__ = 'int';
    int.__bases__ = [object];
    __all__.int = int;
    var bool = function (any) {
        return !!__t__ (any);
    };
    bool.__name__ = 'bool';
    bool.__bases__ = [int];
    __all__.bool = bool;
    var py_typeof = function (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return '__class__' in anObject ? anObject.__class__ : object;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    };
    __all__.py_typeof = py_typeof;
    var issubclass = function (aClass, classinfo) {
        if (classinfo instanceof Array) {
            for (let aClass2 of classinfo) {
                if (issubclass (aClass, aClass2)) {
                    return true;
                }
            }
            return false;
        }
        try {
            var aClass2 = aClass;
            if (aClass2 == classinfo) {
                return true;
            }
            else {
                var bases = [].slice.call (aClass2.__bases__);
                while (bases.length) {
                    aClass2 = bases.shift ();
                    if (aClass2 == classinfo) {
                        return true;
                    }
                    if (aClass2.__bases__.length) {
                        bases = [].slice.call (aClass2.__bases__).concat (bases);
                    }
                }
                return false;
            }
        }
        catch (exception) {
            return aClass == classinfo || classinfo == object;
        }
    };
    __all__.issubclass = issubclass;
    var isinstance = function (anObject, classinfo) {
        try {
            return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
        }
        catch (exception) {
            return issubclass (py_typeof (anObject), classinfo);
        }
    };
    __all__.isinstance = isinstance;
    var callable = function (anObject) {
        return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
    };
    __all__.callable = callable;
    var repr = function (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
                            }
                        }
                        result += '}';
                        return result;
                    }
                    else {
                        return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                    }
                }
                catch (exception) {
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    };
    __all__.repr = repr;
    var chr = function (charCode) {
        return String.fromCharCode (charCode);
    };
    __all__.chr = chr;
    var ord = function (aChar) {
        return aChar.charCodeAt (0);
    };
    __all__.ord = ord;
    var max = function (nrOrSeq) {
        return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
    };
    __all__.max = max;
    var min = function (nrOrSeq) {
        return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
    };
    __all__.min = min;
    var abs = Math.abs;
    __all__.abs = abs;
    var round = function (number, ndigits) {
        if (ndigits) {
            var scale = Math.pow (10, ndigits);
            number *= scale;
        }
        var rounded = Math.round (number);
        if (rounded - number == 0.5 && rounded % 2) {
            rounded -= 1;
        }
        if (ndigits) {
            rounded /= scale;
        }
        return rounded;
    };
    __all__.round = round;
    function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function py_next (iterator) {
        try {
            var result = iterator.__next__ ();
        }
        catch (exception) {
            var result = iterator.next ();
            if (result.done) {
                throw StopIteration (new Error ());
            }
            else {
                return result.value;
            }
        }
        if (result == undefined) {
            throw StopIteration (new Error ());
        }
        else {
            return result;
        }
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function () {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    var py_reversed = function (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    };
    __all__.py_reversed = py_reversed;
    var zip = function () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    };
    __all__.zip = zip;
    function range (start, stop, step) {
        if (stop == undefined) {
            stop = start;
            start = 0;
        }
        if (step == undefined) {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    };
    __all__.range = range;
    function any (iterable) {
        for (let item of iterable) {
            if (bool (item)) {
                return true;
            }
        }
        return false;
    }
    function all (iterable) {
        for (let item of iterable) {
            if (! bool (item)) {
                return false;
            }
        }
        return true;
    }
    function sum (iterable) {
        let result = 0;
        for (let item of iterable) {
            result += item;
        }
        return result;
    }
    __all__.any = any;
    __all__.all = all;
    __all__.sum = sum;
    function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    __all__.enumerate = enumerate;
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = anObject [attrib];
                }
            }
            return result;
        }
    }
    __all__.copy = copy;
    function deepcopy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = deepcopy (anObject [attrib]);
                }
            }
            return result;
        }
    }
    __all__.deepcopy = deepcopy;
    function list (iterable) {
        var instance = iterable ? Array.from (iterable) : [];
        return instance;
    }
    __all__.list = list;
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    list.__bases__ = [object];
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
    Array.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        else if (stop > this.length) {
            stop = this.length;
        }
        var result = list ([]);
        for (var index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
    Array.prototype.__setslice__ = function (start, stop, step, source) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            var sourceIndex = 0;
            for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (var index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
        }
        if (this.__class__ == tuple && this.length == 1) {
            result += ',';
        }
        result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
        return result;
    };
    Array.prototype.__str__ = Array.prototype.__repr__;
    Array.prototype.append = function (element) {
        this.push (element);
    };
    Array.prototype.py_clear = function () {
        this.length = 0;
    };
    Array.prototype.extend = function (aList) {
        this.push.apply (this, aList);
    };
    Array.prototype.insert = function (index, element) {
        this.splice (index, 0, element);
    };
    Array.prototype.remove = function (element) {
        var index = this.indexOf (element);
        if (index == -1) {
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        var result = this;
        for (var i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    __all__.tuple = tuple;
    tuple.__name__ = 'tuple';
    tuple.__bases__ = [object];
    function set (iterable) {
        var instance = [];
        if (iterable) {
            for (var index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    __all__.set = set;
    set.__name__ = 'set';
    set.__bases__ = [object];
    Array.prototype.__bindexOf__ = function (element) {
        element += '';
        var mindex = 0;
        var maxdex = this.length - 1;
        while (mindex <= maxdex) {
            var index = (mindex + maxdex) / 2 | 0;
            var middle = this [index] + '';
            if (middle < element) {
                mindex = index + 1;
            }
            else if (middle > element) {
                maxdex = index - 1;
            }
            else {
                return index;
            }
        }
        return -1;
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
            this.push (element);
        }
    };
    Array.prototype.discard = function (element) {
        var index = this.indexOf (element);
        if (index != -1) {
            this.splice (index, 1);
        }
    };
    Array.prototype.isdisjoint = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issuperset = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) == -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issubset = function (other) {
        return set (other.slice ()) .issuperset (this);
    };
    Array.prototype.union = function (other) {
        var result = set (this.slice () .sort ());
        for (var i = 0; i < other.length; i++) {
            if (result.__bindexOf__ (other [i]) == -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.intersection = function (other) {
        this.sort ();
        var result = set ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.difference = function (other) {
        var sother = set (other.slice () .sort ());
        var result = set ();
        for (var i = 0; i < this.length; i++) {
            if (sother.__bindexOf__ (this [i]) == -1) {
                result.push (this [i]);
            }
        }
        return result;
    };
    Array.prototype.symmetric_difference = function (other) {
        return this.union (other) .difference (this.intersection (other));
    };
    Array.prototype.py_update = function () {
        var updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (var i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
        if (this.length != other.length) {
            return false;
        }
        if (this.__class__ == set) {
            this.sort ();
            other.sort ();
        }
        for (var i = 0; i < this.length; i++) {
            if (this [i] != other [i]) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        return this.issubset (other);
    };
    Array.prototype.__ge__ = function (other) {
        return this.issuperset (other);
    };
    Array.prototype.__lt__ = function (other) {
        return this.issubset (other) && !this.issuperset (other);
    };
    Array.prototype.__gt__ = function (other) {
        return this.issuperset (other) && !this.issubset (other);
    };
    function bytearray (bytable, encoding) {
        if (bytable == undefined) {
            return new Uint8Array (0);
        }
        else {
            var aType = py_typeof (bytable);
            if (aType == int) {
                return new Uint8Array (bytable);
            }
            else if (aType == str) {
                var aBytes = new Uint8Array (len (bytable));
                for (var i = 0; i < len (bytable); i++) {
                    aBytes [i] = bytable.charCodeAt (i);
                }
                return aBytes;
            }
            else if (aType == list || aType == tuple) {
                return new Uint8Array (bytable);
            }
            else {
                throw py_TypeError;
            }
        }
    }
    var bytes = bytearray;
    __all__.bytearray = bytearray;
    __all__.bytes = bytearray;
    Uint8Array.prototype.__add__ = function (aBytes) {
        var result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        var result = new Uint8Array (scalar * this.length);
        for (var i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        if (typeof stringable === 'number')
            return stringable.toString();
        else {
            try {
                return stringable.__str__ ();
            }
            catch (exception) {
                try {
                    return repr (stringable);
                }
                catch (exception) {
                    return String (stringable);
                }
            }
        }
    };
    __all__.str = str;
    String.prototype.__class__ = str;
    str.__name__ = 'str';
    str.__bases__ = [object];
    String.prototype.__iter__ = function () {new __PyIterator__ (this);};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
    };
    String.prototype.__str__ = function () {
        return this;
    };
    String.prototype.capitalize = function () {
        return this.charAt (0).toUpperCase () + this.slice (1);
    };
    String.prototype.endswith = function (suffix) {
        if (suffix instanceof Array) {
            for (var i=0;i<suffix.length;i++) {
                if (this.slice (-suffix[i].length) == suffix[i])
                    return true;
            }
        } else
            return suffix == '' || this.slice (-suffix.length) == suffix;
        return false;
    };
    String.prototype.find  = function (sub, start) {
        return this.indexOf (sub, start);
    };
    String.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        var result = '';
        if (step == 1) {
            result = this.substring (start, stop);
        }
        else {
            for (var index = start; index < stop; index += step) {
                result = result.concat (this.charAt(index));
            }
        }
        return result;
    };
    __setProperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] == undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] != undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    }
    String.prototype.isdigit = function () {
        return this.isdecimal()
    }
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    }
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    }
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    }
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        strings = Array.from (strings);
        return strings.join (this);
    };
    String.prototype.lower = function () {
        return this.toLowerCase ();
    };
    String.prototype.py_replace = function (old, aNew, maxreplace) {
        return this.split (old, maxreplace) .join (aNew);
    };
    String.prototype.lstrip = function () {
        return this.replace (/^\s*/g, '');
    };
    String.prototype.rfind = function (sub, start) {
        return this.lastIndexOf (sub, start);
    };
    String.prototype.rsplit = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                var maxrsplit = result.length - maxsplit;
                return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
            }
            else {
                return result;
            }
        }
    };
    String.prototype.rstrip = function () {
        return this.replace (/\s*$/g, '');
    };
    String.prototype.py_split = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
            }
            else {
                return result;
            }
        }
    };
    String.prototype.startswith = function (prefix) {
        if (prefix instanceof Array) {
            for (var i=0;i<prefix.length;i++) {
                if (this.indexOf (prefix [i]) == 0)
                    return true;
            }
        } else
            return this.indexOf (prefix) == 0;
        return false;
    };
    String.prototype.strip = function () {
        return this.trim ();
    };
    String.prototype.upper = function () {
        return this.toUpperCase ();
    };
    String.prototype.__mul__ = function (scalar) {
        var result = '';
        for (var i = 0; i < scalar; i++) {
            result = result + this;
        }
        return result;
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __contains__ (element) {
        return this.hasOwnProperty (element);
    }
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                items.push ([attrib, this [attrib]]);
            }
        }
        return items;
    }
    function __del__ (key) {
        delete this [key];
    }
    function __clear__ () {
        for (var attrib in this) {
            delete this [attrib];
        }
    }
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result == undefined) {
            result = this ['py_' + aKey]
        }
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
    }
    function __setdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            return result;
        }
        var val = aDefault == undefined ? null : aDefault;
        this [aKey] = val;
        return val;
    }
    function __pop__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            delete this [aKey];
            return result;
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setProperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setProperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
        __setProperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setProperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setProperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setProperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setProperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setProperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setProperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setProperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setProperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setProperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setProperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setProperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    __all__.dict = dict;
    dict.__name__ = 'dict';
    dict.__bases__ = [object];
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setProperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    var __jsmod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.__jsmod__ = __jsmod__;
    var __mod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.mod = __mod__;
    var __pow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.pow = __pow__;
    var __neg__ = function (a) {
        if (typeof a == 'object' && '__neg__' in a) {
            return a.__neg__ ();
        }
        else {
            return -a;
        }
    };
    __all__.__neg__ = __neg__;
    var __matmul__ = function (a, b) {
        return a.__matmul__ (b);
    };
    __all__.__matmul__ = __matmul__;
    var __mul__ = function (a, b) {
        if (typeof a == 'object' && '__mul__' in a) {
            return a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return b.__rmul__ (a);
        }
        else {
            return a * b;
        }
    };
    __all__.__mul__ = __mul__;
    var __truediv__ = function (a, b) {
        if (typeof a == 'object' && '__truediv__' in a) {
            return a.__truediv__ (b);
        }
        else if (typeof b == 'object' && '__rtruediv__' in b) {
            return b.__rtruediv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return a / b;
        }
    };
    __all__.__truediv__ = __truediv__;
    var __floordiv__ = function (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    };
    __all__.__floordiv__ = __floordiv__;
    var __add__ = function (a, b) {
        if (typeof a == 'object' && '__add__' in a) {
            return a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return b.__radd__ (a);
        }
        else {
            return a + b;
        }
    };
    __all__.__add__ = __add__;
    var __sub__ = function (a, b) {
        if (typeof a == 'object' && '__sub__' in a) {
            return a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return b.__rsub__ (a);
        }
        else {
            return a - b;
        }
    };
    __all__.__sub__ = __sub__;
    var __lshift__ = function (a, b) {
        if (typeof a == 'object' && '__lshift__' in a) {
            return a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return b.__rlshift__ (a);
        }
        else {
            return a << b;
        }
    };
    __all__.__lshift__ = __lshift__;
    var __rshift__ = function (a, b) {
        if (typeof a == 'object' && '__rshift__' in a) {
            return a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return b.__rrshift__ (a);
        }
        else {
            return a >> b;
        }
    };
    __all__.__rshift__ = __rshift__;
    var __or__ = function (a, b) {
        if (typeof a == 'object' && '__or__' in a) {
            return a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return b.__ror__ (a);
        }
        else {
            return a | b;
        }
    };
    __all__.__or__ = __or__;
    var __xor__ = function (a, b) {
        if (typeof a == 'object' && '__xor__' in a) {
            return a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return b.__rxor__ (a);
        }
        else {
            return a ^ b;
        }
    };
    __all__.__xor__ = __xor__;
    var __and__ = function (a, b) {
        if (typeof a == 'object' && '__and__' in a) {
            return a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return b.__rand__ (a);
        }
        else {
            return a & b;
        }
    };
    __all__.__and__ = __and__;
    var __eq__ = function (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
        }
    };
    __all__.__eq__ = __eq__;
    var __ne__ = function (a, b) {
        if (typeof a == 'object' && '__ne__' in a) {
            return a.__ne__ (b);
        }
        else {
            return a != b
        }
    };
    __all__.__ne__ = __ne__;
    var __lt__ = function (a, b) {
        if (typeof a == 'object' && '__lt__' in a) {
            return a.__lt__ (b);
        }
        else {
            return a < b;
        }
    };
    __all__.__lt__ = __lt__;
    var __le__ = function (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    };
    __all__.__le__ = __le__;
    var __gt__ = function (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    };
    __all__.__gt__ = __gt__;
    var __ge__ = function (a, b) {
        if (typeof a == 'object' && '__ge__' in a) {
            return a.__ge__ (b);
        }
        else {
            return a >= b;
        }
    };
    __all__.__ge__ = __ge__;
    var __imatmul__ = function (a, b) {
        if ('__imatmul__' in a) {
            return a.__imatmul__ (b);
        }
        else {
            return a.__matmul__ (b);
        }
    };
    __all__.__imatmul__ = __imatmul__;
    var __ipow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__ipow__ (b);
        }
        else if (typeof a == 'object' && '__ipow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.ipow = __ipow__;
    var __ijsmod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__ismod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.ijsmod__ = __ijsmod__;
    var __imod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__imod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.imod = __imod__;
    var __imul__ = function (a, b) {
        if (typeof a == 'object' && '__imul__' in a) {
            return a.__imul__ (b);
        }
        else if (typeof a == 'object' && '__mul__' in a) {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return a = b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return a = b.__rmul__ (a);
        }
        else {
            return a *= b;
        }
    };
    __all__.__imul__ = __imul__;
    var __idiv__ = function (a, b) {
        if (typeof a == 'object' && '__idiv__' in a) {
            return a.__idiv__ (b);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a = a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return a = b.__rdiv__ (a);
        }
        else {
            return a /= b;
        }
    };
    __all__.__idiv__ = __idiv__;
    var __iadd__ = function (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    };
    __all__.__iadd__ = __iadd__;
    var __isub__ = function (a, b) {
        if (typeof a == 'object' && '__isub__' in a) {
            return a.__isub__ (b);
        }
        else if (typeof a == 'object' && '__sub__' in a) {
            return a = a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return a = b.__rsub__ (a);
        }
        else {
            return a -= b;
        }
    };
    __all__.__isub__ = __isub__;
    var __ilshift__ = function (a, b) {
        if (typeof a == 'object' && '__ilshift__' in a) {
            return a.__ilshift__ (b);
        }
        else if (typeof a == 'object' && '__lshift__' in a) {
            return a = a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return a = b.__rlshift__ (a);
        }
        else {
            return a <<= b;
        }
    };
    __all__.__ilshift__ = __ilshift__;
    var __irshift__ = function (a, b) {
        if (typeof a == 'object' && '__irshift__' in a) {
            return a.__irshift__ (b);
        }
        else if (typeof a == 'object' && '__rshift__' in a) {
            return a = a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return a = b.__rrshift__ (a);
        }
        else {
            return a >>= b;
        }
    };
    __all__.__irshift__ = __irshift__;
    var __ior__ = function (a, b) {
        if (typeof a == 'object' && '__ior__' in a) {
            return a.__ior__ (b);
        }
        else if (typeof a == 'object' && '__or__' in a) {
            return a = a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return a = b.__ror__ (a);
        }
        else {
            return a |= b;
        }
    };
    __all__.__ior__ = __ior__;
    var __ixor__ = function (a, b) {
        if (typeof a == 'object' && '__ixor__' in a) {
            return a.__ixor__ (b);
        }
        else if (typeof a == 'object' && '__xor__' in a) {
            return a = a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return a = b.__rxor__ (a);
        }
        else {
            return a ^= b;
        }
    };
    __all__.__ixor__ = __ixor__;
    var __iand__ = function (a, b) {
        if (typeof a == 'object' && '__iand__' in a) {
            return a.__iand__ (b);
        }
        else if (typeof a == 'object' && '__and__' in a) {
            return a = a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return a = b.__rand__ (a);
        }
        else {
            return a &= b;
        }
    };
    __all__.__iand__ = __iand__;
    var __getitem__ = function (container, key) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ (key);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            return container [container.length + key];
        }
        else {
            return container [key];
        }
    };
    __all__.__getitem__ = __getitem__;
    var __setitem__ = function (container, key, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ (key, value);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            container [container.length + key] = value;
        }
        else {
            container [key] = value;
        }
    };
    __all__.__setitem__ = __setitem__;
    var __getslice__ = function (container, lower, upper, step) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ ([lower, upper, step]);
        }
        else {
            return container.__getslice__ (lower, upper, step);
        }
    };
    __all__.__getslice__ = __getslice__;
    var __setslice__ = function (container, lower, upper, step, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ ([lower, upper, step], value);
        }
        else {
            container.__setslice__ (lower, upper, step, value);
        }
    };
    __all__.__setslice__ = __setslice__;
	__nest__ (
		__all__,
		'MarkovTracery', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var re = {};
					var __name__ = 'MarkovTracery';
					var it =  __init__ (__world__.itertools);
					__nest__ (re, '', __init__ (__world__.re));
					var Tokenisation = __class__ ('Tokenisation', [object], {
						__module__: __name__,
						Chars: __class__ ('Chars', [object], {
							__module__: __name__,
						}),
						Words: __class__ ('Words', [object], {
							__module__: __name__,
						})
					});
					var START = '   START   \n   TOKEN   ';
					var END = '   END   \n   TOKEN   ';
					var connector = '_';
					var char_symbols = dict ([[START, '_S_'], [END, '_E_'], ['#', '_H_'], ['[', '_L_'], [']', '_R_'], ['\\', '_B_'], ['"', '_Q_'], ['.', '_F_'], ['_', '_U_'], ['\r', '_CR_'], ['\n', '_N_'], ['\t', '_T_']]);
					var char_renderings = dict ([[START, ''], [END, ''], ['#', '\\#'], ['[', '\\['], [']', '\\]'], ['\\', '\\\\'], ['"', '\\"'], ['\n', '\n'], ['\t', '\t']]);
					var char_symbol = function (char) {
						if (__in__ (char, char_symbols)) {
							return char_symbols [char];
						}
						else {
							return char;
						}
					};
					var token_symbol = function (token) {
						if (__in__ (token, char_symbols)) {
							return char_symbols [token];
						}
						else {
							return ''.join ((function () {
								var __accu0__ = [];
								for (var char of list (token)) {
									__accu0__.append (char_symbol (char));
								}
								return py_iter (__accu0__);
							}) ());
						}
					};
					var char_rendering = function (char) {
						if (__in__ (char, char_renderings)) {
							return char_renderings [char];
						}
						else {
							return char;
						}
					};
					var token_rendering = function (token) {
						if (__in__ (token, char_renderings)) {
							return char_renderings [token];
						}
						else {
							return ''.join ((function () {
								var __accu0__ = [];
								for (var char of list (token)) {
									__accu0__.append (char_rendering (char));
								}
								return py_iter (__accu0__);
							}) ());
						}
					};
					var start_symbol = function (ngram_size) {
						return connector.join (it.repeat (char_symbols [START], ngram_size - 1));
					};
					var Production = __class__ ('Production', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, prefix, key) {
							if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
								var key = null;
							};
							self._prefix = prefix;
							self._data = dict ({});
							if (key !== null) {
								self.increment (key);
							}
						});},
						get increment () {return __get__ (this, function (self, key) {
							if (__in__ (key, self._data)) {
								self._data [key]++;
							}
							else {
								self._data [key] = 1;
							}
						});},
						get next_token () {return __get__ (this, function (self, production) {
							if (production == END) {
								return token_rendering (production);
							}
							else {
								return token_rendering (production) + '#{}{}#'.format (self._prefix, token_symbol (production));
							}
						});},
						get render_option () {return __get__ (this, function (self, option, frequency) {
							var r = self.next_token (option);
							return (function () {
								var __accu0__ = [];
								for (var _ = 0; _ < frequency; _++) {
									__accu0__.append (r);
								}
								return __accu0__;
							}) ();
						});},
						get render () {return __get__ (this, function (self) {
							if (len (self._data) == 1) {
								return self.next_token (list (self._data.py_keys ()) [0]);
							}
							var L = list (it.chain (...(function () {
								var __accu0__ = [];
								for (var [k, v] of self._data.py_items ()) {
									__accu0__.append (it.repeat (self.next_token (k), v));
								}
								return py_iter (__accu0__);
							}) ()));
							if (len (L) == 1) {
								return L [0];
							}
							return L;
						});}
					});
					var MarkovAnalyser = __class__ ('MarkovAnalyser', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, ngram_size, tokenisation, delimiters, include_delimiters) {
							if (typeof ngram_size == 'undefined' || (ngram_size != null && ngram_size .hasOwnProperty ("__kwargtrans__"))) {;
								var ngram_size = 4;
							};
							if (typeof tokenisation == 'undefined' || (tokenisation != null && tokenisation .hasOwnProperty ("__kwargtrans__"))) {;
								var tokenisation = Tokenisation.Chars;
							};
							if (typeof delimiters == 'undefined' || (delimiters != null && delimiters .hasOwnProperty ("__kwargtrans__"))) {;
								var delimiters = '\n';
							};
							if (typeof include_delimiters == 'undefined' || (include_delimiters != null && include_delimiters .hasOwnProperty ("__kwargtrans__"))) {;
								var include_delimiters = false;
							};
							self.wipe_data ();
							self.ngram_size = ngram_size;
							self.tokenisation = tokenisation;
							self.delimiters = delimiters;
							self.include_delimiters = include_delimiters;
						});},
						get wipe_data () {return __get__ (this, function (self) {
							self._data = dict ({});
						});},
						get ngram_code () {return __get__ (this, function (self, ngram) {
							return connector.join ((function () {
								var __accu0__ = [];
								for (var c of ngram) {
									__accu0__.append (token_symbol (c));
								}
								return py_iter (__accu0__);
							}) ());
						});},
						get increment_transition () {return __get__ (this, function (self, ngram, postfix) {
							var index_code = self.ngram_code (ngram);
							var prefix_code = self.ngram_code (ngram.__getslice__ (1, null, 1)) + connector;
							if (__in__ (index_code, self._data)) {
								self._data [index_code].increment (postfix);
							}
							else {
								self._data [index_code] = Production (prefix_code, postfix);
							}
						});},
						get split_source () {return __get__ (this, function (self, string, delimiters) {
							if (self.include_delimiters) {
								var pattern = '([^{0}]*[{0}]+)'.format (delimiters);
							}
							else {
								var pattern = '[{0}]+'.format (delimiters);
							}
							return (function () {
								var __accu0__ = [];
								for (var line of re.py_split (pattern, string)) {
									if (line != '') {
										__accu0__.append (line);
									}
								}
								return __accu0__;
							}) ();
						});},
						get parse_source () {return __get__ (this, function (self, string) {
							for (var line of self.split_source (string, self.delimiters)) {
								self.parse_line (line);
							}
						});},
						get ngram_list () {return __get__ (this, function (self, line) {
							return (function () {
								var __accu0__ = [];
								for (var i = 0; i < (len (line) - self.ngram_size) + 1; i++) {
									__accu0__.append (line.__getslice__ (i, i + self.ngram_size, 1));
								}
								return __accu0__;
							}) ();
						});},
						get split_line () {return __get__ (this, function (self, line) {
							if (self.tokenisation == Tokenisation.Chars) {
								return list (line);
							}
							else if (self.tokenisation == Tokenisation.Words) {
								return (function () {
									var __accu0__ = [];
									for (var t of re.py_split ('(\\W+)', line)) {
										if (t != '') {
											__accu0__.append (t);
										}
									}
									return __accu0__;
								}) ();
							}
							else {
								var __except0__ = NotImplemented;
								__except0__.__cause__ = null;
								throw __except0__;
							}
						});},
						get parse_line () {return __get__ (this, function (self, line) {
							var line_aug = (function () {
								var __accu0__ = [];
								for (var _ = 0; _ < self.ngram_size - 1; _++) {
									__accu0__.append (START);
								}
								return __accu0__;
							}) ();
							line_aug.extend (self.split_line (line));
							line_aug.append (END);
							for (var ngram of self.ngram_list (line_aug)) {
								self.increment_transition (tuple (ngram.__getslice__ (0, -(1), 1)), ngram.__getslice__ (-(1), null, 1) [0]);
							}
						});},
						get output_grammar () {return __get__ (this, function (self) {
							var g = (function () {
								var __accu0__ = [];
								for (var [k, v] of self._data.py_items ()) {
									__accu0__.append (list ([k, v.render ()]));
								}
								return dict (__accu0__);
							}) ();
							g ['origin'] = '#{}#'.format (start_symbol (self.ngram_size));
							return g;
						});}
					});
					__pragma__ ('<use>' +
						'itertools' +
						're' +
					'</use>')
					__pragma__ ('<all>')
						__all__.END = END;
						__all__.MarkovAnalyser = MarkovAnalyser;
						__all__.Production = Production;
						__all__.START = START;
						__all__.Tokenisation = Tokenisation;
						__all__.__name__ = __name__;
						__all__.char_rendering = char_rendering;
						__all__.char_renderings = char_renderings;
						__all__.char_symbol = char_symbol;
						__all__.char_symbols = char_symbols;
						__all__.connector = connector;
						__all__.start_symbol = start_symbol;
						__all__.token_rendering = token_rendering;
						__all__.token_symbol = token_symbol;
					__pragma__ ('</all>')
				}
			}
		}
	);
    __nest__ (
        __all__,
        'itertools', {
            __all__: {
                __inited__: false,
                __init__: function (__all__) {
                    var count = function* (start, step) {
                        if (start == undefined) {
                            start = 0;
                        }
                        if (step == undefined) {
                            step = 1;
                        }
                        while (true) {
                            yield start;
                            start += step;
                        }
                    }
                    var cycle = function* (iterable) {                      
                        let buffer = Array.from (iterable); // Can't reset, Chrome can't obtain iter from gener
                        while (true) {
                            for (let item of buffer) {
                                yield item;
                            }
                        }
                    }
                    var repeat = function* (item, n) {
                        if (typeof n == 'undefined') {
                            while (true) {
                                yield item;
                            }
                        }
                        else {
                            for (let index = 0; index < n; index++) {
                                yield item;
                            }
                        }
                    }
                    var accumulate = function* (iterable, func) {
                        let sum;
                        let first = true;
                        if (func) {
                            for (let item of iterable) {
                                if (first) {
                                    sum = item;
                                    first = false;
                                }
                                else {
                                    sum = func (sum, item);
                                }
                                yield sum;
                            }
                        }
                        else {
                            for (let item of iterable) {
                                if (first) {
                                    sum = item;
                                    first = false;
                                }
                                else {
                                    sum = sum + item;
                                }
                                yield sum;
                            }
                        }
                    }
                    var chain = function* () {
                        let args = [] .slice.apply (arguments);                         
                        for (let arg of args) {
                            for (let item of arg) {
                                yield item;
                            }
                        }
                    }
                    chain.from_iterable = function* (iterable) {                        
                        for (let item of iterable) {
                            for (let subItem of item) {
                                yield subItem;
                            }
                        }
                    }
                    var compress = function* (data, selectors) {
                        let dataIterator = data [Symbol.iterator] .call (data);
                        let selectorsIterator = selectors [Symbol.iterator] ();
                        while (true) {
                            let dataItem = dataIterator.next ();
                            let selectorsItem = selectorsIterator.next ();
                            if (dataItem.done || selectorsItem.done) {
                                break;
                            }
                            else {
                                if (selectorsItem.value) {
                                    yield dataItem.value;
                                }
                            }
                        }
                    }
                    var dropwhile = function* (pred, seq) {
                        let started = false;
                        for (let item of seq) {
                            if (started) {
                                yield item;
                            }
                            else if (!pred (item)) {
                                started = true;
                                yield item;
                            }
                        }
                    }
                    var filterfalse = function* (pred, seq) {
                        for (let item of seq) {
                            if (!pred (item)) {
                                yield item;
                            }
                        }
                    }
                    var groupby = function* (iterable, keyfunc) {
                        let anIterator = iterable [Symbol.iterator] ();
                        let item = anIterator.next ();
                        
                        if (item.done) {
                            return;
                        }
                        
                        let groupKey = keyfunc (item.value);
                        let more = true;
                        
                        function* group () {
                            while (true) {
                                yield (item.value);
                                item = anIterator.next ();
                                
                                if (item.done) {
                                    more = false;
                                    return;
                                }
                                
                                let key = keyfunc (item.value);
                                
                                if (key != groupKey) {
                                    groupKey = key;
                                    return;
                                }
                            }
                        }
                        
                        while (more) {
                            yield tuple ([groupKey, group ()]);
                        }
                    }
                    
                    var islice = function* () {
                        let start;  // Have to be defined at function level, or Closure compiler will loose them after a yield 
                        let stop;   //
                        let step;   //
                        
                        let args = [] .slice.apply (arguments);
                        let anIterator = args [0][Symbol.iterator] ();
                        if (args.length == 2) {
                            stop = args [1];
                            start = 0;
                            step = 1;
                        }
                        else {
                            start = args [1];
                            stop = args [2];
                            if (args.length == 4) {
                                step = args [3];
                            }
                            else {
                                step = 1;
                            }
                        }
                        for (let index = 0; index < start; index++) {
                            if (anIterator.next (). done) {
                                return;
                            }
                        }
                        for (let index = 0; index < stop - start; index++) {
                            let next = anIterator.next ();
                            if (next.done) {
                                return;
                            }
                            if (index % step == 0) {
                                yield next.value;
                            }
                        }
                    }
                    var starmap = function* (func, seq) {
                        let anIterator = seq [Symbol.iterator] ();
                        while (true) {
                            let next = anIterator.next ()
                            if (next.done) {
                                return;
                            }
                            else {
                                yield func (...next.value); 
                            }
                        }
                    }
                    var takewhile = function* (pred, seq) {
                        for (let item of seq) {
                            if (pred (item)) {
                                yield item;
                            }
                            else {
                                return;
                            }
                        }
                    }
                    var tee = function (iterable, n) {
                        if (n == undefined) {
                            n = 2;
                        }
                        let all = [];                               // Don't return iterator since destructuring assignment cannot yet deal with that
                        let one = list (iterable);
                        for (let i = 0; i < n; i++) {
                            all.append (one [Symbol.iterator] ());  // Iterator rather than list, exhaustable for semantic equivalence
                        }
                        return list (all);
                    }
                    
                    var product = function () {
                        let args = [] .slice.apply (arguments);
                        if (args.length && args [args.length - 1] .hasOwnProperty ('__kwargtrans__')) {
                            var repeat = args.pop () ['repeat']; 
                        }
                        else {
                            var repeat = 1;
                        }
                        
                        let oldMolecules = [tuple ([])];
                        for (let i = 0; i < repeat; i++) {
                            for (let arg of args) {
                                let newMolecules = [];
                                for (let oldMolecule of oldMolecules) {
                                    for (let atom of arg) {
                                        newMolecules.append (tuple (oldMolecule.concat (atom)));
                                    }
                                }
                                oldMolecules = newMolecules;
                            }
                        }
                        return list (oldMolecules); // Also works if args is emptpy
                    }
                    var permutations = function (iterable, r) {
                        if (r == undefined) {
                            try {
                                r = len (iterable);
                            }
                            catch (exception) {
                                r = len (list (iterable));
                            }
                        }
                        let aProduct = product (iterable, __kwargtrans__ ({repeat: r}));
                        let result = [];
                        for (let molecule of aProduct) {
                            if (len (set (molecule)) == r) {    // Weed out doubles
                                result.append (molecule);
                            }
                        }
                        return list (result);
                    }
                    var combinations = function (iterable, r) {
                        let tail = list (iterable);
                        function recurse (tail, molecule, rNext) {
                            for (let index = 0; index < len (tail) - rNext; index++) {
                                let newMolecule = molecule.concat (tail.slice (index, index + 1));

                                if (rNext) {
                                    recurse (tail.slice (index + 1), newMolecule, rNext - 1);
                                }
                                else {
                                    result.append (tuple (newMolecule));
                                }
                            }
                        }
                        let result = [];
                        recurse (tail, tail.slice (0, 0), r - 1);
                        return list (result);
                    }
                    var combinations_with_replacement = function (iterable, r) {
                        let tail = list (iterable);
                        function recurse (tail, molecule, rNext) {
                            for (let index = 0; index < len (tail); index++) {
                                let newMolecule = molecule.concat (tail.slice (index, index + 1));

                                if (rNext) {
                                    recurse (tail.slice (index), newMolecule, rNext - 1);
                                }
                                else {
                                    result.append (tuple (newMolecule));
                                }
                            }
                        }
                        let result = [];
                        recurse (tail, tail.slice (0, 0), r - 1);
                        return list (result);
                    }
                    //<all>
                    __all__.count = count;
                    __all__.cycle = cycle;
                    __all__.repeat = repeat;
                    __all__.accumulate = accumulate;
                    __all__.chain = chain;
                    __all__.compress = compress;
                    __all__.dropwhile = dropwhile;
                    __all__.filterfalse = filterfalse;
                    __all__.groupby = groupby;
                    __all__.islice = islice;
                    __all__.starmap = starmap;
                    __all__.takewhile = takewhile;
                    __all__.tee = tee;
                    __all__.product = product;
                    __all__.permutations = permutations;
                    __all__.combinations = combinations;
                    __all__.combinations_with_replacement = combinations_with_replacement;
                    //</all>
                }
            }
        }
    );

	__nest__ (
		__all__,
		're', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 're';
					var translate = __init__ (__world__.re.translate).translate;
					var T = 1 << 0;
					var TEMPLATE = T;
					var I = 1 << 1;
					var IGNORECASE = I;
					var L = 1 << 2;
					var LOCALE = L;
					var M = 1 << 3;
					var MULTILINE = M;
					var S = 1 << 4;
					var DOTALL = S;
					var U = 1 << 5;
					var UNICODE = U;
					var X = 1 << 6;
					var VERBOSE = X;
					var DEBUG = 1 << 7;
					var A = 1 << 8;
					var ASCII = A;
					var Y = 1 << 16;
					var STICKY = Y;
					var G = 1 << 17;
					var GLOBAL = G;
					var J = 1 << 19;
					var JSSTRICT = J;
					var error = __class__ ('error', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, msg, error, pattern, flags, pos) {
							if (typeof pattern == 'undefined' || (pattern != null && pattern .hasOwnProperty ("__kwargtrans__"))) {;
								var pattern = null;
							};
							if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
								var flags = 0;
							};
							if (typeof pos == 'undefined' || (pos != null && pos .hasOwnProperty ("__kwargtrans__"))) {;
								var pos = null;
							};
							Exception.__init__ (self, msg, __kwargtrans__ ({error: error}));
							self.pattern = pattern;
							self.flags = flags;
							self.pos = pos;
						});}
					});
					var ReIndexError = __class__ ('ReIndexError', [IndexError], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							IndexError.__init__ (self, 'no such group');
						});}
					});
					var Match = __class__ ('Match', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, mObj, string, pos, endpos, rObj, namedGroups) {
							if (typeof namedGroups == 'undefined' || (namedGroups != null && namedGroups .hasOwnProperty ("__kwargtrans__"))) {;
								var namedGroups = null;
							};
							for (var [index, match] of enumerate (mObj)) {
								mObj [index] = (mObj [index] == undefined ? null : mObj [index]);
							}
							self._obj = mObj;
							self._pos = pos;
							self._endpos = endpos;
							self._re = rObj;
							self._string = string;
							self._namedGroups = namedGroups;
							self._lastindex = self._lastMatchGroup ();
							if (self._namedGroups !== null) {
								self._lastgroup = self._namedGroups [self._lastindex];
							}
							else {
								self._lastgroup = null;
							}
						});},
						get _getPos () {return __get__ (this, function (self) {
							return self._pos;
						});},
						get _setPos () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getEndPos () {return __get__ (this, function (self) {
							return self._endpos;
						});},
						get _setEndPos () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getRe () {return __get__ (this, function (self) {
							return self._re;
						});},
						get _setRe () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getString () {return __get__ (this, function (self) {
							return self._string;
						});},
						get _setString () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getLastGroup () {return __get__ (this, function (self) {
							return self._lastgroup;
						});},
						get _setLastGroup () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getLastIndex () {return __get__ (this, function (self) {
							return self._lastindex;
						});},
						get _setLastIndex () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _lastMatchGroup () {return __get__ (this, function (self) {
							if (len (self._obj) > 1) {
								for (var i = len (self._obj) - 1; i > 0; i--) {
									if (self._obj [i] !== null) {
										return i;
									}
								}
								return null;
							}
							else {
								return null;
							}
						});},
						get expand () {return __get__ (this, function (self, template) {
							var __except0__ = NotImplementedError ();
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get group () {return __get__ (this, function (self) {
							var args = tuple ([].slice.apply (arguments).slice (1));
							var ret = list ([]);
							if (len (args) > 0) {
								for (var index of args) {
									if (py_typeof (index) === str) {
										if (self._namedGroups !== null) {
											if (!__in__ (index, self._namedGroups.py_keys ())) {
												var __except0__ = ReIndexError ();
												__except0__.__cause__ = null;
												throw __except0__;
											}
											ret.append (self._obj [self._namedGroups [index]]);
										}
										else {
											var __except0__ = NotImplementedError ('No NamedGroups Available');
											__except0__.__cause__ = null;
											throw __except0__;
										}
									}
									else {
										if (index >= len (self._obj)) {
											var __except0__ = ReIndexError ();
											__except0__.__cause__ = null;
											throw __except0__;
										}
										ret.append (self._obj [index]);
									}
								}
							}
							else {
								ret.append (self._obj [0]);
							}
							if (len (ret) == 1) {
								return ret [0];
							}
							else {
								return tuple (ret);
							}
						});},
						get groups () {return __get__ (this, function (self, py_default) {
							if (typeof py_default == 'undefined' || (py_default != null && py_default .hasOwnProperty ("__kwargtrans__"))) {;
								var py_default = null;
							};
							if (len (self._obj) > 1) {
								var ret = self._obj.__getslice__ (1, null, 1);
								return tuple ((function () {
									var __accu0__ = [];
									for (var x of ret) {
										__accu0__.append ((x !== null ? x : py_default));
									}
									return __accu0__;
								}) ());
							}
							else {
								return tuple ();
							}
						});},
						get groupdict () {return __get__ (this, function (self, py_default) {
							if (typeof py_default == 'undefined' || (py_default != null && py_default .hasOwnProperty ("__kwargtrans__"))) {;
								var py_default = null;
							};
							if (self._namedGroups !== null) {
								var ret = dict ({});
								for (var [gName, gId] of self._namedGroups.py_items ()) {
									var value = self._obj [gId];
									ret [gName] = (value !== null ? value : py_default);
								}
								return ret;
							}
							else {
								var __except0__ = NotImplementedError ('No NamedGroups Available');
								__except0__.__cause__ = null;
								throw __except0__;
							}
						});},
						get start () {return __get__ (this, function (self, group) {
							if (typeof group == 'undefined' || (group != null && group .hasOwnProperty ("__kwargtrans__"))) {;
								var group = 0;
							};
							var gId = 0;
							if (py_typeof (group) === str) {
								if (self._namedGroups !== null) {
									if (!__in__ (group, self._namedGroups.py_keys ())) {
										var __except0__ = ReIndexError ();
										__except0__.__cause__ = null;
										throw __except0__;
									}
									var gId = self._namedGroups [group];
								}
								else {
									var __except0__ = NotImplementedError ('No NamedGroups Available');
									__except0__.__cause__ = null;
									throw __except0__;
								}
							}
							else {
								var gId = group;
							}
							if (gId >= len (self._obj)) {
								var __except0__ = ReIndexError ();
								__except0__.__cause__ = null;
								throw __except0__;
							}
							if (gId == 0) {
								return self._obj.index;
							}
							else if (self._obj [gId] !== null) {
								var r = compile (escape (self._obj [gId]), self._re.flags);
								var m = r.search (self._obj [0]);
								if (m) {
									return self._obj.index + m.start ();
								}
								else {
									var __except0__ = Exception ('Failed to find capture group');
									__except0__.__cause__ = null;
									throw __except0__;
								}
							}
							else {
								return -(1);
							}
						});},
						get end () {return __get__ (this, function (self, group) {
							if (typeof group == 'undefined' || (group != null && group .hasOwnProperty ("__kwargtrans__"))) {;
								var group = 0;
							};
							var gId = 0;
							if (py_typeof (group) === str) {
								if (self._namedGroups !== null) {
									if (!__in__ (group, self._namedGroups.py_keys ())) {
										var __except0__ = ReIndexError ();
										__except0__.__cause__ = null;
										throw __except0__;
									}
									var gId = self._namedGroups [group];
								}
								else {
									var __except0__ = NotImplementedError ('No NamedGroups Available');
									__except0__.__cause__ = null;
									throw __except0__;
								}
							}
							else {
								var gId = group;
							}
							if (gId >= len (self._obj)) {
								var __except0__ = ReIndexError ();
								__except0__.__cause__ = null;
								throw __except0__;
							}
							if (gId == 0) {
								return self._obj.index + len (self._obj [0]);
							}
							else if (self._obj [gId] !== null) {
								var r = compile (escape (self._obj [gId]), self._re.flags);
								var m = r.search (self._obj [0]);
								if (m) {
									return self._obj.index + m.end ();
								}
								else {
									var __except0__ = Exception ('Failed to find capture group');
									__except0__.__cause__ = null;
									throw __except0__;
								}
							}
							else {
								return -(1);
							}
						});},
						get span () {return __get__ (this, function (self, group) {
							if (typeof group == 'undefined' || (group != null && group .hasOwnProperty ("__kwargtrans__"))) {;
								var group = 0;
							};
							return tuple ([self.start (group), self.end (group)]);
						});}
					});
					Object.defineProperty (Match, 'pos', property.call (Match, Match._getPos, Match._setPos));;
					Object.defineProperty (Match, 'endpos', property.call (Match, Match._getEndPos, Match._setEndPos));;
					Object.defineProperty (Match, 're', property.call (Match, Match._getRe, Match._setRe));;
					Object.defineProperty (Match, 'string', property.call (Match, Match._getString, Match._setString));;
					Object.defineProperty (Match, 'lastgroup', property.call (Match, Match._getLastGroup, Match._setLastGroup));;
					Object.defineProperty (Match, 'lastindex', property.call (Match, Match._getLastIndex, Match._setLastIndex));;
					var Regex = __class__ ('Regex', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, pattern, flags) {
							if (!((flags & ASCII) > 0)) {
								flags |= UNICODE;
							}
							self._flags = flags;
							var __left0__ = self._compileWrapper (pattern, flags);
							self._jsFlags = __left0__ [0];
							self._obj = __left0__ [1];
							self._jspattern = pattern;
							self._pypattern = pattern;
							var __left0__ = self._compileWrapper (pattern + '|', flags);
							var _ = __left0__ [0];
							var groupCounterRegex = __left0__ [1];
							self._groups = groupCounterRegex.exec ('').length - 1;
							self._groupindex = null;
						});},
						get _getPattern () {return __get__ (this, function (self) {
							var ret = self._pypattern.py_replace ('\\', '\\\\');
							return ret;
						});},
						get _setPattern () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getFlags () {return __get__ (this, function (self) {
							return self._flags;
						});},
						get _setFlags () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getGroups () {return __get__ (this, function (self) {
							return self._groups;
						});},
						get _setGroups () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _getGroupIndex () {return __get__ (this, function (self) {
							if (self._groupindex === null) {
								return dict ({});
							}
							else {
								return self._groupindex;
							}
						});},
						get _setGroupIndex () {return __get__ (this, function (self, val) {
							var __except0__ = AttributeError ('readonly attribute');
							__except0__.__cause__ = null;
							throw __except0__;
						});},
						get _compileWrapper () {return __get__ (this, function (self, pattern, flags) {
							if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
								var flags = 0;
							};
							var jsFlags = self._convertFlags (flags);
							var rObj = null;
							var errObj = null;
							
							                   try {
							                     rObj = new RegExp(pattern, jsFlags)
							                   } catch( err ) {
							                     errObj = err
							                   }
							                   
							if (errObj !== null) {
								var __except0__ = error (errObj.message, errObj, pattern, flags);
								__except0__.__cause__ = null;
								throw __except0__;
							}
							return tuple ([jsFlags, rObj]);
						});},
						get _convertFlags () {return __get__ (this, function (self, flags) {
							var bitmaps = list ([tuple ([DEBUG, '']), tuple ([IGNORECASE, 'i']), tuple ([MULTILINE, 'm']), tuple ([STICKY, 'y']), tuple ([GLOBAL, 'g']), tuple ([UNICODE, 'u'])]);
							var ret = ''.join ((function () {
								var __accu0__ = [];
								for (var x of bitmaps) {
									if ((x [0] & flags) > 0) {
										__accu0__.append (x [1]);
									}
								}
								return __accu0__;
							}) ());
							return ret;
						});},
						get _getTargetStr () {return __get__ (this, function (self, string, pos, endpos) {
							var endPtr = len (string);
							if (endpos !== null) {
								if (endpos < endPtr) {
									var endPtr = endpos;
								}
							}
							if (endPtr < 0) {
								var endPtr = 0;
							}
							var ret = string.__getslice__ (pos, endPtr, 1);
							return ret;
						});},
						get _patternHasCaptures () {return __get__ (this, function (self) {
							return self._groups > 0;
						});},
						get search () {return __get__ (this, function (self, string, pos, endpos) {
							if (typeof pos == 'undefined' || (pos != null && pos .hasOwnProperty ("__kwargtrans__"))) {;
								var pos = 0;
							};
							if (typeof endpos == 'undefined' || (endpos != null && endpos .hasOwnProperty ("__kwargtrans__"))) {;
								var endpos = null;
							};
							if (endpos === null) {
								var endpos = len (string);
							}
							var rObj = self._obj;
							var m = rObj.exec (string);
							if (m) {
								if (m.index < pos || m.index > endpos) {
									return null;
								}
								else {
									return Match (m, string, pos, endpos, self, self._groupindex);
								}
							}
							else {
								return null;
							}
						});},
						get match () {return __get__ (this, function (self, string, pos, endpos) {
							if (typeof pos == 'undefined' || (pos != null && pos .hasOwnProperty ("__kwargtrans__"))) {;
								var pos = 0;
							};
							if (typeof endpos == 'undefined' || (endpos != null && endpos .hasOwnProperty ("__kwargtrans__"))) {;
								var endpos = null;
							};
							var target = string;
							if (endpos !== null) {
								var target = target.__getslice__ (0, endpos, 1);
							}
							else {
								var endpos = len (string);
							}
							var rObj = self._obj;
							var m = rObj.exec (target);
							if (m) {
								if (m.index == pos) {
									return Match (m, string, pos, endpos, self, self._groupindex);
								}
								else {
									return null;
								}
							}
							else {
								return null;
							}
						});},
						get fullmatch () {return __get__ (this, function (self, string, pos, endpos) {
							if (typeof pos == 'undefined' || (pos != null && pos .hasOwnProperty ("__kwargtrans__"))) {;
								var pos = 0;
							};
							if (typeof endpos == 'undefined' || (endpos != null && endpos .hasOwnProperty ("__kwargtrans__"))) {;
								var endpos = null;
							};
							var target = string;
							var strEndPos = len (string);
							if (endpos !== null) {
								var target = target.__getslice__ (0, endpos, 1);
								var strEndPos = endpos;
							}
							var rObj = self._obj;
							var m = rObj.exec (target);
							if (m) {
								var obsEndPos = m.index + len (m [0]);
								if (m.index == pos && obsEndPos == strEndPos) {
									return Match (m, string, pos, strEndPos, self, self._groupindex);
								}
								else {
									return null;
								}
							}
							else {
								return null;
							}
						});},
						get py_split () {return __get__ (this, function (self, string, maxsplit) {
							if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit .hasOwnProperty ("__kwargtrans__"))) {;
								var maxsplit = 0;
							};
							if (maxsplit < 0) {
								return list ([string]);
							}
							var mObj = null;
							var rObj = self._obj;
							if (maxsplit == 0) {
								var mObj = string.py_split (rObj);
								return mObj;
							}
							else {
								var flags = self._flags;
								flags |= GLOBAL;
								var __left0__ = self._compileWrapper (self._jspattern, flags);
								var _ = __left0__ [0];
								var rObj = __left0__ [1];
								var ret = list ([]);
								var lastM = null;
								var cnt = 0;
								for (var i = 0; i < maxsplit; i++) {
									var m = rObj.exec (string);
									if (m) {
										cnt++;
										if (lastM !== null) {
											var start = lastM.index + len (lastM [0]);
											var head = string.__getslice__ (start, m.index, 1);
											ret.append (head);
											if (len (m) > 1) {
												ret.extend (m.__getslice__ (1, null, 1));
											}
										}
										else {
											var head = string.__getslice__ (0, m.index, 1);
											ret.append (head);
											if (len (m) > 1) {
												ret.extend (m.__getslice__ (1, null, 1));
											}
										}
										var lastM = m;
									}
									else {
										break;
									}
								}
								if (lastM !== null) {
									var endPos = lastM.index + len (lastM [0]);
									var end = string.__getslice__ (endPos, null, 1);
									ret.append (end);
								}
								return ret;
							}
						});},
						get _findAllMatches () {return __get__ (this, function (self, string, pos, endpos) {
							if (typeof pos == 'undefined' || (pos != null && pos .hasOwnProperty ("__kwargtrans__"))) {;
								var pos = 0;
							};
							if (typeof endpos == 'undefined' || (endpos != null && endpos .hasOwnProperty ("__kwargtrans__"))) {;
								var endpos = null;
							};
							var target = self._getTargetStr (string, pos, endpos);
							var flags = self._flags;
							flags |= GLOBAL;
							var __left0__ = self._compileWrapper (self._jspattern, flags);
							var _ = __left0__ [0];
							var rObj = __left0__ [1];
							var ret = list ([]);
							while (true) {
								var m = rObj.exec (target);
								if (m) {
									ret.append (m);
								}
								else {
									break;
								}
							}
							return ret;
						});},
						get findall () {return __get__ (this, function (self, string, pos, endpos) {
							if (typeof pos == 'undefined' || (pos != null && pos .hasOwnProperty ("__kwargtrans__"))) {;
								var pos = 0;
							};
							if (typeof endpos == 'undefined' || (endpos != null && endpos .hasOwnProperty ("__kwargtrans__"))) {;
								var endpos = null;
							};
							var mlist = self._findAllMatches (string, pos, endpos);
							var mSelect = function (m) {
								if (len (m) > 2) {
									return tuple (m.__getslice__ (1, null, 1));
								}
								else if (len (m) == 2) {
									return m [1];
								}
								else {
									return m [0];
								}
							};
							var ret = map (mSelect, mlist);
							return ret;
						});},
						get finditer () {return __get__ (this, function (self, string, pos, endpos) {
							if (typeof endpos == 'undefined' || (endpos != null && endpos .hasOwnProperty ("__kwargtrans__"))) {;
								var endpos = null;
							};
							var mlist = self._findAllMatches (string, pos, endpos);
							var ret = map ((function __lambda__ (m) {
								return Match (m, string, 0, len (string), self, self._groupindex);
							}), mlist);
							return py_iter (ret);
						});},
						get sub () {return __get__ (this, function (self, repl, string, count) {
							if (typeof count == 'undefined' || (count != null && count .hasOwnProperty ("__kwargtrans__"))) {;
								var count = 0;
							};
							var __left0__ = self.subn (repl, string, count);
							var ret = __left0__ [0];
							var _ = __left0__ [1];
							return ret;
						});},
						get subn () {return __get__ (this, function (self, repl, string, count) {
							if (typeof count == 'undefined' || (count != null && count .hasOwnProperty ("__kwargtrans__"))) {;
								var count = 0;
							};
							var flags = self._flags;
							flags |= GLOBAL;
							var __left0__ = self._compileWrapper (self._jspattern, flags);
							var _ = __left0__ [0];
							var rObj = __left0__ [1];
							var ret = '';
							var totalMatch = 0;
							var lastEnd = -(1);
							while (true) {
								if (count > 0) {
									if (totalMatch >= count) {
										if (lastEnd < 0) {
											return tuple ([ret, totalMatch]);
										}
										else {
											ret += string.__getslice__ (lastEnd, m.index, 1);
											return tuple ([ret, totalMatch]);
										}
									}
								}
								var m = rObj.exec (string);
								if (m) {
									if (lastEnd < 0) {
										ret += string.__getslice__ (0, m.index, 1);
									}
									else {
										ret += string.__getslice__ (lastEnd, m.index, 1);
									}
									if (callable (repl)) {
										var content = repl (Match (m, string, 0, len (string), self, self._groupindex));
										ret += content;
									}
									else {
										ret += repl;
									}
									totalMatch++;
									var lastEnd = m.index + len (m [0]);
								}
								else if (lastEnd < 0) {
									return tuple ([string, 0]);
								}
								else {
									ret += string.__getslice__ (lastEnd, null, 1);
									return tuple ([ret, totalMatch]);
								}
							}
						});}
					});
					Object.defineProperty (Regex, 'pattern', property.call (Regex, Regex._getPattern, Regex._setPattern));;
					Object.defineProperty (Regex, 'flags', property.call (Regex, Regex._getFlags, Regex._setFlags));;
					Object.defineProperty (Regex, 'groups', property.call (Regex, Regex._getGroups, Regex._setGroups));;
					Object.defineProperty (Regex, 'groupindex', property.call (Regex, Regex._getGroupIndex, Regex._setGroupIndex));;
					var PyRegExp = __class__ ('PyRegExp', [Regex], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, pyPattern, flags) {
							var __left0__ = translate (pyPattern);
							var jsTokens = __left0__ [0];
							var inlineFlags = __left0__ [1];
							var namedGroups = __left0__ [2];
							var nCapGroups = __left0__ [3];
							var n_splits = __left0__ [4];
							flags |= inlineFlags;
							var jsPattern = ''.join (jsTokens);
							Regex.__init__ (self, jsPattern, flags);
							self._pypattern = pyPattern;
							self._nsplits = n_splits;
							self._jsTokens = jsTokens;
							self._capgroups = nCapGroups;
							self._groupindex = namedGroups;
						});}
					});
					var compile = function (pattern, flags) {
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						if (flags & JSSTRICT) {
							var p = Regex (pattern, flags);
						}
						else {
							var p = PyRegExp (pattern, flags);
						}
						return p;
					};
					var search = function (pattern, string, flags) {
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.search (string);
					};
					var match = function (pattern, string, flags) {
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.match (string);
					};
					var fullmatch = function (pattern, string, flags) {
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.fullmatch (string);
					};
					var py_split = function (pattern, string, maxsplit, flags) {
						if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit .hasOwnProperty ("__kwargtrans__"))) {;
							var maxsplit = 0;
						};
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.py_split (string, maxsplit);
					};
					var findall = function (pattern, string, flags) {
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.findall (string);
					};
					var finditer = function (pattern, string, flags) {
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.finditer (string);
					};
					var sub = function (pattern, repl, string, count, flags) {
						if (typeof count == 'undefined' || (count != null && count .hasOwnProperty ("__kwargtrans__"))) {;
							var count = 0;
						};
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.sub (repl, string, count);
					};
					var subn = function (pattern, repl, string, count, flags) {
						if (typeof count == 'undefined' || (count != null && count .hasOwnProperty ("__kwargtrans__"))) {;
							var count = 0;
						};
						if (typeof flags == 'undefined' || (flags != null && flags .hasOwnProperty ("__kwargtrans__"))) {;
							var flags = 0;
						};
						var p = compile (pattern, flags);
						return p.subn (repl, string, count);
					};
					var escape = function (string) {
						var ret = null;
						var replfunc = function (m) {
							if (m [0] == '\\') {
								return '\\\\\\\\';
							}
							else {
								return '\\\\' + m [0];
							}
						};
						
						        var r = /[^A-Za-z\d]/g;
						        ret = string.replace(r, replfunc);
						        
						if (ret !== null) {
							return ret;
						}
						else {
							var __except0__ = Exception ('Failed to escape the passed string');
							__except0__.__cause__ = null;
							throw __except0__;
						}
					};
					var purge = function () {
						// pass;
					};
					__pragma__ ('<use>' +
						're.translate' +
					'</use>')
					__pragma__ ('<all>')
						__all__.A = A;
						__all__.ASCII = ASCII;
						__all__.DEBUG = DEBUG;
						__all__.DOTALL = DOTALL;
						__all__.G = G;
						__all__.GLOBAL = GLOBAL;
						__all__.I = I;
						__all__.IGNORECASE = IGNORECASE;
						__all__.J = J;
						__all__.JSSTRICT = JSSTRICT;
						__all__.L = L;
						__all__.LOCALE = LOCALE;
						__all__.M = M;
						__all__.MULTILINE = MULTILINE;
						__all__.Match = Match;
						__all__.PyRegExp = PyRegExp;
						__all__.ReIndexError = ReIndexError;
						__all__.Regex = Regex;
						__all__.S = S;
						__all__.STICKY = STICKY;
						__all__.T = T;
						__all__.TEMPLATE = TEMPLATE;
						__all__.U = U;
						__all__.UNICODE = UNICODE;
						__all__.VERBOSE = VERBOSE;
						__all__.X = X;
						__all__.Y = Y;
						__all__.__name__ = __name__;
						__all__.compile = compile;
						__all__.error = error;
						__all__.escape = escape;
						__all__.findall = findall;
						__all__.finditer = finditer;
						__all__.fullmatch = fullmatch;
						__all__.match = match;
						__all__.purge = purge;
						__all__.search = search;
						__all__.py_split = py_split;
						__all__.sub = sub;
						__all__.subn = subn;
						__all__.translate = translate;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		're.translate', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var re = {};
					var __name__ = 're.translate';
					var VERBOSE = false;
					var MAX_SHIFTREDUCE_LOOPS = 1000;
					var stringFlags = 'aiLmsux';
					var Group = __class__ ('Group', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, start, end, klass) {
							self.start = start;
							self.end = end;
							self.klass = klass;
						});},
						get __repr__ () {return __get__ (this, function (self) {
							return str (tuple ([self.start, self.end, self.klass]));
						});}
					});
					var generateGroupSpans = function (tokens) {
						var groupInfo = list ([]);
						var idx = 0;
						for (var token of tokens) {
							if (__t__ (token.py_name.startswith ('('))) {
								groupInfo.append (Group (idx, null, token.py_name));
							}
							else if (__t__ (token.py_name == ')')) {
								for (var group of py_reversed (groupInfo)) {
									if (__t__ (group.end === null)) {
										group.end = idx;
									}
								}
							}
							idx++;
						}
						return groupInfo;
					};
					var countCaptureGroups = function (tokens) {
						var groupInfo = generateGroupSpans (tokens);
						var count = 0;
						for (var token of tokens) {
							if (__t__ (token.py_name == '(')) {
								count++;
							}
						}
						return count;
					};
					var getCaptureGroup = function (groupInfo, namedGroups, groupRef) {
						try {
							var id = int (groupRef);
						}
						catch (__except0__) {
							var id = namedGroups [groupRef];
						}
						var search = 0;
						for (var group of groupInfo) {
							if (__t__ (group.klass == '(')) {
								search++;
								if (__t__ (search == id)) {
									return group;
								}
							}
						}
					};
					var splitIfElse = function (tokens, namedGroups) {
						var variants = list ([]);
						var groupInfo = generateGroupSpans (tokens);
						for (var group of groupInfo) {
							if (__t__ (group.klass == '(?<')) {
								var iff = tokens.__getslice__ (0, null, 1);
								var els = tokens.__getslice__ (0, null, 1);
								var conStart = group.start;
								var conEnd = group.end;
								var ref = tokens [conStart + 1].py_name;
								var captureGroup = getCaptureGroup (groupInfo, namedGroups, ref);
								var captureGroupModifier = tokens [captureGroup.end + 1];
								if (__t__ (__t__ (__in__ (captureGroupModifier.py_name, list (['?', '*']))) || captureGroupModifier.py_name.startswith ('{0,'))) {
									if (__t__ (captureGroupModifier.py_name == '?')) {
										iff [captureGroup.end + 1] = null;
									}
									else if (__t__ (captureGroupModifier.py_name == '*')) {
										iff [captureGroup.end + 1] = Token ('+');
									}
									else if (__t__ (captureGroupModifier.py_name.startswith ('{0,'))) {
										iff [captureGroup.end + 1].py_name.__setslice__ (0, 3, null, '{1,');
									}
									els [captureGroup.end + 1] = null;
									var hasElse = false;
									for (var idx = conStart; idx < conEnd; idx++) {
										if (__t__ (tokens [idx].py_name == '|')) {
											var hasElse = true;
											els.py_pop (conEnd);
											iff.__setslice__ (idx, conEnd + 1, null, list ([]));
											els.__setslice__ (conStart, idx + 1, null, list ([]));
											break;
										}
									}
									if (__t__ (!__t__ ((hasElse)))) {
										els.__setslice__ (conStart, conEnd + 1, null, list ([]));
										iff.py_pop (conEnd);
									}
									iff.__setslice__ (conStart, conStart + 3, null, list ([]));
									els.__setslice__ (captureGroup.start, captureGroup.end + 1, null, list ([Token ('('), Token (')')]));
									iff.remove (null);
									els.remove (null);
									variants.append (iff);
									variants.append (els);
								}
								else {
									var pastIff = false;
									for (var idx = conStart; idx < conEnd; idx++) {
										if (__t__ (iff [idx].py_name == '|')) {
											var iff = tokens.__getslice__ (0, idx, 1);
											iff.extend (tokens.__getslice__ (conEnd + 1, null, 1));
											break;
										}
									}
									iff.__setslice__ (conStart, conStart + 3, null, list ([]));
									variants.append (iff);
								}
								break;
							}
						}
						if (__t__ (!__t__ ((variants)))) {
							return list ([tokens]);
						}
						var allVariants = list ([]);
						for (var variant of variants) {
							allVariants.extend (splitIfElse (variant, namedGroups));
						}
						return allVariants;
					};
					var Token = __class__ ('Token', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, py_name, paras, pure) {
							if (typeof paras == 'undefined' || (paras != null && paras .hasOwnProperty ("__kwargtrans__"))) {;
								var paras = null;
							};
							if (typeof pure == 'undefined' || (pure != null && pure .hasOwnProperty ("__kwargtrans__"))) {;
								var pure = false;
							};
							if (__t__ (paras === null)) {
								var paras = list ([]);
							}
							self.py_name = py_name;
							self.paras = paras;
							self.pure = pure;
							self.isModeGroup = false;
						});},
						get __repr__ () {return __get__ (this, function (self) {
							return self.py_name;
						});},
						get resolve () {return __get__ (this, function (self) {
							var paras = '';
							for (var para of self.paras) {
								paras += str (para);
							}
							return self.py_name + paras;
						});}
					});
					var shift = function (stack, queue) {
						var done = !__t__ ((bool (queue)));
						if (__t__ (!__t__ ((done)))) {
							stack.append (Token (queue [0], list ([]), true));
							var queue = queue.__getslice__ (1, null, 1);
						}
						return tuple ([stack, queue, done]);
					};
					var shiftReduce = function (stack, queue, namedGroups, flags) {
						var done = false;
						var high = len (stack) - 1;
						if (__t__ (len (stack) < 2)) {
							var __left0__ = shift (stack, queue);
							var stack = __left0__ [0];
							var queue = __left0__ [1];
							var done = __left0__ [2];
							return tuple ([stack, queue, flags, done]);
						}
						var s0 = (__t__ (len (stack) > 0) ? stack [high] : Token (''));
						var s1 = (__t__ (len (stack) > 1) ? stack [high - 1] : Token (''));
						if (__t__ (VERBOSE)) {
							for (var token of stack) {
								console.log (token.resolve (), '\t', __kwargtrans__ ({end: ''}));
							}
							console.log ('');
						}
						if (__t__ (s1.py_name == '\\')) {
							if (__t__ (s0.py_name == 'A')) {
								stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('^')]));
							}
							else if (__t__ (s0.py_name == 'a')) {
								stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('\\07')]));
							}
							else if (__t__ (s0.py_name == 'Z')) {
								stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('$')]));
							}
							else {
								stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('\\' + s0.py_name)]));
							}
						}
						else if (__t__ (__t__ (s0.py_name == '$') && s0.pure)) {
							stack.py_pop ();
							stack.extend (list ([Token ('(?='), Token ('\\n'), Token ('?'), Token ('$'), Token (')')]));
						}
						else if (__t__ (s1.py_name == '{')) {
							if (__t__ (__t__ (s0.py_name == ',') && len (s1.paras) == 0)) {
								s1.paras.append ('0');
								s1.paras.append (',');
							}
							else if (__t__ (s0.py_name == '}')) {
								s1.paras.append ('}');
								s1.py_name = s1.resolve ();
								s1.paras = list ([]);
							}
							else {
								s1.paras.append (s0.py_name);
							}
							var stack = stack.__getslice__ (0, -__t__ ((1)), 1);
						}
						else if (__t__ (__t__ (s1.py_name == '[') && s0.py_name == '^')) {
							stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('[^')]));
						}
						else if (__t__ (__t__ (s1.py_name == '(') && s0.py_name == '?')) {
							stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('(?')]));
						}
						else if (__t__ (__t__ (__in__ (s1.py_name, list (['*', '+', '?']))) && s0.py_name == '?')) {
							stack.__setslice__ (-__t__ ((2)), null, null, list ([Token (s1.py_name + '?')]));
						}
						else if (__t__ (__t__ (s1.isModeGroup) && s0.py_name == ')')) {
							var stack = stack.__getslice__ (0, -__t__ ((2)), 1);
						}
						else if (__t__ (s1.py_name == '(?')) {
							if (__t__ (__in__ (s0.py_name, stringFlags))) {
								if (__t__ (s0.py_name == 'i')) {
									flags |= re.IGNORECASE;
								}
								else if (__t__ (s0.py_name == 'L')) {
									flags |= re.LOCALE;
								}
								else if (__t__ (s0.py_name == 'm')) {
									flags |= re.MULTILINE;
								}
								else if (__t__ (s0.py_name == 's')) {
									flags |= re.DOTALL;
								}
								else if (__t__ (s0.py_name == 'u')) {
									flags |= re.UNICODE;
								}
								else if (__t__ (s0.py_name == 'x')) {
									flags |= re.VERBOSE;
								}
								else if (__t__ (s0.py_name == 'a')) {
									flags |= re.ASCII;
								}
								stack.py_pop ();
								s1.isModeGroup = true;
							}
							else {
								if (__t__ (s0.py_name == '(')) {
									s0.py_name = '<';
								}
								var newToken = Token ('(?' + s0.py_name);
								stack.__setslice__ (-__t__ ((2)), null, null, list ([newToken]));
							}
						}
						else if (__t__ (s1.py_name == '(?<')) {
							if (__t__ (s0.py_name == ')')) {
								stack.__setslice__ (-__t__ ((1)), null, null, list ([Token (''.join (s1.paras)), Token ('>')]));
								s1.paras = list ([]);
							}
							else {
								s1.paras.append (s0.py_name);
								stack.py_pop ();
							}
						}
						else if (__t__ (s1.py_name == '(?P')) {
							stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('(?P' + s0.py_name)]));
						}
						else if (__t__ (s1.py_name == '(?P<')) {
							if (__t__ (s0.py_name == '>')) {
								namedGroups [''.join (s1.paras)] = countCaptureGroups (stack) + 1;
								stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('(')]));
							}
							else {
								s1.paras.append (s0.py_name);
								stack.py_pop ();
							}
						}
						else if (__t__ (s1.py_name == '(?P=')) {
							if (__t__ (s0.py_name == ')')) {
								stack.__setslice__ (-__t__ ((2)), null, null, list ([Token ('\\' + str (namedGroups [s1.paras [0]]))]));
							}
							else if (__t__ (!__t__ ((s1.paras)))) {
								s1.paras.append (s0.py_name);
								stack.py_pop ();
							}
							else {
								s1.paras [0] += s0.py_name;
								stack.py_pop ();
							}
						}
						else if (__t__ (s1.py_name == '(?#')) {
							if (__t__ (s0.py_name == ')')) {
								var stack = stack.__getslice__ (0, -__t__ ((2)), 1);
							}
							else {
								var stack = stack.__getslice__ (0, -__t__ ((1)), 1);
							}
						}
						else {
							var __left0__ = shift (stack, queue);
							var stack = __left0__ [0];
							var queue = __left0__ [1];
							var done = __left0__ [2];
						}
						return tuple ([stack, queue, flags, done]);
					};
					var translate = function (rgx) {
						__nest__ (re, '', __init__ (__world__.re));
						var stack = list ([]);
						var queue = list (rgx);
						var flags = 0;
						var namedGroups = dict ();
						var nloop = 0;
						while (__t__ (true)) {
							nloop++;
							if (__t__ (nloop > MAX_SHIFTREDUCE_LOOPS)) {
								var __except0__ = Exception ();
								__except0__.__cause__ = null;
								throw __except0__;
							}
							var __left0__ = shiftReduce (stack, queue, namedGroups, flags);
							var stack = __left0__ [0];
							var queue = __left0__ [1];
							var flags = __left0__ [2];
							var done = __left0__ [3];
							if (__t__ (done)) {
								break;
							}
						}
						var variants = splitIfElse (stack, namedGroups);
						var n_splits = len (variants);
						var final = list ([]);
						for (var i = 0; i < len (variants); i++) {
							final.extend (variants [i]);
							if (__t__ (i < len (variants) - 1)) {
								final.append (Token ('|'));
							}
						}
						var stack = final;
						var groupInfo = generateGroupSpans (stack);
						var resolvedTokens = list ([]);
						for (var token of stack) {
							var stringed = token.resolve ();
							if (__t__ (__t__ (flags & re.DOTALL) && stringed == '.')) {
								var stringed = '[\\s\\S]';
							}
							resolvedTokens.append (stringed);
						}
						return tuple ([resolvedTokens, flags, namedGroups, countCaptureGroups (stack), n_splits]);
					};
					__pragma__ ('<use>' +
						're' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Group = Group;
						__all__.MAX_SHIFTREDUCE_LOOPS = MAX_SHIFTREDUCE_LOOPS;
						__all__.Token = Token;
						__all__.VERBOSE = VERBOSE;
						__all__.__name__ = __name__;
						__all__.countCaptureGroups = countCaptureGroups;
						__all__.generateGroupSpans = generateGroupSpans;
						__all__.getCaptureGroup = getCaptureGroup;
						__all__.shift = shift;
						__all__.shiftReduce = shiftReduce;
						__all__.splitIfElse = splitIfElse;
						__all__.stringFlags = stringFlags;
						__all__.translate = translate;
					__pragma__ ('</all>')
				}
			}
		}
	);
	(function () {
		var __name__ = '__main__';
		var MT =  __init__ (__world__.MarkovTracery);
		var cmtq = function () {
			var ngram_size = int (document.getElementById ('ngram_length_input').value);
			var tokenisation_str = document.querySelector ('input[name=tokenisation]:checked').value;
			if (!(tokenisation_str)) {
				alert ('Please select tokenisation type');
				return ;
			}
			var tokenisation = dict ({'chars': MT.Tokenisation.Chars, 'words': MT.Tokenisation.Words}) [tokenisation_str];
			var line_delimiters = document.getElementById ('line_delimiters_input').value;
			var include_delimiters = bool (document.getElementById ('include_delimiters_input').checked);
			var source_text = document.getElementById ('source_text_input').value;
			if (source_text == '') {
				alert ('Please provide some input text');
				return ;
			}
			generate_grammar (source_text, ngram_size, tokenisation, line_delimiters, include_delimiters);
		};
		var generate_grammar = function (text, ngram_size, tokenisation, line_delimiters, include_delimiters) {
			var ma = MT.MarkovAnalyser (ngram_size, tokenisation, line_delimiters, include_delimiters);
			ma.parse_source (text);
			document.getElementById ('tracery_grammar').value = JSON.stringify (ma.output_grammar ());
		};
		var load_source_files = function () {
			var source_files = document.getElementById ('source_files_input').files;
			var source_text_input = document.getElementById ('source_text_input');
			var append_text = function (text) {
				source_text_input.value += text;
			};
			for (var source_file of source_files) {
				var source_file_reader = new FileReader ();
				source_file_reader.onload = (function __lambda__ (event) {
					return append_text (event.target.result);
				});
				source_file_reader.readAsText (source_file);
			}
		};
		__pragma__ ('<use>' +
			'MarkovTracery' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.cmtq = cmtq;
			__all__.generate_grammar = generate_grammar;
			__all__.load_source_files = load_source_files;
		__pragma__ ('</all>')
	}) ();
    return __all__;
}
window ['cmtq_web'] = cmtq_web ();

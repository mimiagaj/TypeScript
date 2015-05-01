//// [superErrors.ts]
function foo() {
    // super in a non class context
    var x = super;
    var y = () => super;
    var z = () => () => () => super;
}

class User {
    name: string = "Bob";
    sayHello(): void {
        //console.log("Hello, " + this.name);
    }
}

class RegisteredUser extends User {
    name: string = "Frank";
    constructor() {
        super();

        // super call in an inner function in a constructor
        function inner() {
            super.sayHello();
        }

        // super call in a lambda in an inner function in a constructor 
        function inner2() {
            var x = () => super.sayHello();
        }

        // super call in a lambda in a function expression in a constructor 
        (function() { return () => super; })();
    }
    sayHello(): void {
        // super call in a method
        super.sayHello();

        // super call in a lambda in an inner function in a method
        function inner() {
            var x = () => super.sayHello();
        }

        // super call in a lambda in a function expression in a constructor 
        (function() { return () => super; })();
    }
    static staticFunction(): void {
        // super in static functions
        var s = super;
        var x = () => super;
        var y = () => () => () => super;
    }
}

//// [superErrors.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function foo() {
    // super in a non class context
    var x = _super.;
    var y = function () { return _super.; };
    var z = function () { return function () { return function () { return _super.; }; }; };
}
var User = (function () {
    function User() {
        this.name = "Bob";
    }
    User.prototype.sayHello = function () {
        //console.log("Hello, " + this.name);
    };
    return User;
})();
var RegisteredUser = (function (_super) {
    __extends(RegisteredUser, _super);
    function RegisteredUser() {
        _super.call(this);
        this.name = "Frank";
        // super call in an inner function in a constructor
        function inner() {
            _super.sayHello.call(this);
        }
        // super call in a lambda in an inner function in a constructor 
        function inner2() {
            var x = function () { return _super.sayHello.call(this); };
        }
        // super call in a lambda in a function expression in a constructor 
        (function () { return function () { return _super.; }; })();
    }
    RegisteredUser.prototype.sayHello = function () {
        // super call in a method
        _super.prototype.sayHello.call(this);
        // super call in a lambda in an inner function in a method
        function inner() {
            var x = function () { return _super.sayHello.call(this); };
        }
        // super call in a lambda in a function expression in a constructor 
        (function () { return function () { return _super.; }; })();
    };
    RegisteredUser.staticFunction = function () {
        var _this = this;
        // super in static functions
        var s = _super.;
        var x = function () { return _super.; };
        var y = function () { return function () { return function () { return _super.; }; }; };
    };
    return RegisteredUser;
})(User);

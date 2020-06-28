var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = ['a'];
// 元祖
var tuple = ['a', 1];
// 任意类型
var result = 1;
// void 
function fn() { }
;
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
Color.Blue;
function greeting(person) {
    return 'hello, ' + person.firstName + ' ' + person.lastName;
}
console.log(greeting({ firstName: "1", lastName: "2" }));
// 类
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("你好");
console.log(greeter.greet());
// 继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (dictance) {
        if (dictance === void 0) { dictance = 0; }
        console.log(this.name + "移动了" + dictance + 'm');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("汪汪汪");
    };
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("奔跑");
        _super.prototype.move.call(this, distance);
    };
    return Dog;
}(Animal));
var dog = new Dog("狗");
dog.bark();
dog.move();
var Modifier = /** @class */ (function () {
    function Modifier(options) {
        var name = options.name, age = options.age, sex = options.sex;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Modifier.prototype.distance = function (point) {
        var xDistance = point.x - Modifier.origin.x;
        var yDistance = point.y - Modifier.origin.y;
        return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    };
    Object.defineProperty(Modifier.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            console.log("修改类值");
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    Modifier.origin = {
        x: 0,
        y: 0,
    };
    return Modifier;
}());
var ModifierSon = /** @class */ (function (_super) {
    __extends(ModifierSon, _super);
    function ModifierSon(options) {
        var _this = _super.call(this, options) || this;
        console.log(_this.name);
        // console.log(this.age);
        console.log(_this.sex);
        return _this;
    }
    return ModifierSon;
}(Modifier));
var modifier = new ModifierSon({
    name: "jerry",
    age: 23,
    sex: "男"
});
modifier.fullName = "哈哈哈";
console.log(modifier.distance({ x: 3, y: 4 }));

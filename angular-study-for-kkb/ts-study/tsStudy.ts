let arr:Array<string> = ['a'];

// 元祖
const tuple:[string, number] = ['a', 1];

// 任意类型
const result: any = 1;

// void 
function fn():void{};


// 枚举
enum Color {Red,Yellow,Blue};
Color.Blue

// 接口 interface
interface Person {
    firstName: string;
    lastName: string;
}

function greeting(person: Person){
    return 'hello, ' + person.firstName + ' ' + person.lastName;
}

console.log(greeting({firstName: "1", lastName: "2"}));

// 类
class Greeter {
    greeting: string;
    constructor(msg: string){
        this.greeting = msg;
    }

    greet(){
        return "hello, " + this.greeting;
    }
}

const greeter = new Greeter("你好")
console.log(greeter.greet());

// 继承
class Animal {
    constructor(public name: string){

    }
    move(dictance: number = 0){
        console.log(this.name + "移动了" + dictance + 'm')
    }
}

class Dog extends Animal {
    constructor(public name: string){
        super(name);
    }
    bark(){
        console.log("汪汪汪");
    }

    move(distance: number = 5){
        console.log("奔跑")
        super.move(distance);
    }
}

const dog = new Dog("狗");

dog.bark();
dog.move();

// 修饰符 public 公共、private 私有、 protected 受保护的

/*
    public 成员默认是public， 表示成员可以自由访问
    private 表示成员只能在当前类内部使用
    protected 表示成员能够在当前类和子类中使用
    readonly: 只读，当属性只能读取，不能设置
    参数属性： 给构造函数参数加上修饰符，能够同时定义并初始化属性
    静态成员：通过static关键字修饰属性、方法，将来通过类名直接访问
    存取器： 当获取和设置属性时有额外逻辑时可以使用存储器（getter、setter）
*/

interface Options {
    name: string;
    age: number;
    sex: string;
}
class Modifier {
    public name: string;
    readonly age: number;
    protected sex: string;
    static origin = {
        x: 0,
        y: 0,
    }
    private _fullName: string;

    constructor(options: Options){
        const { name, age, sex } = options;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    distance(point: {x: number, y: number}){
        const xDistance = point.x - Modifier.origin.x;
        const yDistance = point.y - Modifier.origin.y;
        return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    }

    get fullName():string{
        return this._fullName
    }

    set fullName(value: string){
        console.log("修改类值")
        this._fullName = value;
    }
}

class ModifierSon extends Modifier {
    constructor(options: Options){
        super(options);
        console.log(this.name);
        // console.log(this.age);
        console.log(this.sex);
    }
}

const modifier = new ModifierSon({
    name: "jerry",
    age: 23,
    sex: "男"
});
modifier.fullName = "哈哈哈"
console.log(modifier.distance({x: 3, y: 4}));

// 函数
/*
    ts中函数的参数是必须的
*/

function buildName(first: string = "James", last?: string) {
    return first + last;
}

buildName("jerry"); 
buildName("tom", "jerry");


// 泛型

/*
    可以使用泛型generic来创建可重用组件，一个组件可以支持多种类型的数据
*/

// 不使用泛型
function noGeneric1(arg: number):number{
    return arg;
}

function noGeneric2(arg: any):any{
    return arg;
}

// 使用泛型,T称为类型变量，只表示类型
function useGeneric<T>(arg: T): T {
    return arg;
}
// 完整语法
useGeneric<string>("a");
// 利用类型推论省略
useGeneric(1);


interface LengthWise{
    length: number;
}
// T继承，extends
function useGeneric2<T extends LengthWise>(arg: T): T {
    return arg;
}
useGeneric2("1");
useGeneric2({
    length: 1,
    other: "sss"
});
// 泛型接口，多类型
interface Result<T, U>{
    success: boolean;
    data?: T;
    msg: U
}

interface User {
    id: number;
    name: string;
}

interface Msg {
    msg: string
}

const r: Result<User, Msg> = {
    success: true,
    data: {
        id: 1,
        name: "a"
    },
    msg: {
        msg: "aaa"
    }
}

// 泛型类
class Result1<T, U>{
    constructor(public success: boolean, public data: T, public msg: U){
    }
}

const r2: Result<User, Msg> = new Result1<User, Msg>(true, { id: 2, name: "b"}, {msg: "hhh"});
console.log(r2.success, r2.data);
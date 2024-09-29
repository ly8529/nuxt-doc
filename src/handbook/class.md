# class

## 基本的类

```typescript
class Point {}
```

公共属性, 默认 `public`

```typescript
class Point {
	x: number
	y: number
}

const pt = new Point()
pt.x = 0
pt.y = 0
```

**readonly**

字段可能以 `readonly` 修饰符为前缀。这可以防止对构造函数之外的字段进行赋值

```typescript
class Greeter {
	readonly name: string = 'world'

	constructor(otherName?: string) {
		if (otherName !== undefined) {
			this.name = otherName
		}
	}

	err() {
		this.name = 'not ok'
		// Cannot assign to 'name' because it is a read-only property.
	}
}
const g = new Greeter()
g.name = 'also not ok'
// Cannot assign to 'name' because it is a read-only property.
```

**super**

就像在 JavaScript 中一样，如果你有一个基类，你需要 super();在使用任何 this.成员之前调用你的构造函数体：

```typescript
class Base {
	k = 4
}

class Derived extends Base {
	constructor() {
		// Prints a wrong value in ES5; throws exception in ES6
		console.log(this.k)
		// 'super' must be called before accessing 'this' in the constructor of a derived class.
		super()
	}
}
```

**get/set**

```typescript
class Thing {
	_size = 0

	get size(): number {
		return this._size
	}

	set size(value: string | number | boolean) {
		let num = Number(value)

		// Don't allow NaN, Infinity, etc

		if (!Number.isFinite(num)) {
			this._size = 0
			return
		}

		this._size = num
	}
}
```

**protected**

`protected` 成员仅对声明它们的类的子类可见。

```typescript
class Base {
	protected m = 10
}
class Derived extends Base {
	// No modifier, so default is 'public'
	m = 15
}
const d = new Derived()
console.log(d.m) // OK
```

**private**

标记类的属性方法为类私有, 不允许子类访问成员:

```typescript
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);
Property 'x' is private and only accessible within class 'Base'.
```

**static**

类可能有`static`成员。这些成员与类的特定实例无关。它们可以通过类构造函数对象本身访问：

```typescript
class MyClass {
	static x = 0
	static printX() {
		console.log(MyClass.x)
	}
}
console.log(MyClass.x)
MyClass.printX()
```

**abstract**

`TypeScript` 中的类、方法和字段可能是抽象的。

一个抽象方法或抽象的领域是一个一直没有提供一个实现。这些成员必须存在于抽象类中，不能直接实例化。

```typescript
abstract class Base {
	abstract getName(): string

	printName() {
		console.log('Hello, ' + this.getName())
	}
}

const b = new Base()
// Cannot create an instance of an abstract class.
```

们不能实例化`Base`因为它是抽象的。相反，我们需要创建一个派生类并实现抽象成员：

```typescript
class Derived extends Base {
	getName() {
		return 'world'
	}
}

const d = new Derived()
d.printName()
```

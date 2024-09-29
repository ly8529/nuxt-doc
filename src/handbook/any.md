# 任意类型 any

任意值类型 any 用来表示允许赋值为任意类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```Typescript
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

但如果是 any 类型，则允许被赋值为任意类型。

```typescript
let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7
```

## 任意值的属性和方法

在任意值上访问任何属性都是允许的：

```Typescript
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```

也允许调用任何方法：

```typescript
let anyThing: any = 'Tom'
anyThing.setName('Jerry')
anyThing.setName('Jerry').sayHello()
anyThing.myName.setFirstName('Cat')
```

## 未声明类型的变量

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

```typescript
let something
something = 'seven'
something = 7
something.setName('Tom')
```

**注意: 大多数时候应避免使用 any, 否则将失去 typescript 的作用。**

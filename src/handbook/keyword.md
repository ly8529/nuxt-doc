# 关键字 & 操作符

## typeof

使用`typeof` 关键字可取出变量的类型, 进行类型注解

```typescript
type User = {
	name: string
	age: number
}

const user: User = {
	name: '张三',
	age: 12
}
```

对已有变量, 可使用 `typeof` 取出类型, 而不用重新书写声明

```typescript
const defaultUserInfo = {
	name: '',
	age: 0
}

type UserInfo = typeof defaultUserInfo

let userInfo: UserInfo | null = null

userInfo = {
	name: '张三',
	age: 122
}
```

## keyof

通常用于取对象的属性, 若用于其他类型,则返回原型上的属性方法等 或 `never`

```typescript
const user = {
	name: '张三',
	age: 12
}

type UserKeys = keyof typeof user // 'name' | 'age'
```

## extends

用于判断类型是否兼容

```typescript
type foo = string | number
type bar = string

type Result = bar extends bar ? true : false // true
```

## infer

用于类型解包, `infer`可以在`extends`的条件语句中推断待推断的类型

例子: 假如想在获取数组里的元素类型

```typescript
type Unpacked<T> = T extends (infer R)[] ? R : T

type Foo = string[]
type Bar = number[]

type FooItem = Unpacked<Foo> // string
type BarItem = Unpacked<Bar> // number
```

第二个例子: 有以下类型 `User`, 需要取出其属性`name`的类型

```typescript
type User = {
	name: string
	age: number
}
```

定义泛型 `ObjNameType`, 约束泛型为"对象", 使用 `extends` 表达式与 `infer` 结合, 取出需要推断的类型

```typescript
type ObjNameType<T extends Record<string | number | symbol, any>> = T extends T & { name: infer P } ? P : never

type UserNameType = ObjNameType<User> // string
```

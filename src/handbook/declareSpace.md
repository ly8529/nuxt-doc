# 声明空间

在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。下文将分别讨论这两个概念。

## 类型声明空间

类型声明空间包含用来当做类型注解的内容，例如下面的类型声明：

```typescript
class Foo {}
interface Bar {}
type Bas = {}
```

你可以将 Foo, Bar, Bas 作为类型注解使用，示例如下：

```typescript
let foo: Foo
let bar: Bar
let bas: Bas
```

注意，尽管你定义了 interface Bar，却并不能够把它作为一个变量来使用，因为它没有定义在变量声明空间中。

```typescript
interface Bar {}
const bar = Bar // Error: "cannot find name 'Bar'"
```

出现错误提示： cannot find name 'Bar' 的原因是名称 Bar 并未定义在变量声明空间。这将带领我们进入下一个主题 -- 变量声明空间。

## 变量声明空间

变量声明空间包含可用作变量的内容，在上文中 Class Foo 提供了一个类型 Foo 到类型声明空间，此外它同样提供了一个变量 Foo 到变量声明空间，如下所示：

```typescript
class Foo {}
const someVar = Foo
const someOtherVar = 123
```

这很棒，尤其是当你想把一个类来当做变量传递时。

与此相似，一些用 var 声明的变量，也只能在变量声明空间使用，不能用作类型注解。

```typescript
const foo = 123
let bar: foo // ERROR: "cannot find name 'foo'"
```

提示 ERROR: "cannot find name 'foo'" 原因是，名称 foo 没有定义在类型声明空间里。

但是可以通过 `typeof` 来做类型注解

```typescript
const foo = 123
let bar: typeof foo
```

## 本节内容来自:

[深入理解 Typescript](https://jkchao.github.io/typescript-book-chinese/project/declarationspaces.html#%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E%E7%A9%BA%E9%97%B4)

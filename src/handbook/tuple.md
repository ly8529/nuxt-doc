# 元组

即元组, 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

## 简单的例子

定义一对值分别为 string 和 number 的元组：

```typescript
const tom: [string, number] = ['str', 12]
```

但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。

```typescript
const tom: [string, number] = ['str', 12]
tupleArr[0] = 0 // ts-error
```

## 元组越界:

添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：

```typescript
let tom: [string, number]
tom = ['Tom', 25]
tom.push('male')
tom.push(true)
// Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

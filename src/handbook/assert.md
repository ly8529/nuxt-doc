# 类型断言

有 `as` 语法和泛型断言 两种

## 断言其他类型

```typescript
let a = 12
// ...
// as 断言
var aLength: number = ((a as unknown) as string).length

// 泛型
var aLength2: number = (<string>(<unknown>a)).length
```

## 常用的断言之 - dom

```typescript
const myCanvas = (document.getElementById('main_canvas') as unknown) as HTMLCanvasElement

const myCanvas = <HTMLCanvasElement>(<unknown>document.getElementById('main_canvas'))
```

`vue` 中常用的断言方式

```typescript
// vue2.x

;((this.$refs['xxx'] as unknown) as HTMLElement).remove()

// vue3.x

const refEl = ref(null)
;((refEl.value as unknown) as HTMLElement).remove()
```

## 非空断言

```typescript
let b: null | string = null
// ...
var bLenth = b!.length
let obj: { a?: { b: string } } | null = null

obj!.a!.b
```

```typescript
// vue 中的
```

## 可选链式操作符

```typescript

const userAge = this.user?.age
//  不存在则返回undefined

```

## 空值合并操作符

```typescript

const foo = (null || undefined ) ?? "foo"

```

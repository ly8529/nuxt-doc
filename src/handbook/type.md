# 类型别名 type

## 联合类型

```typescript
const a: boolean | number = 12

// 联合类型
type BoolOrNum = boolean | number

let b: BoolOrNum = 12

const foo = (param: string | number | null): void => {}

// 对象形式
type User = { id: number; name?: string }

type UserInfo = User | null

function getUserInfo(): UserInfo {
	const _userInfo: UserInfo = null
	return _userInfo
}
```

## 交叉类型

```typescript
type A = string | boolean

type B = string | number

type C = A & B // string
```

## 字符串字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

**例子**

```typescript
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
	// do something
}

handleEvent(document.getElementById('hello'), 'scroll') // 没问题
handleEvent(document.getElementById('world'), 'dblclick') // 报错，event 不能为 'dblclick'

// index.ts(7,47): error TS2345: Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.
```

上例中，我们使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种。

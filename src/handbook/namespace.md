# 命名空间

写法:

```typescript
namespace XXX {
	export const xx = 123
}
```

在 JavaScript 使用命名空间时， 这有一个常用的、方便的语法：

```typescript
const something = {}
;(function (something) {
	something.foo = 123
})(something || (something = {}))
```

`(something || (something = {})` 允许匿名函数 `function (something) {}` 向现有对象添加内容，或者创建一个新对象，然后向该对象添加内容。这意味着你可以拥有两个由某些边界拆成的块。

```typescript
;(function (something) {
	something.foo = 123
})(something || (something = {}))

console.log(something)
// { foo: 123 }
;(function (something) {
	something.bar = 456
})(something || (something = {}))

console.log(something) // { foo: 123, bar: 456 }
```

```typescript
namespace Utility {
	export function log(msg) {
		console.log(msg)
	}
	export function error(msg) {
		console.log(msg)
	}
}
```

`namespace` 自动合并

```typescript
namespace Utility {
	export function log(msg) {
		console.log(msg)
	}
}

namespace Utility {
	export function error(msg) {
		console.log(msg)
	}
}
```

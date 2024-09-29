# 对象类型

```typescript
const obj_: {
	age: number
	name: string
} = {
	name: 'zhangsan',
	age: 12
}

obj_.age = 13
```

## 只读属性

```typescript
const obj2_: {
	readonly age: number
	name: string
} = {
	age: 12,
	name: '张三'
}
// obj2_.age = 12  // ts-error
```

### 可选属性

```typescript
const obj3: {
	name: string
	age?: number
} = {
	name: 'str',
	age: 12
}

delete obj3.age
```

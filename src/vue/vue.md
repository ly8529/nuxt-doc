# vite + vue3 中使用 typescript

## 安装

`vite` 安装 vue3

```bash
npm init vite vue-demo
```

会出现选择, 选择 vue, ts

```bash
? Select a framework: › - Use arrow-keys. Return to submit.
    vanilla
❯   vue
    react
    preact
    lit-element
    svelte
```

```bash
Select a framework: › vue
? Select a variant: › - Use arrow-keys. Return to submit.
    vue
❯   vue-ts
```

接着, 安装依赖

```
cd vue-demo
npm i
```

运行项目

## 为项目增加全局属性 & 方法

安装依赖 `axios`

```bash
npm i axios -S
```

新建文件 `src/global/api.ts`

```typescript
import axios from 'axios'

const api = axios.create({
	timeout: 10000
})

api.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
		Author: 'xx'
	}
	return config
})

api.interceptors.response.use(config => config)

export default api
```

在 `src/main.ts` 中添加

```typescript
//...
import api from './global/api'

// vue3 添加全局属性, 相当于于vue2:  Vue.prototype.$api = api
app.config.globalProperties.$api = api

// 挂载window 上
window.$api = api
```

此时 api 已引入完毕, 但是在 `vue` 组件中使用时, 会报出`ts错误`

// App.vue

```Typescript
export default defineComponent({
	mounted() {
        window.$api.get('xxx')
		this.$api.post('xxx',{})
	},
})
```

以上报错, 是因为需要添加类型声明

新建 `src/global.d.ts`

```typescript
import api from './global/api'

declare global {
	interface Window {
		$api: typeof api
	}
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$api: typeof api
	}
}

export {}
```

修改 ts 配置, `tsconfig.json` 内增加以下代码, 使 ts 声明生效

```json
{
	"compilerOptions": {
		//...
		"typeRoots": ["./src/global.d.ts"]
	}
}
```

在 `App.vue` 中, 输入以下代码时, 将自动获得类型提示

```Typescript
export default defineComponent({
	mounted() {
		window.$a = 'string'
		this.$a = 'string'
	},
})
```

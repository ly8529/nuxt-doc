module.exports = {
	printWidth: 200, // 超过最大值换行
	singleQuote: true, // 使用单引号代替双引号
	semi: false, // 结尾不用分号
	useTabs: true, // 缩进使用tab, 不使用空格
	tabWidth: 4, // tab 样式宽度
	bracketSpacing: true, // 对象数组, 文字间加空格 {a: 1} => { a: 1 }
	arrowParens: 'avoid', // 如果可以, 自动去除括号 (x) => x 变为 x => x
	quoteProps: 'as-needed',     // 对象的 key 仅在必要时用引号
	proseWrap: 'preserve', // 使用默认的折行标准
	htmlWhitespaceSensitivity: 'ignore',  // 决定 html 要不要折行
	trailingComma: 'none', // 末尾不需要逗号
    endOfLine: 'lf' // 换行符使用 lf
}

## 说明
该项目下集成的例子及改造的内容如下：
* 缓存设置
* 动态指定页签标题
* 动态加载vue组件
* 当前页面跳转
* 多级菜单展示位置适配
* 代码高亮例子
* json-server例子

### 缓存设置

### 动态指定页签标题

修改了`tabs/index.vue`文件,使用方式是在路由跳转时，params中指定title属性
```js
this.$router.push({
        name: 'demo-page2',
        params: {
          title: '页面2-abc',
          id: 'abc'
        }
      })
```      

### 动态加载vue组件
使用了`http-vue-loader` https://github.com/FranckFreiburger/http-vue-loader
1. 在index.html中引入
```
<script src="https://unpkg.com/http-vue-loader"></script>
```
2. 可以直接使用`httpVueLoader`方法

在组件的components指定
```js
export default {
  name: 'demo-page1',
  components: {
    abc: httpVueLoader('http://localhost:3000/hello.vue')
  },
  ....
}
```
动态注册组件
```js
created () {
    console.log('created')
    this.$options.components['abc'] = httpVueLoader('http://localhost:3000/' + this.templateId + '.vue')
  },
```

### 当前页面跳转
参见document项目中相关说明
### 多级菜单展示位置适配
修改了element-ui的`node_modules\element-ui\lib\utils\popper.js`文件，修改后的文件位于`tools\element-ui\popper.js`
### 代码格式化及高亮例子
#### 代码格式化
格式化测试了两个例子，`prettier`和`js-beautify`，其中前者会对语法进行校验，不太适合一些场景，后者更适合规则高级模式下的规则格式化。
##### prettier
先引入内核及插件
```js
import prettier from 'prettier/standalone'
import parserflow from 'prettier/parser-flow'
import "babel-polyfill"
const plugins = [parserflow]
```
执行格式化
```js
this.code = prettier.format(this.code, { parser: 'flow', plugins })
```
##### js-beautify
1. 先引入
```js
import beautify from 'js-beautify'
```
2. 执行格式化
```js
this.code = beautify(this.code, { indent_size: 2, space_in_empty_paren: true })
```
#### 代码高亮
使用`highlight.js`实现代码高亮
1. 引入js及css
```js
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/solarized-light.css'
```
2. 在mouted中进行语言注册
```js
hljs.registerLanguage('javascript', javascript)
```
3. 需要高亮的代码需要指定`<pre><code></code></pre>`
```html
    <pre>
      <code ref="code">        
      </code>
    </pre>
```    
4. 执行高亮
```js
this.$refs.code.innerHTML = this.code
hljs.highlightBlock(this.$refs.code)
```

### json-server例子
例子demo1中使用了异步加载，需要启动模拟数据服务，使用的是`json-server`,相关数据在`json-server`目录下
```
$ json-server jobs.json

  \{^_^}/ hi!

  Loading jobs.json
  Done

  Resources
  http://localhost:3000/templates

  Home
  http://localhost:3000
```
json-server会将json文件中的json数据发布为标准的RESTful服务
同时，还可以自定义静态文件，默认放在`public`目录下，例如访问
```
http://localhost:3000/hello.vue
```
则实际访问的是`./public/hello.vue`

### 问题
* 对象不支持“startsWith”属性或方法

如果引入`prettier`，则会报该错误，该方法时es6规范中的，可以使用`babel-polyfill`
```
npm install --save-dev babel-polyfill
```
三种引入方式,前两种在需要的页面引入，第三种在webpack中配置
```js
require("babel-polyfill")

import "babel-polyfill"

module.exports = {

　　entry: ["babel-polyfill", "./app/js"]

}
```


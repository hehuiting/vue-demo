#test
该文件主要是参照官网学习模仿写的一些例子，目的在于熟悉Vue代码的编写和一些方法的使用以及运行效果的查看。
### 1. hello.html
该文件是初步学习Vue写的几个实例应用，主要涉及的是Vue的实例创建、文本插值、列表渲染、数据声明和方法的声明。
### 2.components.html
该文件是在学习组件基础时创建的一些实例。主要涉及Vue.js的相关内容包括：通过**v-for**实现变量循环，组件的复用，通过**prop** 进行数据传递，使用**v-on**父子组件的事件监听，利用 **v-model**进行数据双向绑定等内容。

### 3.reverse-computed.htm

该实例主要是学习Vue中**computed**的使用方法

### 4.v-for.html

该实例主要是学习**v-for**标签的使用,**v-for**主要用于变量的循环。

### 5.v-html.html

该例子主要是学习**v-html**指令的使用环境，若想正确展示数据中包含元素标签或者样式，则需使用**v-html**指令。

### 6.node-modules

该文件中两个js文件，主要学习的是在Vue框架下的模块的导入和导出。

#更新的文件：
### 7.data.html
该界面中的demo主要是为了学习data和methods的用法，data分为object和function两种类型。需要注意的是当组件被定义时，data必须为函数类型，因组件很有可能被用来创建多个实例，若data仍为一个纯粹的对象，则所有实例将共享同一个数据对象。通过提供data函数，每次创建一个新的实例后，返回初始数据的一个全局数据对象。
methods中的方法可直接通过VM实例来访问，或在指令表达式中使用。需要注意的是不能使用箭头函数来定义methods函数，否则this不会指向期望值。
### 8.directive.html
该练习主要是学习自定义指令通过Vue.direvtive的注册方法，包括全局注册和局部注册的方法，同时了解钩子函数的一些参数及用法。钩子函数的参数包括el、binding、vnode和oldVnode，其中只有el可以操作，其他三个都是只读，不能进行修改；oldVnode是指上一个虚拟节点，仅在update和componentUpdated钩子中使用。
### 9.$emit.html
该练习主要是学习$emit方法的使用，包括只配合一个事件名使用 $emit和配合额外的参数使用 $emit。
### 10.extend.html
该练习学习的是利用一个全局API：Vue.extend创建子组件并挂载到父元素上，需要注意的是Vue.extend（options）中的options参数是一个包含组件选项的对象，data选项是特例，在这必须为函数。
### 11.render.html
render 函数即渲染函数，它是个函数，它的参数也是个函数——即 createElement 。render函数跟template一样都是创建 html 模板的，但是有些场景中用 template 实现起来代码冗长繁琐而且有大量重复，这时候就可以用 render 函数。
### 12.slot.html
该练习主要是学习插槽（slot）的概念和使用方法。没有插槽的情况下，在组件标签内的一些内容不起作用，当在组件声明了slot元素之后，这些内容才能正常显示。可以分为一般插槽、具名插槽（给插槽命名）和作用域插槽（使用v-slot）。
### 13.vue-router.html和router-view.html
这两个练习主要是学习在vue组件中路由的构建方法，一般分为四个步骤：1）定义组件；2）定义路由；3）创建router实例；4）注册路由（创建和挂载根实例）
********

通过以上实例学习，归纳vue相关知识点如下：

class与style绑定
---

### #绑定HTML Class
>* 一般语法：`<div v-bind:class=" ">`  
>* 可简写为：`<div :class="">`

class后面可以是对象、数组,当在自定义组件上使用class属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。

### #绑定内联样式
>* 一般语法：`<div v-bind:style=" ">`
>* 可简写为：`<div :style="">`

style后面也可以跟对象和数组，当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀

**注：** _在 JavaScript 中，truthy（真值）指的是在布尔值上下文中，转换后的值为真的值。所有值都是真值，除非它们被定义为 假值（即除 false、0、""、null、undefined 和 NaN 以外皆为真值）_。

组件
---
* 组件定义分为**短横线分隔命名（kabab-case）: ** 在引用这个自定义元素时也必须使用同样的命名和**首字母大写命名（PascalCase）：**引用元素时可以采用两种命名法，但是，直接在DOM（即非字符串的模板）中使用时只有kebab-case是有效的。

* 组件是可**任意次数复用**的Vue实例，所以他们与new Vue接受相同的选项，例如data、computed、watch、methods以及生命周期钩子等。仅有的例外是像el这样根实例特有的选项。

* **一个组件的data选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝。

* **全局组件注册必须在根实例创建（new  Vue）之前。**为了能在模板中使用，这些组件必须**先注册**以便Vue能够识别。注册类型分为**全局注册**和**局部注册**。通常的**Vue.component**是全局注册。全局注册的组件可以用在其被注册之后的任何（通过new Vue）新创建的Vue根实例，也包括其组建树中的所有子组件的模板中。

* Prop是可以在组件上注册的一些自定义特性。当一个值传递给一个prop特性的时候，它就变成了那个组件实例的一个属性。一个组件默认可以拥有任意数量的prop，任何值都可以传递给任何prop。如果你想要将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 **v-bind** (取代` v-bind:prop-name`)。

* **每个组件必须只有一个根元素**。

事件
---
* 不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。

* 事件名不会被用作一个 JavaScript 变量名或属性名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 **v-on** 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent `将会变成 `v-on:myevent`——导致 **myEvent** 不可能被监听到。因此，我们推荐你始终使用 **kebab-case** 的事件名。
重要API
---
* <font color="red">data：</font>：data分为object和function两种类型。需要注意的是当组件被定义时，data必须为函数类型，因组件很有可能被用来创建多个实例，若data仍为一个纯粹的对象，则所有实例将共享同一个数据对象。通过提供data函数，每次创建一个新的实例后，返回初始数据的一个全局数据对象。为了方便，一般都使用函数类型的data。

* <font color="red">render渲染函数：</font>render渲染函数： render函数跟template一样都是创建 html 模板的，但是有些场景中用 template 实现起来代码冗长繁琐而且有大量重复，这时候就可以用 render 函数。render是个函数，返回值为VNode，即要渲染的虚拟节点；它的参数也是个函数即 createElement，该参数的返回值为VNode，也带有三个参数 ，分别为：
a. 一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 async 异步函数。必需参数。这是你要渲染的最外层标签。
b.一个包含模板相关属性的数据对象你可以在 template 中使用这些特性。可选参数。
c.子虚拟节点 (VNodes)，由 createElement()构建而成，也可以使用字符串来生成“文本虚拟节点”。可选参数。

* <font color="red">render插槽：</font>是组件的一块HTML模板，这块模板显示不显示、以及怎样显示由父组件来决定。没有插槽的情况下，在组件标签内的一些内容不起作用，当在组件声明了slot元素之后，这些内容才能正常显示。可以分为一般插槽、具名插槽（给插槽命名）和作用域插
 Vue Router
---
####1、路由跳转方式

路由跳转方式即导航方式可分为两种，意识声明式导航，二是编程式导航。具体如下：

1）声明式导航：`<router-link to=’  ’>  </router-link>`

使用 router-link 组件来导航，通过传入 ‘to’ 属性指定链接，这里的<router-link>默认会被渲染成一个a标签。


2）编程式导航：包括push、replace、go三种方式

（1）router.push(location)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想要导航到不同的 URL，则使用 router.push 方法。该方法会向 history 栈添加一个新的记录，故当用户点击浏览器后退按钮时，则回到之前的 URL。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于动态路由（带参数，参数以冒号开头）也是传递params，所以在this.$router.push()方法中path不能和params一起使用，否则params将无效，一般情况是将params结合name使用，通过name来指定页面。
当通过name获取页面并传递params时，在目标页面则通过this.$route.params获取参数；当页面通过path和query传递参数时，在目标页面则通过this.$route.query获取参数。

（2）router.replace(location)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

（3）router.go(n)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。当n为正数时，表示在浏览器记录中前进，等同于history.forward( )；当n为负数时，表示在浏览器记录中后退，等同于history.back( )。

####2、在Vue组件中使用路由的基本步骤

1）定义组件

    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

2）定义路由

      const routes = [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/User/:id', component: User ,props:true},
      {
        // 动态路由路径参数：以冒号开头
        path: '/helloworld/:id',
        component: Hello,
        // 可以不通过this.$router获取：id，直接当做组件的props使用
        props: true,
        name: 'Hello'
      }
    ]

3）创建router实例

      const router = new VueRouter({
      routes  //缩写，相当于routes:routes
    })
 
4）注册路由（创建和挂载根实例）

     // 要通过router配置参数注入路由，从而让整个应用都有路由功能
     new Vue({
        router
     }).$mount('#app')
 
在Vue组件中使用路由大致上可分为四个步骤，其中第二步骤也可以嵌入第三步骤，即在roouter实例化时定义routes。
#### 3、使用props将组件和路由解耦
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。为了解决这个问题，我们可以通过在定义组件和定义路由的时候添加props选项，实现组件和路由解耦。

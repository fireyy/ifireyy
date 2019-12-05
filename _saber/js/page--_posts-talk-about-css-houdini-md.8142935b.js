(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{27:function(t,s,a){"use strict";a.r(s);var e=a(0),r=function(t){var s,a,e,r=(e=void 0,(s={}).type=a="post",s.internal=e,s.contentType="markdown",s.slug="talk-about-css-houdini",s.content=e,s.createdAt=new Date(15753312e5),s.updatedAt=new Date(1575537499315),s.title="聊一聊 CSS Houdini",s.date="2019-12-03",s.layout=a,s.markdownHeadings=[{text:"Houdini API",slug:"houdini-api",level:3},{text:"CSS Parser API",slug:"css-parser-api",level:3},{text:"CSS Typed OM",slug:"css-typed-om",level:3}],s.excerpt="<p>Houdini（胡迪尼）是 W3C 的一个工作小组，由来自 Apple, Google, Microsoft, Mozilla, Opera 等公司的工程师所组成，该小组制定了一系列规范，使浏览器开放了 CSS 底层渲染相关的 API，供开发者更加方便灵活的扩展 CSS 功能，用来解决 CSS 长久以来的问题（兼容性）。</p>\n",s.permalink="/posts/talk-about-css-houdini.html",s.assets={},s.attributes=s,s),o=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=r}].concat(o);["layout","transition"].forEach((function(s){var a=t.options.PageComponent;a&&(t.options[s]=a[s]),void 0===t.options[s]&&(t.options[s]=r[s])})),r.slug&&(t.options.name="page-wrapper-"+r.slug.replace(/[^0-9a-z\-]/gi,"-"))},o=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("layout-manager",[a("p",[t._v("Houdini（胡迪尼）是 W3C 的一个工作小组，由来自 Apple, Google, Microsoft, Mozilla, Opera 等公司的工程师所组成，该小组制定了一系列规范，使浏览器开放了 CSS 底层渲染相关的 API，供开发者更加方便灵活的扩展 CSS 功能，用来解决 CSS 长久以来的问题（兼容性）。")]),t._v(" "),a("p",[t._v("虽然 CSS Houdini 目前来看还是一个"),a("saber-link",{attrs:{to:"https://ishoudinireadyyet.com"}},[t._v("让人尴尬")]),t._v("的"),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org"}},[t._v("规范草案")]),t._v("，但是总算 Chrome 已经率先开始支持，Safari 也在跟进中，很多先驱者们开始各种尝试，比如 "),a("saber-link",{attrs:{to:"https://googlechromelabs.github.io/houdini-samples/"}},[t._v("Houdini Samples")]),t._v(" 和 "),a("saber-link",{attrs:{to:"https://css-houdini.rocks"}},[t._v("CSS Houdini Experiments")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"houdini-api"}},[t._v("Houdini API")]),t._v(" "),a("p",[t._v("Houdini API 目前主要包含以下部分:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("API")]),t._v(" "),a("th",[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Parser")]),t._v(" "),a("td",[t._v("允许开发者自由扩展 CSS 词法分析器 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/css-parser-api/"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Typed OM")]),t._v(" "),a("td",[t._v("使用JS操作CSSOM属性 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/css-typed-om/"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Properties")]),t._v(" "),a("td",[t._v("在JS主进程中定义与类型化CSS属性 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/css-properties-values-api/"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Layout")]),t._v(" "),a("td",[t._v("通过类逻辑属性与worklet自由地布局元素 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/css-layout-api"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Painting")]),t._v(" "),a("td",[t._v("使用类canvas上下文在元素背景与mask中自由绘制 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/css-paint-api/"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Font Metrics")]),t._v(" "),a("td",[t._v("可以获得当前字体渲染文本所占的宽高 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/font-metrics-api/"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Box Tree")]),t._v(" "),a("td",[t._v("获得盒模型的基本信息 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/box-tree-api/"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Worklets")]),t._v(" "),a("td",[t._v("使用多线程执行渲染引擎的指定类型任务，提高整体性能 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/worklets/"}},[t._v("#")])],1)]),t._v(" "),a("tr",[a("td",[t._v("Animation")]),t._v(" "),a("td",[t._v("使用JS与worklet操作元素帧动画的效果与时间 "),a("saber-link",{attrs:{to:"https://drafts.css-houdini.org/css-animationworklet/"}},[t._v("#")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"css-parser-api"}},[t._v("CSS Parser API")]),t._v(" "),a("p",[t._v("目前还未被加入到官方草案中，截至目前为止计划可以做到：")]),t._v(" "),a("ul",[a("li",[t._v("以钩子的方式扩展 CSS, 对于不能识别的 CSS 进行修复（非必要，可能在未来被移除）")]),t._v(" "),a("li",[t._v("让 Custom properties 变得更加灵活，自己定规则，自己解析")]),t._v(" "),a("li",[t._v("很方便的创造自己的基于 CSS 通用语法的类 CSS 语言")]),t._v(" "),a("li",[t._v("使用类 CSS 的语法来扩展 HTML / SVG 属性，例如实现类似 "),a("code",{pre:!0},[t._v("<img sizes>")]),t._v(" 的方法："),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"html"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-html"}},[a("code",{pre:!0,attrs:{class:"language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sizes")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n        (max-width: 500px) 100vw,\n        (max-width: 1000px) 80vw,\n        (max-width: 1500px) 50vw,\n        2000px\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://placehold.it/500/abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])])])])])]),t._v(" "),a("h3",{attrs:{id:"css-typed-om"}},[t._v("CSS Typed OM")]),t._v(" "),a("p",[t._v("CSS Typed Object Model，我们知道 CSS OM 中处理的一切规则都是基于字符串的，而在 Typed OM 中，将字符串转换成 JavaScript 中的类型表达式，我们看一下这个例子，我们在使用 JS 处理 CSS 中的数学计算，先取到高度的字符串 100px，然后去掉 px 这个单位得到字符串 100，在 parseInt 然后加上 100 得到 200，最后在加上单位 px 然后设置回去。这是我们对 CSS 的操作，然后在浏览器解析的时候，还得再解析 100px 这个字符串，转换成数字。这个过程从字符串到数字，再到字符串，然后又转数字，可以看到这个过程简直白痴。然而改为解析 StylePropertyMap 之后，设置 "),a("code",{pre:!0},[t._v("height: calc(5px + 5%);")]),t._v(" 实际上产生了 "),a("code",{pre:!0},[t._v("LengthValue{px: 5, percent: 5}")]),t._v(", 简单明了。")])])}),[],!1,null,null,null);"function"==typeof r&&r(o);s.default=o.exports}}]);
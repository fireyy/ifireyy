---
title: 聊一聊 CSS Houdini
date: 2019-12-03
layout: post
slug: talk-about-css-houdini
---

Houdini（胡迪尼）是 W3C 的一个工作小组，由来自 Apple, Google, Microsoft, Mozilla, Opera 等公司的工程师所组成，该小组制定了一系列规范，使浏览器开放了 CSS 底层渲染相关的 API，供开发者更加方便灵活的扩展 CSS 功能，用来解决 CSS 长久以来的问题（兼容性）。

虽然 CSS Houdini 目前来看还是一个[让人尴尬](https://ishoudinireadyyet.com)的[规范草案](https://drafts.css-houdini.org)，但是总算 Chrome 已经率先开始支持，Safari 也在跟进中，很多先驱者们开始各种尝试，比如 [Houdini Samples](https://googlechromelabs.github.io/houdini-samples/) 和 [CSS Houdini Experiments](https://css-houdini.rocks).

### Houdini API

Houdini API 目前主要包含以下部分:

| API               | 介绍                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Parser            | 允许开发者自由扩展 CSS 词法分析器 [#](https://drafts.css-houdini.org/css-parser-api/)              |
| Typed OM          | 使用JS操作CSSOM属性 [#](https://drafts.css-houdini.org/css-typed-om/)                             |
| Properties        | 在JS主进程中定义与类型化CSS属性 [#](https://drafts.css-houdini.org/css-properties-values-api/)     |
| Layout            | 通过类逻辑属性与worklet自由地布局元素 [#](https://drafts.css-houdini.org/css-layout-api)            |
| Painting          | 使用类canvas上下文在元素背景与mask中自由绘制 [#](https://drafts.css-houdini.org/css-paint-api/)     |
| Font Metrics      | 可以获得当前字体渲染文本所占的宽高 [#](https://drafts.css-houdini.org/font-metrics-api/)            |
| Box Tree          | 获得盒模型的基本信息 [#](https://drafts.css-houdini.org/box-tree-api/)                             |
| Worklets          | 使用多线程执行渲染引擎的指定类型任务，提高整体性能 [#](https://drafts.css-houdini.org/worklets/)     |
| Animation         | 使用JS与worklet操作元素帧动画的效果与时间 [#](https://drafts.css-houdini.org/css-animationworklet/) |

### CSS Parser API

目前还未被加入到官方草案中，截至目前为止计划可以做到：

* 以钩子的方式扩展 CSS, 对于不能识别的 CSS 进行修复（非必要，可能在未来被移除）
* 让 Custom properties 变得更加灵活，自己定规则，自己解析
* 很方便的创造自己的基于 CSS 通用语法的类 CSS 语言
* 使用类 CSS 的语法来扩展 HTML / SVG 属性，例如实现类似 `<img sizes>` 的方法：
    ```html
    <img
        sizes="
            (max-width: 500px) 100vw,
            (max-width: 1000px) 80vw,
            (max-width: 1500px) 50vw,
            2000px
        "
        src="http://placehold.it/500/abc"
    />
    ```

### CSS Typed OM

CSS Typed Object Model，我们知道 CSS OM 中处理的一切规则都是基于字符串的，而在 Typed OM 中，将字符串转换成 JavaScript 中的类型表达式，我们看一下这个例子，我们在使用 JS 处理 CSS 中的数学计算，先取到高度的字符串 100px，然后去掉 px 这个单位得到字符串 100，在 parseInt 然后加上 100 得到 200，最后在加上单位 px 然后设置回去。这是我们对 CSS 的操作，然后在浏览器解析的时候，还得再解析 100px 这个字符串，转换成数字。这个过程从字符串到数字，再到字符串，然后又转数字，可以看到这个过程简直白痴。然而改为解析 StylePropertyMap 之后，设置 `height: calc(5px + 5%);` 实际上产生了 `LengthValue{px: 5, percent: 5}`, 简单明了。
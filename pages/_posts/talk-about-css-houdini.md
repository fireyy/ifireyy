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
| Worklets          | 使用多线程执行渲染引擎的指定类型任务，提高整体性能 [#](https://drafts.css-houdini.org/worklets/)     |
| Typed OM          | 使用JS操作CSSOM属性 [#](https://drafts.css-houdini.org/css-typed-om/)                             |
| Properties        | 在JS主进程中定义与类型化CSS属性 [#](https://drafts.css-houdini.org/css-properties-values-api/)     |
| Painting          | 使用类canvas上下文在元素背景与mask中自由绘制 [#](https://drafts.css-houdini.org/css-paint-api/)     |
| Animation Worklet | 使用JS与worklet操作元素帧动画的效果与时间 [#](https://drafts.css-houdini.org/css-animationworklet/) |
| Layout            | 通过类逻辑属性与worklet自由地布局元素 [#](https://drafts.css-houdini.org/css-layout-api)            |

### 


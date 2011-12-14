-------
title: Phonegap 的使用感受以及一些问题
date: 2011-12-08
folder: blog
tags: phonegap, html5, css3, javascript
-------

[Phonegap](http://phonegap.com) 是一个基于 HTML, CSS and JavaScript 开发移动平台 app 的开源框架，类似的还有 [Titanium](http://www.appcelerator.com). 之前一个项目涉及到快速开发移动跨平台 app, Phonegap 上手较快，便选择 TA, 噩梦开始了…

首先对于前端来说，Phonegap 上手的确方便，就像平时做网页一样，不过在打包过程中会发生各种问题：

###白名单的问题

你会发现你的 ajax 请求碰到了跨域的问题，但是 Phonegap 官方的说法是：

> Phonegap 是通过 `file://` 引入 index.html 页面，发送 ajax 请求不受跨域限制

最后通过无尽的搜索，发现需要在 __PhoneGap.plist__ 里的 __ExternalHosts__ 组里添加新 item, 值设定为要访问的域名就可以了。

###Viewport拖拽问题

这个问题的表现跟浏览器一致，真要阻止，只能添加：

	document.addEventListener("touchmove", function (e) {
		e.preventDefault();
	}, false);

待续...
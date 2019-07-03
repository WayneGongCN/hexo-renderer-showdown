## hexo-renderer-github

Hexo 插件，使用 [showdown](https://github.com/showdownjs/showdown) 渲染 Markdown。


### Use

卸载其他同类型渲染插件，例如默认 marked

```
npm un hexo-renderer-marked --save
```

安装 hexo-renderer-github

```
npm install hexo-renderer-showdown --save
```


### Options

修改 Hexo 配置 _config.yml 添加 `markdown` 属性。

options 参照 showdown [文档](https://github.com/showdownjs/showdown/wiki/Showdown-Options#valid-options)。


```yml
markdown:
    # options ...
```
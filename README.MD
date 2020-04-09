### utils-tools
   
> 项目中经常使用的工具函数集合，Jest添加自动化测试，新增加工具方法，需要完善与之对应的测试用例
>
>https://juejin.im/post/5e8e59196fb9a03c4649325e

#### 运行项目

```
npm run test
```

### Jest操作姿势

#### 测试分组
```
describe('测试分组1',() => {
  
})
```

#### 测试用例
```
test('测试用例1', () => {

})
```

#### 断言
```
expect(formatString('这是字符串')).toBe('这是字符串')
```

#### 结果
![](https://global.uban360.com/sfs/file?digest=fid5d04605cace3198d6317416adbdb8676&fileType=2)

其中：
-   %Stmts 是语句覆盖率（statement coverage）：是不是每个语句都执行了？
-   %Branch 分支覆盖率（branch coverage）：是不是每个if代码块都执行了？
-   %Funcs 函数覆盖率（function coverage）：是不是每个函数都调用了？
-   %Lines 行覆盖率（line coverage）：是不是每一行都执行了？

%Stmts 和 %Lines 的区别是：行覆盖率的颗粒度是大于语句覆盖率的，因为可能允许一行中有多条语句（js开发中尤为常见）。

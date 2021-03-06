JavaScript 设计模式：入门
========

## 1. 什么是设计模式

Design Pattern

1. 《设计模式：可复用面向对象软件的基础》出版于1995年

## 2. 如何学习设计模式

1. 软件工程学，与编程不太一样——设计模式很高深（错）
    我妈做饭一般，红烧一切肉，清炒一切菜
2. 设计模式，有局限性
    1. 图形界面刚刚兴起
    2. 商用的，大型的，收费的
    3. 基于 C 基础语言

结果：很多讲设计模式的书，不太好

1. 设计模式，越早知道越好
2. 不需要知道的特别细
3. 把这些概念记住，当你遇到了用武之地，赶紧拿出来用

## 3. 何为反模式

## 4. 设计模式的分类

1. 创建型
2. 结构型
3. 行为型

## 5. JS 的面向对象

### 1. JS 历史上不是面向对象语言

```javascript
function Klass() {

}

var o = new Klass();
function SubClass() {

}
SubClass.prototype = o;
```

### 2. ES2015

```javascript
class Animal {
  constructor() {

  }

  bark() {
    console.log('wooo');
  }
}

class Cat extends Animal {
  constructor() {

  }

  bark() {
    console.log('meow');
  }
}
```

### 3. 运行时编译

JS 不存在一个编译空间，它只有执行空间。

```actionscript
class SingleInstance {
  private static instance;
  public static function getInstance() {
    if (!instance) {
      instance = new SingleInstance();
    }
    return instance;
  }

  private function constructor() {

  }
}
```

```javascript
let a = 1;
let b = 2;
let instance = {
  method1() {

  },
  method2() {

  }
};

export default instance;
```

## 6. 发布/订阅模式

1. 有一个发布者
2. 有多个订阅者
3. 当发布者发布消息的时候，处于订阅链条上的订阅者，都会依次收到消息
4. （通常有一个事件总线）

### 好处

1. 发布者和订阅者不强耦合
2. 处理顺序比较明确

### 常见问题：和观察者模式有什么区别？

--------

## 习题

1. 关于设计模式，以下哪种说法是错的：
    1. 更易维护
    2. 不容易出现 bug
    3. 速度更快
    4. 更容易阅读

2. 我们应该怎样学习和使用设计模式？
    1. 学精吃透
    2. 了解知道
    3. 寻找机会使用
    4. 遇到合适的机会再回去翻书，确定合适再用

3. 应该怎样使用设计模式？
    1. 详细记住设计模式的所有细节，步步跟进
    2. 知道设计模式的目的、场景、解决问题的原理，结合自己开发的特点、语言的特点，解决自己的问题

---
title: 掘金数组相关
date:2015-06-18
layout:post
---
https://juejin.im/post/5b976e7fe51d450e531c54b8

没看答案考验下自己会不会做
#### 1：删除排序数组中的重复项
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 给定数组 nums = [1,1,2], 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 你不需要考虑数组中超出新长度后面的元素。

```
   let arr = [1, 1, 2,1,3,3,4,6,77,88,77]
    function deleteRepeatFromArray(data) {
      for(let i = 0;i<data.length;i++) {
        for(let j = i+1; j<data.length; j++) {
          if(data[i] === data[j]) {
            data.splice(j, 1)
          }
          // console.log(data[j])
        }
      }
    }
    deleteRepeatFromArray(arr)
    console.log(arr)
```
#### 3：旋转数组
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 输入: [1,2,3,4,5,6,7] 和 k = 3

输出: [5,6,7,1,2,3,4]

```
let arr = [1,2,3,4,5,6,7];

    function moveRightToLeft(data, number) {
      let end = data.slice(-number);
      data.splice(-number)
      Array.prototype.unshift.apply(data,end)
      console.log(data)
    }
    moveRightToLeft(arr, 3)
```



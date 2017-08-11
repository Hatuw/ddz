/**
 * 暴露出merge函数,方便仓库状态合并
 */

// 判断是否清空对象
let isEmpty = (obj) => {
  for (let i in obj) {
    return true;
  }
  return false;
}

// 合并算法: 对象
export const merge = (obj,opt,attr) => {
  // 如果参数不是对象就无法合并
  if (typeof obj !== 'object') {
    return;
  }
  // 如果需要合并的对象是字符串
  if(typeof opt == 'string') {
    obj[attr] = opt;
    return;
  }
  // 清空对象
  if (!isEmpty(opt)) {
    for (let a in obj) {
      delete obj[a];
    }
  } else {
    // 数组深复制
    if (obj instanceof Array) {
      for (var i = 0; i < opt.length; ++i) {
        obj[i] = opt[i];
      }
    }
    // 对象深复制
    else {
      for (let a in opt) {
        obj[a] = opt[a];
      }
    }
  }
};


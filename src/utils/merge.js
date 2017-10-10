/**
 * 暴露出merge函数,方便仓库状态合并
 */

// 判断是否清空对象
let isEmpty = (obj) => {
  return Object.keys(obj).length > 0 ? true : false;
}

// 合并算法: 对象
export const merge = (obj, opt, attr) => {
  // 如果参数不是对象就无法合并
  if (typeof obj !== 'object') throw new Error('参数必须是对象');
  // 如果需要合并的对象是字符串
  else if (typeof opt === 'string') obj[attr] = opt;
  // 清空对象
  else if (!isEmpty(opt)) {
    for (let a in obj) {
      delete obj[a];
    }
  } else {
    // 数组深复制
    if (obj instanceof Array) {
      for (let i in opt) {
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

/**
 * 暴露出merge函数,方便仓库状态合并
 */

let isEmpty = (obj) => {
  for (let i in obj) {
    return true;
  }
  return false;
}

export const merge = (obj, opt) => {
  if (typeof obj !== 'object' || typeof opt !== 'object') {
    return;
  }
  if (!isEmpty(opt)) {
    for (let a in obj) {
      delete obj[a];
    }
  } else {
    for (let a in opt) {
      obj[a] = opt[a];
    }
  }

}

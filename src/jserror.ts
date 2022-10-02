// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error

export const createEvalError = () => {
  eval("notexistFn();");
};

export const createRangeError = () => {
  new Array(-1)
};

export const createReferenceError = () => {
  a.b();
}

export const createTypeError = () => {
  // @ts-ignore
  Math.PI = 4;
}

export const createURIError = () => {
  encodeURI('\uD800');
}

export const createPromiseError = () => {
  new Promise((resove, reject) => {
    throw '创建失败'
  })
};

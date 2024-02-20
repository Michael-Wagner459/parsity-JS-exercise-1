const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };


function compose  (target, source)  {
  if (typeof arguments != 'object') {
    console.log('Error not an object');
  }
 for (const key in source) {
    console.log(key)
    if(Object.hasOwnProperty.call(source, key)) {
      target[key] = source[key]
    }
  }
  console.log(target)
};

compose(target, source)

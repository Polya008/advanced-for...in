export default function orderByProps(obj, [prop1,prop2]){
  const arr = [];
  let sorting = [];
  for (const prop in obj) {
    if (prop === prop1 || prop === prop2) {
      arr.push(`${prop} : ${obj[prop]}`);
    } else {
      sorting.push(`${prop} : ${obj[prop]}`);
      sorting.sort();
    }
  }
  const result = [...arr, ...sorting];
  return result;
}

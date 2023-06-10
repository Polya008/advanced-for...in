export default function orderByProps(obj, orderArray) {
  const primaryProps = [];
  const sideProps = [];

  for (const property in obj) {
    if (orderArray.includes(property)) {
      primaryProps[orderArray.findIndex((item) => item === property)] = {
        key: property, value: obj[property],
      };
    } else {
      sideProps.push({ key: property, value: obj[property] });
    }
  }

  sideProps.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });

  return primaryProps.concat(sideProps);
}
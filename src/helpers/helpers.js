export function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function numToString(number) {
  return `$${number.toLocaleString()}`;
}

export function formatDate(date) {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear().toString().substr(2, 2);
  return `${month}-${day}-${year}`;
}

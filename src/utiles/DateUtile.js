export function formatDate() {}

/**
 * YYYY-MM-DD
 * @returns {*}
 */
export function getYMD() {
  const date = new Date();

  return timestamp;
}
/**
 * HH:MM:SS
 * @returns {*}
 */
export function getHMS() {
  return timestamp;
}

/**
 * YYYY-MM-DD HH:mm:ss
 * @returns {*}
 */
export function getYMDHMS() {
  let arr = dateArrHndler();
  arr = arr.map(i => {
    if (i < 10) {
      return i.toString().padStart(2, 0);
    } else {
      return i;
    }
  });
  return `${arr[0]}-${arr[1]}-${arr[2]} ${arr[3]}:${arr[4]}:${arr[5]}`
}
function dateArrHndler() {
  let data = new Date();
  let arr = [
    data.getFullYear(),
    data.getMonth() + 1,
    data.getDate(),
    data.getHours(),
    data.getMinutes(),
    data.getSeconds()
  ];
  return arr;
}

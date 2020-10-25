module.exports = function reverse (n) {

    n = String(Math.abs(n));
    n = n.split('');
    let res = '';
  for (i=0;i<n.length;i++){
      res = res + n[n.length - i - 1];
  }
  return Number(res);
}

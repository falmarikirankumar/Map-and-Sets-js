// console.log("hello");

// 1
str = "abcadeecfb";
let s = new Set();
for (let a = 0; a < str.length; a++) {
  s.add(str[a]);
  //   console.log(s);
}
let res = "";
for (let ch of s) {
  res += ch;
}
console.log(res);

// 2
s = "abcadeecfb";
let map = new Map();
for (let i = 0; i < s.length; i++) {
  if (map.has(s[i])) {
    let value = map.get(s[i]);
    map.set(s[i], value + 1);
  } else {
    map.set(s[i], 1);
  }
}
for (let [k, v] of map) {
  console.log(k + "=" + v);
}

export {};

const res = await fetch("https://www.naver.com");
const resText = await res.text();
console.log(resText);
import { helloNaver } from "./util.ts";
const url = "http://www.naver.com"
const res = await helloNaver(url)
console.log(res)
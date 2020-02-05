/**
 * It语录 
 */
const yuluList=[
  "Stay hungry, stay foolish.",
  "You build it, you run it.",
  "Talk is cheap. Show me the code.",
  "Go big or go home.",
  "Done is better than perfect.",
  "Eat our own dog food."
]
let lock = false 
const load = callback => {
  //从语录数组中随机获取一个值并返回
  callback(yuluList[Math.floor((Math.random() * yuluList.length))]);
}

module.exports = {
  load: load
}
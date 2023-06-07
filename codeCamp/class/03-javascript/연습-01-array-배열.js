let classmates = ['철수','영희','훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[2]
// '훈이'
classmates.inc
// undefined
classmates.includes('훈이')
// true
classmates.length
// 3
classmates.push('맹구')
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.includes('맹구')
// true
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']
classmates.pop()
// '훈이'
classmates
// (2) ['철수', '영희']
classmates.push('훈이')
// 3
classmates
// (3) ['철수', '영희', '훈이']

let developer
// undefined
developer = ['돈', '평판', '행복', '워라벨', '입지']
// (5) ['돈', '평판', '행복', '워라벨', '입지']
developer[0]
// '돈'
let dream = ['커리어점프', '성공', '할수있다']
// undefined
developer.push(dream)
// 6
developer.concat(dream)
// (8) ['돈', '평판', '행복', '워라벨', '입지', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
//(8) ['돈', '평판', '행복', '워라벨', '입지', '커리어점프', '성공', '할수있다']
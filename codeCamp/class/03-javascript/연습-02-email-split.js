const email = 'pppwoon@naver.com'
// undefined
email.includes('@')
// true
email.split('@')
// (2) ['pppwoon', 'naver.com']
let userMail = email.split('@')[0]
// undefined
userMail
// 'pppwoon'
let company = email.split('@')[1]
// undefined
company
// 'naver.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['p', 'p', 'p', 'w']
maskingMail.push('*')
// 5
maskingMail.push('*')
// 6
maskingMail.push('*')
// 7
maskingMail.push('*')
// 8
maskingMail
// (8) ['p', 'p', 'p', 'w', '*', '*', '*', '*']
maskingMail.join('')
// 'pppw****'
maskingMail.join('') + '@' + company
// 'pppw****@naver.com'
let result = maskingMail.join('') + '@' + company
// undefined
result
// s'pppw****@naver.com'
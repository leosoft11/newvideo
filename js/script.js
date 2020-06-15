// var name = 'hello'
// const firstname = 'min'
// let age = 26
//

//
 const name = prompt('введите имя')
 const yearsago = prompt('введите ваш год рождения')
 // const yearsago1 = prompt('какой сейчас год?')
// yearsagotest = yearsago1 - yearsago
//
// alert('Вам' + ' ' +yearsagotest + '?' + 'Я угадал?')
//
// // if (yearsago === 'admin' && yearsago1 === 'password'){
// //     alert('Доброе пожаловать домой')
// //
// // }else {
// //       alert('Прости')
// // }
// const admin = 'admin'
// const password = 'password'

// https://www.youtube.com/watch?v=Bluxbh9CaQ0&list=WL&index=73&t=20110s 1 час 28 минут

function calculate(yearsago) {
   return 2020 - yearsago
}

function infolog(name, yearsago) {
   const age = calculate(yearsago)
  alert('человек по имени' + naantome + ' возраст ' + yearsago)
}

infolog(yearsago, name)
infolog('vlad', 1992)

// 1)Vazifa: Sahifada bir nechta bo‘sh kvadratlar (div) bo‘lsin. Har bir kvadrat ustiga "Rasm qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi rasm (img elementi) kvadratning ichiga qo‘shilsin. Kvadrat ichida avvaldan rasm bo‘lsa, o‘sha rasmni o‘chirib, yangisini qo‘shsin.

// const btn = document.querySelectorAll('.btn')
// const box = document.querySelectorAll('.box')

// btn.forEach(value =>{
//     value.addEventListener('click', function(){
//         let box = value.parentElement
//         let rasm = box.querySelector('img')
//         if(rasm){
//             rasm.remove()
//         }
//         let img = document.createElement('img')
//         img.src = 'https://picsum.photos/id/347/200/300'
//         box.prepend(img)
//     })
// })

// 3)Vazifa: Sahifada ikkita kvadrat (div) bo‘lsin. Har bir kvadrat ichida matn yozilgan bo‘lsin. Foydalanuvchi tugma bosganda, ushbu kvadratlarning o‘z ichidagi matnlari almashib qolsin.

// const card1 = document.getElementById('card1')
// const card2 = document.getElementById('card2')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', function(){ 
//     let x = card1.innerHTML
//     card1.innerHTML = card2.innerHTML
//     card2.innerHTML = x
// })

// 4)Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har safar foydalanuvchi sahifaga kirganda, tugmalardan biriga avtomatik ravishda "qizil" klassi qo‘shiladi. Foydalanuvchi boshqa tugmalarni bosganda, yangi tugmaga "qizil" klassi o‘tadi, avvalgisi esa "qizil" klassini yo‘qotadi.

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')
// const btn3 = document.querySelector('#btn3')
// const btn = [btn1, btn2, btn3]
// btn.forEach(value =>{
//     value.addEventListener('click', function(){
//         btn.forEach(x =>{
//             x.classList.remove('qizil')
//         })
//         value.classList.add('qizil')
        
//     })
    
// })

// 5)Vazifa: Sahifada bir nechta paragraflar va bitta "Yangi paragraf qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi paragraf qo‘shilsin va u maqolaning oxiriga yoki boshiga joylashtirilsin (foydalanuvchi oldindan tanlaydi).

// const card = document.getElementById('card')
// const right = document.getElementById('right')
// const left = document.getElementById('left')
// const button = document.querySelectorAll('button')
// button.forEach(value =>{
//     value.addEventListener('click', function(){
//         let block = document.createElement('div')
//         block.style.width = '100px'
//         block.style.height = '100px'
//         block.style.backgroundColor = 'red'
//         if(this.innerHTML == 'right'){
//             card.after(block)
//         }
//         else{
//             card.before(block)
//         }
//     })
// })

// 6)Vazifa: Sahifada bir nechta rangli kvadratlar bo‘lsin. Har bir kvadratning tagida "Chapga qo‘shish" va "O‘ngga qo‘shish" tugmalari joylashtiriladi. Tugma bosilganda kvadratning chap yoki o‘ng tomoniga yangi kvadrat qo‘shilsin.

// const box = document.querySelector('.box')
// const ong = document.querySelector('#ong')
// const chap = document.querySelector('#chap')
// const btn = [ong, chap]
// btn.forEach(value =>{
//     value.addEventListener('click', function(x){
//         if(x.target.classList.contains('chap') || x.target.classList.contains('ong')){
//         const yangidiv = document.createElement('div')
//         yangidiv.className = 'box'
//         yangidiv.textContent = document.querySelectorAll('.box').length + 1
//         const box = x.target.previousElementSibling
//         x.target.classList.contains('chap') ? box.before(yangidiv) : box.after(yangidiv)
//         }
//     })
// })

// 7)Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har bir tugmaning yonida "Yashirish" tugmasi bo‘lsin. "Yashirish" tugmasi bosilganda asosiy tugma yashirinadi. Sahifaning pastida "Yashirilgan tugmalarni ko‘rsatish" tugmasi bo‘lib, u barcha yashirilgan tugmalarni qayta ko‘rsatadi.

// const hide = document.querySelectorAll('.hide')
// const btn = document.querySelectorAll('.btn')
// const show = document.querySelector('#show')
// hide.forEach(value =>{
//     value.addEventListener('click', function(){
//         this.previousElementSibling.style.display = 'none'
//     })
// })
//     show.addEventListener('click', function(){
//         btn.forEach(function(main){
//             main.style.display = 'inline'
//         })
//     })

// 10)Vazifa: Sahifada ul ro‘yxati va "Yangi element qo‘shish" tugmasi bo‘lsin. Har bir ro‘yxat elementida "O‘chirish" tugmasi bo‘lsin. Foydalanuvchi yangi element qo‘shganda, u ro‘yxatning oxiriga qo‘shiladi. O‘chirish tugmasi bosilganda, tegishli element ro‘yxatdan o‘chiriladi.

// const list = document.getElementById('list')
// const btn = document.getElementById('btn')
// btn.addEventListener('click', function(){
//     const li = document.createElement('li')
//     li.textContent = 'qoshildi'
//     const ochir = document.createElement('button')
//     ochir.textContent = 'ochirish'
//     ochir.addEventListener('click', function(){
//         list.removeChild(li)
//     })
//     li.appendChild(ochir)
//     list.appendChild(li)
// })

// 11)Vazifa: Sahifada bir nechta blok (div) elementlari bo‘lsin. Ularning barchasi ko‘rinadigan holatda bo‘lsin. Har bir blok yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda blok yashiringan bo‘lsin (display: none; usuli orqali). Sahifaning pastida "Hammasini ko‘rsatish" tugmasi bo‘lsin, bu barcha yashirilgan bloklarni qayta ko‘rsatadi.

// const block = document.querySelectorAll('.block')
// const btn = document.querySelectorAll('.btn')
// const korsat = document.getElementById('korsatish')

// btn.forEach(value =>{
//     value.addEventListener('click', function(){
//         const blok = value.parentElement
//         blok.classList.add('hidden')
//     })
// })
// korsat.addEventListener('click', function(){
//     block.forEach(blok =>{
//         blok.classList.remove('hidden')
//     })
// })

// 12)Vazifa: Sahifada bir nechta rangli kvadratlar (div) bo‘lsin. Har bir kvadratni boshqa kvadrat bilan almashtirish tugmasi bo‘lsin. Tugma bosilganda, o‘sha kvadrat boshqa tanlangan kvadrat bilan joylarini almashtirsin (ularni DOM ichida joylashtirish tartibi o‘zgaradi).

// const btn = document.getElementById('btn')
// const color = document.querySelectorAll('.color')
// btn.addEventListener('click', function(){
//     const bir = color[0]
//     const ikki = color[1]
//     const uch = color[2]
//     const parent = first.parentNode

//     parent.replaceChild(ikki, bir)
//     parent.insertBefore(bir, ikki.nextSibling)
//     parent.replaceChild(uch, ikki)
//     parent.insertBefore(ikki, uch.nextSibling)
// })

// 13)Vazifa: Sahifada bir nechta matn bo‘laklari (p) bo‘lsin. Har bir matnning yonida "Uzunligini ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda, matn uzunligi (belgilar soni) alert orqali foydalanuvchiga ko‘rsatiladi. Matn uzunligini ko‘rsatgandan so‘ng, "Qisqartirish" tugmasi paydo bo‘lib, u matnni kesib, oxiriga ... qo‘shadi

// const btn = document.querySelectorAll('.uzunlik')
// btn.forEach(value =>{
//     value.addEventListener('click', function(){
//         const list = value.previousElementSibling
//         const text = list .textContent
//         const soni = text.length
//         alert('matn uzunligi: ' + soni +  'belgilar')
//         const kesish = document.createElement('button')
//         kesish.textContent = 'kesib tashlash'
//         kesish.addEventListener('click', function(){
//             if(text.length > 30 ){
//                 list.textContent = text.substring(0, 30)
//                 button.style.display = 'none'
//             }
//         })
//         list.after(kesish)
//     })
// })

// 14)Vazifa: Sahifada bir nechta div elementlar bo‘lsin, ular ustida "Ball qo‘shish" tugmasi bo‘lsin. Har safar tugma bosilganda, blok ichidagi matn sifatida 1 ball qo‘shiladi (0 dan boshlanadi). Foydalanuvchi sahifada qancha ball to‘plaganini hisoblash uchun pastda umumiy ball ko‘rsatadigan alohida blok bo‘lsin.

// const box = document.querySelectorAll('.box')
// const total = document.getElementById('total')
// let sum = 0
// box.forEach(value =>{
//     const p = value.querySelector('p')
//     const btns = value.querySelector('.ball')
//     btns.addEventListener('click', function(){
//         p.textContent = +p.textContent + 1
//         sum++
//         total.textContent = `ball: ${sum}`
//     })
// })

// 15)Vazifa: Sahifada bir nechta elementlar (matnli bloklar) bo‘lsin. Har bir element yonida "Yuqoriga" va "Pastga" tugmalari bo‘lsin. Tugmalar yordamida foydalanuvchi elementlarni yuqoriga yoki pastga surib tartibini o‘zgartira olsin.

// const box = document.querySelectorAll('.box')
// box.forEach(value =>{
//     const pastga = value.querySelector('.pastga')
//     const tepaga = value.querySelector('.tepaga')
//     const parent = value.parentNode
//     tepaga.addEventListener('click', function(){
//         if(value.previousElementSibling){
//             parent.insertBefore(value, value.previousElementSibling)
//         }
//     })
//     pastga.addEventListener('click', function(){
//         if(value.nextElementSibling){
//             parent.insertBefore(value.nextElementSibling, value)
//         }
//     })

// })
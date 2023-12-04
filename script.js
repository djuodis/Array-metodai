
// 1. Užduotis
const cars = ["BMW", "VW", "Audi"]
cars.forEach(function(item){
    console.log(item)
})

console.log('========&&======')


// 2. Užduotis
const cars1 = ["BMW", "VW", "Audi"]
cars1.forEach(function(index, item){
    console.log(`${index}: ${item}`)
})

console.log('========&&======')


// 3. Užduotis
const names = ["peTras", "Jonas", "aNTanaS", "gerManas", "erIKas" ,"jUozApAs"]
names.map(names => {
      const firstLetter = names.charAt(0).toUpperCase()
      const rest = names.toLowerCase().slice(1)
      const back = firstLetter + rest
      console.log(back)
    })
  
console.log('========&&======')


// 4. Užduotis
const age = [18, 23, 32, 30, 25, 15, 11, 50] 
const sort3 = age.filter(x => x >= 18)

console.log(sort3)

console.log('========&&======')


// 5. Užduotis
const city = ["Vilnius", "Kaunas",  "Utena", "Klaipėda", "Šiauliai", 'šakiai']
const cityK = city.find(x => x.startsWith("K"))

console.log(cityK)

console.log('========&&======')


// 6. Užduotis
const cityl =  city.some(x => x.toLowerCase() === x)

console.log(cityl)

console.log('========&&======')


// 7. Užduotis
const isEvery = city.every( x => x[0] === x[0].toUpperCase() )
console.log(isEvery)

const values = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen','King','Queen']

const cardsOrder = {
    'Ace': 1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
     '9':9,
     '10':10,
     'Jack':11,
     'Queen':12,
     'King':13
}
values.sort((a,b)=>cardsOrder[a]-cardsOrder[b])
console.log(values)

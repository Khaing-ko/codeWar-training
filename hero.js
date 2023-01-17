function hero(dragon,bullets){
    return ( bullets/dragon < 2 ? 'Hero cannot survive' : 'Hero can survive')
}
console.log(hero(2,4));
console.log(hero(3,5));
console.log(hero(3,7));
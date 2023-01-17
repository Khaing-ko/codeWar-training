const check = (a, x) => {
    return ( (a.filter( content_of_a => content_of_a  == x ))[0]  === x ? true : false)
  }
  a = [66, 101, '6']
  x = 6
  console.log(check(a,x));
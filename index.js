function inc(n) {
  n += 1
  return n
}

function dec(n) {
  n -= 1 
  return n
}

function makeInt(n) {
  n = parseInt(n,10)
  return n
}

function preserveDecimal(n) {
  n = parseFloat(n,10)
  return n 
}
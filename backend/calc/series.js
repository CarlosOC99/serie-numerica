function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrime(n) {
  if (n <= 0) return 2;
  let primes = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes[n - 1];
}

function getTriangular(n) {
  if (n <= 1) return 1;
  return (n * (n + 1)) / 2;
}

function getFibonacci(n) {
  if (n <= 1) return 0;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function calculateSerie(n) {
  if (n <= 1) return 0;

  const prime = n >= 2 ? getPrime(n - 2) : 0;
  const triangular = n >= 2 ? getTriangular(n - 2) : 0;
  const fibonacci = n > 1 ? getFibonacci(n - 1) : 0;

  if (fibonacci === 0) return 0;

  return (2 * prime * 3 * triangular) / (7 * fibonacci);
}

module.exports = { calculateSerie };

// <2.a>

function square(a) {
  // Pythagorean theorem

  let hypotenuse = Number(Math.sqrt(a * a + a * a).toFixed(2));

  return hypotenuse;
}
square(9);

// 2.b

function triangle(a, b, c) {
  let semiPerimrter = (a + b + c) / 2;

  //   Heron's formula
  let area = Number(
    Math.sqrt(
      semiPerimrter *
        ((semiPerimrter - a) * (semiPerimrter - b) * (semiPerimrter - c))
    ).toFixed(2)
  );
  return area;
}
triangle(5, 6, 7);

// 2.c

function circumference(r) {
  let perimeter = Number((2 * Math.PI * r).toFixed(2));
  let surface = Number((Math.PI * (r * r)).toFixed(2));

  return perimeter;
  return surface;
}
circumference(4);

// 3.a

function solve(a, b) {
  let theLargerNumber = 0;
  if (a > b) {
    theLargerNumber = a;
    return theLargerNumber;
  } else if (b > a) {
    theLargerNumber = b;
    return theLargerNumber;
  }
}

solve(3, 5);

// 3.b

function solution(n) {
  let evenNumber = false;
  let oddNumber = false;
  if (n % 2 == 0) {
    evenNumber = true;
    return evenNumber;
  } else if (n % 2 != 0) {
    oddNumber = true;
    return oddNumber;
  }
}
solution(2);

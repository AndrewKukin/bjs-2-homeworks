function parseCount (count) {
  let res = Number.parseFloat(count)
  if (isNaN(res)) {
    throw new Error("Невалидное значение");
  }
  return res
}


function validateCount (a) {
  try{
    let valid = parseCount(a);
    return valid;
  } catch (error){
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return parseFloat(s.toFixed(3)); 
  }
}

function getTriangle (a, b, c) {
  try{
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch (error){
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
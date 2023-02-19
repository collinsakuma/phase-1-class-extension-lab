// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        let totalLength = 0;
        for(let i = 0; i < this.countSides; i++) {
            totalLength += this.array[i];
        }
        return totalLength;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.array[0] + this.array[1] < this.array[2]) {
            return false;
        } else if (this.array[0] + this.array[2] < this.array[1]) {
            return false;
        } else if (this.array[1] + this.array[2] < this.array[0]) {
            return false;
        }
        return true;
    }
}

class Square extends Polygon {
    get isValid() {
        for (let i = 1; i < this.array.length; i++) {
            if (this.array[0] != this.array[i]) {
                return false;
            }
        }
        return true; 
    }

    get area() {
        return this.array[0] * this.array[1];
    }
}
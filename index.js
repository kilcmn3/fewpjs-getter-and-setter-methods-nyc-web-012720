// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
    get area() {
        return Math.PI * Math.pow(`${this.radius}`, 2);
    }
    set diameter(newDiameter) {
        return this.radius = newDiameter / 2;
    };
    set circumference(number) {
        return this.radius = number / Math.PI / 2;
    }
}
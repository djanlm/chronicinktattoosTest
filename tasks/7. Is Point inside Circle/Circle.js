import Point from './Point';

export default function (center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // the distance between the point and the center of the circle needs to be less or equals the radius
      var distance = Math.pow((Math.pow((Point.x - center.x), 2) + Math.pow((Point.y - center.y), 2)), 0.5);
      if (distance <= radius) return true;
      return false;
    }
  }
}

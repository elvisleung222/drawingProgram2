const Point = require('./Point');
const Line = require('./Line');
const Rectangle = require('./Rectangle');
const Bucket = require('./Bucket');
const Canvas = require('./Canvas');

c = new Canvas(5,5);
p = new Point(4,4,'*')
l = new Line(2,2,4,2,'*')
r = new Rectangle(2,2,4,5,'*')
c.draw(r.getPoints())
b = new Bucket(4,2,'o',c)
c.draw(b.getPoints())
c.print();

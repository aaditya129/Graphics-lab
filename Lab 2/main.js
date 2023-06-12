import { drawLineDDA } from './DDA.js';
import { drawLineBresenham } from './BLA.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const point1 = { x: 10, y: 10 };
const point2 = { x: 200, y: 200 };
const point3 = { x: 200, y: 10 };
const point4 = { x: 10, y: 200 };

// Use DDA to draw line
drawLineDDA(ctx, point1.x, point1.y, point2.x, point2.y);

// Use Bresenham's to draw line
drawLineBresenham(ctx, point3.x, point3.y, point4.x, point4.y);

import { drawCircle } from './circle.js';
import { drawEllipse } from './ellipse.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Use Mid-Point Circle Drawing Algorithm to draw circle
drawCircle(ctx, 100, 100, 50);

// Use Mid-Point Ellipse Drawing Algorithm to draw ellipse
drawEllipse(ctx, 200, 200, 60, 80);

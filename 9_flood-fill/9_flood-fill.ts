// --- 9. Flood Fill --- //
/* An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
Replace the color of all of the aforementioned pixels with color.*/

const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] => {
  let startPx: number = image[sr][sc];
  if (startPx === color) return image;

  // top evalutaion
  if (sr >= 1) {
    if (image[sr - 1][sc] === startPx) image[sr - 1][sc] = color;
  }
  // bottom evalutaion
  if (sr + 1 < image.length) {
    if (image[sr + 1][sc] === startPx) image[sr + 1][sc] = color;
  }
  // left evalutaion
  if (sc >= 1) {
    if (image[sr][sc - 1] === startPx) image[sr][sc - 1] = color;
  }
  // right evalutaion
  if (sc < image[0].length) {
    if (image[sr][sc + 1] === startPx) image[sr][sc + 1] = color;
  }

  image[sr][sc] = color;
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

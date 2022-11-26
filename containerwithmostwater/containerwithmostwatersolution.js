const heightArray = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// const containerWithMostHeight = function (heights) {
//     let maxArea = 0;

//     for (let p = 0; p < heights.length; p++){
//         for (let p1 = p + 1; p1 < heights.length; p1++){
//             const height = Math.min(heights[p], heights[p1]);
//             const width = p1 - p; 
//             const area = height * width; 

//             maxArea = Math.max(maxArea, area); 
//         }
//     }
//     return maxArea;
// }

// console.log(containerWithMostHeight(heightArray));

// const getMaxArea = function (heights) {
//     let maxArea = 0;

//     // console.log(maxArea);

//     for (let i = 0; i < heights.length; i++) {
//         for (let j = i + 1; j < heights.length; j++){
//             // console.log(i, j);
//             const height = Math.min(heights[i], heights[j]);
//             // console.log(heights[i], heights[j]);
//             const width = j - i; 
//             const area = height * width; 
//             // console.log(width)
//             maxArea = Math.max(maxArea, area); 
//             // console.log(maxArea)
//         }
//     }
// return maxArea;
// }

// console.log(getMaxArea(heightArray));

const getMaxArea = function (heights) {
    let i = 0, j = heights.length - 1, maxArea = 0; 

    while (i < j) {
        const height = Math.min(heights[i], heights[j]); //
        const width = j - i; 
        const area = height * width; 
        maxArea = Math.max(maxArea, area);

        if (heights[i] <= heights[j]) {
            i++;
        } else {
            j--; 
        }
    }
    return maxArea;
}
console.log(getMaxArea(heightArray))
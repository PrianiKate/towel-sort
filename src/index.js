
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0 || matrix.length == 0) return [];
    let ans = [];
    for (let i = 0; i < matrix.length; i++)
        if (i % 2 === 0)
            matrix[i].map(val => ans.push(val));
        else
            for (let j = matrix[i].length - 1; j >= 0; j--)
                ans.push(matrix[i][j]);
    return ans;
}

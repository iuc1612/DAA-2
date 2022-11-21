const freq = [4, 2, 6, 3]
const keys = [1, 2, 3, 4]
const table = [];
const roots = []
const n = keys.length;
for(let i = 0; i < freq.length + 1; i++) {
    table.push(new Array(freq.length + 1).fill(0));
    roots.push(new Array(freq.length + 1).fill(0));
}
//  0,1 -> 1,2 -> 2,3 -> 3,4 
// c[i][j] = c[i][k-1] + c[k][j] + weight[i][j]
// k-> i < k <= j

function optimalBinarySearchTree () {
    for(let i = 1; i <= n + 1; i++) {
        for(let j = 0; j < n - i + 1; j++) {
            let t = j + i;
            table[j][t] = 99999;
            // table[j][t] = minimumCalc();
            // console.log(i, j, t)
            // console.log("AAAAAAAAAA")
            for(let r = j; r < t; r++) {
                // console.log(r);
                let temp = table[j][r] + table[r + 1][t] + weightOf(j, t);
                // console.log(temp);
                if(temp < table[j][t]) {
                    table[j][t] = temp;
                    roots[j][t] = r + 1;
                }
            }
        }
    }
}

function weightOf (i, j) {
    let sum = 0;
    // console.log(i, j);
    for(i = i; i < j; i++) {
        sum +=freq[i];
    }
    return sum;
}

optimalBinarySearchTree();
console.log("After making the Optimal Binary Search Tree, the matrix is: ")
for(let i = 0; i <= freq.length; i++) {
    console.log(table[i]);
}
console.log("And the root is: " + roots[0][4]);
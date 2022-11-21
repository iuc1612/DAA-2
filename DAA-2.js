const keys = [10, 12, 20]
const freq = [34, 8, 50]
const table = [];
const roots = []
const n = keys.length;
for(let i = 0; i < freq.length + 1; i++) {
    table.push(new Array(freq.length + 1).fill(0));
    roots.push(new Array(freq.length + 1).fill(0));
}

function optimalBinarySearchTree () {
    for(let i = 1; i <= n + 1; i++) {
        for(let j = 0; j < n - i + 1; j++) {
            let t = j + i;
            table[j][t] = 99999;
            for(let r = j; r < t; r++) {
                let temp = table[j][r] + table[r + 1][t] + weightOf(j, t);
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
console.log("And the root is: " + roots[0][freq.length]);

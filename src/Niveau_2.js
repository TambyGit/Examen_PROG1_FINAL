export function countMaxBobsleigh(N, map) {
    let solution = [];
    for (let i = 0; i < map.length; i++) {
        solution.push(premier(map[i]));
    }
    function premier(premier) {
        let arraySeparate = [];
        for (let i = 0; i < premier.length; i++) {
            arraySeparate.push(premier[i]);
        }
        let accumulateur = 1;
        for (let i = 0; i < arraySeparate.length; i++) {
            if (arraySeparate[i] == '.' && arraySeparate[i + 1] == '.') {
                accumulateur++;
            }
        }
        return accumulateur;
    }
    let resultFinal = 0;
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] >= 4) {
            resultFinal++;
        }
    }
    return resultFinal;
}
console.log(countMaxBobsleigh(5, ["....X", "X....", ".....", "..X..", "X...X"]));
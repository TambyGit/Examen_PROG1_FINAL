export function reduceDirections(directions) {
    let start = directions[0];
    let result = [];
    for (let i = 1; i < directions.length; i++) {
        if (directions[i] == start) {
            if (directions[i + 1] == undefined) {
                return result;
            } else {
                for (let j = i + 1; j < directions.length; j++) {
                    result.push(directions[j]);
                }
            }
        }
    }
    return result;
}
// console.log(reduceDirections(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST", "EST"]));
// console.log(reduceDirections(["NORD", "SUD", "EST", "OUEST"]));
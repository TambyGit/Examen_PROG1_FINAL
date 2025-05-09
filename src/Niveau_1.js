export function getLastDelegation(delegations) {
    let result = [];
    for (let i = 0; i < delegations.length; i++) {
        let pays = delegations[i].split(" ");
        let distance = Number(pays[1]);
        let vitesse = Number(pays[2]);
        let temps = distance / vitesse;
        result.push(temps);
    }
    let maximum = result[0];
    let repere = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] > maximum) {
            maximum = result[i];
            repere += (i);
        }
    }
    for (let i = 0; i < delegations.length; i++) {
        if (i = repere) {
            let nom = (delegations[repere]).split(" ");
            return nom[0];
        }
    }
}
console.log(getLastDelegation(["Chili 101 2", "Romania 102 3", "Ecuador 103 4", "Madagascar 104 5", "Oman 50 1", "Nicaragua 51 3", "Yemen 53 4", "Estonia 58 1"]));

export const reduceDirections = (directions) => {
    let opp = {
        "NORD" : "SUD",
        "SUD" : "NORD",
        "EST" : "OUEST",
        "OUEST": "EST"
    }
    let res = [];
    for (let i = 0; i < directions.length - 1; i++) {  

        if (res[res.length - 1] == directions[i]) {
            res.pop(res[res.length - 1])
        } else {
            res.push(directions[i]);
        }
        if ((res[res.length - 1] == opp[directions[i + 1]])) {
            res.pop();
            i++;
            continue;
        } else {
            res.push(directions[i + 1]);
        }
    }
    return res;
}
console.log(reduceDirections(["NORD",
        "NORD",
        "SUD",
        "OUEST",
        "EST",
        "EST",
        "SUD",
        "NORD",
        "SUD",
        "OUEST",
        "NORD",
        "SUD",
        "OUEST"]));

export default reduceDirections;
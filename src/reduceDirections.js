export const reduceDirections = (directions) => {
    let opp = {
        "NORD" : "SUD",
        "SUD" : "NORD",
        "EST" : "OUEST",
        "OUEST": "EST"
    }
    let res = [];
    for (let i = 0; i < directions.length; i++) {  
        if (res[res.length - 1] == opp[directions[i]]) {
            res.pop();
        } else {
            res.push(directions[i]);
        }
    }
    return res;
}

export default reduceDirections;


export const reduceDirections = (directions) => {
    let opp = {
        "NORD" : "SUD",
        "SUD" : "NORD",
        "EST" : "OUEST",
        "OUEST": "EST"
    }
    let res = [];
    for (let i = 0; i < directions.length; i++) {  

        if (res[res.length - 1] == directions[i]) {
            res.pop(res[res.length - 1])
        } else {
            res.push(directions[i]);
        }
        
        console.log(res);
        
        console.log(directions[i]);
        if ((res[res.length - 1] == opp[directions[i + 1]])) {
            res.pop();
            i++;
            continue;
        } else {
            res.push(directions[i + 1]);
            console.log(res);
        }
    }
    return res;
}
console.log(reduceDirections(["NORD", "SUD", "EST", "OUEST", "SUD", "NORD", "OUEST", "SUD", "NORD", "EST", "NORD", "EST"]));

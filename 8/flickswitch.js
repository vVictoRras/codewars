function flickSwitch(arr){
    let on = true;
    return arr.map((item) => {
        if (item === "flick") {
            on = !on;
        }
        return on;
    });
}
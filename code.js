function hasCycle(graph) {
    let value = Object.keys(graph);
    if(value.length == 0) {
        return false;
    }
    let prev = []
    let cycles = false;
    for (let i = 0; i < value.length; i++) {
        prev[i] = false;
    }
    for(let j = 0; j < value.length; j++) {
        if(!prev[j] && cycleSearch(graph, j, prev)) {
            cycles = true;
            break;
        }
    }
    return cycles;
}

function cycleSearch(graph, start, visited) {
    

    return false;
}

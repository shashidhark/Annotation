function getVertexIndex(val){
    if(val<0){
        return val + 4;
    }
    else{
        return val % 4;
    }
}

function getNewRectangleVertices(rect, newVertex, vertexIndex){
    // Line index array. l1[v0, v1], l2[v0, v1]. v1, v2 is index to rect[]
    let l1 = [getVertexIndex(vertexIndex-1), getVertexIndex(vertexIndex-2)]
    let l2 = [getVertexIndex(vertexIndex+1), getVertexIndex(vertexIndex+2)]

    //console.log("Other two lines", l1, l2)

    //Vertex coordinates of l1
    let l1VertexP1 = rect[l1[0]]
    let l1VertexP2 = rect[l1[1]]

    //console.log("Line1 vertices", l1VertexP1, l1VertexP2)
    //Slope of two lines
    let slopeL1 = (l1VertexP2[1] - l1VertexP1[1]) / (l1VertexP2[0] - l1VertexP1[0])
    let slopeL2 = (-1/slopeL1) // -1/m1 for perpendicular lines

    // y Intercept of two lines
    let b1 = l1VertexP1[1] - slopeL1 * l1VertexP1[0]; //intercept on y axis
    //Line conencting new vertex and the intersection of l1
    let b2 = newVertex[1]  - slopeL2 * newVertex[0];

    //Intersection point of l1[0], l1[1] and line conencting newVertex
    let newX = (b1-b2)/(slopeL2-slopeL1);
    let newY = slopeL2 * newX + b2;

    //New vertex1
    let newVertexResult1 = { x: newX, y: newY, vertex: l1[0]}

    //Vertex coordinates of l1
    let l2VertexP1 = rect[l2[0]]
    let l2VertexP2 = rect[l2[1]]

    //console.log("Line2 vertices", l2VertexP1, l2VertexP2)
    //Slope of two lines l1, and perpendicular line passes through newVertex
    slopeL1 = (l2VertexP1[1] - l2VertexP2[1]) / (l2VertexP1[0] - l2VertexP2[0])
    slopeL2 = (-1/slopeL1) // -1/m1 for perpendicular lines

    // y Intercept of two lines
    b1 = l2VertexP1[1] - slopeL1 * l2VertexP1[0]; //intercept on y axis
    //Line conencting new vertex and the intersection of l1
    b2 = newVertex[1]  - slopeL2 * newVertex[0];

    //Intersection point of l2[0], l2[1] and line conencting newVertex
    newX = (b1-b2)/(slopeL2-slopeL1);
    newY = slopeL2 * newX + b2;

    //New vertex2
    let newVertexResult2 = { x: newX, y: newY, vertex: l1[1]}

    //console.log("New vertex",  newVertexResult1, newVertexResult2)
    return { v1: newVertexResult1, v2: newVertexResult2 }
}


let rect = [
    [1,4],
    [3,2],
    [7,6],
    [5,8]
];

let newVertex = [5,10], vertexIndex = 3;

console.log(getNewRectangleVertices(rect, newVertex, vertexIndex));

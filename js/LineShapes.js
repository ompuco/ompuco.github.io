function squareLine(x, y){
    if (x === undefined) x = 1;
    if (y === undefined) y = 1;
    var squarePoints = [];
		squarePoints.push( new THREE.Vector3( -x, y, 0 ) );
		squarePoints.push( new THREE.Vector3( x, y, 0 ) );
		squarePoints.push( new THREE.Vector3( x, -y, 0 ) );
		squarePoints.push( new THREE.Vector3( -x, -y, 0 ) );
		return new THREE.LineLoop( new THREE.BufferGeometry().setFromPoints( squarePoints ) );
}


function jack(){
    var jackLines = [
    new THREE.Vector3(0, 0.1, 0),
    new THREE.Vector3(0.1, 0.025, 0),
    new THREE.Vector3(0.1, 0.025, 0),
    new THREE.Vector3(0.175, 0.1, 0),
    new THREE.Vector3(0.175, 0.1, 0),
    new THREE.Vector3(0.25, 0.025, 0),
    new THREE.Vector3(0.25, 0.025, 0),
    new THREE.Vector3(0.25, 0.2, 0),
    new THREE.Vector3(0.25, 0.2, 0),
    new THREE.Vector3(-.25, 0.2, 0),
    new THREE.Vector3(0.2, 0.075, 0),
    new THREE.Vector3(0.2, -0.025, 0),
    new THREE.Vector3(0.2, -0.025, 0),
    new THREE.Vector3(-.2, -0.025, 0),
    new THREE.Vector3(0.2, 0.2, 0),
    new THREE.Vector3(0.2, 0.5, 0),
    new THREE.Vector3(0.2, 0.5, 0),
    new THREE.Vector3(0.1, 0.4, 0),
    new THREE.Vector3(0.1, 0.4, 0),
    new THREE.Vector3(-.1, 0.4, 0),
    new THREE.Vector3(0.15, 0.2, 0),
    new THREE.Vector3(0.15, 0.35, 0),
    new THREE.Vector3(0, 0.1, 0),
    new THREE.Vector3(-0.1, 0.025, 0),
    new THREE.Vector3(-0.1, 0.025, 0),
    new THREE.Vector3(-0.175, 0.1, 0),
    new THREE.Vector3(-0.175, 0.1, 0),
    new THREE.Vector3(-0.25, 0.025, 0),
    new THREE.Vector3(-0.25, 0.025, 0),
    new THREE.Vector3(-0.25, 0.2, 0),
    new THREE.Vector3(-0.2, 0.075, 0),
    new THREE.Vector3(-0.2, -0.025, 0),
    new THREE.Vector3(-0.2, 0.2, 0),
    new THREE.Vector3(-0.2, 0.5, 0),
    new THREE.Vector3(-0.2, 0.5, 0),
    new THREE.Vector3(-0.1, 0.4, 0),
    new THREE.Vector3(-0.15, 0.2, 0),
    new THREE.Vector3(-0.15, 0.35, 0)
    ];

    return new THREE.BufferGeometry().setFromPoints(jackLines);
    

}
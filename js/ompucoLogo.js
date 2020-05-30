

function logoGeometry(){
		var curvePoints = [
			new THREE.Vector3(-2, 0, 0),
			new THREE.Vector3(-2, 0.3, 0),
			new THREE.Vector3(-2.25, 0.5, 0),
			new THREE.Vector3(-2.5, 0.5, 0),
			new THREE.Vector3(-2.75, 0.5, 0),
			new THREE.Vector3(-3, 0.25, 0),
			new THREE.Vector3(-3, 0, 0),
			new THREE.Vector3(-3, -0.25, 0),
			new THREE.Vector3(-2.75, -0.5, 0),
			new THREE.Vector3(-2.5, -0.5, 0),
			new THREE.Vector3(-2.25, -0.5, 0),
			new THREE.Vector3(-2, -0.25, 0),
			new THREE.Vector3(-2, 0, 0),
			new THREE.Vector3(-2, 0.25, 0),
			new THREE.Vector3(-2, 0.5, 0),
			new THREE.Vector3(-1.75, 0.5, 0),
			new THREE.Vector3(-1.5, 0.5, 0),
			new THREE.Vector3(-1.5, 0.25, 0),
			new THREE.Vector3(-1.5, 0, 0),
			new THREE.Vector3(-1.5, -0.25, 0),
			new THREE.Vector3(-1.5, -0.5, 0),
			new THREE.Vector3(-1.5, -0.5, 0),
			new THREE.Vector3(-1.5, -0.5, 0),
			new THREE.Vector3(-1.5, -0.75, 0),
			new THREE.Vector3(-1.5, -0.5, 0),
			new THREE.Vector3(-1.5, 0.25, 0),
			new THREE.Vector3(-1.5, 0.5, 0),
			new THREE.Vector3(-1.25, 0.5, 0),
			new THREE.Vector3(-1, 0.5, 0),
			new THREE.Vector3(-1, 0.25, 0),
			new THREE.Vector3(-1, 0, 0),
			new THREE.Vector3(-1, -0.25, 0),
			new THREE.Vector3(-1, -1.5, 0),
			new THREE.Vector3(-1, -1.5, 0),
			new THREE.Vector3(-1, -1.5, 0),
			new THREE.Vector3(-1, -0.25, 0),
			new THREE.Vector3(-1, 0, 0),
			new THREE.Vector3(-1, 0.25, 0),
			new THREE.Vector3(-0.75, 0.5, 0),
			new THREE.Vector3(-0.5, 0.5, 0),
			new THREE.Vector3(-0.25, 0.5, 0),
			new THREE.Vector3(0, 0.25, 0),
			new THREE.Vector3(0, 0, 0),
			new THREE.Vector3(0, -0.25, 0),
			new THREE.Vector3(-0.25, -0.5, 0),
			new THREE.Vector3(-0.5, -0.5, 0),
			new THREE.Vector3(-0.75, -0.5, 0),
			new THREE.Vector3(-1, -0.25, 0),
			new THREE.Vector3(-1, 0, 0),
			new THREE.Vector3(-1, 0.25, 0),
			new THREE.Vector3(-0.75, 0.5, 0),
			new THREE.Vector3(-0.5, 0.5, 0),
			new THREE.Vector3(-0.25, 0.5, 0),
			new THREE.Vector3(0, 0.25, 0),
			new THREE.Vector3(0, 0, 0),
			new THREE.Vector3(0, -0.25, 0),
			new THREE.Vector3(0.25, -0.5, 0),
			new THREE.Vector3(0.5, -0.5, 0),
			new THREE.Vector3(0.75, -0.5, 0),
			new THREE.Vector3(1, -0.25, 0),
			new THREE.Vector3(1, 0, 0),
			new THREE.Vector3(1, 0.5, 0),
			new THREE.Vector3(1.5, 0.5, 0),
			new THREE.Vector3(1.5, 0.5, 0),
			new THREE.Vector3(1.5, 0.5, 0),
			new THREE.Vector3(1.5, 0.5, 0),
			new THREE.Vector3(1.5, 0.5, 0),
			new THREE.Vector3(1.5, 0.5, 0),
			new THREE.Vector3(1, 0.5, 0),
			new THREE.Vector3(1, 0, 0),
			new THREE.Vector3(1, -0.25, 0),
			new THREE.Vector3(1.25, -0.5, 0),
			new THREE.Vector3(1.5, -0.5, 0),
			new THREE.Vector3(1.75, -0.5, 0),
			new THREE.Vector3(2, -0.25, 0),
			new THREE.Vector3(2, 0, 0),
			new THREE.Vector3(2, 0.25, 0),
			new THREE.Vector3(2.25, 0.5, 0),
			new THREE.Vector3(2.5, 0.5, 0),
			new THREE.Vector3(2.75, 0.5, 0),
			new THREE.Vector3(3, 0.25, 0),
			new THREE.Vector3(3, 0, 0),
			new THREE.Vector3(3, -0.25, 0),
			new THREE.Vector3(2.75, -0.5, 0),
			new THREE.Vector3(2.5, -0.5, 0),
			new THREE.Vector3(2, -0.5, 0),
			new THREE.Vector3(2, 0, 0),
			new THREE.Vector3(2, 0, 0),
		];

		var points = [];

		
		//generate all bicubic curves of logo & add them to points buffer
		for (var step = 0; step < 87; step+=3){
			var curve = new THREE.CubicBezierCurve3(
				curvePoints[step + 0],
				curvePoints[step + 1],
				curvePoints[step + 2],
				curvePoints[step + 3],
			);
			points = points.concat(curve.getPoints(10));
        }
        console.log(points.length);
        
        //trim down points since line ends get a ton of extra points due to bicubic curve generation
        for( var i = 1; i < points.length; i++){
            if(points[i].distanceTo(points[i-1]) < .05){
                points.splice(i,1);
                i--;
            }
        }
        console.log(points.length);

		//assign points to geometry buffer		
        var geometry = new THREE.BufferGeometry().setFromPoints(points);
        var vid = new Float32Array( geometry.attributes.position.count );


        //assign attribute floats for intro animation
		for ( var i = 0; i < points.length; i ++ ) {

            //these values are tuned with the trimmed down point count
            //will need to update if we want a denser model

        vid[i]=i;
        
        if(i>70)vid[i]=i-8;
        
        if(i>107)vid[i]=i-23;

        if(i>167)vid[i]=i-66;

        if(i>206)vid[i]=i-85;

		}

        geometry.setAttribute( 'vertex_id', new THREE.BufferAttribute( vid, 1 ) );

        return geometry;
        
    }
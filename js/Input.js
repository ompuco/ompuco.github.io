setupInput = function(){
    raycaster = new THREE.Raycaster();
		//raycaster.params.Lines.threshold =65;
    mouse = new THREE.Vector2()

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    document.addEventListener('touchstart', onTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouch, false);
    document.addEventListener('touchend', onTouchEnd, false);
    
    document.addEventListener('gesturestart', onDocumentTouch, false);
    document.addEventListener('gesturemove', onDocumentTouch, false);
    document.addEventListener('gestureend', onDocumentTouch, false);


    menuAction = function(intersect){
        //console.log(intersect.object.userData.clickAction);
        if(activeView)activeView.position.x = 1000.0;
        activeView = intersect.object.userData.linkedElement;
        activeView.position.x = 0.0;
        setupAudioStuff();
    };

    logoAction = function(intersect){
        setupAudioStuff();
    };


    scrollAction = function(intersect){
        scrollState = true;
        console.log("YEAH");
    };



    
    var activeView = homeView; //homeview should be on at start
    var activeScroll = scrollBar;

    window.addEventListener( 'mousedown', onMouseDown, false );
    function onMouseDown(event) {
        //scrollState = false;
        var intersects = raycaster.intersectObjects( scene.children, true );
        if(intersects){
            for(var i = 0; i < intersects.length; i++){
                if(intersects[i].object.userData.clickAction==0){menuAction(intersects[i]);}
                else
                if(intersects[i].object.userData.clickAction==1){logoAction(intersects[i]);}
                else
                //if(intersects[i].object.userData.clickAction==2){scrollState=true;console.log("2");scrollAction(intersects[i]);}
                //else
                if(intersects[i].object.userData.clickAction==3){scrollTouch(intersects[i]);}

            }
        }

    };


    window.addEventListener( 'mouseup', onMouseUp, false );
    function onMouseUp(event) {
        scrollState=false; //always set to false after mouse up

    };

    function onTouchStart(event) {
        event.preventDefault();
        //update pointer position

        mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera( mouse, camera ); //raycast with updated position


        //only check to see if we are dragging scrollbar
        /*
        var intersects = raycaster.intersectObjects( scene.children, true );
        if(intersects){
            for(var i = 0; i < intersects.length; i++){
                if(intersects[i].object.userData.clickAction==2){scrollState=true;}
            }
        }
        */

        //actually wait, fuck that

        onMouseDown(event);
    };

    function onTouchEnd(event) {
        event.preventDefault();
        
        //onDocumentTouch(event); //update pointer position
        scrollState=false; //always set to false after touch end
        //touchState = 0.0;
        //onMouseDown(event);
    };



    
    function onDocumentMouseMove(event) {
        event.preventDefault();
        touchState = 1.0; //always have distortion active if mouse input
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera( mouse, camera ); //raycast with updated position
    }
    
    function onDocumentTouch(event) {
        event.preventDefault();
        mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera( mouse, camera ); //raycast with updated position
    }
    
};

function mutCallback ( mutList ) {

    // Get the UFILikeLink elements that have NOT been marked with class "HUMI".
    var elements   = document.body.querySelectorAll( ".UFILikeLink:not(.HUMI)" );

    for ( var i = 0; i < elements.length; i++ ) {

        // Get the element and its parent.
	var elem   = elements[ i ];
	var parent = elem.parentNode;

        // Create a new <span>HUMI</span> element.
	var span   = document.createElement ( "span"   );
	var text   = document.createTextNode( " HUMI " );
	span.appendChild( text );

        // Insert the new span, and mark the element with class "HUMI".
	parent.insertBefore( span, elem );
	elem.classList.add( "HUMI" );
    }
}

// Observe mutations in the body subtree.
var observer = new MutationObserver( mutCallback );
observer.observe( document.body, { childList: true, subtree: true } );

document.body.style.border = "16px solid red";



document.body.style.border = "16px solid red";
alert( "hello" );

function mutCallback  ( mutList ) {

    console.dir( mutList );

    // Handle each mutation in the mutation list.
    for ( var i = 0; i < mutList.length; i++ ) {

        var mut = mutList[ i ];
        console.log( mut );

        // Handle each of the added nodes for this mutation.
        for ( var j = 0; j < mut.addedNodes.length; j++ ) {

            // Look for class UFILikeLink in the subtree beneath this node.
            var node     = mut.addedNodes[ j ];
            var elements = node.getElementsByClassName( ".UFILikeLink" );

            // Handle each UFILikeLink element.
            for ( var k = 0; k < elements.length; k++ ) {

                // Get the element and its parent.
                var elem   = elements[ k ];
                var parent = elem.parentNode;

                // Create a new <span>HUMI</span> element.
                var span   = document.createElement ( "span" );
                var text   = document.createTextNode( "HUMI" );
                span.appendChild( text );

                // Insert the new element into the document.
                parent.insertBefore( span, elem );
                alert("mnhx");
            }
        }
    }
}

// Create a new MutationObserver.
var observer = new MutationObserver( mutCallback );
// Observe mutations in the body subtree.
observer.observe( document.body, { childList: true, subtree: true } );

document.body.style.border = "16px solid blue";


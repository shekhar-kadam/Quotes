const FIREBASE_DOMAIN = "https://quote-ea24d-default-rtdb.firebaseio.com";


// get Requests 

// for geting the all quotes 

export async function getAllQuote() {
    const response = await fetch( `${ FIREBASE_DOMAIN }/quotes.json` );
    const data = await response.json();

    if ( !response.ok ) {
        throw new Error(data.message || 'Could not fetch quotes.');
    }

    const transformedQuotes = [];

    for ( const key in data ) {
        const quoteObj = {
            id: key,
            ...data[key]
        }
     transformedQuotes.push( quoteObj );
    }
    return transformedQuotes;
};

// for  getting the single quote 

export async function getSingleQuote(quoteId) {
    const response = await fetch( `${ FIREBASE_DOMAIN }/quotes/${ quoteId }.json` );

    const data = await response.json();

    if ( !response.ok ) {
        throw new Error( data.message || 'could not fetch quotes' );
    }

    const loadedQuote = {
        id: quoteId,
        ...data
    }

    return loadedQuote;
}


// for getiing the comments 

export async function getAllComments( quoteId ) {
    const response = await fetch( `${ FIREBASE_DOMAIN }/comments/${ quoteId }.json` );

    const data = await response.json();

    if ( !response.ok ) {
        throw new Error( data.message || 'could not fetch Comments' );
    }

    const transformedComments = [];

    for ( const key in data ) {
        const commentObj = {
            id: key,
            ...data[key]
        }
        transformedComments.push( commentObj );
    }

    return transformedComments;
}

// Post Request 


// for sending the quotes 

export async function addQuote( quoteData ) {
    const response = await fetch( `${ FIREBASE_DOMAIN }/quotes.json`, {
        method: 'POST',
        body: JSON.stringify( quoteData ),
        headers: {
            'Content-Type': 'application/json',
        },
    } );

    const data = await response.json();

    if ( !response.ok ) {
        throw new Error( data.message || 'Could not Create Quotes' );
    }

    return null;
}

// for adding the comment data 


export async function addComment(requestData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
      method: 'POST',
      body: JSON.stringify(requestData.commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not add comment.');
    }
  
    return { commentId: data.name };
  }
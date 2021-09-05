import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuote } from '../lib/api';
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from '../components/UI/LoadingSpinner';



const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuote, true
  );

  useEffect( () => {
    sendRequest();
  }, [ sendRequest ] );

if( status === 'pending' ) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  };

  if ( error ) {
    return <p className="centerd focused">{ error}</p>
  }

  if ( status === 'completed' && ( !loadedQuotes || loadedQuotes.length === 0 ) ) {
    return <NoQuotesFound />
  }
  return <QuoteList quotes={loadedQuotes} />
};

export default AllQuotes;
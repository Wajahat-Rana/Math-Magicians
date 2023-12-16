import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        
        const fetchedQuote = `${data.content} — ${data.author}`;
        setQuote(fetchedQuote);
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
};

fetchQuote();
  }, []);

  return (
    <div className='container' style={{ border: "1px solid gray", borderRadius: "30px 0px 0px 0px", marginTop: "10%", padding: "20px" }}>
      <p>{quote}</p>
    </div>
  );
}

export default Quote;

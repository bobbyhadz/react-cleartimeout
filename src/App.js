import './App.css';

import {useEffect, useState} from 'react';

export default function App() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(true);
    }, 1000);

    return () => {
      // 👇️ clear timeout when the component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      {isShown ? (
        <div>
          <h2>isShown = true</h2>
        </div>
      ) : (
        <div>
          <h2>isShown = false</h2>
        </div>
      )}
    </div>
  );
}

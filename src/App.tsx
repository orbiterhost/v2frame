import { useState, useEffect, useCallback } from 'react'
import './App.css'
import sdk from '@farcaster/frame-sdk';
import { Context } from '@farcaster/frame-sdk';

function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();
  const [isContextOpen, setIsContextOpen] = useState(false);

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  const toggleContext = useCallback(() => {
    setIsContextOpen((prev) => !prev);
  }, []);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      maxWidth: "400px",
      margin: "0 auto",
      padding: "0 16px"
    }}>
      <h1>Frames v2 Demo</h1>

      <div>
        <h2>Context</h2>
        <button
          onClick={toggleContext}
        >
          <span>
            ➤
          </span>
          Tap to expand
        </button>

        {isContextOpen && (
          <div style={{
            overflow: 'auto',
            maxWidth: '100%'
          }}>
            <pre style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
              fontSize: '14px'
            }}>
              {JSON.stringify(context, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

'use client';

import { ConversationProvider, useConversation } from '@elevenlabs/react';
import { useState } from 'react';

export function CuratorConcierge({ agentId }: { agentId: string }) {
  const [open, setOpen] = useState(false);

  return <div className={`concierge${open ? ' is-open' : ''}`}>
    <button
      className="concierge-toggle"
      type="button"
      aria-expanded={open}
      aria-label={open ? 'Close talk to agent concierge' : 'Talk to agent — J. Sterling Chief Curator'}
      title={open ? 'Close curator concierge' : 'Talk to agent — J. Sterling'}
      onClick={() => setOpen(!open)}
    >
      <span className="clip" aria-hidden="true">⌁</span>
      <b>J. STERLING <i>CURATOR</i></b>
      <small>Chief Curator Concierge</small>
      <strong aria-hidden="true">{open ? '−' : '⌃'}</strong>
    </button>
    {open && <section className="concierge-panel" aria-label="J. Sterling voice concierge">
      <div className="concierge-heading"><span className="concierge-avatar">JS</span><div><h3>Speak with J. Sterling</h3><p>Live curator concierge</p></div></div>
      {agentId ? <ConversationProvider agentId={agentId}><VoiceSession /></ConversationProvider> : <p className="concierge-error">The public agent ID is missing. Add <code>NEXT_PUBLIC_ELEVENLABS_AGENT_ID</code> to <code>.env.local</code> and restart the site.</p>}
    </section>}
  </div>;
}

function VoiceSession() {
  const [error, setError] = useState('');
  const { startSession, endSession, status, isMuted, setMuted, isSpeaking, isListening, message } = useConversation({
    onError: () => setError('The voice session could not connect. Check microphone permission and that the public agent is available.'),
    onConnect: () => setError(''),
  });
  const connected = status === 'connected';
  const connecting = status === 'connecting';

  async function startTalking() {
    setError('');
    try {
      startSession();
    } catch {
      setError('The voice session could not start. Check microphone permission and try again.');
    }
  }

  return <>
    {connected ? <>
      <div className="concierge-live-state"><span className="live-dot" />{isSpeaking ? 'J. Sterling is speaking' : isListening ? 'Listening to you' : 'Conversation connected'}</div>
      {message && <p className="concierge-transcript" aria-live="polite">{message}</p>}
      <div className="concierge-controls">
        <button type="button" onClick={() => setMuted(!isMuted)}>{isMuted ? 'Unmute microphone' : 'Mute microphone'}</button>
        <button type="button" className="concierge-end" onClick={() => { endSession(); setError(''); }}>End conversation</button>
      </div>
    </> : <>
      <p className="concierge-intro">Ask about the collection, compare two cars, or arrange a private inspection. Your microphone is active only during a voice session.</p>
      <button className="concierge-start" type="button" disabled={connecting} onClick={startTalking}>{connecting ? 'Connecting…' : 'Start talking'}<span aria-hidden="true">↗</span></button>
    </>}
    {error && <p className="concierge-error" role="alert">{error}</p>}
  </>;
}

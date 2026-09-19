import { useMemo, useRef, useState } from 'react';
import styles from './Messages.module.css';
import { Check, CheckCheck, MoreVertical, Paperclip, Phone, Search, Send, Smile, Video } from 'lucide-react';

export default function Messages() {
  const [contacts, setContacts] = useState([
    { name: 'Rahul Sharma', initials: 'RS', status: 'Online', time: '2h', msg: 'Hey, how are you?', color: 'coral', unread: 2, messages: [{ text: 'Hey, how are you?', received: true, time: '10:24 AM' }, { text: "I'm good! How about you?", received: false, time: '10:25 AM' }] },
    { name: 'Priya Mehta', initials: 'PM', status: 'Away', time: '5h', msg: "Let's plan for the weekend", color: 'teal', unread: 0, messages: [{ text: "Let's plan for the weekend", received: true, time: 'Yesterday' }] },
    { name: 'Amit Verma', initials: 'AV', status: 'Offline', time: '1d', msg: 'Good luck for your exam!', color: 'gold', unread: 0, messages: [{ text: 'Good luck for your exam!', received: true, time: 'Monday' }] },
    { name: 'Neha Kapoor', initials: 'NK', status: 'Online', time: '3d', msg: 'The photos are ready', color: 'blue', unread: 0, messages: [{ text: 'The photos are ready', received: true, time: 'Friday' }] },
  ]);
  const [selectedName, setSelectedName] = useState('Rahul Sharma');
  const [query, setQuery] = useState('');
  const [draft, setDraft] = useState('');
  const fileInputRef = useRef(null);
  const activeContact = contacts.find((contact) => contact.name === selectedName) ?? contacts[0];
  const visibleContacts = useMemo(() => contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase())), [contacts, query]);

  function selectContact(name) {
    setSelectedName(name);
    setContacts((current) => current.map((contact) => contact.name === name ? { ...contact, unread: 0 } : contact));
  }

  function sendMessage(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setContacts((current) => current.map((contact) => contact.name === activeContact.name ? { ...contact, msg: text, time: 'now', messages: [...contact.messages, { text, received: false, time: 'now' }] } : contact));
    setDraft('');
  }

  function addEmoji() { setDraft((current) => `${current}${current ? ' ' : ''}😊`); }
  function attachFile() { fileInputRef.current?.click(); }
  function handleFile(event) { const file = event.target.files?.[0]; if (file) setDraft(`Attached: ${file.name}`); }

  return (
    <div className={styles.container}>
      <div className={styles.conversationsPanel}>
        <div className={styles.panelHeader}>
          <div className={styles.headingRow}><div><p className={styles.eyebrow}>INBOX</p><h1 className={styles.title}>Messages</h1></div><button className={styles.newButton} onClick={() => setQuery('')} aria-label="Clear conversation search">+</button></div>
          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search conversations" className={styles.searchInput} />
          </div>
        </div>
        <div className={styles.contactList}>
          {visibleContacts.map((contact) => (
            <button type="button" key={contact.name} onClick={() => selectContact(contact.name)} className={`${styles.contactItem} ${contact.name === activeContact.name ? styles.activeContact : ''}`}>
              <span className={`${styles.avatar} ${styles[contact.color]}`}>{contact.initials}</span>
              <div className={styles.contactDetails}>
                <div className={styles.contactHeader}>
                  <h3 className={styles.contactName}>{contact.name}</h3>
                  <span className={styles.time}>{contact.time}</span>
                </div>
                <p className={styles.previewMsg}>{contact.msg}</p>
              </div>
              {contact.unread > 0 && <span className={styles.unread}>{contact.unread}</span>}
            </button>
          ))}
          {visibleContacts.length === 0 && <p className={styles.emptyState}>No conversations found.</p>}
        </div>
      </div>

      <div className={styles.chatPanel}>
        <div className={styles.chatHeader}>
          <div className={styles.activeUser}>
            <span className={`${styles.avatar} ${styles[activeContact.color]}`}>{activeContact.initials}</span>
            <div>
              <h3 className={styles.contactName}>{activeContact.name}</h3>
              <p className={styles.onlineStatus}><span className={styles.statusDot}></span>{activeContact.status}</p>
            </div>
          </div>
          <div className={styles.headerIcons}>
            <button aria-label="Start voice call" title="Voice call"><Phone size={18} /></button><button aria-label="Start video call" title="Video call"><Video size={18} /></button><button aria-label="More options" title="More options"><MoreVertical size={18} /></button>
          </div>
        </div>

        <div className={styles.chatHistory}>
          <div className={styles.dateDivider}>Today</div>
          {activeContact.messages.map((message, index) => <div key={`${message.time}-${index}`} className={message.received ? styles.msgReceived : styles.msgSent}><div className={styles.msgBubble}>{message.text}</div><span className={styles.msgTime}>{message.time} {message.received ? <Check size={12} /> : <CheckCheck size={12} />}</span></div>)}
        </div>

        <form className={styles.chatInputArea} onSubmit={sendMessage}>
          <div className={styles.inputWrapper}>
            <button type="button" className={styles.inputButton} onClick={addEmoji} aria-label="Add emoji"><Smile size={19} /></button><button type="button" className={styles.inputButton} onClick={attachFile} aria-label="Attach file"><Paperclip size={19} /></button><input ref={fileInputRef} className={styles.hiddenFileInput} type="file" onChange={handleFile} /><input value={draft} onChange={(event) => setDraft(event.target.value)} type="text" placeholder={`Message ${activeContact.name.split(' ')[0]}...`} className={styles.msgInput} /><button type="submit" className={styles.sendBtn} aria-label="Send message"><Send size={16} /></button>
          </div>
        </form>
      </div>
    </div>
  );
}
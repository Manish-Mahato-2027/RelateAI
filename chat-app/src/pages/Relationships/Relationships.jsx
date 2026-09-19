import { MoreVertical, Plus } from 'lucide-react';
import styles from './Relationships.module.css';

export default function Relationships() {
  const relationships = [
    { id: 1, name: 'Rahul', relation: 'Friend', strength: 78, color: '#22c55e', img: '20' },
    { id: 2, name: 'Priya', relation: 'Friend', strength: 91, color: '#22c55e', img: '21' },
    { id: 3, name: 'Amit', relation: 'Colleague', strength: 65, color: '#f59e0b', img: '22' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>My Relationships</h1>
          <p className={styles.subtitle}>Manage and view your relationships</p>
        </div>
        <button className={styles.addBtnTop}>
          <Plus size={16} /> Add Relationship
        </button>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.grid}>
          {/* Render Existing Relationships */}
          {relationships.map((person) => (
            <div key={person.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.userInfo}>
                  <img 
                    src={`https://i.pravatar.cc/150?img=${person.img}`} 
                    alt={person.name} 
                    className={styles.avatar} 
                  />
                  <div>
                    <h3 className={styles.name}>{person.name}</h3>
                    <p className={styles.relationType}>{person.relation}</p>
                  </div>
                </div>
                <button className={styles.moreBtn}><MoreVertical size={18} /></button>
              </div>

              <div className={styles.strengthSection}>
                <div className={styles.strengthLabel}>
                  <span>Strength: {person.strength}/100</span>
                </div>
                <div className={styles.progressBarBg}>
                  <div 
                    className={styles.progressBarFill} 
                    style={{ width: `${person.strength}%`, backgroundColor: person.color }}
                  ></div>
                </div>
              </div>

              <div className={styles.cardActions}>
                <button className={styles.actionBtn}>View Analysis</button>
                <button className={styles.actionBtn}>Chat</button>
              </div>
            </div>
          ))}

          {/* Add New Relationship Card */}
          <div className={styles.addCard}>
            <div className={styles.addIconWrapper}>
              <Plus size={24} className={styles.addIcon} />
            </div>
            <h3 className={styles.addCardTitle}>Add New Relationship</h3>
            <p className={styles.addCardSubtitle}>Start analyzing a new relationship</p>
            <button className={styles.addBtnCard}>Add</button>
          </div>
        </div>
      </main>
    </div>
  );
}
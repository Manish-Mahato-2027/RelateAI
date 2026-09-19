import { ArrowRight, MessageCircle, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.welcome}>
        <p className={styles.eyebrow}>THURSDAY, SEPTEMBER 17</p>
        <h1>Good afternoon, Manish.</h1>
        <p className={styles.intro}>Keep your important conversations close and your relationships moving forward.</p>
        <Link className={styles.primaryAction} to="/messages">Open messages <ArrowRight size={17} /></Link>
      </div>

      <div className={styles.stats}>
        <article className={styles.statCard}><span className={`${styles.statIcon} ${styles.coral}`}><MessageCircle size={19} /></span><strong>12</strong><span>Active conversations</span></article>
        <article className={styles.statCard}><span className={`${styles.statIcon} ${styles.teal}`}><Users size={19} /></span><strong>8</strong><span>People connected</span></article>
        <article className={styles.statCard}><span className={`${styles.statIcon} ${styles.gold}`}><Sparkles size={19} /></span><strong>94%</strong><span>Positive sentiment</span></article>
      </div>

      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>YOUR SPACE</p><h2>Stay in the loop</h2></div><Link to="/messages">View all <ArrowRight size={15} /></Link></div>
      <div className={styles.focusPanel}><div><span className={styles.focusLabel}>NEXT UP</span><h2>Catch up with your people</h2><p>You have 2 unread messages waiting in your inbox.</p></div><Link className={styles.secondaryAction} to="/messages">Go to inbox <ArrowRight size={16} /></Link></div>
    </section>
  );
}
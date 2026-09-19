import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, User, Eye } from 'lucide-react';
import styles from './Auth.module.css';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, create account here. For now, navigate to login.
    navigate('/login');
  };

  return (
    <div className={styles.authContainer}>
      {/* Left Branding Panel (Identical to Login) */}
      <div className={styles.brandPanel}>
        <div className={styles.brandHeader}>
          <div className={styles.logoWrapper}>
            <Heart size={32} className={styles.logoIcon} />
            <span className={styles.brandTitle}>RelateAI</span>
          </div>
          <span className={styles.brandSubtitle}>Understand • Analyze • Grow</span>
        </div>
        <div>
          <h1 className={styles.heroText}>Better Conversations<br/>Stronger Relationships</h1>
          <div className={styles.heroImagePlaceholder}>
            <div className={styles.imageBox}>Silhouette Illustration Placeholder</div>
          </div>
        </div>
        <p className={styles.brandFooter}>AI powered insights for a healthier<br/>and happier you.</p>
      </div>

      {/* Right Register Form */}
      <div className={styles.formPanel}>
        <div className={styles.formBox}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Create Your Account</h2>
            <p className={styles.formSubtitle}>Join RelateAI today</p>
          </div>

          <form onSubmit={handleRegister}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Full Name</label>
              <User size={18} className={styles.inputIcon} />
              <input type="text" placeholder="Enter your name" className={styles.inputField} required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Email address</label>
              <Mail size={18} className={styles.inputIcon} />
              <input type="email" placeholder="Enter your email" className={styles.inputField} required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Password</label>
              <Lock size={18} className={styles.inputIcon} />
              <input type="password" placeholder="Create a password" className={styles.inputField} required />
              <button type="button" className={styles.passwordToggle}><Eye size={18}/></button>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Confirm Password</label>
              <Lock size={18} className={styles.inputIcon} />
              <input type="password" placeholder="Confirm your password" className={styles.inputField} required />
              <button type="button" className={styles.passwordToggle}><Eye size={18}/></button>
            </div>

            <button type="submit" className={styles.submitBtn}>Register</button>
          </form>

          <p className={styles.switchAuth}>
            Already have an account? <Link to="/login" className={styles.switchAuthLink}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
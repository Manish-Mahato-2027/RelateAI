import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, Eye } from 'lucide-react';
import styles from './Auth.module.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, authenticate here. For now, navigate to dashboard.
    navigate('/');
  };

  return (
    <div className={styles.authContainer}>
      {/* Left Branding Panel */}
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

      {/* Right Login Form */}
      <div className={styles.formPanel}>
        <div className={styles.formBox}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Welcome Back 👋</h2>
            <p className={styles.formSubtitle}>Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Email address</label>
              <Mail size={18} className={styles.inputIcon} />
              <input type="email" placeholder="Enter your email" className={styles.inputField} required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Password</label>
              <Lock size={18} className={styles.inputIcon} />
              <input type="password" placeholder="••••••••" className={styles.inputField} required />
              <button type="button" className={styles.passwordToggle}><Eye size={18}/></button>
            </div>

            <div className={styles.optionsRow}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className={styles.forgotLink}>Forgot password?</a>
            </div>

            <button type="submit" className={styles.submitBtn}>Login</button>

            <div className={styles.divider}>OR</div>

            <button type="button" className={styles.googleBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
          </form>

          <p className={styles.switchAuth}>
            Don't have an account? <Link to="/register" className={styles.switchAuthLink}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
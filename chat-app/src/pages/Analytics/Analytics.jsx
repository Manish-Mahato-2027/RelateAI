import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { Heart, MessageSquare, Smile, CheckCircle2 } from 'lucide-react';
import styles from './Analytics.module.css';

export default function Analysis() {
  // Mock Data for Charts
  const trendData = [
    { date: 'Sep 11', positive: 65, neutral: 20, negative: 15 },
    { date: 'Sep 12', positive: 70, neutral: 22, negative: 8 },
    { date: 'Sep 13', positive: 68, neutral: 25, negative: 7 },
    { date: 'Sep 14', positive: 75, neutral: 15, negative: 10 },
    { date: 'Sep 15', positive: 80, neutral: 15, negative: 5 },
    { date: 'Sep 16', positive: 72, neutral: 20, negative: 8 },
    { date: 'Sep 17', positive: 85, neutral: 10, negative: 5 },
  ];

  const sentimentData = [
    { name: 'Positive', value: 72, color: '#22c55e' },
    { name: 'Neutral', value: 20, color: '#3b82f6' },
    { name: 'Negative', value: 8, color: '#ef4444' },
  ];

  const emotions = [
    { name: 'Happy', percent: 48, color: '#f59e0b' },
    { name: 'Neutral', percent: 27, color: '#3b82f6' },
    { name: 'Sad', percent: 15, color: '#6b7280' },
    { name: 'Angry', percent: 10, color: '#ef4444' },
  ];

  const topics = [
    { name: 'Career', percent: 32 },
    { name: 'College', percent: 24 },
    { name: 'Hobbies', percent: 18 },
    { name: 'Travel', percent: 12 },
    { name: 'Others', percent: 14 },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Relationship Analysis</h1>
          <p className={styles.subtitle}>Detailed insights about your relationship with Rahul</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.analyzeBtn}>↻ Analyze Again</button>
          <select className={styles.dateSelect}>
            <option>Last 30 days</option>
          </select>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Top Summary Cards */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Relationship Strength</span>
              <Heart size={18} className={styles.iconRed} />
            </div>
            <div className={styles.cardValue}>78/100</div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Sentiment</span>
              <Smile size={18} className={styles.iconGreen} />
            </div>
            <div className={styles.cardValue}>72% <span className={styles.cardValueSub}>Positive</span></div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Total Messages</span>
              <MessageSquare size={18} className={styles.iconBlue} />
            </div>
            <div className={styles.cardValue}>1,240</div>
          </div>
        </div>

        {/* Middle Analysis Grid */}
        <div className={styles.analysisGrid}>
          {/* Sentiment Donut Chart */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Sentiment Analysis</h3>
            <div className={styles.pieContainer}>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className={styles.pieLegend}>
                {sentimentData.map(item => (
                  <div key={item.name} className={styles.legendItem}>
                    <div className={styles.legendColor} style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                    <span className={styles.legendValue}>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emotion Progress Bars */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Emotion Analysis</h3>
            <div className={styles.emotionList}>
              {emotions.map(emo => (
                <div key={emo.name} className={styles.emotionRow}>
                  <span className={styles.emotionName}>{emo.name}</span>
                  <div className={styles.barBg}>
                    <div className={styles.barFill} style={{ width: `${emo.percent}%`, backgroundColor: emo.color }}></div>
                  </div>
                  <span className={styles.emotionValue}>{emo.percent}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Topics List */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Top Topics</h3>
            <ul className={styles.topicList}>
              {topics.map((topic, i) => (
                <li key={i} className={styles.topicItem}>
                  <div className={styles.topicName}>
                    <span className={styles.topicDot}></span>
                    {topic.name}
                  </div>
                  <span className={styles.topicValue}>{topic.percent}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Trend & Insights Grid */}
        <div className={styles.bottomGrid}>
          {/* Trend Line Chart */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Relationship Trend</h3>
            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="positive" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="neutral" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Insights List */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Key Insights</h3>
            <ul className={styles.insightsList}>
              <li>
                <CheckCircle2 size={16} className={styles.insightIcon} />
                <span>Communication is mostly positive.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className={styles.insightIcon} />
                <span>Career and college are common topics.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className={styles.insightIcon} />
                <span>Relationship strength is increasing.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
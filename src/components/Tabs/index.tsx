import React, {useState} from "react";
import styles from './Tabs.module.scss';


const Tabs: React.FC = () => {
    const tabList = [
        {label: '首页', key: 'home'},
        {label: '精选文章', key: 'articles'}
    ];
    const [active, setActive] = useState('home');

    return (
        <div className={styles.tabs}>
            {tabList.map(tab => (
                <div
                    key={tab.key}
                    className={`
            ${styles.tab}
            ${tab.key === 'home' ? styles.home : ''}
            ${active === tab.key ? styles.active : ''}
          `}
                    onClick={() => setActive(tab.key)}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
}
export default Tabs
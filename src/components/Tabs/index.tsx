import React, {useState} from "react";
import styles from './Tabs.module.scss';


const Tabs: React.FC = () => {
    const tabList = [
        {label: '首页', key: 'home'},
        {label: 'JavaScript', key: 'js'},
        {label: 'React', key: 'react'},
        {label: 'Vue', key: 'vue'},
        {label: '浏览器', key: 'browser'},
        {label: '网络', key: 'network'},
        {label: 'Project', key: 'project'},
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
// src/components/visualization/ArrayVisualization.tsx
import React, { useState } from "react";
import styles from "./Visualization.module.scss";

const ArrayVisualization: React.FC = () => {
    const [array, setArray] = useState([3, 1, 4, 2, 5]);

    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 10)]);
    };

    const removeElement = () => {
        if (array.length > 0) {
            setArray(array.slice(0, -1));
        }
    };

    const sortArray = () => {
        setArray([...array].sort());
    };

    return (
        <div className={styles.visualizationContainer}>
            <div className={styles.controls}>
                <button onClick={addElement}>添加元素</button>
                <button onClick={removeElement}>删除元素</button>
                <button onClick={sortArray}>排序</button>
                <button onClick={() => setArray([3, 1, 4, 2, 5])}>重置</button>
            </div>

            <div className={styles.arrayContainer}>
                {array.map((value, index) => (
                    <div key={index} className={styles.arrayElement}>
                        <div className={styles.elementValue}>{value}</div>
                        <div className={styles.elementIndex}>{index}</div>
                    </div>
                ))}
            </div>

            <div className={styles.description}>
                <h3>数组结构</h3>
                <p>数组是一种线性数据结构，元素在内存中连续存储。</p>
                <ul>
                    <li>访问时间复杂度: O(1)</li>
                    <li>插入/删除时间复杂度: O(n)</li>
                    <li>空间复杂度: O(n)</li>
                </ul>
            </div>
        </div>
    );
};

export default ArrayVisualization;
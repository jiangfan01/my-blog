// src/components/visualization/QueueVisualization.tsx
import React, { useState, useEffect } from 'react';
import styles from './Visualization.module.scss';
import { gsap } from 'gsap';

const QueueVisualization: React.FC = () => {
    const [queue, setQueue] = useState<number[]>([10, 20, 30, 40]);
    const [newValue, setNewValue] = useState<number>(50);
    const [message, setMessage] = useState<string>('');
    const [isPeeking, setIsPeeking] = useState<boolean>(false);

    // 添加元素到队尾
    const enqueue = () => {
        if (queue.length >= 8) {
            setMessage('队列已满！最多只能容纳8个元素');
            return;
        }

        setMessage(`元素 ${newValue} 已入队`);
        const newQueue = [...queue, newValue];
        setQueue(newQueue);
        setNewValue(prev => prev + 10);

        // 添加动画
        const element = document.getElementById(`queue-element-${newQueue.length - 1}`);
        if (element) {
            gsap.fromTo(element,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.5 }
            );
        }
    };

    // 从队首移除元素
    const dequeue = () => {
        if (queue.length === 0) {
            setMessage('队列已空！无法执行出队操作');
            return;
        }

        const dequeuedValue = queue[0];
        setMessage(`元素 ${dequeuedValue} 已出队`);

        // 动画效果
        const element = document.getElementById(`queue-element-0`);
        if (element) {
            gsap.to(element, {
                x: -50,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    setQueue(queue.slice(1));
                }
            });
        } else {
            setQueue(queue.slice(1));
        }
    };

    // 查看队首元素
    const peek = () => {
        if (queue.length === 0) {
            setMessage('队列已空！无法查看队首元素');
            return;
        }

        setMessage(`队首元素: ${queue[0]}`);
        setIsPeeking(true);

        // 高亮显示队首元素
        setTimeout(() => {
            setIsPeeking(false);
        }, 2000);
    };

    // 清空队列
    const clearQueue = () => {
        setMessage('队列已清空');
        setQueue([]);
        setNewValue(10);
    };

    // 自动清除消息
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className={styles.visualizationContainer}>
            <div className={styles.queueControls}>
                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={newValue}
                        onChange={(e) => setNewValue(Number(e.target.value))}
                        min="1"
                        max="100"
                        className={styles.queueInput}
                    />
                    <button
                        className={`${styles.queueButton} ${styles.enqueue}`}
                        onClick={enqueue}
                    >
                        <i className="fas fa-arrow-right"></i> 入队 (Enqueue)
                    </button>
                </div>

                <div className={styles.queueActions}>
                    <button
                        className={`${styles.queueButton} ${styles.dequeue}`}
                        onClick={dequeue}
                    >
                        <i className="fas fa-arrow-left"></i> 出队 (Dequeue)
                    </button>
                    <button
                        className={`${styles.queueButton} ${styles.peek}`}
                        onClick={peek}
                    >
                        <i className="fas fa-eye"></i> 查看队首 (Peek)
                    </button>
                    <button
                        className={`${styles.queueButton} ${styles.clear}`}
                        onClick={clearQueue}
                    >
                        <i className="fas fa-trash"></i> 清空队列
                    </button>
                </div>
            </div>

            <div className={styles.queueVisualization}>
                <div className={styles.queueContainer}>
                    <div className={styles.queueFront}>
                        <div className={styles.queueLabel}>队首 (Front)</div>
                        <div className={styles.queueArrow}><i className="fas fa-arrow-right"></i></div>
                    </div>

                    <div className={styles.queueElements}>
                        {queue.length === 0 ? (
                            <div className={styles.emptyQueue}>
                                <i className="fas fa-inbox"></i>
                                <p>队列为空</p>
                            </div>
                        ) : (
                            queue.map((value, index) => (
                                <div
                                    key={index}
                                    id={`queue-element-${index}`}
                                    className={`${styles.queueElement} ${
                                        index === 0 && isPeeking ? styles.peeking : ''
                                    }`}
                                >
                                    <div className={styles.elementValue}>{value}</div>
                                    <div className={styles.elementPosition}>
                                        {index === 0 ? '队首' : index === queue.length - 1 ? '队尾' : `位置 ${index}`}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className={styles.queueRear}>
                        <div className={styles.queueLabel}>队尾 (Rear)</div>
                        <div className={styles.queueArrow}><i className="fas fa-arrow-left"></i></div>
                    </div>
                </div>
            </div>

            {message && (
                <div className={styles.message}>
                    <i className="fas fa-info-circle"></i>
                    {message}
                </div>
            )}

            <div className={styles.description}>
                <h3>队列数据结构</h3>
                <p>队列是一种先进先出(FIFO)的数据结构，最先添加的元素最先被移除。</p>
                <ul>
                    <li><strong>入队(Enqueue)</strong> - 将元素添加到队尾，时间复杂度: O(1)</li>
                    <li><strong>出队(Dequeue)</strong> - 移除队首元素，时间复杂度: O(1)</li>
                    <li><strong>查看队首(Peek)</strong> - 获取队首元素但不移除，时间复杂度: O(1)</li>
                    <li><strong>空间复杂度</strong>: O(n)</li>
                </ul>
                <div className={styles.queueUsage}>
                    <h4>实际应用场景:</h4>
                    <ul>
                        <li>打印机任务队列</li>
                        <li>消息队列系统</li>
                        <li>CPU任务调度</li>
                        <li>网站请求处理</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QueueVisualization;
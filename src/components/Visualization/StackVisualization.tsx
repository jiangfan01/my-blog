// src/components/visualization/StackVisualization.tsx
import React, { useState, useEffect } from 'react';
import styles from './Visualization.module.scss';
import { gsap } from 'gsap';

const StackVisualization: React.FC = () => {
    const [stack, setStack] = useState<number[]>([10, 20, 30, 40]);
    const [newValue, setNewValue] = useState<number>(50);
    const [message, setMessage] = useState<string>('');
    const [isPeeking, setIsPeeking] = useState<boolean>(false);

    // 添加元素到栈顶
    const push = () => {
        if (stack.length >= 8) {
            setMessage('栈已满！最多只能容纳8个元素');
            return;
        }

        setMessage(`元素 ${newValue} 已入栈`);
        setStack([...stack, newValue]);
        setNewValue(prev => prev + 10);
    };

    // 从栈顶移除元素
    const pop = () => {
        if (stack.length === 0) {
            setMessage('栈已空！无法执行出栈操作');
            return;
        }

        const poppedValue = stack[stack.length - 1];
        setMessage(`元素 ${poppedValue} 已出栈`);

        // 动画效果
        const element = document.getElementById(`stack-element-${stack.length - 1}`);
        if (element) {
            gsap.to(element, {
                y: -100,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    setStack(stack.slice(0, -1));
                }
            });
        } else {
            setStack(stack.slice(0, -1));
        }
    };

    // 查看栈顶元素
    const peek = () => {
        if (stack.length === 0) {
            setMessage('栈已空！无法查看栈顶元素');
            return;
        }

        setMessage(`栈顶元素: ${stack[stack.length - 1]}`);
        setIsPeeking(true);

        // 高亮显示栈顶元素
        setTimeout(() => {
            setIsPeeking(false);
        }, 2000);
    };

    // 清空栈
    const clearStack = () => {
        setMessage('栈已清空');
        setStack([]);
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
            <div className={styles.controls}>
                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={newValue}
                        onChange={(e) => setNewValue(Number(e.target.value))}
                        min="1"
                        max="100"
                    />
                    <button onClick={push}>入栈 (Push)</button>
                </div>

                <button onClick={pop}>出栈 (Pop)</button>
                <button onClick={peek}>查看栈顶 (Peek)</button>
                <button onClick={clearStack}>清空栈 (Clear)</button>
            </div>

            <div className={styles.stackContainer}>
                <div className={styles.stackBase}>栈底</div>

                <div className={styles.stackElements}>
                    {stack.length === 0 ? (
                        <div className={styles.emptyStack}>
                            <i className="fas fa-inbox"></i>
                            <p>栈为空</p>
                        </div>
                    ) : (
                        stack.map((value, index) => (
                            <div
                                key={index}
                                id={`stack-element-${index}`}
                                className={`${styles.stackElement} ${
                                    index === stack.length - 1 ? styles.topElement : ''
                                } ${isPeeking && index === stack.length - 1 ? styles.peeking : ''}`}
                                style={{
                                    zIndex: index,
                                    animationDelay: `${index * 0.1}s`,
                                    borderColor: `var(--primary-color)`,
                                }}
                            >
                                <div className={styles.elementValue}>{value}</div>
                                <div className={styles.elementIndex}>位置: {index}</div>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.stackTop}>栈顶</div>
            </div>

            {message && (
                <div className={styles.message}>
                    <i className="fas fa-info-circle"></i>
                    {message}
                </div>
            )}

            <div className={styles.description}>
                <h3>栈数据结构</h3>
                <p>栈是一种后进先出(LIFO)的数据结构，最后添加的元素最先被移除。</p>
                <ul>
                    <li><strong>入栈(Push)</strong> - 将元素添加到栈顶，时间复杂度: O(1)</li>
                    <li><strong>出栈(Pop)</strong> - 移除栈顶元素，时间复杂度: O(1)</li>
                    <li><strong>查看栈顶(Peek)</strong> - 获取栈顶元素但不移除，时间复杂度: O(1)</li>
                    <li><strong>空间复杂度</strong>: O(n)</li>
                </ul>
                <div className={styles.stackUsage}>
                    <h4>实际应用场景:</h4>
                    <ul>
                        <li>函数调用栈</li>
                        <li>浏览器历史记录</li>
                        <li>撤销/重做功能</li>
                        <li>表达式求值</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StackVisualization;
// src/components/visualization/FibonacciVisualization.tsx
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Visualization.module.scss";

const FibonacciVisualization: React.FC = () => {
    // 状态管理
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed] = useState(1);
    const [tableData, setTableData] = useState<number[]>([]);
    const [path, setPath] = useState<number[]>([]);
    const [,setRecursiveCalls] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLTableElement>(null);
    const callStackRef = useRef<HTMLDivElement>(null);

    // 斐波那契数列定义
    const problem = {
        title: "斐波那契数列",
        description: "计算斐波那契数列的第n项",
        formula: "F(n) = F(n-1) + F(n-2)",
        size: 8,
        baseCases: [0, 1],
        init: () => Array(8).fill(-1),
        calculate: (n: number, dp: number[]) => {
            setRecursiveCalls(prev => prev + 1);

            if (n <= 1) return n;
            if (dp[n] !== -1) return dp[n];

            // 添加递归调用动画
            if (callStackRef.current) {
                const callElement = document.createElement("div");
                callElement.textContent = `F(${n}) = F(${n-1}) + F(${n-2})`;
                callStackRef.current.prepend(callElement);

                // 动画效果
                gsap.fromTo(callElement,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.3 }
                );
            }

            dp[n] = problem.calculate(n-1, dp) + problem.calculate(n-2, dp);
            return dp[n];
        }
    };

    // 初始化表格数据
    useEffect(() => {
        resetVisualization();
    }, []);

    // 动画控制
    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                if (currentStep < problem.size) {
                    setCurrentStep(prev => prev + 1);
                    nextStep();
                } else {
                    setIsPlaying(false);
                }
            }, 1500 / speed);

            return () => clearTimeout(timer);
        }
    }, [isPlaying, currentStep, speed]);

    // 重置可视化
    const resetVisualization = () => {
        setCurrentStep(0);
        setIsPlaying(false);
        setRecursiveCalls(0);

        const initialData = problem.init();
        initialData[0] = 0;
        initialData[1] = 1;
        setTableData(initialData);
        setPath([]);

        // 清空递归调用栈
        if (callStackRef.current) {
            callStackRef.current.innerHTML = '';
        }
    };

    // 执行下一步
    const nextStep = () => {
        if (currentStep >= problem.size) return;

        const newStep = currentStep + 1;

        // 对于步骤0和1已经初始化，从步骤2开始计算
        if (newStep >= 2) {
            const newData = [...tableData];
            newData[newStep] = newData[newStep - 1] + newData[newStep - 2];
            setTableData(newData);

            // 添加路径点
            setPath([...path, newStep]);

            // 模拟递归调用
            if (callStackRef.current) {
                const callElement = document.createElement("div");
                callElement.textContent = `F(${newStep}) = F(${newStep-1}) + F(${newStep-2})`;
                callStackRef.current.prepend(callElement);

                // 动画效果
                gsap.fromTo(callElement,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.3 }
                );
            }
        }
    };

    // 单元格动画
    const animateCell = (col: number) => {
        const cell = tableRef.current?.querySelector(`tr:nth-child(1) td:nth-child(${col + 2})`);
        if (cell) {
            gsap.fromTo(cell,
                { scale: 0.8, backgroundColor: "#ffeb3b", color: "#000" },
                { scale: 1, backgroundColor: "#4caf50", color: "#fff", duration: 0.5 }
            );
        }
    };

    // 当步骤变化时执行动画
    useEffect(() => {
        if (currentStep > 0) {
            animateCell(currentStep);
        }
    }, [currentStep]);



    // 渲染公式和说明
    const renderFormula = () => {
        return (
            <div className={styles.formulaContainer}>
                <div className={styles.formulaCard}>
                    <h3>斐波那契数列公式</h3>
                    <div className={styles.formula}>F(n) = F(n-1) + F(n-2)</div>
                    <div className={styles.formulaExplanation}>
                        <p>每个数字是前两个数字之和</p>
                        <div className={styles.baseCases}>
                            <p>基础情况：</p>
                            <ul>
                                <li>F(0) = 0</li>
                                <li>F(1) = 1</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.dpExplanation}>
                    <h4>动态规划原理</h4>
                    <ul>
                        <li>
                            <strong>最优子结构</strong>: 问题的最优解包含子问题的最优解
                        </li>
                        <li>
                            <strong>重叠子问题</strong>: 递归算法会重复计算相同的子问题
                        </li>
                        <li>
                            <strong>状态转移</strong>: 定义状态和状态之间的转移关系
                        </li>
                        <li>
                            <strong>空间换时间</strong>: 存储子问题的解避免重复计算
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    // 渲染当前状态说明
    const renderStatus = () => {
        if (currentStep === 0) {
            return <div className={styles.status}>初始状态：初始化基础值 F(0)=0, F(1)=1</div>;
        }

        if (currentStep === 1) {
            return <div className={styles.status}>步骤1：基础值 F(1)=1 已设置</div>;
        }

        return (
            <div className={styles.status}>
                计算 F({currentStep}) = F({currentStep-1}) + F({currentStep-2}) =
                {tableData[currentStep-1]} + {tableData[currentStep-2]} = {tableData[currentStep]}
            </div>
        );
    };




    return (
        <div className={styles.dpVisualization} ref={containerRef}>
            <div className={styles.dpHeader}>
                <h2>斐波那契数列可视化</h2>
                <p>使用动态规划计算斐波那契数列 - 每个数字是前两个数字之和</p>
            </div>

            {renderStatus()}

            <div className={styles.visualizationArea}>
                {renderFormula()}
            </div>

            <div className={styles.dpExplanation}>
                <h3>斐波那契数列说明</h3>
                <p>
                    斐波那契数列是一个经典的递归问题，但简单的递归实现会有指数级的时间复杂度(O(2^n))。
                    使用动态规划，我们可以将时间复杂度降低到线性时间(O(n))。
                </p>

            </div>
        </div>
    );
};

export default FibonacciVisualization;
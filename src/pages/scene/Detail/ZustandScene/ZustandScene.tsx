import React, {useState, useEffect, useRef} from "react";
import {FaRocket, FaSync, FaChartLine, FaTools, FaBolt, FaInfoCircle} from "react-icons/fa";
import styles from './ZustandScene.module.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackButton from "../../../../components/BackButton/BackButton.tsx";

gsap.registerPlugin(ScrollTrigger);

const ZustandScene: React.FC = () => {
    const [count, setCount] = useState(0);
    const [activeDemo, setActiveDemo] = useState<number | null>(null);

    const headerRef = useRef<HTMLDivElement>(null);
    const sectionHeadersRef = useRef<HTMLDivElement[]>([]);
    const benefitCardsRef = useRef<HTMLDivElement[]>([]);
    const demoCardsRef = useRef<HTMLDivElement[]>([]);
    const featureCardsRef = useRef<HTMLDivElement[]>([]);
    const tableRef = useRef<HTMLDivElement>(null);

    // 模拟 Zustand store
    const [user, setUser] = useState({
        name: "Jiang Fan",
        email: "JF@example.com",
        isAdmin: false
    });

    const [todos, setTodos] = useState([
        {id: 1, text: "Learn Zustand", completed: true},
        {id: 2, text: "Build an app", completed: false},
        {id: 3, text: "Share knowledge", completed: false}
    ]);

    // 切换讲解面板
    const toggleExplanation = (index: number) => {
        setActiveDemo(activeDemo === index ? null : index);
    };

    // 示例方法 - 切换用户角色
    const toggleAdmin = () => {
        setUser(prev => ({
            ...prev,
            isAdmin: !prev.isAdmin
        }));
    };

    // 示例方法 - 添加待办事项
    const addTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            text: `New task ${todos.length + 1}`,
            completed: false
        };
        setTodos(prev => [...prev, newTodo]);
    };

    // 示例方法 - 切换待办事项状态
    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    // 初始化动画
    useEffect(() => {
        // 头部动画
        if (headerRef.current) {
            gsap.fromTo(headerRef.current,
                {opacity: 0, y: -50},
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }
            );
        }

        // 部分标题动画
        sectionHeadersRef.current.forEach((el, i) => {
            if (el) {
                gsap.fromTo(el,
                    {opacity: 0, y: 30},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: i * 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                    }
                );
            }
        });

        // 核心优势卡片动画
        benefitCardsRef.current.forEach((el, i) => {
            if (el) {
                gsap.fromTo(el,
                    {opacity: 0, scale: 0.8, y: 20},
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        },
                    }
                );
            }
        });

        // 安装/使用卡片动画
        gsap.utils.toArray<HTMLElement>([`.${styles.installationCard}`, `.${styles.usageExample}`]).forEach((el, i) => {
            gsap.fromTo(el,
                {opacity: 0, y: 40},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                }
            );
        });

        // 演示卡片动画
        demoCardsRef.current.forEach((el, i) => {
            if (el) {
                gsap.fromTo(el,
                    {opacity: 0, y: 50},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                    }
                );
            }
        });

        // 进阶用法卡片动画
        featureCardsRef.current.forEach((el, i) => {
            if (el) {
                gsap.fromTo(el,
                    {opacity: 0, y: 30},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        },
                    }
                );
            }
        });

        // 表格动画
        if (tableRef.current) {
            gsap.fromTo(tableRef.current,
                {opacity: 0, y: 30},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: tableRef.current,
                        start: "top 85%",
                    },
                }
            );
        }

        // 清理函数
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <BackButton/>
            <div className={styles.zustandContainer}>
                {/* 头部区域 */}
                <header className={styles.header} ref={headerRef}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerIcon}>
                            <FaBolt/>
                        </div>
                        <h1 className={styles.headerTitle}>探索 Zustand：React 状态管理的新选择</h1>
                        <p className={styles.subtitle}>
                            轻量、高效、无样板代码的 React 状态管理解决方案
                        </p>
                    </div>
                </header>

                {/* 核心优势卡片 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[0] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>Zustand 的核心优势</h2>
                        <p className={styles.sectionSubtitle}>为什么开发者纷纷转向 Zustand？</p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {/* 极简 API 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[0] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaRocket/>
                            </div>
                            <h3 className={styles.cardTitle}>极简 API</h3>
                            <p className={styles.cardText}>只需几行代码即可创建和使用状态存储，告别冗余的模板代码</p>
                        </div>

                        {/* 高性能 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[1] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaChartLine/>
                            </div>
                            <h3 className={styles.cardTitle}>高性能</h3>
                            <p className={styles.cardText}>自动优化组件更新，避免不必要的重渲染，提升应用性能</p>
                        </div>

                        {/* 异步友好 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[2] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaSync/>
                            </div>
                            <h3 className={styles.cardTitle}>异步友好</h3>
                            <p className={styles.cardText}>轻松处理异步操作，内置支持中间件和持久化</p>
                        </div>

                        {/* 灵活扩展 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[3] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaTools/>
                            </div>
                            <h3 className={styles.cardTitle}>灵活扩展</h3>
                            <p className={styles.cardText}>支持中间件、TypeScript 和 React DevTools，满足各种需求</p>
                        </div>
                    </div>
                </section>

                {/* 安装和使用指南 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[1] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>快速开始</h2>
                        <p className={styles.sectionSubtitle}>在项目中集成 Zustand</p>
                    </div>

                    <div className={styles.usageGrid}>
                        <div className={styles.installationCard}>
                            <h3 className={styles.cardTitle}>安装</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`npm install zustand
# 或
yarn add zustand`}</pre>
                            </div>
                        </div>

                        <div className={styles.usageExample}>
                            <h3 className={styles.cardTitle}>基本使用示例</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`import create from 'zustand';

// 创建 store
const useStore = create((set) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// 在组件中使用
function Counter() {
  const { count, increment } = useStore();
  return (
    <div>
      <button onClick={increment}>Count: {count}</button>
    </div>
  );
}`}</pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 实时示例展示 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[2] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>实时示例</h2>
                        <p className={styles.sectionSubtitle}>体验 Zustand 的实际应用</p>
                    </div>

                    <div className={styles.demoGrid}>
                        {/* 用户状态管理示例 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[0] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>用户状态管理</h3>
                                <button
                                    className={styles.infoButton}
                                    onClick={() => toggleExplanation(1)}
                                >
                                    <FaInfoCircle/>
                                </button>
                            </div>

                            <div className={styles.userInfo}>
                                <p className={styles.infoItem}><strong>姓名:</strong> {user.name}</p>
                                <p className={styles.infoItem}><strong>邮箱:</strong> {user.email}</p>
                                <p className={styles.infoItem}>
                                    <strong>角色:</strong> {user.isAdmin ? "管理员" : "普通用户"}
                                </p>
                            </div>
                            <button className={styles.actionButton} onClick={toggleAdmin}>
                                切换角色
                            </button>

                            {/* 代码讲解面板 */}
                            {activeDemo === 1 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>Zustand 实现代码解析</h4>
                                    <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// 1. 创建用户状态存储
import create from 'zustand';

// 创建用户状态存储
const useUserStore = create<UserState>((set) => ({
  name: "Jiang Fan",
  email: "JF@example.com",
  isAdmin: false,
  
  // 切换管理员状态的方法
  toggleAdmin: () => set((state) => ({ 
    isAdmin: !state.isAdmin 
  })),
}));

// 2. 在组件中使用
function UserProfile() {
  // 从存储中获取状态和方法
  const { name, email, isAdmin, toggleAdmin } = useUserStore();
  
  return (
    <div>
      <p><strong>姓名:</strong> {name}</p>
      <p><strong>邮箱:</strong> {email}</p>
      <p><strong>角色:</strong> {isAdmin ? "管理员" : "普通用户"}</p>
      <button onClick={toggleAdmin}>切换角色</button>
    </div>
  );
}`}</pre>
                                    </div>

                                    <div className={styles.explanationPoints}>
                                        <h5>代码解析：</h5>
                                        <ul>
                                            <li><strong>状态定义</strong>：在 store 中定义用户状态（name, email, isAdmin）
                                            </li>
                                            <li><strong>状态更新方法</strong>：通过 set 函数实现状态更新逻辑</li>
                                            <li><strong>组件使用</strong>：通过 useUserStore hook 获取状态和更新方法</li>
                                            <li><strong>类型安全</strong>：使用 TypeScript 接口确保类型安全</li>
                                            <li><strong>响应式更新</strong>：状态变更自动触发组件重新渲染</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 待办事项示例 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[1] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>待办事项</h3>
                                <button
                                    className={styles.infoButton}
                                    onClick={() => toggleExplanation(2)}
                                >
                                    <FaInfoCircle/>
                                </button>
                            </div>

                            <div className={styles.todosList}>
                                {todos.map(todo => (
                                    <div
                                        key={todo.id}
                                        className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
                                        onClick={() => toggleTodo(todo.id)}
                                    >
                                        {todo.text}
                                    </div>
                                ))}
                            </div>
                            <button className={styles.actionButton} onClick={addTodo}>
                                添加任务
                            </button>

                            {/* 代码讲解面板 */}
                            {activeDemo === 2 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>Zustand 实现代码解析</h4>
                                    <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// 1. 创建待办事项状态存储
import create from 'zustand';

// 创建待办事项状态存储
const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: 1, text: "Learn Zustand", completed: true },
    { id: 2, text: "Build an app", completed: false },
    { id: 3, text: "Share knowledge", completed: false }
  ],
  
  // 添加新待办事项
  addTodo: (text) => set((state) => ({
    todos: [
      ...state.todos,
      {
        id: state.todos.length + 1,
        text,
        completed: false
      }
    ]
  })),
  
  // 切换待办事项完成状态
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo
    )
  })),
}));

// 2. 在组件中使用
function TodoList() {
  // 从存储中获取状态和方法
  const { todos, addTodo, toggleTodo } = useTodoStore();
  
  return (
    <div>
      <div className="todos-list">
        {todos.map(todo => (
          <div 
            key={todo.id}
            className={\`todo-item \${todo.completed ? 'completed' : ''}\`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </div>
        ))}
      </div>
      <button onClick={() => addTodo(\`New task \${todos.length + 1}\`)}>
        添加任务
      </button>
    </div>
  );
}`}</pre>
                                    </div>

                                    <div className={styles.explanationPoints}>
                                        <h5>代码解析：</h5>
                                        <ul>
                                            <li><strong>状态结构</strong>：使用数组存储多个待办事项</li>
                                            <li><strong>不可变更新</strong>：通过扩展运算符创建新数组实现不可变更新</li>
                                            <li><strong>方法参数</strong>：addTodo 方法接收文本参数创建新任务</li>
                                            <li><strong>状态查找</strong>：toggleTodo 方法通过 id 查找并更新特定任务</li>
                                            <li><strong>派生状态</strong>：组件中直接使用 todos 数组渲染列表</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 计数器示例 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[2] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>计数器</h3>
                                <button
                                    className={styles.infoButton}
                                    onClick={() => toggleExplanation(3)}
                                >
                                    <FaInfoCircle/>
                                </button>
                            </div>

                            <div className={styles.counterDisplay}>{count}</div>
                            <div className={styles.counterActions}>
                                <button className={styles.counterButton} onClick={() => setCount(c => c + 1)}>增加
                                </button>
                                <button className={styles.counterButton} onClick={() => setCount(c => c - 1)}>减少
                                </button>
                                <button className={styles.counterButton} onClick={() => setCount(0)}>重置</button>
                            </div>

                            {/* 代码讲解面板 */}
                            {activeDemo === 3 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>Zustand 实现代码解析</h4>
                                    <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`
import create from 'zustand';

// 创建计数器状态存储
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  
  // 增加计数
  increment: () => set((state) => ({ 
    count: state.count + 1 
  })),
  
  // 减少计数
  decrement: () => set((state) => ({ 
    count: state.count - 1 
  })),
  
  // 重置计数
  reset: () => set({ 
    count: 0 
  }),
}));

// 2. 在组件中使用
function Counter() {
  // 从存储中获取状态和方法
  const { count, increment, decrement, reset } = useCounterStore();
  
  return (
    <div>
      <div className="counter-display">{count}</div>
      <div className="counter-actions">
        <button onClick={increment}>增加</button>
        <button onClick={decrement}>减少</button>
        <button onClick={reset}>重置</button>
      </div>
    </div>
  );
}`}</pre>
                                    </div>

                                    <div className={styles.explanationPoints}>
                                        <h5>代码解析：</h5>
                                        <ul>
                                            <li><strong>简单状态</strong>：计数器是一个简单的数字状态</li>
                                            <li><strong>状态更新方法</strong>：提供 increment、decrement 和 reset 方法
                                            </li>
                                            <li><strong>状态依赖</strong>：更新方法可以访问当前状态值</li>
                                            <li><strong>原子更新</strong>：每个方法只更新需要的状态部分</li>
                                            <li><strong>组件解耦</strong>：组件只关心如何调用方法，不关心实现细节</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 进阶用法 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            demoCardsRef.current[3] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>进阶用法</h2>
                        <p className={styles.sectionSubtitle}>充分发挥 Zustand 的强大功能</p>
                    </div>

                    <div className={styles.featuresGrid}>
                        {/* 选择器优化卡片 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[0] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>选择器优化</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 只订阅需要的状态，避免不必要的重渲染
const count = useStore(state => state.count);`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>优化原理：</strong> 通过选择器只订阅组件实际需要的状态部分，当其他状态变化时不会触发该组件重新渲染。
                                </p>
                            </div>
                        </div>

                        {/* 持久化存储卡片 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[1] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>持久化存储</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`import { persist } from 'zustand/middleware';

const useStore = create(persist(
  (set) => ({
    user: null,
    setUser: (user) => set({ user }),
  }),
  {
    name: 'user-storage', // 本地存储键名
    getStorage: () => localStorage, // 指定存储方式
  }
));`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>功能说明：</strong> 使用 persist 中间件将状态自动保存到
                                    localStorage，页面刷新后状态不会丢失。
                                </p>
                            </div>
                        </div>

                        {/* 异步操作卡片 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[2] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>异步操作</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`const useStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  
  // 异步获取数据
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/data');
      set({ 
        data: await response.json(),
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error.message,
        loading: false 
      });
    }
  }
}));`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>实现要点：</strong> 在 store 方法中直接处理异步操作，自动管理 loading 和 error
                                    状态。
                                </p>
                            </div>
                        </div>

                        {/* 中间件集成卡片 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[3] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>中间件集成</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`import { devtools } from 'zustand/middleware';

// 使用 Redux DevTools 中间件
const useStore = create(devtools((set) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
})));

// 使用 Immer 中间件处理嵌套状态
import { immer } from 'zustand/middleware/immer';

const useStore = create(immer((set) => ({
  user: { profile: { name: "John" } },
  updateName: (name) => set(state => {
    state.user.profile.name = name; // 直接修改，Immer 处理不可变性
  }),
})));`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>功能说明：</strong> 通过中间件扩展功能，如调试工具集成、不可变更新简化等。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 对比表格 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[4] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>状态管理方案对比</h2>
                        <p className={styles.sectionSubtitle}>Zustand 与其他方案的比较</p>
                    </div>

                    <div
                        className={styles.comparisonTable}
                        ref={tableRef}
                    >
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th className={styles.tableHeader}>特性</th>
                                <th className={styles.tableHeader}>Zustand</th>
                                <th className={styles.tableHeader}>Redux</th>
                                <th className={styles.tableHeader}>Context API</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.tableCell}>学习曲线</td>
                                <td className={styles.tableCell}>低</td>
                                <td className={styles.tableCell}>高</td>
                                <td className={styles.tableCell}>中</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>代码量</td>
                                <td className={styles.tableCell}>极少</td>
                                <td className={styles.tableCell}>多</td>
                                <td className={styles.tableCell}>中</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>性能</td>
                                <td className={styles.tableCell}>优秀</td>
                                <td className={styles.tableCell}>良好</td>
                                <td className={styles.tableCell}>一般</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>包大小</td>
                                <td className={styles.tableCell}>1.5kB</td>
                                <td className={styles.tableCell}>7.6kB</td>
                                <td className={styles.tableCell}>内置</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>TypeScript 支持</td>
                                <td className={styles.tableCell}>优秀</td>
                                <td className={styles.tableCell}>优秀</td>
                                <td className={styles.tableCell}>良好</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>中间件</td>
                                <td className={styles.tableCell}>支持</td>
                                <td className={styles.tableCell}>支持</td>
                                <td className={styles.tableCell}>不支持</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 底部区域 */}
                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <FaBolt/>
                            <span className={styles.logoText}>Zustand</span>
                        </div>
                        <p className={styles.footerText}>简洁高效的状态管理解决方案</p>
                        <div className={styles.footerLinks}>
                            <a href="https://zustand-demo.pmnd.rs/" className={styles.footerLink}>官方文档</a>
                            <a href="https://github.com/pmndrs/zustand" className={styles.footerLink}>GitHub 仓库</a>
                            <a href="https://codesandbox.io/examples/package/zustand"
                               className={styles.footerLink}>在线示例</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ZustandScene;
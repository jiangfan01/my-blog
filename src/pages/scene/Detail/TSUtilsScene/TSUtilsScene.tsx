import React, {useState, useEffect, useRef} from "react";
import {FaCode, FaCopy, FaCheck, FaMagic, FaRocket, FaTools, FaInfoCircle} from "react-icons/fa";
import styles from './TSUtilsScene.module.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackButton from "../../../../components/BackButton/BackButton.tsx";

gsap.registerPlugin(ScrollTrigger);

const TSUtilsScene: React.FC = () => {
    const [activeDemo, setActiveDemo] = useState<number | null>(null);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const headerRef = useRef<HTMLDivElement>(null);
    const sectionHeadersRef = useRef<HTMLDivElement[]>([]);
    const benefitCardsRef = useRef<HTMLDivElement[]>([]);
    const utilCardsRef = useRef<HTMLDivElement[]>([]);
    const categoryCardsRef = useRef<HTMLDivElement[]>([]);

    // 复制代码到剪贴板
    const copyToClipboard = async (code: string, id: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(id);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('复制失败:', err);
        }
    };

    // 切换讲解面板
    const toggleExplanation = (index: number) => {
        setActiveDemo(activeDemo === index ? null : index);
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

        // 优势卡片动画
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

        // 工具函数卡片动画
        utilCardsRef.current.forEach((el, i) => {
            if (el) {
                gsap.fromTo(el,
                    {opacity: 0, y: 50},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                    }
                );
            }
        });

        // 分类卡片动画
        categoryCardsRef.current.forEach((el, i) => {
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

        // 清理函数
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <BackButton/>
            <div className={styles.tsUtilsContainer}>
                {/* 头部区域 */}
                <header className={styles.header} ref={headerRef}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerIcon}>
                            <FaCode/>
                        </div>
                        <h1 className={styles.headerTitle}>TypeScript 工具函数库：让代码更优雅</h1>
                        <p className={styles.subtitle}>
                            收集那些让人眼前一亮的 TS 工具函数，写代码效率翻倍！（持续收集中...）
                        </p>
                    </div>
                </header>

                {/* 为什么需要工具函数 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[0] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>为什么我要收集这些工具函数？</h2>
                        <p className={styles.sectionSubtitle}>说实话，这些小函数真的能让开发效率提升不少</p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {/* 减少重复代码 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[0] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaMagic/>
                            </div>
                            <h3 className={styles.cardTitle}>告别重复代码</h3>
                            <p className={styles.cardText}>那些经常写的逻辑封装起来，一次编写到处复用，爽！</p>
                        </div>

                        {/* 类型安全 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[1] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaRocket/>
                            </div>
                            <h3 className={styles.cardTitle}>类型安全</h3>
                            <p className={styles.cardText}>TypeScript 的类型推导 + 工具函数，编译期就能发现错误</p>
                        </div>

                        {/* 提升开发体验 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[2] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaTools/>
                            </div>
                            <h3 className={styles.cardTitle}>开发体验爆棚</h3>
                            <p className={styles.cardText}>有了这些函数，写代码就像搭积木一样简单优雅</p>
                        </div>
                    </div>
                </section>

                {/* 类型工具函数 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[1] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>类型操作工具</h2>
                        <p className={styles.sectionSubtitle}>这些类型操作函数真的太好用了</p>
                    </div>

                    <div className={styles.utilsGrid}>
                        {/* Pick 部分字段 */}
                        <div
                            ref={(el) => {
                                utilCardsRef.current[0] = el!
                            }}
                            className={styles.utilCard}
                        >
                            <div className={styles.utilHeader}>
                                <h3 className={styles.utilTitle}>Pick - 挑选部分字段</h3>
                                <div className={styles.utilActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 从复杂对象中只要部分字段
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

// 只要用户的基本信息，不要密码
type UserInfo = Pick<User, 'id' | 'name' | 'email'>;

// 实际使用
const userInfo: UserInfo = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com"
  // password 不需要，很安全
};`, 'pick')}
                                    >
                                        {copiedCode === 'pick' ? <FaCheck/> : <FaCopy/>}
                                    </button>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => toggleExplanation(1)}
                                    >
                                        <FaInfoCircle/>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 从复杂对象中只要部分字段
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

// 只要用户的基本信息，不要密码
type UserInfo = Pick<User, 'id' | 'name' | 'email'>;

// 实际使用
const userInfo: UserInfo = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com"
  // password 不需要，很安全
};`}</pre>
                            </div>

                            {activeDemo === 1 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>使用场景</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>API 响应</strong>：后端返回完整用户信息，前端只要部分字段</li>
                                        <li><strong>表单组件</strong>：复杂表单只传递需要的字段给子组件</li>
                                        <li><strong>数据安全</strong>：避免敏感字段（如密码）意外传递</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Omit 排除字段 */}
                        <div
                            ref={(el) => {
                                utilCardsRef.current[1] = el!
                            }}
                            className={styles.utilCard}
                        >
                            <div className={styles.utilHeader}>
                                <h3 className={styles.utilTitle}>Omit - 排除不要的字段</h3>
                                <div className={styles.utilActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 排除某些字段，其他都要
type CreateUser = Omit<User, 'id' | 'createdAt'>;

// 创建用户时不需要 id（自动生成）和创建时间
const newUser: CreateUser = {
  name: "李四",
  email: "lisi@example.com",
  password: "123456",
  role: "user"
  // id 和 createdAt 不用写
};

// 更新用户信息（排除密码和敏感字段）
type UpdateUser = Omit<User, 'password' | 'role'>;`, 'omit')}
                                    >
                                        {copiedCode === 'omit' ? <FaCheck/> : <FaCopy/>}
                                    </button>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => toggleExplanation(2)}
                                    >
                                        <FaInfoCircle/>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 排除某些字段，其他都要
type CreateUser = Omit<User, 'id' | 'createdAt'>;

// 创建用户时不需要 id（自动生成）和创建时间
const newUser: CreateUser = {
  name: "李四",
  email: "lisi@example.com",
  password: "123456",
  role: "user"
  // id 和 createdAt 不用写
};

// 更新用户信息（排除密码和敏感字段）
type UpdateUser = Omit<User, 'password' | 'role'>;`}</pre>
                            </div>

                            {activeDemo === 2 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>实际用途</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>创建数据</strong>：新建记录时排除自动生成的字段（id、时间戳）</li>
                                        <li><strong>更新操作</strong>：更新时排除不能修改的字段</li>
                                        <li><strong>表单设计</strong>：表单类型排除只读字段</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Partial 可选字段 */}
                        <div
                            ref={(el) => {
                                utilCardsRef.current[2] = el!
                            }}
                            className={styles.utilCard}
                        >
                            <div className={styles.utilHeader}>
                                <h3 className={styles.utilTitle}>Partial - 所有字段变可选</h3>
                                <div className={styles.utilActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 更新时只传需要修改的字段
type UpdateUser = Partial<User>;

// 只更新用户名，其他字段不动
const updateData: UpdateUser = {
  name: "新名字"
  // 其他字段都是可选的，不写就不更新
};

// 深度 Partial（自己写的工具类型）
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};`, 'partial')}
                                    >
                                        {copiedCode === 'partial' ? <FaCheck/> : <FaCopy/>}
                                    </button>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => toggleExplanation(3)}
                                    >
                                        <FaInfoCircle/>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 更新时只传需要修改的字段
type UpdateUser = Partial<User>;

// 只更新用户名，其他字段不动
const updateData: UpdateUser = {
  name: "新名字"
  // 其他字段都是可选的，不写就不更新
};

// 深度 Partial（自己写的工具类型）
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};`}</pre>
                            </div>

                            {activeDemo === 3 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>应用场景</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>更新接口</strong>：PATCH 请求只传要修改的字段</li>
                                        <li><strong>配置对象</strong>：合并默认配置和用户配置</li>
                                        <li><strong>表单状态</strong>：表单字段逐步填写，部分验证</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 实用工具函数 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[2] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>实用工具函数</h2>
                        <p className={styles.sectionSubtitle}>这些函数在项目中真的太常用了</p>
                    </div>

                    <div className={styles.utilsGrid}>
                        {/* 防抖函数 */}
                        <div
                            ref={(el) => {
                                utilCardsRef.current[3] = el!
                            }}
                            className={styles.utilCard}
                        >
                            <div className={styles.utilHeader}>
                                <h3 className={styles.utilTitle}>防抖函数 - 搜索必备</h3>
                                <div className={styles.utilActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 防抖函数，搜索框必备
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// 使用示例
const searchApi = (keyword: string) => {
  console.log('搜索:', keyword);
};

const debouncedSearch = debounce(searchApi, 300);

// 在输入框中使用
onChange={(e) => debouncedSearch(e.target.value)}`, 'debounce')}
                                    >
                                        {copiedCode === 'debounce' ? <FaCheck/> : <FaCopy/>}
                                    </button>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => toggleExplanation(4)}
                                    >
                                        <FaInfoCircle/>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 防抖函数，搜索框必备
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// 使用示例
const searchApi = (keyword: string) => {
  console.log('搜索:', keyword);
};

const debouncedSearch = debounce(searchApi, 300);

// 在输入框中使用
onChange={(e) => debouncedSearch(e.target.value)}`}</pre>
                            </div>

                            {activeDemo === 4 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>为什么要用防抖？</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>搜索优化</strong>：用户输入时不会每个字符都触发搜索</li>
                                        <li><strong>性能提升</strong>：减少不必要的 API 请求</li>
                                        <li><strong>用户体验</strong>：避免频繁的网络请求和页面更新</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 深拷贝函数 */}
                        <div
                            ref={(el) => {
                                utilCardsRef.current[4] = el!
                            }}
                            className={styles.utilCard}
                        >
                            <div className={styles.utilHeader}>
                                <h3 className={styles.utilTitle}>深拷贝 - 数据安全复制</h3>
                                <div className={styles.utilActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 深拷贝函数，支持各种类型
function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }

  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }

  return obj;
}

// 使用示例
const original = {
  user: { name: '张三', hobbies: ['跑步', '游戏'] },
  config: { theme: 'dark' }
};

const copied = deepClone(original);
copied.user.name = '李四'; // 不会影响原对象`, 'deepClone')}
                                    >
                                        {copiedCode === 'deepClone' ? <FaCheck/> : <FaCopy/>}
                                    </button>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => toggleExplanation(5)}
                                    >
                                        <FaInfoCircle/>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 深拷贝函数，支持各种类型
function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }

  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }

  return obj;
}

// 使用示例
const original = {
  user: { name: '张三', hobbies: ['跑步', '游戏'] },
  config: { theme: 'dark' }
};

const copied = deepClone(original);
copied.user.name = '李四'; // 不会影响原对象`}</pre>
                            </div>

                            {activeDemo === 5 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>深拷贝的使用场景</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>状态管理</strong>：Redux/Zustand 中避免直接修改状态</li>
                                        <li><strong>表单处理</strong>：编辑时不影响原始数据</li>
                                        <li><strong>缓存数据</strong>：保护缓存数据不被意外修改</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 对象安全取值 */}
                        <div
                            ref={(el) => {
                                utilCardsRef.current[5] = el!
                            }}
                            className={styles.utilCard}
                        >
                            <div className={styles.utilHeader}>
                                <h3 className={styles.utilTitle}>安全取值 - 避免 undefined 错误</h3>
                                <div className={styles.utilActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 安全获取嵌套对象的值
function safeGet<T, K extends keyof T>(
  obj: T | null | undefined,
  path: K,
  defaultValue?: T[K]
): T[K] | undefined {
  if (!obj) return defaultValue;
  return obj[path] ?? defaultValue;
}

// 深层安全取值
function deepGet<T>(obj: any, path: string, defaultValue?: T): T | undefined {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    if (result?.[key] === undefined) {
      return defaultValue;
    }
    result = result[key];
  }

  return result ?? defaultValue;
}

// 使用示例
const user = { profile: { address: { city: '北京' } } };

const city = deepGet(user, 'profile.address.city', '未知');
const country = deepGet(user, 'profile.address.country', '中国');`, 'safeGet')}
                                    >
                                        {copiedCode === 'safeGet' ? <FaCheck/> : <FaCopy/>}
                                    </button>
                                    <button
                                        className={styles.infoButton}
                                        onClick={() => toggleExplanation(6)}
                                    >
                                        <FaInfoCircle/>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 安全获取嵌套对象的值
function safeGet<T, K extends keyof T>(
  obj: T | null | undefined,
  path: K,
  defaultValue?: T[K]
): T[K] | undefined {
  if (!obj) return defaultValue;
  return obj[path] ?? defaultValue;
}

// 深层安全取值
function deepGet<T>(obj: any, path: string, defaultValue?: T): T | undefined {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    if (result?.[key] === undefined) {
      return defaultValue;
    }
    result = result[key];
  }

  return result ?? defaultValue;
}

// 使用示例
const user = { profile: { address: { city: '北京' } } };

const city = deepGet(user, 'profile.address.city', '未知');
const country = deepGet(user, 'profile.address.country', '中国');`}</pre>
                            </div>

                            {activeDemo === 6 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>避免运行时错误</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>API 数据</strong>：后端返回的数据结构可能不完整</li>
                                        <li><strong>用户输入</strong>：处理不确定的用户数据</li>
                                        <li><strong>配置读取</strong>：读取可能不存在的配置项</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 类型守卫函数 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[3] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>类型守卫：让 TS 更聪明</h2>
                        <p className={styles.sectionSubtitle}>这些函数能让 TypeScript 自动推导类型，超级有用</p>
                    </div>

                    <div className={styles.categoryGrid}>
                        <div
                            ref={(el) => {
                                categoryCardsRef.current[0] = el!
                            }}
                            className={styles.categoryCard}
                        >
                            <h3 className={styles.categoryTitle}>类型检查工具</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 检查是否为空值
function isEmpty(value: any): value is null | undefined {
  return value === null || value === undefined;
}

// 检查是否为字符串
function isString(value: any): value is string {
  return typeof value === 'string';
}

// 检查是否为数组
function isArray<T>(value: any): value is T[] {
  return Array.isArray(value);
}

// 使用示例
if (isString(data)) {
  // 这里 TS 知道 data 是 string 类型
  console.log(data.toUpperCase());
}

if (!isEmpty(user?.profile)) {
  // 这里 TS 知道 profile 不为空
  console.log(user.profile.name);
}`}</pre>
                            </div>
                            <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(`// 检查是否为空值
function isEmpty(value: any): value is null | undefined {
  return value === null || value === undefined;
}

// 检查是否为字符串
function isString(value: any): value is string {
  return typeof value === 'string';
}

// 检查是否为数组
function isArray<T>(value: any): value is T[] {
  return Array.isArray(value);
}

// 使用示例
if (isString(data)) {
  // 这里 TS 知道 data 是 string 类型
  console.log(data.toUpperCase());
}

if (!isEmpty(user?.profile)) {
  // 这里 TS 知道 profile 不为空
  console.log(user.profile.name);
}`, 'typeGuards')}
                            >
                                {copiedCode === 'typeGuards' ? <FaCheck/> : <FaCopy/>}
                            </button>
                        </div>

                        <div
                            ref={(el) => {
                                categoryCardsRef.current[1] = el!
                            }}
                            className={styles.categoryCard}
                        >
                            <h3 className={styles.categoryTitle}>数组/对象操作</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 数组去重（支持对象数组）
function uniqueBy<T, K extends keyof T>(array: T[], key: K): T[] {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

// 数组分组
function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

// 使用示例
const users = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
  { id: 1, name: '张三', age: 25 }, // 重复
];

const uniqueUsers = uniqueBy(users, 'id');
const groupedByAge = groupBy(users, 'age');`}</pre>
                            </div>
                            <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(`// 数组去重（支持对象数组）
function uniqueBy<T, K extends keyof T>(array: T[], key: K): T[] {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

// 数组分组
function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

// 使用示例
const users = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
  { id: 1, name: '张三', age: 25 }, // 重复
];

const uniqueUsers = uniqueBy(users, 'id');
const groupedByAge = groupBy(users, 'age');`, 'arrayUtils')}
                            >
                                {copiedCode === 'arrayUtils' ? <FaCheck/> : <FaCopy/>}
                            </button>
                        </div>
                    </div>
                </section>

                {/* 总结 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[4] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>总结</h2>
                        <p className={styles.sectionSubtitle}>这些工具函数真的能让开发效率翻倍</p>
                    </div>

                    <div className={styles.summaryCard}>
                        <h3 className={styles.summaryTitle}>📝 建议收藏的理由</h3>
                        <div className={styles.summaryContent}>
                            <div className={styles.summaryItem}>
                                <h4>🎯 提升开发效率</h4>
                                <p>这些函数都是在实际项目中经常用到的，收藏起来随用随取</p>
                            </div>
                            <div className={styles.summaryItem}>
                                <h4>🛡️ 类型安全</h4>
                                <p>每个函数都有完整的 TypeScript 类型定义，编译期就能发现问题</p>
                            </div>
                            <div className={styles.summaryItem}>
                                <h4>🔄 可复用性强</h4>
                                <p>这些函数设计得很通用，在不同项目中都能直接使用</p>
                            </div>
                            <div className={styles.summaryItem}>
                                <h4>📚 持续更新</h4>
                                <p>随着项目经验的积累，会不断补充更多实用的工具函数</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 底部区域 */}
                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <FaCode/>
                            <span className={styles.logoText}>TypeScript Utils</span>
                        </div>
                        <p className={styles.footerText}>收集实用的 TypeScript 工具函数，让代码更优雅高效</p>
                        <div className={styles.footerLinks}>
                            <a href="https://www.typescriptlang.org/docs/" className={styles.footerLink}>TypeScript 官方文档</a>
                            <a href="https://github.com/type-challenges/type-challenges" className={styles.footerLink}>类型挑战</a>
                            <a href="https://utility-types.readthedocs.io/" className={styles.footerLink}>工具类型参考</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default TSUtilsScene;
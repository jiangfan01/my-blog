import React, {useState, useEffect, useRef} from "react";
import {FaSync, FaDatabase, FaRocket, FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaBolt} from "react-icons/fa";
import styles from './ReactQueryScene.module.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackButton from "../../../../components/BackButton/BackButton.tsx";

gsap.registerPlugin(ScrollTrigger);

const ReactQueryScene: React.FC = () => {
    const [activeDemo, setActiveDemo] = useState<number | null>(null);

    // 模拟设备数据
    const [devices, setDevices] = useState([
        {id: 1, name: "iPhone 15", status: 1, type: "mobile"},
        {id: 2, name: "MacBook Pro", status: 1, type: "laptop"},
        {id: 3, name: "iPad Air", status: 0, type: "tablet"},
        {id: 4, name: "Apple Watch", status: 1, type: "wearable"},
    ]);

    const [isLoading, setIsLoading] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());

    const headerRef = useRef<HTMLDivElement>(null);
    const sectionHeadersRef = useRef<HTMLDivElement[]>([]);
    const benefitCardsRef = useRef<HTMLDivElement[]>([]);
    const demoCardsRef = useRef<HTMLDivElement[]>([]);
    const featureCardsRef = useRef<HTMLDivElement[]>([]);
    const tableRef = useRef<HTMLDivElement>(null);

    // 模拟刷新设备数据
    const refreshDevices = () => {
        setIsLoading(true);
        setTimeout(() => {
            // 随机更新设备状态
            setDevices(prev => prev.map(device => ({
                ...device,
                status: Math.random() > 0.3 ? 1 : 0
            })));
            setLastRefresh(new Date());
            setIsLoading(false);
        }, 1000);
    };

    // 计算设备统计
    const deviceStats = {
        used: devices.filter(device => device.status === 1).length,
        total: devices.length,
        onlineCount: devices.filter(device => device.status === 1).length,
        offlineCount: devices.filter(device => device.status === 0).length
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
            <div className={styles.reactQueryContainer}>
                {/* 头部区域 */}
                <header className={styles.header} ref={headerRef}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerIcon}>
                            <FaSync/>
                        </div>
                        <h1 className={styles.headerTitle}>React Query 香疯了！不用 Zustand 也能全局状态管理</h1>
                        <p className={styles.subtitle}>
                            我发现了个好东西！用 React Query 直接干掉状态管理库，一行代码全局刷新
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
                        <h2 className={styles.sectionTitle}>先聊聊为什么我要用 React Query</h2>
                        <p className={styles.sectionSubtitle}>说实话，我之前也是 Zustand 的忠实粉丝，直到我在公司学到了这个思路...</p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {/* 全局状态同步 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[0] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaSync/>
                            </div>
                            <h3 className={styles.cardTitle}>真的是全局同步</h3>
                            <p className={styles.cardText}>这个真的香！我在任何地方调一下 invalidateQueries，全站数据都给你刷新了</p>
                        </div>

                        {/* 缓存管理 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[1] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaDatabase/>
                            </div>
                            <h3 className={styles.cardTitle}>缓存贼智能</h3>
                            <p className={styles.cardText}>不用操心缓存了！它自己判断数据新不新鲜，该请求就请求，该用缓存就用缓存</p>
                        </div>

                        {/* 简化状态管理 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[2] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaRocket/>
                            </div>
                            <h3 className={styles.cardTitle}>状态管理？不存在的</h3>
                            <p className={styles.cardText}>直接把接口当状态用！谁还要写那些 store、action、reducer 啊，累不累？</p>
                        </div>

                        {/* 加载和错误状态 卡片 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[3] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaCheckCircle/>
                            </div>
                            <h3 className={styles.cardTitle}>loading 和 error 全帮你搞定</h3>
                            <p className={styles.cardText}>isLoading、error 这些状态都给你准备好了，拿来就用！</p>
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
                        <h2 className={styles.sectionTitle}>React Query 是个啥玩意？</h2>
                        <p className={styles.sectionSubtitle}>先别急着用，咱们先搞清楚这是个什么东西</p>
                    </div>

                    <div className={styles.usageGrid}>
                        <div className={styles.installationCard}>
                            <h3 className={styles.cardTitle}>先装上再说</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`npm install @tanstack/react-query
# 或
yarn add @tanstack/react-query`}</pre>
                            </div>
                        </div>

                        <div className={styles.usageExample}>
                            <h3 className={styles.cardTitle}>核心代码来了！</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getMyDevices} from "~/api/base/userApi";

// 这就是我在公司学到的神器！
export const useDevices = () => {
    const queryClient = useQueryClient();

    // 看好了！这一行代码就搞定了数据获取、loading、error
    const {data: devices = [], isLoading, error} = useQuery({
        queryKey: ['devices'],    // 这是全局唯一标识，超重要！
        queryFn: getMyDevices,    // 你的接口函数
        staleTime: 30 * 1000     // 30秒内不重复请求，这个超香！
    })

    // 重点来了！全局刷新就这一行代码！
    const refreshDevices = () => queryClient.invalidateQueries({
        queryKey: ['devices']
    })

    // 计算一些派生数据，照样香
    const deviceStats = {
        used: devices.filter(device => device.status === 1).length,
        total: devices.length,
        onlineCount: devices.filter(device => device.status === 1).length,
        offlineCount: devices.filter(device => device.status === 0).length
    };

    return {devices, isLoading, error, refreshDevices, deviceStats}
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
                        <h2 className={styles.sectionTitle}>来，体验一下这个神器</h2>
                        <p className={styles.sectionSubtitle}>动手点几下，你就知道为什么我说它香了</p>
                    </div>

                    <div className={styles.demoGrid}>
                        {/* 设备管理示例 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[0] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>看！这就是全局刷新</h3>
                                <button
                                    className={styles.infoButton}
                                    onClick={() => toggleExplanation(1)}
                                >
                                    <FaInfoCircle/>
                                </button>
                            </div>

                            <div className={styles.deviceStats}>
                                <div className={styles.statItem}>
                                    <span className={styles.statLabel}>总设备数:</span>
                                    <span className={styles.statValue}>{deviceStats.total}</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statLabel}>在线设备:</span>
                                    <span className={styles.statValue}>{deviceStats.onlineCount}</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statLabel}>离线设备:</span>
                                    <span className={styles.statValue}>{deviceStats.offlineCount}</span>
                                </div>
                            </div>

                            <div className={styles.devicesList}>
                                {devices.map(device => (
                                    <div key={device.id} className={styles.deviceItem}>
                                        <span className={styles.deviceName}>{device.name}</span>
                                        <span className={`${styles.deviceStatus} ${device.status === 1 ? styles.online : styles.offline}`}>
                                            {device.status === 1 ? '在线' : '离线'}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.deviceActions}>
                                <button
                                    className={styles.actionButton}
                                    onClick={refreshDevices}
                                    disabled={isLoading}
                                >
                                    {isLoading ? '刷新中...' : '刷新设备'}
                                </button>
                                <div className={styles.lastRefresh}>
                                    上次刷新: {lastRefresh.toLocaleTimeString()}
                                </div>
                            </div>

                            {/* 代码讲解面板 */}
                            {activeDemo === 1 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>React Query 实现代码解析</h4>
                                    <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// 1. 创建自定义 Hook
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getMyDevices} from "~/api/base/userApi";

export const useDevices = () => {
    const queryClient = useQueryClient();

    // 使用 useQuery 获取数据
    const {data: devices = [], isLoading, error} = useQuery({
        queryKey: ['devices'], // 唯一标识符
        queryFn: getMyDevices,  // 数据获取函数
        staleTime: 30 * 1000   // 缓存30秒
    })

    // 全局刷新函数
    const refreshDevices = () => queryClient.invalidateQueries({
        queryKey: ['devices']
    })

    // 计算派生状态
    const deviceStats = {
        used: devices.filter(device => device.status === 1).length,
        total: devices.length,
        onlineCount: devices.filter(device => device.status === 1).length,
        offlineCount: devices.filter(device => device.status === 0).length
    };

    return {devices, isLoading, error, refreshDevices, deviceStats}
}

// 2. 在组件中使用
function DeviceManager() {
    const {devices, isLoading, refreshDevices, deviceStats} = useDevices();

    if (isLoading) return <div>加载中...</div>;

    return (
        <div>
            <div>在线设备: {deviceStats.onlineCount}</div>
            <button onClick={refreshDevices}>刷新设备</button>
            {devices.map(device => (
                <div key={device.id}>{device.name}</div>
            ))}
        </div>
    );
}`}</pre>
                                    </div>

                                    <div className={styles.explanationPoints}>
                                        <h5>代码解析：</h5>
                                        <ul>
                                            <li><strong>全局缓存</strong>：通过 queryKey 建立全局缓存，所有使用相同 key 的组件共享数据</li>
                                            <li><strong>自动状态管理</strong>：isLoading、error 状态自动管理，无需手动处理</li>
                                            <li><strong>全局刷新</strong>：通过 invalidateQueries 实现一处刷新，全局同步</li>
                                            <li><strong>派生状态</strong>：在 hook 中计算派生状态，组件直接使用</li>
                                            <li><strong>缓存策略</strong>：通过 staleTime 控制数据新鲜度，减少不必要的请求</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 对比传统方案 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[1] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>为什么我不用 Zustand 了？</h3>
                                <button
                                    className={styles.infoButton}
                                    onClick={() => toggleExplanation(2)}
                                >
                                    <FaInfoCircle/>
                                </button>
                            </div>

                            <div className={styles.comparisonContent}>
                                <div className={styles.comparisonItem}>
                                    <div className={styles.comparisonLabel}>
                                        <FaExclamationTriangle className={styles.warningIcon}/>
                                        以前用 Zustand 的时候
                                    </div>
                                    <ul className={styles.comparisonList}>
                                        <li>天天手写 loading、error 状态，累死了</li>
                                        <li>接口调用要手动触发，忘了就出 bug</li>
                                        <li>缓存？自己写吧，复杂得要命</li>
                                        <li>多个页面同步数据？各种监听器飞起</li>
                                    </ul>
                                </div>

                                <div className={styles.comparisonItem}>
                                    <div className={styles.comparisonLabel}>
                                        <FaCheckCircle className={styles.successIcon}/>
                                        现在用 React Query
                                    </div>
                                    <ul className={styles.comparisonList}>
                                        <li>嗨，这些状态都自动给你管好了</li>
                                        <li>缓存、刷新全部自动，不用操心</li>
                                        <li>invalidateQueries 一行搞定全局刷新</li>
                                        <li>多个页面自动同步，神了！</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 代码讲解面板 */}
                            {activeDemo === 2 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>经验分享：为什么我不用 Zustand 了</h4>
                                    <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// 以前用 Zustand 的时候，干什么都要自己来
import create from 'zustand';
import {getMyDevices} from "~/api/base/userApi";

const useDeviceStore = create((set, get) => ({
    devices: [],
    isLoading: false,
    error: null,

    // loading、error 状态要自己管理，烦死了
    fetchDevices: async () => {
        set({isLoading: true, error: null});
        try {
            const devices = await getMyDevices();
            set({devices, isLoading: false});
        } catch (error) {
            set({error: error.message, isLoading: false});
        }
    },

    // 刷新要自己写，多个页面同步还要考虑各种情况
    refreshDevices: () => {
        get().fetchDevices(); // 这样只能刷新当前组件
    }
}));

// 现在用 React Query，真的香爆了！
export const useDevices = () => {
    const queryClient = useQueryClient();

    // 一行代码搞定所有状态，自动缓存、自动重试
    const {data: devices = [], isLoading, error} = useQuery({
        queryKey: ['devices'], // 全局唯一 key，所有组件都共享
        queryFn: getMyDevices,
        staleTime: 30 * 1000   // 30秒内不重复请求
    })

    // 全局刷新真的就一行代码！所有用这个 key 的地方都会更新
    const refreshDevices = () => queryClient.invalidateQueries({
        queryKey: ['devices']
    })

    return {devices, isLoading, error, refreshDevices}
}`}</pre>
                                    </div>

                                    <div className={styles.explanationPoints}>
                                        <h5>总结一下为什么香：</h5>
                                        <ul>
                                            <li><strong>代码量狂减</strong>：以前 50 行代码，现在 10 行搞定</li>
                                            <li><strong>不用操心的事</strong>：loading、error、缓存全部自动处理</li>
                                            <li><strong>真正的全局同步</strong>：一处刷新，全站更新，不用写各种监听器</li>
                                            <li><strong>开发效率爆炖</strong>：专注业务逻辑，不用纠结状态管理</li>
                                            <li><strong>性能优化全家桶</strong>：缓存、去重、重试、轮询，什么都有</li>
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
                            sectionHeadersRef.current[3] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>开发时常用的参数配置</h2>
                        <p className={styles.sectionSubtitle}>这些参数真的太好用了，不知道就亏大了</p>
                    </div>

                    <div className={styles.featuresGrid}>
                        {/* 条件查询 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[0] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>enabled - 控制是否执行</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 有时候你不想一上来就请求接口，比如用户没登录的时候
const {data: userProfile} = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserProfile(userId),
    enabled: !!userId, // 只有有 userId 才请求，没有就不请求
    staleTime: 5 * 60 * 1000 // 数据5分钟内都是"新鲜"的，不会重复请求
});`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>实际用处：</strong> 比如用户详情页，没有 userId 就别请求了，避免报 400 错误。
                                </p>
                            </div>
                        </div>

                        {/* 依赖查询 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[1] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>staleTime - 缓存策略</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 这个参数决定数据什么时候"过期"
const {data: devices} = useQuery({
    queryKey: ['devices'],
    queryFn: getMyDevices,
    staleTime: 30 * 1000,        // 30秒内不重复请求
    // staleTime: Infinity,      // 永远不过期（除非手动刷新）
    // staleTime: 0,            // 每次都重新请求（默认值）
});

// 用户信息可以缓存久一点
const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    staleTime: 10 * 60 * 1000,   // 用户信息10分钟缓存
});`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>经验分享：</strong> 用户信息、配置信息这种不常变的数据，staleTime 设长一点。实时性要求高的数据设短一点。
                                </p>
                            </div>
                        </div>

                        {/* 分页查询 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[2] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>queryKey 依赖 - 分页查询</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 分页参数变化，自动重新请求，太香了！
const buildQueryParams = () => {
    const params = {
        page: pagination.current,
        size: pagination.pageSize,
        task_type: '养号任务',
    };

    if (selectedDevice) {
        params.device_ids = selectedDevice;
    }

    if (selectedStatus) {
        const statusMap = {
            'waiting': '等待执行',
            'running': '执行中',
            'success': '执行成功',
            'failed': '执行失败'
        };
        params.status = statusMap[selectedStatus];
    }

    return params;
}

// 关键：把分页和筛选条件都放到 queryKey 里
const {data: taskListData, isLoading} = useQuery({
    queryKey: ['taskList', pagination.current, pagination.pageSize, selectedDevice, selectedStatus],
    queryFn: () => getTaskList(buildQueryParams()),
    refetchInterval: 5000, // 还能轮询刷新
});`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>核心思路：</strong> 把分页、筛选条件都放到 queryKey 里，参数一变就自动重新请求，不用手动管理。</p>
                            </div>
                        </div>

                        {/* 变更操作 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[3] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>useMutation - 处理增删改</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 查询用 useQuery，增删改用 useMutation
const useUpdateDevice = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (deviceData) => updateDevice(deviceData),
        onSuccess: () => {
            // 更新成功后，让设备列表的缓存失效，自动重新请求
            queryClient.invalidateQueries({queryKey: ['devices']});
            // 或者手动更新缓存数据，避免重新请求
            // queryClient.setQueryData(['devices'], newDevices);
        },
        onError: (error) => {
            // 处理错误，比如 toast 提示
            console.error('更新失败:', error);
        }
    });
};

// 在组件中使用
const {mutate: updateDevice, isPending} = useUpdateDevice();`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>核心思路：</strong> 改数据用 mutation，改完了让查询的缓存失效，这样页面数据就自动更新了。
                                </p>
                            </div>
                        </div>

                        {/* 轮询请求 */}
                        <div
                            ref={(el) => {
                                featureCardsRef.current[4] = el!
                            }}
                            className={styles.featureCard}
                        >
                            <h3 className={styles.featureTitle}>refetchInterval - 轮询请求</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// 有些数据需要定时刷新，比如实时状态、消息数量
const {data: deviceStatus} = useQuery({
    queryKey: ['deviceStatus'],
    queryFn: getDeviceStatus,
    refetchInterval: 5000,        // 每5秒请求一次
    refetchIntervalInBackground: false, // 页面不可见时停止轮询
});

// 消息数量可能需要更频繁的轮询
const {data: unreadCount} = useQuery({
    queryKey: ['unreadCount'],
    queryFn: getUnreadCount,
    refetchInterval: 3000,        // 每3秒请求一次
    refetchIntervalInBackground: true,  // 后台也继续轮询
});

// 也可以动态控制轮询
const {data: liveData} = useQuery({
    queryKey: ['liveData'],
    queryFn: getLiveData,
    refetchInterval: isLive ? 1000 : false, // 直播时每秒轮询，否则不轮询
});`}</pre>
                            </div>
                            <div className={styles.codeExplanation}>
                                <p><strong>使用场景：</strong> 设备状态、在线人数、消息提醒这些需要实时更新的数据，设置轮询就行了。</p>
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
                        <h2 className={styles.sectionTitle}>重要！正确理解 React Query 的定位</h2>
                        <p className={styles.sectionSubtitle}>React Query 不是状态管理库，它是服务端状态管理神器</p>
                    </div>

                    <div
                        className={styles.comparisonTable}
                        ref={tableRef}
                    >
                        <div className={styles.definitionCard}>
                            <h3 className={styles.definitionTitle}>👉 React Query 的真实身份</h3>
                            <div className={styles.definitionContent}>
                                <div className={styles.whatItIs}>
                                    <h4>✅ 它是什么？</h4>
                                    <p><strong>“服务端状态管理”</strong>（Server State Management）</p>
                                    <ul>
                                        <li>专门管理接口数据的获取、缓存、同步、刷新</li>
                                        <li>内置缓存策略、重试机制、失效/刷新、轮询、乐观更新</li>
                                        <li>让你不用手动写一堆 useEffect + useState 去请求接口</li>
                                    </ul>
                                </div>

                                <div className={styles.whatItIsNot}>
                                    <h4>❌ 它不是什么？</h4>
                                    <p>它<strong>不是</strong>传统意义上的全局状态管理库（不替代 Zustand/Redux）</p>
                                    <p>它管不了这些本地 UI 状态：</p>
                                    <ul>
                                        <li>当前 tab 页签 / 弹窗是否打开</li>
                                        <li>表单输入内容 / 主题模式（dark/light）</li>
                                        <li>播放器当前进度条位置 / 临时 UI 状态</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.bestPractice}>
                            <h3 className={styles.practiceTitle}>🏠 实际项目里的最佳实践</h3>
                            <div className={styles.practiceGrid}>
                                <div className={styles.practiceItem}>
                                    <div className={styles.practiceLabel}>
                                        <FaSync className={styles.reactQueryIcon}/>
                                        React Query
                                    </div>
                                    <p>管理接口数据</p>
                                    <ul>
                                        <li>用户信息、设备列表</li>
                                        <li>订单列表、商品数据</li>
                                        <li>所有从后端 API 来的数据</li>
                                    </ul>
                                </div>

                                <div className={styles.practiceItem}>
                                    <div className={styles.practiceLabel}>
                                        <FaBolt className={styles.zustandIcon}/>
                                        Zustand/Jotai
                                    </div>
                                    <p>管理本地 UI 状态</p>
                                    <ul>
                                        <li>Modal 弹窗状态、Tab 切换</li>
                                        <li>临时缓存、表单状态</li>
                                        <li>主题设置、用户偏好</li>
                                    </ul>
                                </div>

                                <div className={styles.practiceItem}>
                                    <div className={styles.practiceLabel}>
                                        <FaCheckCircle className={styles.contextIcon}/>
                                        Context API
                                    </div>
                                    <p>轻量场景</p>
                                    <ul>
                                        <li>主题配置、国际化</li>
                                        <li>简单的全局配置</li>
                                        <li>不需要复杂逻辑的数据</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 底部区域 */}
                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <FaSync/>
                            <span className={styles.logoText}>React Query</span>
                        </div>
                        <p className={styles.footerText}>服务端状态管理神器，让接口数据管理变得简单</p>
                        <div className={styles.footerLinks}>
                            <a href="https://tanstack.com/query" className={styles.footerLink}>官方文档</a>
                            <a href="https://github.com/TanStack/query" className={styles.footerLink}>GitHub 仓库</a>
                            <a href="https://tanstack.com/query/latest/docs/react/examples/simple" className={styles.footerLink}>在线示例</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ReactQueryScene;
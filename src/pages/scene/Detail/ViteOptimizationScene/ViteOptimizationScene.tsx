import React, {useState, useEffect, useRef} from "react";
import {FaCog, FaRocket, FaEye, FaBoxOpen, FaChartBar, FaInfoCircle, FaCopy, FaCheck, FaExclamationTriangle} from "react-icons/fa";
import styles from './ViteOptimizationScene.module.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackButton from "../../../../components/BackButton/BackButton.tsx";

gsap.registerPlugin(ScrollTrigger);

const ViteOptimizationScene: React.FC = () => {
    const [activeDemo, setActiveDemo] = useState<number | null>(null);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const headerRef = useRef<HTMLDivElement>(null);
    const sectionHeadersRef = useRef<HTMLDivElement[]>([]);
    const benefitCardsRef = useRef<HTMLDivElement[]>([]);
    const configCardsRef = useRef<HTMLDivElement[]>([]);
    const stepCardsRef = useRef<HTMLDivElement[]>([]);

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

        // 配置卡片动画
        configCardsRef.current.forEach((el, i) => {
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

        // 步骤卡片动画
        stepCardsRef.current.forEach((el, i) => {
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
            <div className={styles.viteContainer}>
                {/* 头部区域 */}
                <header className={styles.header} ref={headerRef}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerIcon}>
                            <FaCog/>
                        </div>
                        <h1 className={styles.headerTitle}>Vite 打包优化：让项目飞起来</h1>
                        <p className={styles.subtitle}>
                            从代理配置到打包分析，这些 Vite 优化技巧让你的项目性能翻倍！（持续更新中...）
                        </p>
                    </div>
                </header>

                {/* 为什么需要优化 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[0] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>为什么要优化 Vite 配置？</h2>
                        <p className={styles.sectionSubtitle}>开发体验和打包性能都能大幅提升</p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {/* 开发效率 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[0] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaRocket/>
                            </div>
                            <h3 className={styles.cardTitle}>开发效率翻倍</h3>
                            <p className={styles.cardText}>合理的代理配置让前后端联调更顺滑，不用再手动改接口地址</p>
                        </div>

                        {/* 打包性能 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[1] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaBoxOpen/>
                            </div>
                            <h3 className={styles.cardTitle}>打包体积优化</h3>
                            <p className={styles.cardText}>代码分割和依赖优化，让打包体积减少 30-50%</p>
                        </div>

                        {/* 可视化分析 */}
                        <div
                            ref={(el) => {
                                benefitCardsRef.current[2] = el!
                            }}
                            className={styles.benefitCard}
                        >
                            <div className={styles.cardIcon}>
                                <FaEye/>
                            </div>
                            <h3 className={styles.cardTitle}>可视化分析</h3>
                            <p className={styles.cardText}>打包分析工具让你清楚知道哪些模块占用空间大</p>
                        </div>
                    </div>
                </section>

                {/* 代理配置 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[1] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>代理配置：解决跨域和接口管理</h2>
                        <p className={styles.sectionSubtitle}>简单配置，让前后端联调更轻松</p>
                    </div>

                    <div className={styles.configGrid}>
                        <div
                            ref={(el) => {
                                configCardsRef.current[0] = el!
                            }}
                            className={styles.configCard}
                        >
                            <div className={styles.configHeader}>
                                <h3 className={styles.configTitle}>智能代理函数</h3>
                                <div className={styles.configActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 创建代理配置
function createProxyConfig(env: Record<string, string>) {
    const target = env.VITE_CITY_API_BASE_URL;
    const isSecure = target?.startsWith('https://');

    console.log(\`🔗 Proxy Target: \${target} (\${env.VITE_APP_ENV || 'development'})\`);

    if (!target) {
        console.warn('⚠️ VITE_CITY_API_BASE_URL not found, proxy may not work properly');
        return {};
    }

    const baseProxyConfig = {
        changeOrigin: true,
        secure: isSecure,
        configure: (proxy: any) => {
            proxy.on('proxyReq', (_proxyReq: any, req: any) => {
                if (env.VITE_DEBUG === 'true') {
                    console.log(\`📡 Proxying: \${req.method} \${req.url} -> \${target}\${req.url}\`);
                }
            });
        }
    };

    // API路径配置
    const apiPaths = [
        '/api/v1',
        '/user',
        '/agent',
        '/member'
    ];

    const proxyConfig: Record<string, any> = {};

    apiPaths.forEach(path => {
        proxyConfig[path] = {
            target,
            ...baseProxyConfig,
            // 特殊处理 /api/v1 路径
            ...(path === '/api/v1' && {
                rewrite: (path: string) => path.replace(/^\\/api\\/v1/, "")
            })
        };
    });

    return proxyConfig;
}`, 'proxyConfig')}
                                    >
                                        {copiedCode === 'proxyConfig' ? <FaCheck/> : <FaCopy/>}
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
                            <pre className={styles.codeContent}>{`// 创建代理配置
function createProxyConfig(env: Record<string, string>) {
    const target = env.VITE_CITY_API_BASE_URL;
    const isSecure = target?.startsWith('https://');

    console.log(\`🔗 Proxy Target: \${target}\`);

    if (!target) {
        console.warn('⚠️ 代理目标未找到');
        return {};
    }

    const baseProxyConfig = {
        changeOrigin: true,
        secure: isSecure,
        configure: (proxy: any) => {
            proxy.on('proxyReq', (_proxyReq: any, req: any) => {
                if (env.VITE_DEBUG === 'true') {
                    console.log(\`📡 代理: \${req.method} \${req.url}\`);
                }
            });
        }
    };

    // API路径配置
    const apiPaths = ['/api/v1', '/user', '/agent'];

    const proxyConfig: Record<string, any> = {};
    apiPaths.forEach(path => {
        proxyConfig[path] = { target, ...baseProxyConfig };
    });

    return proxyConfig;
}`}</pre>
                            </div>

                            {activeDemo === 1 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>代理配置的核心功能</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>自动检测协议</strong>：根据目标地址自动判断是否使用 HTTPS</li>
                                        <li><strong>路径重写</strong>：可以重写请求路径，适配不同的后端接口规范</li>
                                        <li><strong>调试模式</strong>：开发时可以看到所有代理请求的详细信息</li>
                                        <li><strong>多路径支持</strong>：批量配置多个 API 路径</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div
                            ref={(el) => {
                                configCardsRef.current[1] = el!
                            }}
                            className={styles.configCard}
                        >
                            <div className={styles.configHeader}>
                                <h3 className={styles.configTitle}>环境变量配置</h3>
                                <div className={styles.configActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`# .env.development
VITE_CITY_API_BASE_URL=http://localhost:3000
VITE_APP_ENV=development
VITE_DEBUG=true

# .env.production
VITE_CITY_API_BASE_URL=https://api.yoursite.com
VITE_APP_ENV=production
VITE_DEBUG=false

# .env.test
VITE_CITY_API_BASE_URL=https://test-api.yoursite.com
VITE_APP_ENV=test
VITE_DEBUG=true`, 'envConfig')}
                                    >
                                        {copiedCode === 'envConfig' ? <FaCheck/> : <FaCopy/>}
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
                            <pre className={styles.codeContent}>{`# .env.development
VITE_CITY_API_BASE_URL=http://localhost:3000
VITE_APP_ENV=development
VITE_DEBUG=true

# .env.production
VITE_CITY_API_BASE_URL=https://api.yoursite.com
VITE_APP_ENV=production
VITE_DEBUG=false

# .env.test
VITE_CITY_API_BASE_URL=https://test-api.yoursite.com
VITE_APP_ENV=test
VITE_DEBUG=true`}</pre>
                            </div>

                            {activeDemo === 2 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>环境配置的最佳实践</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>分环境管理</strong>：开发、测试、生产环境分别配置不同的接口地址</li>
                                        <li><strong>调试开关</strong>：生产环境关闭调试日志，开发环境打开</li>
                                        <li><strong>安全考虑</strong>：敏感信息不要提交到代码仓库</li>
                                        <li><strong>命名规范</strong>：使用 VITE_ 前缀让变量在客户端可用</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 打包优化 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[2] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>打包优化：让项目体积更小</h2>
                        <p className={styles.sectionSubtitle}>这些配置能让你的打包体积减少一大半</p>
                    </div>

                    <div className={styles.configGrid}>
                        <div
                            ref={(el) => {
                                configCardsRef.current[2] = el!
                            }}
                            className={styles.configCard}
                        >
                            <div className={styles.configHeader}>
                                <h3 className={styles.configTitle}>代码分割配置</h3>
                                <div className={styles.configActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 什么是 Chunk？
// Chunk 就是打包后的代码块，想象成不同的 JS 文件
// 默认情况下，Vite 会把所有代码打包成一个大文件
// 但这样首次加载会很慢，所以我们要手动分割

export default defineConfig({
  build: {
    target: "es2020",
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    minify: "terser",
    chunkSizeWarningLimit: 1000,  // 超过1MB会警告
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        // 手动分割代码块 - 这是关键！
        manualChunks: {
          // 基础框架 - React 相关，用得最多，单独分离
          react: ['react', 'react-dom', 'react-router-dom'],

          // UI 组件库 - antd 比较大，独立出来方便缓存
          antd: ['antd', '@ant-design/icons'],

          // 工具库 - lodash 很常用但不经常更新
          lodash: ['lodash', 'dayjs', 'axios'],

          // 动画库 - GSAP 体积不小，用到动画的页面才需要
          animation: ['gsap', 'framer-motion'],

          // 代码高亮相关 - 只有代码展示页面用到
          syntax: ['react-syntax-highlighter', 'highlight.js', 'prismjs'],

          // 图表和可视化 - 体积大，按需加载
          charts: ['mermaid', 'echarts', '@antv/g2'],

          // 编辑器相关 - 如果有富文本编辑器
          editor: ['@monaco-editor/react', 'monaco-editor'],
        },

        // 更细粒度的分割策略
        manualChunks(id) {
          // node_modules 里的包按照大小分类
          if (id.includes('node_modules')) {
            // 超大包单独处理
            if (id.includes('monaco-editor')) {
              return 'monaco'
            }
            if (id.includes('antd')) {
              return 'antd'
            }
            // 其他第三方库
            return 'vendor'
          }

          // 业务代码按页面分割
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('/')[0]
            return \`page-\${pageName}\`
          }
        }
      }
    }
  }
});`, 'buildConfig')}
                                    >
                                        {copiedCode === 'buildConfig' ? <FaCheck/> : <FaCopy/>}
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
                            <pre className={styles.codeContent}>{`// 什么是 Chunk？
// Chunk 就是打包后的代码块，想象成不同的 JS 文件
// 默认情况下，Vite 会把所有代码打包成一个大文件
// 但这样首次加载会很慢，所以我们要手动分割

export default defineConfig({
  build: {
    target: "es2020",
    outDir: "dist",
    minify: "terser",
    chunkSizeWarningLimit: 1000,  // 超过1MB会警告
    rollupOptions: {
      output: {
        // 手动分割代码块 - 这是关键！
        manualChunks: {
          // 基础框架 - React 相关，用得最多，单独分离
          react: ['react', 'react-dom', 'react-router-dom'],

          // UI 组件库 - antd 比较大，独立出来方便缓存
          antd: ['antd', '@ant-design/icons'],

          // 工具库 - lodash 很常用但不经常更新
          lodash: ['lodash', 'dayjs', 'axios'],

          // 动画库 - GSAP 体积不小，用到动画的页面才需要
          animation: ['gsap', 'framer-motion'],

          // 代码高亮相关 - 只有代码展示页面用到
          syntax: ['react-syntax-highlighter', 'highlight.js'],

          // 图表和可视化 - 体积大，按需加载
          charts: ['mermaid', 'echarts', '@antv/g2'],
        }
      }
    }
  }
});`}</pre>
                            </div>

                            {activeDemo === 3 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>Chunk 分割策略详解</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>什么是 Chunk</strong>：Chunk 就是打包后的 JavaScript 文件块，每个 chunk 都可以独立加载</li>
                                        <li><strong>为什么要分割</strong>：默认打包成一个大文件会导致首次加载慢，分割后可以并行加载</li>
                                        <li><strong>分割策略</strong>：按使用频率和更新频率分类，常用且稳定的库单独打包</li>
                                        <li><strong>缓存优化</strong>：第三方库变化少，单独打包后浏览器可以长期缓存</li>
                                        <li><strong>按需加载</strong>：用户只下载当前页面需要的代码，其他页面代码懒加载</li>
                                        <li><strong>函数式分割</strong>：manualChunks 还可以接受函数，实现更复杂的分割逻辑</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div
                            ref={(el) => {
                                configCardsRef.current[3] = el!
                            }}
                            className={styles.configCard}
                        >
                            <div className={styles.configHeader}>
                                <h3 className={styles.configTitle}>路径别名配置</h3>
                                <div className={styles.configActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// vite.config.ts 中的路径别名
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~components": path.resolve(__dirname, "./src/components"),
      "~hooks": path.resolve(__dirname, "./src/hooks"),
      "~utils": path.resolve(__dirname, "./src/utils"),
      "~types": path.resolve(__dirname, "./src/types"),
      "~assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});

// 使用示例
import Button from "~components/Button";
import { useLocalStorage } from "~hooks/useLocalStorage";
import { formatDate } from "~utils/date";`, 'aliasConfig')}
                                    >
                                        {copiedCode === 'aliasConfig' ? <FaCheck/> : <FaCopy/>}
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
                            <pre className={styles.codeContent}>{`// vite.config.ts 中的路径别名
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~components": path.resolve(__dirname, "./src/components"),
      "~hooks": path.resolve(__dirname, "./src/hooks"),
      "~utils": path.resolve(__dirname, "./src/utils"),
      "~types": path.resolve(__dirname, "./src/types"),
      "~assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});

// 使用示例
import Button from "~components/Button";
import { useLocalStorage } from "~hooks/useLocalStorage";
import { formatDate } from "~utils/date";`}</pre>
                            </div>

                            {activeDemo === 4 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>路径别名的优势</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>代码整洁</strong>：避免 ../../../ 这种相对路径地狱</li>
                                        <li><strong>重构友好</strong>：移动文件时不用修改所有引用路径</li>
                                        <li><strong>IDE 支持</strong>：配合 tsconfig.json 可以获得完整的智能提示</li>
                                        <li><strong>团队协作</strong>：统一的路径规范让代码更易维护</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div
                            ref={(el) => {
                                configCardsRef.current[4] = el!
                            }}
                            className={styles.configCard}
                        >
                            <div className={styles.configHeader}>
                                <h3 className={styles.configTitle}>懒加载优化</h3>
                                <div className={styles.configActions}>
                                    <button
                                        className={styles.copyButton}
                                        onClick={() => copyToClipboard(`// 1. 路由懒加载 - React Router
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';

// 懒加载页面组件
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

// 2. 组件级懒加载 - 条件渲染
import { useState, lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./components/HeavyChart'));
const RichEditor = lazy(() => import('./components/RichEditor'));

function MyPage() {
  const [showChart, setShowChart] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        显示图表
      </button>

      {showChart && (
        <Suspense fallback={<div>图表加载中...</div>}>
          <HeavyChart />
        </Suspense>
      )}

      {showEditor && (
        <Suspense fallback={<div>编辑器加载中...</div>}>
          <RichEditor />
        </Suspense>
      )}
    </div>
  );
}

// 3. 优雅的 Loading 组件
import { FaSpinner } from 'react-icons/fa';

const Loading = ({ message = '加载中...', size = 'medium' }) => {
  const sizeClass = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }[size];

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <FaSpinner className={\`animate-spin text-blue-500 \${sizeClass}\`} />
      <p className={\`text-gray-600 \${sizeClass}\`}>{message}</p>
      {/* 骨架屏效果 */}
      <div className="w-full max-w-md space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
      </div>
    </div>
  );
};`, 'lazyLoading')}
                                    >
                                        {copiedCode === 'lazyLoading' ? <FaCheck/> : <FaCopy/>}
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
                            <pre className={styles.codeContent}>{`// 路由懒加载 - 按页面分割
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading message="页面加载中..." />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

// 组件级懒加载 - 按需加载重型组件
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        显示图表
      </button>

      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}`}</pre>
                            </div>

                            {activeDemo === 5 && (
                                <div className={styles.explanationPanel}>
                                    <h4 className={styles.explanationTitle}>懒加载最佳实践</h4>
                                    <ul className={styles.explanationList}>
                                        <li><strong>路由级懒加载</strong>：每个页面都单独打包，用户访问时才下载对应代码</li>
                                        <li><strong>组件级懒加载</strong>：重型组件（图表、编辑器）按需加载，提升首屏速度</li>
                                        <li><strong>Loading 体验</strong>：用骨架屏代替转圈圈，给用户更好的视觉反馈</li>
                                        <li><strong>预加载策略</strong>：可以在用户悬停时预加载，平衡性能和体验</li>
                                        <li><strong>错误处理</strong>：懒加载失败时要有降级方案，避免白屏</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 可视化分析 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[3] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>打包分析：看看你的项目都装了什么</h2>
                        <p className={styles.sectionSubtitle}>用可视化工具分析打包结果，找出体积优化空间</p>
                    </div>

                    <div className={styles.stepsGrid}>
                        <div
                            ref={(el) => {
                                stepCardsRef.current[0] = el!
                            }}
                            className={styles.stepCard}
                        >
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>安装分析工具</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`# 安装 rollup-plugin-visualizer
npm install rollup-plugin-visualizer --save-dev

# 或者使用 yarn
yarn add rollup-plugin-visualizer -D`}</pre>
                            </div>
                            <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(`npm install rollup-plugin-visualizer --save-dev`, 'install')}
                            >
                                {copiedCode === 'install' ? <FaCheck/> : <FaCopy/>}
                            </button>
                        </div>

                        <div
                            ref={(el) => {
                                stepCardsRef.current[1] = el!
                            }}
                            className={styles.stepCard}
                        >
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>配置 Vite 插件</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // 只在分析模式下启用
    ...(process.env.npm_lifecycle_event === 'build:analyze' ? [
      visualizer({
        filename: 'dist/stats.html',
        open: true,          // 构建完成后自动打开
        gzipSize: true,      // 显示 gzip 压缩后的大小
        brotliSize: true,    // 显示 brotli 压缩后的大小
      })
    ] : [])
  ],
});`}</pre>
                            </div>
                            <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(`// vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // 只在分析模式下启用
    ...(process.env.npm_lifecycle_event === 'build:analyze' ? [
      visualizer({
        filename: 'dist/stats.html',
        open: true,          // 构建完成后自动打开
        gzipSize: true,      // 显示 gzip 压缩后的大小
        brotliSize: true,    // 显示 brotli 压缩后的大小
      })
    ] : [])
  ],
});`, 'config')}
                            >
                                {copiedCode === 'config' ? <FaCheck/> : <FaCopy/>}
                            </button>
                        </div>

                        <div
                            ref={(el) => {
                                stepCardsRef.current[2] = el!
                            }}
                            className={styles.stepCard}
                        >
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>添加分析脚本</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:analyze": "vite build",
    "preview": "vite preview"
  }
}`}</pre>
                            </div>
                            <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:analyze": "vite build",
    "preview": "vite preview"
  }
}`, 'scripts')}
                            >
                                {copiedCode === 'scripts' ? <FaCheck/> : <FaCopy/>}
                            </button>
                        </div>

                        <div
                            ref={(el) => {
                                stepCardsRef.current[3] = el!
                            }}
                            className={styles.stepCard}
                        >
                            <div className={styles.stepNumber}>4</div>
                            <h3 className={styles.stepTitle}>运行分析</h3>
                            <div className={styles.codeBlock}>
                            <pre className={styles.codeContent}>{`# 运行打包分析
npm run build:analyze

# 构建完成后会自动打开 dist/stats.html
# 你可以看到：
# 📊 各个模块的大小占比
# 📦 哪些依赖包体积最大
# 🗜️ gzip 压缩后的实际大小
# 🎯 优化建议和热点分析`}</pre>
                            </div>
                            <button
                                className={styles.copyButton}
                                onClick={() => copyToClipboard(`npm run build:analyze`, 'analyze')}
                            >
                                {copiedCode === 'analyze' ? <FaCheck/> : <FaCopy/>}
                            </button>
                        </div>
                    </div>

                    <div className={styles.analyzeCard}>
                        <div className={styles.analyzeHeader}>
                            <FaChartBar className={styles.analyzeIcon}/>
                            <h3 className={styles.analyzeTitle}>分析报告示例</h3>
                        </div>
                        <div className={styles.analyzeContent}>
                            <p>运行 <code>npm run build:analyze</code> 后，你会看到一个交互式的可视化图表，显示：</p>
                            <ul className={styles.analyzeList}>
                                <li><strong>模块占比</strong>：哪些模块占用了最多空间</li>
                                <li><strong>依赖分析</strong>：第三方库的大小分布</li>
                                <li><strong>压缩效果</strong>：gzip/brotli 压缩后的实际大小</li>
                                <li><strong>优化建议</strong>：可以进一步优化的模块</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 持续更新提醒 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[4] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>持续更新中...</h2>
                        <p className={styles.sectionSubtitle}>Vite 生态在快速发展，这里会持续补充新的优化技巧</p>
                    </div>

                    <div className={styles.updateCard}>
                        <div className={styles.updateHeader}>
                            <FaExclamationTriangle className={styles.updateIcon}/>
                            <h3 className={styles.updateTitle}>📝 接下来会更新的内容</h3>
                        </div>
                        <div className={styles.updateContent}>
                            <div className={styles.updateGrid}>
                                <div className={styles.updateItem}>
                                    <h4>🚀 性能优化</h4>
                                    <ul>
                                        <li>预构建优化配置</li>
                                        <li>热更新性能调优</li>
                                        <li>懒加载最佳实践</li>
                                    </ul>
                                </div>
                                <div className={styles.updateItem}>
                                    <h4>🛠️ 开发工具</h4>
                                    <ul>
                                        <li>ESLint 和 Prettier 集成</li>
                                        <li>TypeScript 编译优化</li>
                                        <li>调试工具配置</li>
                                    </ul>
                                </div>
                                <div className={styles.updateItem}>
                                    <h4>📦 部署优化</h4>
                                    <ul>
                                        <li>CDN 资源配置</li>
                                        <li>Docker 构建优化</li>
                                        <li>CI/CD 集成技巧</li>
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
                            <FaCog/>
                            <span className={styles.logoText}>Vite Optimization</span>
                        </div>
                        <p className={styles.footerText}>让你的 Vite 项目性能起飞的优化技巧合集</p>
                        <div className={styles.footerLinks}>
                            <a href="https://vitejs.dev/" className={styles.footerLink}>Vite 官方文档</a>
                            <a href="https://github.com/vitejs/vite" className={styles.footerLink}>GitHub 仓库</a>
                            <a href="https://rollupjs.org/" className={styles.footerLink}>Rollup 文档</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ViteOptimizationScene;
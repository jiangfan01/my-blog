import React, {useEffect, useRef} from "react";
import styles from "./AnimationScene.module.scss";
import {gsap} from "gsap";
import {FaMagic} from "react-icons/fa";
import BackButton from "../../../../components/BackButton/BackButton.tsx";

const AnimationScene: React.FC = () => {

    const headerRef = useRef<HTMLDivElement>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const demoRef = useRef<HTMLDivElement>(null);
    const gsapCardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        // 页面元素动画
        gsap.fromTo(
            headerRef.current,
            {opacity: 0, y: 40},
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            }
        );

        // 内容区域动画
        contentRefs.current.forEach((el, index) => {
            if (el) {
                gsap.fromTo(
                    el,
                    {opacity: 0, y: 50},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: index * 0.1 + 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                    }
                );
            }
        });

        // 演示动画
        if (demoRef.current) {
            gsap.fromTo(
                demoRef.current.querySelectorAll(".demo-box"),
                {opacity: 0, y: 30},
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: demoRef.current,
                        start: "top 90%",
                    },
                }
            );
        }

        // 封装区块动画
        if (gsapCardRef.current) {
            gsap.fromTo(
                gsapCardRef.current,
                {opacity: 0, y: 40},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gsapCardRef.current,
                        start: "top 90%",
                    },
                }
            );
        }


    }, []);

    return (
        <>
            <BackButton/>
            <div className={styles.container}>
                <header className={styles.header} ref={headerRef}>
                    <div className={styles.headerTitle}>
                        <h1>动效统一管理</h1>
                        <p>
                            使用 GSAP Timeline 控制所有入场动画配合 Lenis 实现页面动效统一与丝滑滚动体验
                        </p>
                    </div>
                </header>

                <section className={styles.section}>
                    {/* GSAP & Lenis 简介 */}
                    <div
                        className={styles.contentCard}
                        ref={(el) => {
                            contentRefs.current[0] = el;
                        }}
                    >
                        <h2>GSAP & Lenis 简介</h2>
                        <div className={styles.cardContent}>
                            <div className={styles.textBlock}>
                                <h3>GSAP (GreenSock Animation Platform)</h3>
                                <p>
                                    业界领先的高性能 JavaScript 动画库，提供强大的时间轴控制、
                                    补间动画和复杂序列支持。GSAP 以卓越的性能和跨浏览器兼容性著称，
                                    是创建复杂、流畅动画的首选工具。
                                </p>
                            </div>

                            <div className={styles.textBlock}>
                                <h3>Lenis</h3>
                                <p>
                                    轻量级、高性能的平滑滚动库，提供丝滑的滚动体验。
                                    Lenis 与 GSAP 完美配合，解决了传统滚动事件卡顿的问题，
                                    同时保持原生滚动行为，为用户提供极致流畅的交互体验。
                                </p>
                            </div>

                            <div className={styles.featureGrid}>
                                <div className={styles.featureCard}>
                                    <div className={styles.featureIcon}>🚀</div>
                                    <h4>高性能</h4>
                                    <p>优化过的动画引擎，极低的内存占用</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <div className={styles.featureIcon}>🔄</div>
                                    <h4>无缝集成</h4>
                                    <p>完美支持React/Vue等现代框架</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <div className={styles.featureIcon}>📱</div>
                                    <h4>响应式</h4>
                                    <p>自动适配不同设备与屏幕尺寸</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 安装指南 */}
                    <div
                        className={styles.contentCard}
                        ref={(el) => {
                            contentRefs.current[1] = el;
                        }}
                    >
                        <h2>安装指南</h2>
                        <div className={styles.cardContent}>
                            <div className={styles.installSteps}>
                                <div className={styles.step}>
                                    <div className={styles.stepNumber}>1</div>
                                    <div className={styles.stepContent}>
                                        <h3>通过npm安装</h3>
                                        <pre className={styles.codeBlock}>
                    <code>npm install gsap @studio-freight/lenis</code>
                  </pre>
                                    </div>
                                </div>

                                <div className={styles.step}>
                                    <div className={styles.stepNumber}>2</div>
                                    <div className={styles.stepContent}>
                                        <h3>或者使用yarn</h3>
                                        <pre className={styles.codeBlock}>
                    <code>yarn add gsap @studio-freight/lenis</code>
                  </pre>
                                    </div>
                                </div>

                                <div className={styles.step}>
                                    <div className={styles.stepNumber}>3</div>
                                    <div className={styles.stepContent}>
                                        <h3>在项目中引入</h3>
                                        <pre className={styles.codeBlock}>
                    {`import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";`}
                  </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GSAP Timeline 在 React 中的使用 */}
                    <div
                        className={styles.contentCard}
                        ref={(el) => {
                            contentRefs.current[2] = el;
                        }}
                    >
                        <h2>GSAP Timeline 在 React 中的使用</h2>
                        <div className={styles.cardContent}>
                            <div className={styles.timelineExplanation}>
                                <p>
                                    GSAP Timeline 提供了一种强大的方式来创建和管理动画序列。
                                    在React中，我们可以结合<code>useEffect</code>和<code>useRef</code>
                                    来创建精确控制的动画流程。
                                </p>

                                <div className={styles.codeExample}>
                <pre className={styles.codeBlock}>
                  {`// 创建时间轴实例
const tl = gsap.timeline({
  defaults: { 
    duration: 0.8, 
    ease: "power2.out" 
  }
});

// 添加动画序列
tl.from(headerRef.current, { opacity: 0, y: 40 })
  .from(contentRef.current, { opacity: 0, y: 50 }, "-=0.3")
  .from(buttonRef.current, { opacity: 0, scale: 0.8 }, "+=0.2");`}
                </pre>
                                </div>

                                <div className={styles.bestPractices}>
                                    <h3>最佳实践</h3>
                                    <ul>
                                        <li>在<code>useEffect</code>中初始化时间轴</li>
                                        <li>使用<code>useRef</code>引用DOM元素</li>
                                        <li>清理动画实例以防止内存泄漏</li>
                                        <li>使用相对时间偏移确保动画流畅衔接</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 实际应用 */}
                    <div
                        className={styles.contentCard}
                        ref={(el) => {
                            contentRefs.current[3] = el;
                        }}
                    >
                        <h2>实际应用</h2>
                        <div className={styles.cardContent}>
                            <div ref={demoRef} className={styles.demoArea}>
                                <h3>滚动触发动画演示</h3>
                                <p>向下滚动查看动画效果</p>

                                <div className={styles.demoContainer}>
                                    <div className={`${styles.demoBox} demo-box`}>
                                        <div className={styles.boxContent}>
                                            <div className={styles.boxIcon}>🚀</div>
                                            <h4>平滑滚动</h4>
                                            <p>Lenis 提供的丝滑滚动体验</p>
                                        </div>
                                    </div>

                                    <div className={`${styles.demoBox} demo-box`}>
                                        <div className={styles.boxContent}>
                                            <div className={styles.boxIcon}>🎯</div>
                                            <h4>精确控制</h4>
                                            <p>GSAP Timeline 管理复杂序列</p>
                                        </div>
                                    </div>

                                    <div className={`${styles.demoBox} demo-box`}>
                                        <div className={styles.boxContent}>
                                            <div className={styles.boxIcon}>✨</div>
                                            <h4>流畅过渡</h4>
                                            <p>无缝衔接的动画效果</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.codeImplementation}>
                                <h3>实际使用代码(React中使用)</h3>
                                <pre className={styles.codeBlock}>
                {`useEffect(() => {
  // 初始化平滑滚动
  const lenis = new Lenis({
    duration: 1,
    smoothWheel: true,
  });

  (window as any).__lenis__ = lenis;  //注册到全局窗口

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // 元素动画
  gsap.fromTo(
    tabsRef.current,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: "power3.out",
      delay: 0.3
    }
  );

  // 清理函数
  return () => {
    lenis.destroy();
    (window as any).__lenis__ = null;
  };
}, [location.pathname]); //依赖路由地址，变化重新执行动画和插入销毁Lenis
`}
              </pre>

                                <div className={styles.codeNotes}>
                                    <h4>代码说明</h4>
                                    <ul>
                                        <li>使用Lenis创建平滑滚动实例</li>
                                        <li>通过requestAnimationFrame实现流畅的滚动效果</li>
                                        <li>使用GSAP创建元素进入动画</li>
                                        <li>在组件卸载时清理资源</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*对GSAP封装*/}
                    <div
                        className={styles.contentCard}
                        ref={gsapCardRef}
                    >
                        <h2 className={styles.gsapCardTitle}>对GSAP动画的统一封装</h2>
                        <pre className={styles.codeBlock}>

{`
// 设置动画函数
const animationFn = () => {
    $("[a-type=img]").each(function () {
        gsap.set(this, {opacity: 0});
        gsap.fromTo(
            this,
            {scale: 1.1, opacity: 0},
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    end: "top bottom",
                    markers: false
                }
            }
        );
    });
    $("[a-type=bgImg]").each(function () {
        gsap.fromTo(
            this,
            {backgroundSize: "110% 110%"},
            {
                backgroundSize: "100% 100%",
                duration: 1.2,
                scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    end: "top bottom",
                    markers: false
                }
            }
        );
    });
    $("[a-type=text]").each(function () {
        gsap.set(this, {opacity: 0});
        gsap.fromTo(
            this,
            {opacity: 0, y: 50},
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    end: "top bottom",
                    markers: false
                }
            }
        );
    });
    $("[a-type=navbar]").each(function () {
        gsap.set(this, {opacity: 0, y: -100});
        gsap.fromTo(
            this,
            {opacity: 0, y: -100},
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    end: "top bottom",
                    markers: false
                }
            }
        );
    });
};
export default animationFn
// 应用示例:
<div class="demo" a-type="text">  </div> //对这个div采取text的动画
`}
                    </pre>
                    </div>
                </section>
                {/* 底部区域 */}
                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <FaMagic/>
                            <span className={styles.logoText}>GSAP</span>
                        </div>
                        <p className={styles.footerText}>动效统一管理</p>
                        <div className={styles.footerLinks}>
                            <a href="https://gsap.com/docs/v3/" className={styles.footerLink}>GSAP官方文档</a>
                            <a href="https://github.com/darkroomengineering/lenis/blob/main/README.md"
                               className={styles.footerLink}>Lenis官方文档</a>
                            <a href="https://lenis.darkroom.engineering/"
                               className={styles.footerLink}>在线示例</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default AnimationScene;
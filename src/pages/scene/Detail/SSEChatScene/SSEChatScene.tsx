import React, {useState, useEffect, useRef} from "react";
import {FaComments, FaPlay} from "react-icons/fa";
import styles from './SSEChatScene.module.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BackButton from "../../../../components/BackButton/BackButton.tsx";

gsap.registerPlugin(ScrollTrigger);

const SSEChatScene: React.FC = () => {
    const [isStreaming, setIsStreaming] = useState(false);
    const [streamContent, setStreamContent] = useState("");
    const [messageQueue, setMessageQueue] = useState<string[]>([]);
    const headerRef = useRef<HTMLDivElement>(null);
    const sectionHeadersRef = useRef<HTMLDivElement[]>([]);
    const benefitCardsRef = useRef<HTMLDivElement[]>([]);
    const demoCardsRef = useRef<HTMLDivElement[]>([]);
    const architectureRef = useRef<HTMLDivElement>(null);

    // 模拟SSE流数据
    const simulateSSEStream = async () => {
        if (isStreaming) return;

        setIsStreaming(true);
        setStreamContent("");

        const messages = [
            "正在连接到服务器...",
            "建立SSE连接成功",
            "开始接收流数据",
            "这是一个实时的SSE消息流",
            "每条消息都是实时推送的",
            "体验流畅的打字机效果",
            "SSE让实时通信变得简单",
            "流传输完成！"
        ];

        for (let i = 0; i < messages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 800));
            setStreamContent(prev => prev + messages[i] + "\n");
        }

        setIsStreaming(false);
    };

    // 模拟事件缓冲
    useEffect(() => {
        if (messageQueue.length > 0) {
            const timer = setTimeout(() => {
                const nextMessage = messageQueue[0];
                setMessageQueue(prev => prev.slice(1));
                setStreamContent(prev => prev + nextMessage + "\n");
            }, 100); // 100ms 缓冲间隔

            return () => clearTimeout(timer);
        }
    }, [messageQueue]);

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

        // 架构图动画
        if (architectureRef.current) {
            gsap.fromTo(architectureRef.current,
                {opacity: 0, y: 30},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: architectureRef.current,
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
            <div className={styles.sseContainer}>
                {/* 头部区域 */}
                <header className={styles.header} ref={headerRef}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerIcon}>
                            <FaComments/>
                        </div>
                        <h1 className={styles.headerTitle}>AI聊天：用SSE做实时对话和工具调用</h1>
                        <p className={styles.subtitle}>
                            最近在公司搞了个AI聊天功能，支持流式响应和工具调用，记录下踩坑经验
                        </p>
                    </div>
                </header>

                {/* SSE基础概念 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[0] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>什么是SSE？</h2>
                        <p className={styles.sectionSubtitle}>Server-Sent Events 基础概念与原理</p>
                    </div>

                    <div className={styles.conceptContent}>
                        <div className={styles.conceptCard}>
                            <h3>📡 SSE (Server-Sent Events)</h3>
                            <p>
                                SSE是HTML5标准的一部分，允许服务器向客户端推送数据。
                                它基于HTTP协议，建立一个持久的连接，服务器可以通过这个连接向客户端发送事件流。
                            </p>
                            <div className={styles.codeBlock}>
                                <pre className={styles.codeContent}>{`// 前端建立SSE连接
const eventSource = new EventSource('/api/events');

eventSource.onmessage = function(event) {
  console.log('Received:', event.data);
};

// 后端SSE响应格式
data: {"type": "message", "content": "Hello World"}

data: {"type": "complete"}

`}</pre>
                            </div>
                        </div>

                        <div className={styles.comparisonGrid}>
                            <div className={styles.comparisonCard}>
                                <h4>🔄 轮询 (Polling)</h4>
                                <div className={styles.pros}>
                                    <span className={styles.prosTitle}>优点:</span>
                                    <ul>
                                        <li>简单易实现</li>
                                        <li>服务器无需保持连接</li>
                                    </ul>
                                </div>
                                <div className={styles.cons}>
                                    <span className={styles.consTitle}>缺点:</span>
                                    <ul>
                                        <li>延迟高（1-5秒）</li>
                                        <li>服务器压力大</li>
                                        <li>浪费带宽</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.comparisonCard}>
                                <h4>🔌 WebSocket</h4>
                                <div className={styles.pros}>
                                    <span className={styles.prosTitle}>优点:</span>
                                    <ul>
                                        <li>双向通信</li>
                                        <li>延迟极低</li>
                                        <li>支持二进制数据</li>
                                    </ul>
                                </div>
                                <div className={styles.cons}>
                                    <span className={styles.consTitle}>缺点:</span>
                                    <ul>
                                        <li>实现复杂</li>
                                        <li>代理兼容性差</li>
                                        <li>需要心跳保活</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`${styles.comparisonCard} ${styles.highlighted}`}>
                                <h4>📡 SSE</h4>
                                <div className={styles.pros}>
                                    <span className={styles.prosTitle}>优点:</span>
                                    <ul>
                                        <li>自动重连</li>
                                        <li>基于HTTP</li>
                                        <li>实现简单</li>
                                        <li>延迟低</li>
                                    </ul>
                                </div>
                                <div className={styles.cons}>
                                    <span className={styles.consTitle}>缺点:</span>
                                    <ul>
                                        <li>单向通信</li>
                                        <li>仅支持文本</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 数据流架构 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[1] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>从后端到UI的完整数据流</h2>
                        <p className={styles.sectionSubtitle}>SSE聊天架构的数据流转逻辑</p>
                    </div>

                    <div className={styles.dataFlowDiagram} ref={architectureRef}>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h4>🖥️ 后端SSE服务</h4>
                                <p>Node.js/Python 建立SSE连接，按标准格式推送数据</p>
                                <div className={styles.miniCode}>
                                    <pre>{`res.writeHead(200, {
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache'
});
res.write('data: {"type":"message","content":"Hello"}\\n\\n');`}</pre>
                                </div>
                            </div>
                        </div>

                        <div className={styles.flowArrow}>↓</div>

                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h4>📡 SSE解析层</h4>
                                <p>将原始流数据解析为结构化事件</p>
                                <div className={styles.miniCode}>
                                    <pre>{`parseSSEStream(readableStream) →
  { event: "message", data: {...} }`}</pre>
                                </div>
                            </div>
                        </div>

                        <div className={styles.flowArrow}>↓</div>

                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h4>⚡ 事件缓冲层</h4>
                                <p>100ms批量处理，避免UI更新过频</p>
                                <div className={styles.miniCode}>
                                    <pre>{`eventBuffer.push(event);
setTimeout(flushEvents, 100ms);`}</pre>
                                </div>
                            </div>
                        </div>

                        <div className={styles.flowArrow}>↓</div>

                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepContent}>
                                <h4>🎣 React Hook层</h4>
                                <p>封装业务逻辑，简化组件使用</p>
                                <div className={styles.miniCode}>
                                    <pre>{`const { sendMessage } = useAgentStreamMessage({
  onStreamEvent: handleEvent
});`}</pre>
                                </div>
                            </div>
                        </div>

                        <div className={styles.flowArrow}>↓</div>

                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>5</div>
                            <div className={styles.stepContent}>
                                <h4>🎨 UI渲染层</h4>
                                <p>React组件接收事件，实时更新界面</p>
                                <div className={styles.miniCode}>
                                    <pre>{`{messages.map(msg =>
  <div key={msg.id}>{msg.content}</div>
)}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 核心代码实现 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[2] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>核心代码实现</h2>
                        <p className={styles.sectionSubtitle}>从实际项目中提取的关键代码</p>
                    </div>

                    <div className={styles.codeImplementation}>
                        {/* SSE解析器 */}
                        <div className={styles.codeSection}>
                            <h3 className={styles.codeSectionTitle}>1. SSE流解析器 - 底层基础</h3>
                            <div className={styles.codeBlock}>
                                <pre className={styles.codeContent}>{`// sseParser.ts - SSE流解析的核心实现
export async function* parseSSEStream(
  options: StreamOptions
): AsyncGenerator<SSEEvent, void, unknown> {
  const { readableStream } = options;
  const decoder = new TextDecoder("utf-8");
  const reader = readableStream.getReader();

  let buffer = "";
  let currentEvent: Partial<SSEEvent> = {};

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        // 处理缓冲区剩余数据 - 防止最后一个事件丢失
        if (buffer.trim()) {
          const event = processBuffer(buffer + "\\n\\n", currentEvent);
          if (event && (event.data || event.event)) {
            yield event;
          }
        }
        break;
      }

      // 解码数据块并添加到缓冲区
      buffer += decoder.decode(value, { stream: true });

      // 处理完整的事件 (以 \\n\\n 分隔)
      let newlineIndex;
      while ((newlineIndex = buffer.indexOf("\\n\\n")) !== -1) {
        const chunk = buffer.slice(0, newlineIndex);
        buffer = buffer.slice(newlineIndex + 2);

        const event = processBuffer(chunk + "\\n\\n", currentEvent);
        if (event && (event.data || event.event)) {
          yield event;
          currentEvent = {}; // ⚠️ 重要：重置当前事件
        }
      }
    }
  } catch (error) {
    console.error("SSE Stream Error:", error);
    throw error;
  } finally {
    reader.releaseLock(); // ⚠️ 重要：释放资源
  }
}`}</pre>
                            </div>
                        </div>

                        {/* 流量控制 */}
                        <div className={styles.codeSection}>
                            <h3 className={styles.codeSectionTitle}>2. 流量控制机制 - 性能关键</h3>
                            <div className={styles.codeBlock}>
                                <pre className={styles.codeContent}>{`// agentStreamService.ts - 实际项目中的流量控制实现
export const sendStreamMessage = async (
  params: SendStreamParams,
  handlers: StreamEventHandlers
) => {
  try {
    const response = await sendAgentStreamRequest({
      ...params,
      stream: true
    });

    if (!response.body) {
      throw new Error("响应体为空");
    }

    let streamEnded = false;

    // 🔥 关键优化：SSE 接收限流控制
    const eventBuffer: StreamEvent[] = [];
    let flushTimer: NodeJS.Timeout | null = null;
    const FLUSH_INTERVAL = 100; // 100MS 批量处理间隔

    const flushEvents = () => {
      if (eventBuffer.length > 0) {
        const eventsToFlush = eventBuffer.splice(0, eventBuffer.length);
        eventsToFlush.forEach(event => handlers.onEvent(event));
      }
      flushTimer = null;
    };

    const scheduleFlush = () => {
      if (flushTimer === null) {
        flushTimer = setTimeout(flushEvents, FLUSH_INTERVAL);
      }
    };

    const addEventToBuffer = (event: StreamEvent) => {
      eventBuffer.push(event);
      scheduleFlush();
    };

    // 处理SSE数据流
    for await (const chunk of createSSEStream({readableStream: response.body})) {
      const { event: eventType = "message", data } = chunk;

      // 忽略会话信息和上下文事件
      if (eventType === "session_info" || eventType === "context") {
        continue;
      }

      if (eventType === "message") {
        const messageEvent = parseMessageEvent(data);
        if (messageEvent) {
          addEventToBuffer(messageEvent); // 🔥 关键：加入缓冲区而非直接处理
        }
      }

      if (eventType === "complete") {
        // 立即清空缓冲区
        if (flushTimer) {
          clearTimeout(flushTimer);
          flushTimer = null;
        }
        flushEvents(); // 立即flush剩余事件
        handlers.onEvent(parseCompleteEvent());
        streamEnded = true;
        break;
      }
    }

    // 兜底机制 - 确保所有事件都被处理
    if (flushTimer) {
      clearTimeout(flushTimer);
      flushTimer = null;
    }
    flushEvents();

    if (!streamEnded) {
      handlers.onEvent(parseCompleteEvent());
    }

  } catch (apiError) {
    const errorMessage = (apiError as Error).message;
    message.error(errorMessage);
    handlers.onEvent(parseErrorEvent(errorMessage));
  }
};`}</pre>
                            </div>
                        </div>

                        {/* React Hook封装 */}
                        <div className={styles.codeSection}>
                            <h3 className={styles.codeSectionTitle}>3. React Hook封装 - 简化使用</h3>
                            <div className={styles.codeBlock}>
                                <pre className={styles.codeContent}>{`// useStreamMessage.ts - 业务层Hook封装
export function useAgentStreamMessage({
  onStreamEvent,
  isStreaming,
  onStartNewTurn
}: {
  onStreamEvent: (event: StreamEvent) => void;
  isStreaming: boolean;
  onStartNewTurn: (message: string) => void;
}) {

  const sendMessage = useCallback(async (
    message: string,
    params: {
      agentId: string;
      sessionId?: string;
      isPreview?: boolean;
    }
  ) => {
    // 前置检查
    if (isStreaming || !message.trim()) {
      return;
    }

    try {
      // 开始新对话轮次
      onStartNewTurn(message.trim());

      // 🔥 动态导入避免首屏加载负担
      const { sendStreamMessage } = await import('~/services/stream/agentStreamService');

      // 调用SSE流服务
      await sendStreamMessage(
        {
          agent_id: params.agentId,
          content: message.trim(),
          session_id: params.sessionId,
          agent_version: params.isPreview ? "draft" : ""
        },
        {
          onEvent: onStreamEvent,
          onError: (error: string) => {
            // 统一错误处理
            const errorEvent: StreamEvent = {
              id: \`error_\${Date.now()}\`,
              type: StreamEventType.ERROR,
              content: error,
              timestamp: Date.now()
            };
            onStreamEvent(errorEvent);
          }
        }
      );

    } catch (error) {
      console.error('消息发送失败:', error);
      // 兜底错误处理
    }
  }, [onStreamEvent, isStreaming, onStartNewTurn]);

  return { sendMessage };
}`}</pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 踩坑经验 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[3] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>踩坑经验分享</h2>
                        <p className={styles.sectionSubtitle}>实际开发中遇到的问题与解决方案</p>
                    </div>

                    <div className={styles.pitfallsGrid}>
                        {/* 后端配合 */}
                        <div className={styles.pitfallCard}>
                            <div className={styles.pitfallHeader}>
                                <span className={styles.pitfallIcon}>⚠️</span>
                                <h3>后端数据结构配合</h3>
                            </div>
                            <div className={styles.pitfallContent}>
                                <div className={styles.problemDesc}>
                                    <strong>问题：</strong> 后端随意发送数据格式，前端解析困难
                                </div>
                                <div className={styles.solutionDesc}>
                                    <strong>解决：</strong> 制定严格的SSE数据协议
                                </div>
                                <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// ❌ 错误的后端实现
res.write('data: Hello World\\n\\n');  // 纯文本，难以解析

// ✅ 正确的后端实现
res.write('data: {"type":"message","content":"Hello World","id":"msg_001"}\\n\\n');
res.write('data: {"type":"thinking","content":"正在思考..."}\\n\\n');
res.write('data: {"type":"complete"}\\n\\n');

// 🔥 关键：统一的数据结构
interface SSEData {
  type: 'message' | 'thinking' | 'tool_call' | 'complete' | 'error';
  content?: string;
  id?: string;
  timestamp?: number;
  toolData?: any;
}`}</pre>
                                </div>
                            </div>
                        </div>

                        {/* 响应速度 */}
                        <div className={styles.pitfallCard}>
                            <div className={styles.pitfallHeader}>
                                <span className={styles.pitfallIcon}>🐌</span>
                                <h3>后端响应速度配合</h3>
                            </div>
                            <div className={styles.pitfallContent}>
                                <div className={styles.problemDesc}>
                                    <strong>问题：</strong> 后端发送过快或过慢，前端卡顿或体验差
                                </div>
                                <div className={styles.solutionDesc}>
                                    <strong>解决：</strong> 前后端协商合适的发送频率
                                </div>
                                <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// 后端需要控制发送频率
const sendSSEMessage = (res, data) => {
  // 🔥 关键：不要发送太快，给前端处理时间
  setTimeout(() => {
    res.write(\`data: \${JSON.stringify(data)}\\n\\n\`);
  }, 50); // 至少50ms间隔
};

// 前端配合：100ms批量处理
const FLUSH_INTERVAL = 100; // 与后端协商的处理间隔

// 🔥 经验：50ms发送 + 100ms处理 = 流畅体验`}</pre>
                                </div>
                            </div>
                        </div>

                        {/* 内存泄漏 */}
                        <div className={styles.pitfallCard}>
                            <div className={styles.pitfallHeader}>
                                <span className={styles.pitfallIcon}>💾</span>
                                <h3>内存泄漏问题</h3>
                            </div>
                            <div className={styles.pitfallContent}>
                                <div className={styles.problemDesc}>
                                    <strong>问题：</strong> SSE连接未正确关闭，定时器未清理
                                </div>
                                <div className={styles.solutionDesc}>
                                    <strong>解决：</strong> 完善的资源清理机制
                                </div>
                                <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// ❌ 容易导致内存泄漏的写法
const timer = setInterval(() => {
  // 定时处理，但可能忘记清理
}, 100);

// ✅ 正确的资源管理
useEffect(() => {
  let timer: NodeJS.Timeout | null = null;
  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;

  const cleanup = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (reader) {
      reader.releaseLock();
      reader = null;
    }
  };

  // 组件卸载时清理
  return cleanup;
}, []);

// 🔥 关键：finally块确保资源释放
finally {
  reader.releaseLock();
  if (flushTimer) {
    clearTimeout(flushTimer);
  }
}`}</pre>
                                </div>
                            </div>
                        </div>

                        {/* 错误处理 */}
                        <div className={styles.pitfallCard}>
                            <div className={styles.pitfallHeader}>
                                <span className={styles.pitfallIcon}>🚨</span>
                                <h3>错误处理不当</h3>
                            </div>
                            <div className={styles.pitfallContent}>
                                <div className={styles.problemDesc}>
                                    <strong>问题：</strong> 网络断开、服务器错误时用户无感知
                                </div>
                                <div className={styles.solutionDesc}>
                                    <strong>解决：</strong> 多层错误处理 + 用户友好提示
                                </div>
                                <div className={styles.codeBlock}>
                                    <pre className={styles.codeContent}>{`// 🔥 多层错误处理策略
try {
  // SSE连接和解析
  for await (const chunk of parseSSEStream()) {
    // 处理每个事件
  }
} catch (networkError) {
  // 网络层错误
  if (networkError.name === 'AbortError') {
    console.log('用户主动取消');
  } else {
    message.error('网络连接中断，请重试');
  }
} finally {
  // 资源清理
  cleanup();
}

// 后端错误事件处理
if (eventType === "error") {
  const errorMsg = data?.msg || "服务器处理异常";
  handlers.onEvent(parseErrorEvent(errorMsg));
  // 🔥 关键：给用户明确的错误信息
  message.error(\`处理失败: \${errorMsg}\`);
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 实时演示 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[4] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>实时演示</h2>
                        <p className={styles.sectionSubtitle}>体验SSE流式数据传输</p>
                    </div>

                    <div className={styles.demoGrid}>
                        {/* SSE流演示 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[0] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>SSE流式传输</h3>
                            </div>

                            <div className={styles.streamConsole}>
                                <pre className={styles.streamContent}>{streamContent}</pre>
                                {isStreaming && <div className={styles.streamCursor}>|</div>}
                            </div>

                            <div className={styles.streamControls}>
                                <button
                                    className={styles.actionButton}
                                    onClick={simulateSSEStream}
                                    disabled={isStreaming}
                                >
                                    <FaPlay/> 开始流传输
                                </button>
                            </div>
                        </div>

                        {/* 事件类型演示 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[1] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>事件类型系统</h3>
                            </div>

                            <div className={styles.eventTypes}>
                                <div className={styles.eventType}>
                                    <span className={styles.eventBadge}>THINKING</span>
                                    <span>AI思考过程</span>
                                </div>
                                <div className={styles.eventType}>
                                    <span className={styles.eventBadge}>MESSAGE</span>
                                    <span>文本消息</span>
                                </div>
                                <div className={styles.eventType}>
                                    <span className={styles.eventBadge}>TOOL_CALL</span>
                                    <span>工具调用</span>
                                </div>
                                <div className={styles.eventType}>
                                    <span className={styles.eventBadge}>TOOL_END</span>
                                    <span>工具结束</span>
                                </div>
                                <div className={styles.eventType}>
                                    <span className={styles.eventBadge}>COMPLETE</span>
                                    <span>流程完成</span>
                                </div>
                                <div className={styles.eventType}>
                                    <span className={styles.eventBadge}>ERROR</span>
                                    <span>错误处理</span>
                                </div>
                            </div>
                        </div>

                        {/* UI渲染实现 */}
                        <div
                            ref={(el) => {
                                demoCardsRef.current[2] = el!
                            }}
                            className={styles.demoCard}
                        >
                            <div className={styles.demoHeader}>
                                <h3 className={styles.demoTitle}>UI层面的渲染实现</h3>
                            </div>

                            <div className={styles.uiRenderingContent}>
                                <div className={styles.renderingItem}>
                                    <h4>组件渲染策略</h4>
                                    <p>使用 React.memo 优化消息组件，避免不必要的重渲染</p>
                                    <div className={styles.miniCode}>
                                        <pre>{`const MessageItem = React.memo(({ content, type }) => {
  return <div className={type}>{content}</div>;
});`}</pre>
                                    </div>
                                </div>

                                <div className={styles.renderingItem}>
                                    <h4>工具调用渲染</h4>
                                    <p>工具执行过程的可视化展示，包括加载状态和结果呈现</p>
                                    <div className={styles.miniCode}>
                                        <pre>{`const ToolCallDisplay = ({ toolData }) => (
  <div className="tool-call">
    <span className="tool-name">{toolData.name}</span>
    {toolData.status === 'running' && <Spinner />}
    {toolData.result && <ToolResult data={toolData.result} />}
  </div>
);`}</pre>
                                    </div>
                                </div>

                                <div className={styles.renderingItem}>
                                    <h4>虚拟滚动优化</h4>
                                    <p>长对话列表使用虚拟滚动，减少DOM节点数量</p>
                                    <div className={styles.miniCode}>
                                        <pre>{`const ChatList = () => {
  const [visibleRange, setVisibleRange] = useState([0, 20]);

  return (
    <VirtualList
      itemCount={messages.length}
      itemHeight={60}
      onScroll={updateVisibleRange}
    />
  );
};`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 技术对比 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[5] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>技术方案对比</h2>
                        <p className={styles.sectionSubtitle}>SSE vs WebSocket vs 轮询</p>
                    </div>

                    <div className={styles.comparisonTable}>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th className={styles.tableHeader}>特性</th>
                                <th className={styles.tableHeader}>SSE</th>
                                <th className={styles.tableHeader}>WebSocket</th>
                                <th className={styles.tableHeader}>轮询</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={styles.tableCell}>连接模式</td>
                                <td className={styles.tableCell}>单向推送</td>
                                <td className={styles.tableCell}>双向通信</td>
                                <td className={styles.tableCell}>请求响应</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>延迟</td>
                                <td className={styles.tableCell}>&lt; 100ms</td>
                                <td className={styles.tableCell}>&lt; 50ms</td>
                                <td className={styles.tableCell}>1-5s</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>资源消耗</td>
                                <td className={styles.tableCell}>低</td>
                                <td className={styles.tableCell}>中</td>
                                <td className={styles.tableCell}>高</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>实现复杂度</td>
                                <td className={styles.tableCell}>简单</td>
                                <td className={styles.tableCell}>复杂</td>
                                <td className={styles.tableCell}>简单</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>自动重连</td>
                                <td className={styles.tableCell}>内置支持</td>
                                <td className={styles.tableCell}>需要实现</td>
                                <td className={styles.tableCell}>不需要</td>
                            </tr>
                            <tr>
                                <td className={styles.tableCell}>代理兼容性</td>
                                <td className={styles.tableCell}>优秀</td>
                                <td className={styles.tableCell}>一般</td>
                                <td className={styles.tableCell}>优秀</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 总结 */}
                <section className={styles.section}>
                    <div
                        className={styles.sectionHeader}
                        ref={(el) => {
                            sectionHeadersRef.current[6] = el!
                        }}
                    >
                        <h2 className={styles.sectionTitle}>技术总结</h2>
                        <p className={styles.sectionSubtitle}>聊聊这套架构的真实感受</p>
                    </div>

                    <div className={styles.summaryGrid}>
                        <div className={styles.summaryCard}>
                            <h3>清晰的分层设计</h3>
                            <p>代码结构挺清楚的，解析、处理、Hook 各管各的，后面维护和写测试都比较方便</p>
                        </div>
                        <div className={styles.summaryCard}>
                            <h3>性能还不错</h3>
                            <p>100ms 的缓冲确实有用，UI 不会一直闪，CPU 也没那么吃紧了，用户体验明显好了很多</p>
                        </div>
                        <div className={styles.summaryCard}>
                            <h3>错误处理比较到位</h3>
                            <p>各种异常情况都考虑了，兜底机制做得还行，至少不会突然崩掉</p>
                        </div>
                        <div className={styles.summaryCard}>
                            <h3>开发体验还算友好</h3>
                            <p>Hook 包装了一下，用起来简单，TypeScript 类型也全，开发效率确实提升了</p>
                        </div>
                    </div>

                    <div className={styles.conclusionCard}>
                        <h3>结论</h3>
                        <p>
                            这套 SSE 聊天架构用下来感觉还不错，在公司项目里跑得挺稳的，用户反馈也没啥大问题。
                            当然技术方案这种东西没有完美的，还是要看具体场景。如果你也在做类似的实时聊天功能，可以参考一下。
                        </p>
                    </div>
                </section>

                {/* 底部区域 */}
                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <FaComments/>
                            <span className={styles.logoText}>SSE Chat</span>
                        </div>
                        <p className={styles.footerText}>企业级实时聊天架构解决方案</p>
                        <div className={styles.footerLinks}>
                            <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events"
                               className={styles.footerLink}>SSE 文档</a>
                            <a href="https://github.com" className={styles.footerLink}>GitHub 仓库</a>
                            <a href="#" className={styles.footerLink}>技术博客</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default SSEChatScene;
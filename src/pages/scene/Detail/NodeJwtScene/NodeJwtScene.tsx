import React, {useEffect, useRef} from "react";
import styles from "./NodeJwtScene.module.scss";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FaKey} from "react-icons/fa";
import BackButton from "../../../../components/BackButton/BackButton.tsx";

gsap.registerPlugin(ScrollTrigger);

const NodeJwtScene: React.FC = () => {
    // 创建动画引用
    const headerRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const packagesRef = useRef<HTMLDivElement>(null);
    const algorithmsRef = useRef<HTMLDivElement>(null);
    const middlewareRef = useRef<HTMLDivElement>(null);
    const loginRef = useRef<HTMLDivElement>(null);

    // 设置 GSAP 滚动动画
    useEffect(() => {
        const sections = [
            headerRef, introRef, packagesRef,
            algorithmsRef, middlewareRef, loginRef
        ];

        sections.forEach((ref) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    {opacity: 0, y: 50},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.container}>
            <BackButton/>
            <header className={styles.header} ref={headerRef}>
                <div className={styles.headerTitle}>
                    <div className={styles.headerIcon}>
                        <FaKey/>
                    </div>
                    <h1>Node.js中使用JWT的完整指南</h1>
                    <p>
                        深入了解JSON Web Tokens在Node.js应用中的实现方法、安全最佳实践和实际应用场景
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                {/* 简介部分 */}
                <div className={styles.contentCard} ref={introRef}>
                    <h2>JWT在Node.js中的基本使用</h2>

                    <div className={styles.cardContent}>
                        <div className={styles.textBlock}>
                            <h3>什么是JWT？</h3>
                            <p>
                                JSON Web Token (JWT) 是一种开放标准(RFC 7519)，用于在各方之间作为JSON对象安全地传输信息。
                                它由三部分组成：Header（头部）、Payload（负载）和Signature（签名），通过点号连接。
                            </p>
                            <div className={styles.jwtStructure}>
                                <div className={styles.jwtPart}>
                                    <h4>Header</h4>
                                    <p>包含令牌类型和签名算法</p>
                                    <pre>{`{
  "alg": "HS256",
  "typ": "JWT"
}`}</pre>
                                </div>
                                <div className={styles.jwtPart}>
                                    <h4>Payload</h4>
                                    <p>包含声明（用户数据和其他元数据）</p>
                                    <pre>{`{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}`}</pre>
                                </div>
                                <div className={styles.jwtPart}>
                                    <h4>Signature</h4>
                                    <p>对前两部分签名，防止数据篡改</p>
                                    <pre>{`HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 所需包部分 */}
                <div className={styles.contentCard} ref={packagesRef}>
                    <h2>所需的核心包</h2>

                    <div className={styles.cardContent}>
                        <div className={styles.textBlock}>
                            <p>
                                在Node.js中使用JWT主要需要以下包：
                            </p>

                            <div className={styles.featureGrid}>
                                <div className={styles.featureCard}>
                                    <div className={styles.featureIcon}>🔐</div>
                                    <h4>jsonwebtoken</h4>
                                    <p>用于生成和验证JWT的核心库</p>
                                    <div className={styles.codeBlock}>npm install jsonwebtoken</div>
                                </div>

                                <div className={styles.featureCard}>
                                    <div className={styles.featureIcon}>🔑</div>
                                    <h4>dotenv</h4>
                                    <p>用于管理环境变量，存储JWT密钥</p>
                                    <div className={styles.codeBlock}>npm install dotenv</div>
                                </div>

                                <div className={styles.featureCard}>
                                    <div className={styles.featureIcon}>🔍</div>
                                    <h4>bcryptjs</h4>
                                    <p>用于安全地哈希密码，增强安全性</p>
                                    <div className={styles.codeBlock}>npm install bcryptjs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 算法部分 */}
                <div className={styles.contentCard} ref={algorithmsRef}>
                    <h2>JWT加密方法与算法详解</h2>

                    <div className={styles.cardContent}>
                        <div className={styles.textBlock}>
                            <h3>JWT签名算法</h3>
                            <p>
                                JWT的签名部分使用密钥对头部和负载进行加密，确保令牌的完整性和真实性。
                                常用算法包括：
                            </p>

                            <div className={styles.algorithmGrid}>
                                <div className={styles.algorithmCard}>
                                    <div className={styles.algorithmHeader}>
                                        <div className={styles.algorithmNumber}>1</div>
                                        <h4>HMAC算法</h4>
                                    </div>
                                    <p>使用单个密钥进行签名和验证 (HS256, HS384, HS512)</p>
                                    <div className={styles.codeBlock}>
                                        {`jwt.sign(payload, secret, { algorithm: 'HS256' });`}
                                    </div>
                                    <div className={styles.algorithmInfo}>
                                        <p><strong>特点：</strong>对称加密，速度快，适合单服务器环境</p>
                                        <p><strong>安全性：</strong>依赖密钥强度，密钥泄露会导致安全风险</p>
                                    </div>
                                </div>

                                <div className={styles.algorithmCard}>
                                    <div className={styles.algorithmHeader}>
                                        <div className={styles.algorithmNumber}>2</div>
                                        <h4>RSA算法</h4>
                                    </div>
                                    <p>使用公钥/私钥对进行签名和验证 (RS256, RS384, RS512)</p>
                                    <div className={styles.codeBlock}>
                                        {`jwt.sign(payload, privateKey, { algorithm: 'RS256' });`}
                                    </div>
                                    <div className={styles.algorithmInfo}>
                                        <p><strong>特点：</strong>非对称加密，私钥签名公钥验证，适合分布式系统</p>
                                        <p><strong>安全性：</strong>即使公钥泄露，只要私钥安全，系统就安全</p>
                                    </div>
                                </div>

                                <div className={styles.algorithmCard}>
                                    <div className={styles.algorithmHeader}>
                                        <div className={styles.algorithmNumber}>3</div>
                                        <h4>ECDSA算法</h4>
                                    </div>
                                    <p>使用椭圆曲线数字签名算法 (ES256, ES384, ES512)</p>
                                    <div className={styles.codeBlock}>
                                        {`jwt.sign(payload, privateKey, { algorithm: 'ES256' });`}
                                    </div>
                                    <div className={styles.algorithmInfo}>
                                        <p><strong>特点：</strong>非对称加密，相同安全强度下密钥更短</p>
                                        <p><strong>安全性：</strong>提供与RSA相当的安全性，但计算效率更高</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 中间件实现 */}
                <div className={styles.contentCard} ref={middlewareRef}>
                    <h2>JWT认证中间件实现</h2>

                    <div className={styles.cardContent}>
                        <div className={styles.textBlock}>
                            <p>
                                用于验证请求中的JWT令牌，保护需要认证的路由：
                            </p>

                            <div className={styles.codeImplementation}>
                <pre className={styles.codeBlock}>
{`const { success, error } = require("../utlis/messages");
const jwt = require("jsonwebtoken");

module.exports = function (options) {
  return function (req, res, next) {
    const token = req.headers.token;
    
    // 检查令牌是否存在
    if (!token) {
      return error(res, "当前接口需要登录才能访问", 501);
    }

    // 验证令牌
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // 处理验证错误
      if (err) {
        if (err.name === "TokenExpiredError") {
          return error(res, "token已过期，请重新登录", 502);
        }
        if (err.name === "JsonWebTokenError") {
          return error(res, "token错误，请重新登录！", 503);
        }
        return error(res, "未知的token验证错误", 504);
      }
      
      // 检查管理员权限
      if (options.requireAdmin && !decoded.user.admin) {
        return error(res, "需要管理员权限", 505);
      }
      
      // 将解码后的用户信息附加到请求对象
      req.decoded = decoded;
      next();
    });
  }
}`}
                </pre>

                                <div className={styles.codeNotes}>
                                    <h4>中间件功能说明：</h4>
                                    <ul>
                                        <li>从请求头中获取token</li>
                                        <li>验证token的有效性和过期时间</li>
                                        <li>检查用户权限（如管理员权限）</li>
                                        <li>将解码后的用户信息附加到请求对象</li>
                                        <li>全面的错误处理机制</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 登录实现 */}
                <div className={styles.contentCard} ref={loginRef}>
                    <h2>登录接口实现</h2>

                    <div className={styles.cardContent}>
                        <div className={styles.textBlock}>
                            <p>
                                用户登录成功后生成JWT令牌：
                            </p>

                            <div className={styles.codeImplementation}>
                <pre className={styles.codeBlock}>
{`/**
 * POST /auth/sign_in
 * 用户登录接口
 */
router.post("/sign_in", async function (req, res, next) {
  try {
    const { usernameOrEmail, password, confirmPassword } = req.body;

    // 验证必填字段
    if (!usernameOrEmail || !password || !confirmPassword) {
      return error(res, "用户名/邮箱、密码和确认密码必须填写！");
    }

    // 确认密码匹配
    if (password !== confirmPassword) {
      return error(res, "密码和确认密码不一致！");
    }

    // 查询用户（支持用户名或邮箱登录）
    const user = await models.User.findOne({
      where: {
        [Op.or]: [
          { username: usernameOrEmail },
          { email: usernameOrEmail }
        ]
      }
    });
    
    // 用户不存在处理
    if (!user) {
      return error(res, "用户不存在，请联系管理员！");
    }

    // 验证密码
    if (!bcrypt.compareSync(password, user.password)) {
      return error(res, "密码错误！");
    }

    // 生成JWT令牌，有效期为7天
    const token = jwt.sign({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      }
    }, process.env.SECRET, { expiresIn: "7d" });

    // 返回成功响应
    success(res, "登录成功", { 
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    // 错误处理
    console.error("登录错误:", err);
    error(res, "服务器内部错误");
  }
});`}
                </pre>

                                <div className={styles.codeNotes}>
                                    <h4>登录接口说明：</h4>
                                    <ul>
                                        <li>验证输入字段完整性</li>
                                        <li>检查密码和确认密码是否匹配</li>
                                        <li>支持用户名或邮箱登录</li>
                                        <li>使用bcrypt安全验证密码</li>
                                        <li>生成包含用户信息的JWT令牌</li>
                                        <li>设置合理的令牌过期时间</li>
                                        <li>返回用户基本信息（不含敏感数据）</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <FaKey/>
                        <span className={styles.logoText}>JWT安全实践</span>
                    </div>
                    <p className={styles.footerText}>
                        本文介绍了Node.js中JWT的完整实现流程和安全最佳实践
                    </p>
                    <div className={styles.footerLinks}>
                        <a href="https://jwt.io/introduction" className={styles.footerLink}>JWT官方文档</a>
                        <a href="https://github.com/auth0/node-jsonwebtoken" className={styles.footerLink}>jsonwebtoken官方文档</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NodeJwtScene;
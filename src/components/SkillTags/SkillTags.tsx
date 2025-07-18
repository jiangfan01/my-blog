import React, {useEffect, useRef, useState} from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styles from "./SkillTags.module.scss";

gsap.registerPlugin(ScrollTrigger);

const skillList= [
    {name: "React", weight: Math.floor(Math.random() * 100) + 1},
    {name: "Vue3", weight: Math.floor(Math.random() * 100) + 1},
    {name: "TypeScript", weight: Math.floor(Math.random() * 100) + 1},
    {name: "JavaScript", weight: Math.floor(Math.random() * 100) + 1},
    {name: "Node.js", weight: Math.floor(Math.random() * 100) + 1},
    {name: "Express", weight: Math.floor(Math.random() * 100) + 1},
    {name: "微信小程序", weight: Math.floor(Math.random() * 100) + 1},
    {name: "uniAPP", weight: Math.floor(Math.random() * 100) + 1},
    {name: "SequelizeORM", weight: Math.floor(Math.random() * 100) + 1},
    {name: "SCSS/LESS", weight: Math.floor(Math.random() * 100) + 1},
    {name: "HTML5", weight: Math.floor(Math.random() * 100) + 1},
    {name: "CSS3", weight: Math.floor(Math.random() * 100) + 1},
    {name: "Git", weight: Math.floor(Math.random() * 100) + 1},
    {name: "Vite/WebPack", weight: Math.floor(Math.random() * 100) + 1},
    {name: "GSAP", weight: Math.floor(Math.random() * 100) + 1},
    {name: "REST API", weight: Math.floor(Math.random() * 100) + 1},
];

const SkillTags = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({width: 1000, height: 500});

    useEffect(() => {
        if (wrapperRef.current) {
            const resize = () => {
                const rect = wrapperRef.current!.getBoundingClientRect();
                const width = Math.min(rect.width, 1000);
                const height = Math.round(width * 0.5);
                setDimensions({width, height});
            };
            resize();
            window.addEventListener("resize", resize);
            return () => window.removeEventListener("resize", resize);
        }
    }, []);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top 80%", // 元素top到视口80%位置触发
                once: true,       // 只触发一次
            },
        });

        const fontSizeScale = d3
            .scaleLinear()
            .domain([d3.min(skillList, (d) => d.weight)!, d3.max(skillList, (d) => d.weight)!])
            .range([16, 48]);

        const layout = cloud()
            .size([dimensions.width, dimensions.height])
            .words(skillList.map((d) => ({text: d.name, size: fontSizeScale(d.weight)})))
            .padding(10)
            .rotate(() => Math.random() * 15)
            .font("Verdana")
            .fontSize((d) => d.size ?? 16)
            .on("end", (words) => {
                const svg = d3.select(svgRef.current);
                svg.selectAll("*").remove();
                const texts = svg
                    .attr("width", dimensions.width)
                    .attr("height", dimensions.height)
                    .append("g")
                    .attr("transform", `translate(${dimensions.width / 2},${dimensions.height / 2})`)
                    .selectAll("text")
                    .data(words)
                    .enter()
                    .append("text")
                    .style("font-size", (d) => `${d.size}px`)
                    .style("fill", "#1890ff")
                    .style("cursor", "pointer")
                    .attr("text-anchor", "middle")
                    .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
                    .text((d) => d.text ?? "")
                    .style("opacity", 0)
                    .style("transform-origin", "center center")
                    .on("mouseover", function () {
                        gsap.to(this, {
                            scale: 1.3,
                            fill: "#1890ff",
                            duration: 0.3,
                            transformOrigin: "center center",
                        });
                    })
                    .on("mouseout", function () {
                        gsap.to(this, {
                            scale: 1,
                            fill: "#1890ff",
                            duration: 0.3,
                            transformOrigin: "center center",
                        });
                    });

                // 卡片淡入放大动画
                tl.fromTo(
                    wrapperRef.current,
                    {opacity: 0, scale: 0.95},
                    {opacity: 1, scale: 1, duration: 0.8, ease: "power2.out"}
                );

                // 文字依次出现弹跳动画
                tl.to(
                    texts.nodes(),
                    {
                        opacity: 1,
                        scale: 1,
                        ease: "back.out(1.7)",
                        duration: 1,
                        stagger: 0.05,
                        from: {scale: 0.5},
                    },
                    ">"
                );
            });

        layout.start();

        return () => {
            const svg = d3.select(svgRef.current);
            svg.selectAll("*").remove();
            if (tl) tl.kill();
        };
    }, [dimensions]);

    return (
        <div className={styles.skillWrapper} ref={wrapperRef}>
            <div className={styles.card}>
                <h2 className={styles.title}>🧠 技能词云</h2>
                <svg ref={svgRef} className={styles.wordCloudSvg}/>
            </div>
        </div>
    );
};

export default React.memo(SkillTags);

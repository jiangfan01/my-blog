// src/components/visualization/VisualizationModal.tsx
import React, {useEffect} from "react";
import {gsap} from "gsap";
import styles from "./Visualization.module.scss";
import ArrayVisualization from "./ArrayVisualization";
import StackVisualization from "./StackVisualization.tsx";
import QueueVisualization from "./QueueVisualization.tsx";

interface VisualizationModalProps {
    structureType: string;
    onClose: () => void;
}

const VisualizationModal: React.FC<VisualizationModalProps> = ({
                                                                   structureType,
                                                                   onClose
                                                               }) => {
    const modalRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 模态框动画
        if (modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                {opacity: 0, scale: 0.9, y: 50},
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "back.out(1.2)"
                }
            );
        }

        // 添加键盘事件监听
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const renderVisualization = () => {
        switch (structureType) {
            case "array":
                return <ArrayVisualization/>;
            case "stack":
                return <StackVisualization/>;
            case "queue":
                return <QueueVisualization/>
            default:
                return <div className={styles.notSupported}>
                    <div>🚧</div>
                    <h3>暂未支持 {structureType} 的可视化</h3>
                    <p>正在努力开发更多数据结构和算法的可视化功能</p>
                </div>;
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                ref={modalRef}
                className={styles.visualizationModal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h2>{structureType} 数据结构可视化</h2>
                    <button onClick={onClose} className={styles.closeButton}>
                        &times;
                    </button>
                </div>

                <div className={styles.modalContent} data-lenis-prevent>
                    {renderVisualization()}
                </div>
            </div>
        </div>
    );
};

export default VisualizationModal;
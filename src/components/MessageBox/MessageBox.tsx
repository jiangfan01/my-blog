import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./MessageBox.module.scss";
import { gsap } from "gsap";
import { FaInfoCircle } from "react-icons/fa";

type Message = { id: number; text: string };

let id = 0;

const MessageBox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        (window as any).__SHOW_MESSAGE__ = (text: string) => {
            const newMessage = { id: id++, text };
            setMessages((prev) => [...prev, newMessage]);

            setTimeout(() => {
                gsap.to(`#msg-${newMessage.id}`, {
                    opacity: 0,
                    y: -30,
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: () => {
                        setMessages((prev) => prev.filter((m) => m.id !== newMessage.id));
                    },
                });
            }, 3000);
        };
    }, []);

    return createPortal(
        <div className={styles.messageContainer}>
            {messages.map((msg) => (
                <div key={msg.id} className={styles.message} id={`msg-${msg.id}`}>
                    <FaInfoCircle style={{ fontSize: "16px" }} />
                    {msg.text}
                </div>
            ))}
        </div>,
        document.body
    );
};

export default MessageBox;

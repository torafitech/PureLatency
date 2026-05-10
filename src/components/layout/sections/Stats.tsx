"use client";

import Link from "next/link";
import React from "react";
import styles from "../../../app/services/Services.module.css";

const Stats: React.FC = () => {
const coreServices = [
  {
    title: "Applications",
    href: "/services/applications",
    desc: "Custom web and mobile apps engineered for performance, scalability, and exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    desc: "Modern, lightning-fast websites and web applications built with the latest frameworks and best practices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Data and AI",
    href: "/services/data-ai",
    desc: "Intelligent systems that transform raw data into actionable insights and competitive advantage.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cloud and DevOps",
    href: "/services/cloud-devops",
    desc: "Streamlined infrastructure and automated pipelines that accelerate delivery and reduce costs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Infrastructure",
    href: "/services/infrastructure",
    desc: "Rock-solid, secure infrastructure designed to grow with your business and handle any load.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fiber Optics",
    href: "/services/fiber-optics",
    desc: "High-speed, reliable fiber optic solutions for telecommunications, data centers, and enterprise networks.",
    image: "https://images.unsplash.com/photo-1629752187687-3b0d4deb9e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quantum Compute",
    href: "/services/quantum-compute",
    desc: "Cutting-edge quantum computing solutions for solving complex enterprise-scale problems.",
    image: "https://images.unsplash.com/photo-1635070041078-c3adbfce6070?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI Services",
    href: "/services/ai-services",
    desc: "AI agents, LLM integration, generative AI, and autonomous workflows — built and operated for enterprise at scale.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What We Offer</h2>
        <p className={styles.subtitle}>
          Comprehensive technology services tailored to your unique challenges
        </p>

        <div className={styles.list}>
          {coreServices.map((service, index) => (
            <div
              key={service.title}
              className={`${styles.item} ${index % 2 === 0 ? styles.itemReverse : ''}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <Link href={service.href} className={styles.link}>
                  <h3 className={styles.itemTitle}>{service.title}</h3>
                  <p className={styles.desc}>{service.desc}</p>
                  <span className={styles.cta}>Learn more →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
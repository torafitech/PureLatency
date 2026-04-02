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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fiber Optics",
    href: "/services/fiber-optics",
    desc: "High-speed, reliable fiber optic solutions for telecommunications, data centers, and enterprise networks.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quantum Compute",
    href: "/services/quantum-compute",
    desc: "Cutting-edge quantum computing solutions for complex problem-solving.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
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
          {coreServices.map((service) => (
            <div key={service.title} className={styles.item}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.image}
                />
              </div>

              {/* Content */}
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
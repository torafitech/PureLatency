"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductsPage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------- PRODUCTS ---------------- */

  const products = [
    {
      id: "starling-post",
      title: "Starling Post",
      tagline: "Intelligent team communication",
      desc: "A modern communication platform combining messaging, AI and automation.",
      icon: "🚀",
      status: "Live",
      metrics: ["50k+ users", "4.9 rating", "99.9% uptime"],
      launchDate: "Feb 2026",
      color: "#0066cc"
    },
    {
      id: "nexus-flow",
      title: "Nexus Flow",
      tagline: "Enterprise workflow automation",
      desc: "Automate business workflows with visual automation.",
      icon: "⚡",
      status: "Coming Soon",
      metrics: ["10x faster", "40% cost reduction"],
      launchDate: "Q3 2026",
      color: "#10B981"
    },
    {
      id: "aether-ai",
      title: "Aether AI",
      tagline: "AI-powered analytics",
      desc: "Transform data into insights using machine learning.",
      icon: "🤖",
      status: "Coming Soon",
      metrics: ["99.7% accuracy", "Realtime"],
      launchDate: "Q4 2026",
      color: "#7C3AED"
    }
  ];

  const stats = [
    { value: "3", label: "Products" },
    { value: "50k+", label: "Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9", label: "Rating" }
  ];

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "90px 16px 40px" : "110px 32px 60px"
        }}
      >

        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "60px",
            alignItems: "center",
            marginBottom: isMobile ? "50px" : "100px"
          }}
        >
          
          {/* LEFT */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            
            <div
              style={{
                background: "rgba(0,102,204,0.1)",
                color: "#0066cc",
                padding: "6px 16px",
                borderRadius: "40px",
                display: "inline-block",
                marginBottom: "18px",
                fontSize: isMobile ? "13px" : "14px"
              }}
            >
              ✨ Products Built for Impact
            </div>

            <h1
              style={{
                fontSize: isMobile ? "32px" : "64px",
                fontWeight: 300,
                lineHeight: "1.2",
                marginBottom: "20px"
              }}
            >
              Software that
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#0066cc,#7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                solves real problems
              </span>
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: isMobile ? "15px" : "18px",
                lineHeight: "1.7",
                marginBottom: "25px"
              }}
            >
              Every PureLatency product is crafted with intention—built to solve real-world business challenges.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "12px",
                justifyContent: isMobile ? "center" : "flex-start"
              }}
            >
              <Link
                href="#products"
                style={{
                  background: "#0066cc",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "40px",
                  textDecoration: "none",
                  width: isMobile ? "100%" : "auto"
                }}
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                style={{
                  border: "1px solid #ddd",
                  padding: "12px 24px",
                  borderRadius: "40px",
                  textDecoration: "none",
                  width: isMobile ? "100%" : "auto"
                }}
              >
                Request Early Access
              </Link>
            </div>
          </div>

          {/* RIGHT CARD FIXED */}
          <div
            style={{
              background: "#f5f7fa",
              borderRadius: "24px",
              padding: isMobile ? "24px" : "50px",
              textAlign: "center",
              width: "100%"
            }}
          >
            <div style={{ fontSize: "42px", marginBottom: "10px" }}>📊</div>

            <h3 style={{ marginBottom: "20px" }}>By the Numbers</h3>

            <div style={{ color: "#666", lineHeight: "2" }}>
              <div>✓ 3 products and counting</div>
              <div>✓ 50,000+ active users</div>
              <div>✓ 99.9% uptime</div>
            </div>
          </div>

        </section>


        {/* STATS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: "20px",
            padding: isMobile ? "25px" : "40px",
            borderRadius: "20px",
            background: "#111",
            color: "#fff",
            marginBottom: "80px",
            textAlign: "center"
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "28px", color: "#4da3ff" }}>{s.value}</div>
              <div style={{ fontSize: "13px", color: "#aaa" }}>{s.label}</div>
            </div>
          ))}
        </section>


        {/* PRODUCTS GRID */}
        <section id="products">

          <h2
            style={{
              textAlign: "center",
              fontSize: isMobile ? "28px" : "40px",
              fontWeight: 300,
              marginBottom: "40px"
            }}
          >
            Our Products
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: "30px"
            }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.status === "Live" ? `/products/${product.id}` : "#"}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    border: "1px solid #e6e6e6",
                    borderRadius: "20px",
                    padding: "24px",
                    background: "#fff"
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "10px", textAlign: "center" }}>
                    {product.icon}
                  </div>

                  <h3 style={{ marginBottom: "5px", color: "#111" }}>
                    {product.title}
                  </h3>

                  <p style={{ color: "#777", fontSize: "14px" }}>
                    {product.tagline}
                  </p>

                  <p style={{ marginTop: "10px", color: "#666", fontSize: "14px" }}>
                    {product.desc}
                  </p>

                </div>
              </Link>
            ))}
          </div>

        </section>

      </main>
    </>
  );
}
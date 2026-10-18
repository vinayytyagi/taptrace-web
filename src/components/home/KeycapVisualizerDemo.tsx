"use client";

import { useState, useEffect } from "react";
import { Lock, Sparkles, Sliders, Shield, MousePointer, Radio } from "lucide-react";

type KeyTheme = "mechanical" | "neon" | "glass" | "retro" | "minimal";

interface KeycapItem {
  id: string;
  keys: string[];
  repeatCount?: number;
  isPassword?: boolean;
  isMouse?: boolean;
}

const PRESET_COMBOS = [
  { label: "VS Code Palette", keys: ["Ctrl", "Shift", "P"] },
  { label: "Comment Chord", keys: ["Ctrl + K", "Ctrl + C"] },
  { label: "Quick Save", keys: ["Ctrl", "S"] },
  { label: "App Switcher", keys: ["Alt", "Tab"] },
  { label: "Clipboard Ring", keys: ["Win", "V"] },
  { label: "Double Click", keys: ["Left Click ×2"], isMouse: true },
];

export default function KeycapVisualizerDemo() {
  const [theme, setTheme] = useState<KeyTheme>("mechanical");
  const [activeCombo, setActiveCombo] = useState<KeycapItem>({
    id: "init",
    keys: ["Ctrl", "Shift", "P"],
  });
  const [isPasswordMode, setIsPasswordMode] = useState(false);
  const [history, setHistory] = useState<KeycapItem[]>([
    { id: "1", keys: ["Alt", "Tab"] },
    { id: "2", keys: ["Ctrl", "C"] },
    { id: "3", keys: ["Ctrl", "Shift", "P"] },
  ]);

  // Listen to physical keyboard events on window
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const mods: string[] = [];
      if (e.ctrlKey) mods.push("Ctrl");
      if (e.shiftKey) mods.push("Shift");
      if (e.altKey) mods.push("Alt");
      if (e.metaKey) mods.push("Win");

      let keyName = e.key;
      if (["Control", "Shift", "Alt", "Meta"].includes(keyName)) {
        if (mods.length === 0) return;
        keyName = "";
      } else {
        keyName = keyName.toUpperCase();
      }

      const allKeys = [...mods];
      if (keyName && !allKeys.includes(keyName)) {
        allKeys.push(keyName);
      }

      if (allKeys.length > 0) {
        const item: KeycapItem = {
          id: Date.now().toString(),
          keys: allKeys,
          isPassword: isPasswordMode,
        };
        setActiveCombo(item);
        setHistory((prev) => [item, ...prev.slice(0, 4)]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPasswordMode]);

  const triggerPreset = (combo: { label: string; keys: string[]; isMouse?: boolean }) => {
    const item: KeycapItem = {
      id: Date.now().toString(),
      keys: combo.keys,
      isMouse: combo.isMouse,
      isPassword: isPasswordMode,
    };
    setActiveCombo(item);
    setHistory((prev) => [item, ...prev.slice(0, 4)]);
  };

  const getThemeStyles = () => {
    switch (theme) {
      case "neon":
        return {
          keyBg: "#0f172a",
          border: "2px solid #06b6d4",
          color: "#38bdf8",
          boxShadow: "0 0 16px rgba(6, 182, 212, 0.4), 0 6px 0 #0284c7",
          radius: "10px",
        };
      case "glass":
        return {
          keyBg: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#f8fafc",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(12px)",
          radius: "12px",
        };
      case "retro":
        return {
          keyBg: "#e2d9cc",
          border: "1px solid #b8ad9e",
          color: "#292524",
          boxShadow: "0 6px 0 #8c7e6c, 0 8px 10px rgba(0,0,0,0.3)",
          radius: "6px",
        };
      case "minimal":
        return {
          keyBg: "var(--paper-2)",
          border: "1px solid var(--rule)",
          color: "var(--ink)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          radius: "8px",
        };
      case "mechanical":
      default:
        return {
          keyBg: "linear-gradient(180deg, #242938 0%, #171b26 100%)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          color: "#f8fafc",
          boxShadow: "0 7px 0 #0d1017, 0 12px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          radius: "10px",
        };
    }
  };

  const tStyles = getThemeStyles();

  return (
    <section id="demo" className="section section-rule">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 40px" }}>
          <span className="badge" style={{ marginBottom: "14px" }}>
            <Sparkles size={14} /> Interactive Keystroke Stage
          </span>
          <h2 className="h2" style={{ marginBottom: "16px" }}>
            Try pressing any shortcut on your keyboard
          </h2>
          <p className="lede">
            Click any demo action below or press any key combination on your physical keyboard. Switch themes to see custom tactile styling in real time.
          </p>
        </div>

        {/* Demo Stage Container */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            borderRadius: "20px",
            background: "radial-gradient(ellipse at top, #10192e 0%, #060911 100%)",
            border: "1px solid var(--rule)",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Controls Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 24px",
              background: "rgba(0, 0, 0, 0.4)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            {/* Theme Selector */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem" }}>
              <span style={{ color: "var(--ink-3)", fontWeight: 600 }}>Theme:</span>
              {(["mechanical", "neon", "glass", "retro", "minimal"] as KeyTheme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: theme === t ? "var(--signal)" : "rgba(255, 255, 255, 0.06)",
                    color: theme === t ? "#fff" : "var(--ink-2)",
                    fontSize: "0.78rem",
                    fontWeight: 650,
                    textTransform: "capitalize",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Password Masking Toggle */}
            <button
              onClick={() => setIsPasswordMode(!isPasswordMode)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 14px",
                borderRadius: "8px",
                background: isPasswordMode ? "rgba(245, 158, 11, 0.2)" : "rgba(255, 255, 255, 0.06)",
                color: isPasswordMode ? "#fcd34d" : "var(--ink-2)",
                border: isPasswordMode ? "1px solid #f59e0b" : "1px solid var(--rule)",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              <Lock size={14} />
              {isPasswordMode ? "Password Guard: Active" : "Simulate Password Field"}
            </button>
          </div>

          {/* Interactive Screen Display */}
          <div
            style={{
              minHeight: "340px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 20px",
              position: "relative",
            }}
          >
            {/* Active Keycaps Floating Presentation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "32px",
                transition: "all 0.15s ease",
              }}
            >
              {isPasswordMode ? (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 28px",
                    borderRadius: "14px",
                    background: "rgba(245, 158, 11, 0.15)",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    color: "#fcd34d",
                    fontSize: "1.2rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                  }}
                >
                  <Lock size={20} />
                  <span>••••••••</span>
                  <span style={{ fontSize: "0.75rem", letterSpacing: "normal", background: "rgba(245, 158, 11, 0.2)", padding: "2px 8px", borderRadius: "4px" }}>
                    MASKED
                  </span>
                </div>
              ) : (
                activeCombo.keys.map((k, idx) => (
                  <div
                    key={`${activeCombo.id}-${idx}`}
                    style={{
                      padding: "14px 24px",
                      minWidth: "64px",
                      textAlign: "center",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      background: tStyles.keyBg,
                      border: tStyles.border,
                      color: tStyles.color,
                      borderRadius: tStyles.radius,
                      boxShadow: tStyles.boxShadow,
                      transform: "translateY(-3px)",
                      transition: "all 0.15s ease",
                      userSelect: "none",
                    }}
                  >
                    {k}
                  </div>
                ))
              )}
            </div>

            {/* Quick Presets Strip */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--ink-3)", marginRight: "6px" }}>Try clicking:</span>
              {PRESET_COMBOS.map((combo) => (
                <button
                  key={combo.label}
                  onClick={() => triggerPreset(combo)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--rule)",
                    color: "var(--ink-2)",
                    fontSize: "0.8rem",
                    fontWeight: 550,
                    transition: "all 0.15s ease",
                  }}
                >
                  {combo.label}
                </button>
              ))}
            </div>

            {/* Streamer OBS Source Callout */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                right: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.76rem",
                color: "var(--signal-text)",
              }}
            >
              <Radio size={13} />
              <span>OBS Browser Source URL: http://127.0.0.1:4492/overlay</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

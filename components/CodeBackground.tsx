"use client";

import { useState } from "react";

const codeSnippets = [
  { 
    code: `def build_rag_pipeline(documents):
    embeddings = generate_embeddings(documents)
    index = create_vector_index(embeddings)
    return RAGSystem(index, llm=gemini)`,
    language: "python",
    top: "10%",
    left: "5%"
  },
  { 
    code: `@SpringBootApplication
public class MedVaultApplication {
    public static void main(String[] args) {
        SpringApplication.run(MedVaultApplication.class, args);
    }
}`,
    language: "java",
    top: "30%",
    right: "8%"
  },
  { 
    code: `const HealthTracker = () => {
  const [metrics, setMetrics] = useState([]);
  
  useEffect(() => {
    fetchGoogleFitData();
  }, []);
  
  return <Dashboard data={metrics} />;
};`,
    language: "javascript",
    top: "55%",
    left: "10%"
  },
  { 
    code: `SELECT incident_id, risk_score, 
       CASE 
         WHEN risk_score > 80 THEN 'Extreme'
         WHEN risk_score > 60 THEN 'High'
         WHEN risk_score > 40 THEN 'Medium'
         ELSE 'Low'
       END as risk_level
FROM safety_incidents;`,
    language: "sql",
    top: "75%",
    right: "12%"
  },
  { 
    code: `model = YOLOX('yolox-tiny')
results = model.predict(image, conf=0.5)

for detection in results:
    if detection.class_name == 'weed':
        apply_herbicide(detection.bbox)`,
    language: "python",
    top: "20%",
    right: "25%"
  },
  { 
    code: `interface HealthMetrics {
  heartRate: number;
  steps: number;
  calories: number;
  sleepHours: number;
}

const predictRisk = async (metrics: HealthMetrics) => {
  return await mlModel.predict(metrics);
};`,
    language: "typescript",
    top: "65%",
    left: "3%"
  },
];

export default function CodeBackground() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5 z-0">
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute text-xs font-mono text-[var(--text)] whitespace-pre-wrap transition-all duration-300 pointer-events-auto"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
            maxWidth: "280px",
            opacity: hoveredIndex === index ? 0.3 : 0.08,
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="bg-[var(--ink-2)]/50 backdrop-blur-sm rounded-lg p-3 border border-[var(--lavender)]/10">
            <div className="text-[var(--muted)] text-[10px] mb-1">
              {snippet.language}
            </div>
            <code className={hoveredIndex === index ? "text-[var(--lavender)]" : ""}>
              {snippet.code}
            </code>
          </div>
        </div>
      ))}
    </div>
  );
}

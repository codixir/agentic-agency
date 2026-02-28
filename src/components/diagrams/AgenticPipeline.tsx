const cardWidth = 170;
const spacing = 50;
const viewWidth = 900;
const viewHeight = 220;

export function AgenticPipeline() {
  const stages = [
    { label: "User", detail: "Signals" },
    { label: "Identity & IAM", detail: "Policies + claims" },
    { label: "Orchestration", detail: "Plans + guardrails" },
    { label: "Tools & APIs", detail: "Trusted systems" },
  ];
  const arrowLabels = ["context", "policies", "actions"];
  const totalWidth = stages.length * cardWidth + (stages.length - 1) * spacing;
  const leftMargin = (viewWidth - totalWidth) / 2;

  return (
    <div>
      <div className="hidden sm:block">
        <svg
          role="img"
          aria-label="Agentic pipeline showing user, IAM, orchestration, and tools"
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Agentic pipeline</title>
          <rect x="0" y="0" width={viewWidth} height={viewHeight} rx="24" fill="#030617" />
          <text x={leftMargin} y="45" fontSize="14" fill="#94a3b8">
            Architecture lane
          </text>

          {stages.map((stage, index) => {
            const x = leftMargin + index * (cardWidth + spacing);
            const centerX = x + cardWidth / 2;
            return (
              <g key={stage.label}>
                <rect
                  x={x}
                  y={70}
                  width={cardWidth}
                  height={110}
                  rx={24}
                  fill="#0c1425"
                  stroke="#38bdf8"
                  strokeWidth="1.4"
                />
                <text x={centerX} y={120} textAnchor="middle" fontSize="18" fill="#e2e8f0" fontWeight={600}>
                  {stage.label}
                </text>
                <text x={centerX} y={145} textAnchor="middle" fontSize="12" fill="#b0c4dd">
                  {stage.detail}
                </text>
              </g>
            );
          })}

          <defs>
            <marker id="pipeline-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#38bdf8" />
            </marker>
          </defs>

          {stages.slice(0, -1).map((_, index) => {
            const cardEnd = leftMargin + (index + 1) * cardWidth + index * spacing;
            const arrowStart = cardEnd + 6;
            const arrowEnd = arrowStart + spacing - 12;
            const arrowY = 125;
            const labelX = (arrowStart + arrowEnd) / 2;
            return (
              <g key={`arrow-${index}`}>
                <line
                  x1={arrowStart}
                  y1={arrowY}
                  x2={arrowEnd}
                  y2={arrowY}
                  stroke="#38bdf8"
                  strokeWidth="2"
                  markerEnd="url(#pipeline-arrow)"
                />
                <text x={labelX} y={arrowY + 18} textAnchor="middle" fontSize="11" fill="#94a3b8">
                  {arrowLabels[index]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="sm:hidden">
        <svg
          role="img"
          aria-label="Agentic pipeline showing user, IAM, orchestration, and tools"
          viewBox="0 0 360 520"
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Agentic pipeline</title>
          <rect x="0" y="0" width="360" height="520" rx="24" fill="#030617" />
          <text x="30" y="40" fontSize="14" fill="#94a3b8">
            Architecture lane
          </text>
          <defs>
            <marker id="pipeline-arrow-vertical" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#38bdf8" />
            </marker>
          </defs>

          {stages.map((stage, index) => {
            const y = 60 + index * 110;
            return (
              <g key={`mobile-${stage.label}`}>
                <rect
                  x="60"
                  y={y}
                  width="240"
                  height="90"
                  rx="24"
                  fill="#0c1425"
                  stroke="#38bdf8"
                  strokeWidth="1.4"
                />
                <text x="180" y={y + 45} textAnchor="middle" fontSize="18" fill="#e2e8f0" fontWeight={600}>
                  {stage.label}
                </text>
                <text x="180" y={y + 66} textAnchor="middle" fontSize="12" fill="#b0c4dd">
                  {stage.detail}
                </text>
                {index < stages.length - 1 && (
                  <g>
                    <line
                      x1="180"
                      y1={y + 90}
                      x2="180"
                      y2={y + 110}
                      stroke="#38bdf8"
                      strokeWidth="2"
                      markerEnd="url(#pipeline-arrow-vertical)"
                    />
                    <text x="180" y={y + 130} textAnchor="middle" fontSize="11" fill="#94a3b8">
                      {arrowLabels[index]}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

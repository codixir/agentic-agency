const viewWidth = 900;
const viewHeight = 220;
const cardWidth = 170;
const spacing = 50;

export function IAMFlow() {
  const steps = [
    { label: "IdP", detail: "OIDC / SAML" },
    { label: "Policy Broker", detail: "Scopes + context" },
    { label: "Agent Runtime", detail: "Prompt + tools" },
    { label: "Audit Lake", detail: "Structured logs" },
  ];
  const notes = ["tokens", "scoped creds", "attested logs"];
  const totalWidth = steps.length * cardWidth + (steps.length - 1) * spacing;
  const leftMargin = (viewWidth - totalWidth) / 2;

  return (
    <div>
      <div className="hidden sm:block">
        <svg
          role="img"
          aria-label="LLM identity flow"
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>LLM identity and security flow</title>
          <rect x="0" y="0" width={viewWidth} height={viewHeight} rx="24" fill="#030617" />
          <text x={leftMargin} y="45" fontSize="14" fill="#a7f3d0">
            Trust pipeline
          </text>

          {steps.map((step, index) => {
            const x = leftMargin + index * (cardWidth + spacing);
            const centerX = x + cardWidth / 2;
            return (
              <g key={step.label}>
                <rect
                  x={x}
                  y={70}
                  width={cardWidth}
                  height={110}
                  rx={24}
                  fill="#041610"
                  stroke="#34d399"
                  strokeWidth="1.4"
                />
                <text x={centerX} y={120} textAnchor="middle" fontSize="16" fill="#dcfce7" fontWeight={600}>
                  {step.label}
                </text>
                <text x={centerX} y={145} textAnchor="middle" fontSize="12" fill="#a7f3d0">
                  {step.detail}
                </text>
              </g>
            );
          })}

          <defs>
            <marker id="iam-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#34d399" />
            </marker>
          </defs>

          {steps.slice(0, -1).map((_, index) => {
            const cardEnd = leftMargin + (index + 1) * cardWidth + index * spacing;
            const start = cardEnd + 6;
            const end = start + spacing - 12;
            const center = (start + end) / 2;
            const arrowY = 125;
            return (
              <g key={`iam-arrow-${index}`}>
                <line x1={start} y1={arrowY} x2={end} y2={arrowY} stroke="#34d399" strokeWidth="2" markerEnd="url(#iam-arrow)" />
                <text x={center} y={arrowY + 18} textAnchor="middle" fontSize="11" fill="#a7f3d0">
                  {notes[index]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="sm:hidden">
        <svg
          role="img"
          aria-label="LLM identity flow"
          viewBox="0 0 360 560"
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>LLM identity and security flow</title>
          <rect x="0" y="0" width="360" height="560" rx="24" fill="#030617" />
          <defs>
            <marker id="iam-arrow-vertical" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#34d399" />
            </marker>
          </defs>
          <text x="24" y="46" fontSize="14" fill="#a7f3d0">
            Trust pipeline
          </text>

          {steps.map((step, index) => {
            const y = 60 + index * 115;
            return (
              <g key={`mobile-iam-${step.label}`}>
                <rect
                  x="60"
                  y={y}
                  width="240"
                  height="95"
                  rx="24"
                  fill="#041610"
                  stroke="#34d399"
                  strokeWidth="1.4"
                />
                <text x="180" y={y + 47} textAnchor="middle" fontSize="16" fill="#dcfce7" fontWeight={600}>
                  {step.label}
                </text>
                <text x="180" y={y + 70} textAnchor="middle" fontSize="12" fill="#a7f3d0">
                  {step.detail}
                </text>
                {index < steps.length - 1 && (
                  <g>
                    <line x1="180" y1={y + 95} x2="180" y2={y + 115} stroke="#34d399" strokeWidth="2" markerEnd="url(#iam-arrow-vertical)" />
                    <text x="180" y={y + 135} textAnchor="middle" fontSize="11" fill="#a7f3d0">
                      {notes[index]}
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

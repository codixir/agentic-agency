const viewWidth = 900;
const viewHeight = 240;
const cardWidth = 170;
const spacing = 50;

export function ObservabilityPipeline() {
  const lanes = [
    { label: "Ingest", detail: "Events + spans" },
    { label: "Trace Fabric", detail: "Correlate" },
    { label: "Dashboards", detail: "SLOs" },
    { label: "Response", detail: "Pager + runbooks" },
  ];
  const notes = ["context", "telemetry", "signals"];
  const totalWidth = lanes.length * cardWidth + (lanes.length - 1) * spacing;
  const leftMargin = (viewWidth - totalWidth) / 2;

  return (
    <div>
      <div className="hidden sm:block">
        <svg
          role="img"
          aria-label="Observability pipeline"
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Observability pipeline</title>
          <rect x="0" y="0" width={viewWidth} height={viewHeight} rx="24" fill="#030617" />
          <text x={leftMargin} y="50" fontSize="14" fill="#c4b5fd">
            Reliability posture
          </text>

          {lanes.map((lane, index) => {
            const x = leftMargin + index * (cardWidth + spacing);
            const centerX = x + cardWidth / 2;
            return (
              <g key={lane.label}>
                <rect
                  x={x}
                  y={70}
                  width={cardWidth}
                  height={120}
                  rx={26}
                  fill="#120c2c"
                  stroke="#c4b5fd"
                  strokeWidth="1.4"
                />
                <text x={centerX} y={125} textAnchor="middle" fontSize="16" fill="#ede9fe" fontWeight={600}>
                  {lane.label}
                </text>
                <text x={centerX} y={150} textAnchor="middle" fontSize="12" fill="#c4b5fd">
                  {lane.detail}
                </text>
              </g>
            );
          })}

          <defs>
            <marker id="obs-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#c4b5fd" />
            </marker>
          </defs>

          {lanes.slice(0, -1).map((_, index) => {
            const cardEnd = leftMargin + (index + 1) * cardWidth + index * spacing;
            const start = cardEnd + 6;
            const end = start + spacing - 12;
            const center = (start + end) / 2;
            const arrowY = 135;
            return (
              <g key={`obs-arrow-${index}`}>
                <line x1={start} y1={arrowY} x2={end} y2={arrowY} stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#obs-arrow)" />
                <text x={center} y={arrowY + 20} textAnchor="middle" fontSize="11" fill="#c4b5fd">
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
          aria-label="Observability pipeline"
          viewBox="0 0 360 600"
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Observability pipeline</title>
          <rect x="0" y="0" width="360" height="600" rx="24" fill="#030617" />
          <defs>
            <marker id="obs-arrow-vertical" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#c4b5fd" />
            </marker>
          </defs>
          <text x="24" y="46" fontSize="14" fill="#c4b5fd">
            Reliability posture
          </text>

          {lanes.map((lane, index) => {
            const y = 60 + index * 120;
            return (
              <g key={`mobile-obs-${lane.label}`}>
                <rect
                  x="60"
                  y={y}
                  width="240"
                  height="100"
                  rx="26"
                  fill="#120c2c"
                  stroke="#c4b5fd"
                  strokeWidth="1.4"
                />
                <text x="180" y={y + 50} textAnchor="middle" fontSize="16" fill="#ede9fe" fontWeight={600}>
                  {lane.label}
                </text>
                <text x="180" y={y + 72} textAnchor="middle" fontSize="12" fill="#c4b5fd">
                  {lane.detail}
                </text>
                {index < lanes.length - 1 && (
                  <g>
                    <line x1="180" y1={y + 100} x2="180" y2={y + 122} stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#obs-arrow-vertical)" />
                    <text x="180" y={y + 142} textAnchor="middle" fontSize="11" fill="#c4b5fd">
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

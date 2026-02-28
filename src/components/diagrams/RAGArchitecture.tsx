const viewWidth = 820;
const viewHeight = 340;
const columnWidth = 180;
const columnSpacing = 60;
const topY = 90;
const bottomY = 210;

const topColumns = [
  { label: "Sources", detail: "Docs / APIs" },
  { label: "Ingest", detail: "Parsing & redaction" },
  { label: "Vector Store", detail: "Dense + sparse" },
];

const bottomColumns = [
  { label: "Evaluator", detail: "Golden sets", col: 1 },
  { label: "Agent", detail: "Prompt + trace", col: 2 },
];

export function RAGArchitecture() {
  const totalWidth = topColumns.length * columnWidth + (topColumns.length - 1) * columnSpacing;
  const leftMargin = (viewWidth - totalWidth) / 2;
  const xForColumn = (col: number) => leftMargin + col * (columnWidth + columnSpacing);

  return (
    <div>
      <div className="hidden sm:block">
        <svg
          role="img"
          aria-label="RAG architecture"
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>RAG architecture</title>
          <rect x="0" y="0" width={viewWidth} height={viewHeight} rx="24" fill="#030617" />
          <text x={leftMargin} y="55" fontSize="14" fill="#94a3b8">
            Retrieval lifecycle
          </text>

          {topColumns.map((box, index) => {
            const x = xForColumn(index);
            return (
              <g key={box.label}>
                <rect
                  x={x}
                  y={topY}
                  width={columnWidth}
                  height={90}
                  rx={22}
                  fill="#0c1425"
                  stroke="#38bdf8"
                  strokeWidth="1.4"
                />
                <text x={x + columnWidth / 2} y={topY + 42} textAnchor="middle" fontSize="16" fill="#e2e8f0" fontWeight={600}>
                  {box.label}
                </text>
                <text x={x + columnWidth / 2} y={topY + 63} textAnchor="middle" fontSize="12" fill="#b0c4dd">
                  {box.detail}
                </text>
              </g>
            );
          })}

          {bottomColumns.map((box) => {
            const x = xForColumn(box.col);
            return (
              <g key={box.label}>
                <rect
                  x={x}
                  y={bottomY}
                  width={columnWidth}
                  height={90}
                  rx={22}
                  fill="#0c1425"
                  stroke="#38bdf8"
                  strokeWidth="1.4"
                />
                <text x={x + columnWidth / 2} y={bottomY + 42} textAnchor="middle" fontSize="16" fill="#e2e8f0" fontWeight={600}>
                  {box.label}
                </text>
                <text x={x + columnWidth / 2} y={bottomY + 63} textAnchor="middle" fontSize="12" fill="#b0c4dd">
                  {box.detail}
                </text>
              </g>
            );
          })}

          <defs>
            <marker id="rag-arrow" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#38bdf8" />
            </marker>
          </defs>

          <line x1={xForColumn(0) + columnWidth} y1={topY + 45} x2={xForColumn(1) - 10} y2={topY + 45} stroke="#38bdf8" strokeWidth="2" markerEnd="url(#rag-arrow)" />
          <line x1={xForColumn(1) + columnWidth} y1={topY + 45} x2={xForColumn(2) - 10} y2={topY + 45} stroke="#38bdf8" strokeWidth="2" markerEnd="url(#rag-arrow)" />
          <line x1={xForColumn(1) + columnWidth / 2} y1={topY + 90} x2={xForColumn(1) + columnWidth / 2} y2={bottomY} stroke="#38bdf8" strokeWidth="2" markerEnd="url(#rag-arrow)" />
          <line x1={xForColumn(2) + columnWidth / 2} y1={topY + 90} x2={xForColumn(2) + columnWidth / 2} y2={bottomY} stroke="#38bdf8" strokeWidth="2" markerEnd="url(#rag-arrow)" />
          <line x1={xForColumn(1) + columnWidth} y1={bottomY + 45} x2={xForColumn(2) - 10} y2={bottomY + 45} stroke="#38bdf8" strokeWidth="2" markerEnd="url(#rag-arrow)" />

          <text x={xForColumn(1) + columnWidth / 2} y={topY + 80} textAnchor="middle" fontSize="12" fill="#94a3b8">
            metrics
          </text>
          <text x={xForColumn(2) + columnWidth / 2} y={topY + 80} textAnchor="middle" fontSize="12" fill="#94a3b8">
            retrieval
          </text>
        </svg>
      </div>

      <div className="sm:hidden">
        <svg
          role="img"
          aria-label="RAG architecture"
          viewBox="0 0 360 640"
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>RAG architecture</title>
          <rect x="0" y="0" width="360" height="640" rx="24" fill="#030617" />
          <defs>
            <marker id="rag-arrow-vertical" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#38bdf8" />
            </marker>
          </defs>
          <text x="24" y="46" fontSize="14" fill="#94a3b8">
            Retrieval lifecycle
          </text>

          {[...topColumns, ...bottomColumns.map((c) => ({ label: c.label, detail: c.detail }))].map((box, index) => {
            const y = 50 + index * 110;
            return (
              <g key={`mobile-rag-${box.label}`}>
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
                <text x="180" y={y + 45} textAnchor="middle" fontSize="16" fill="#e2e8f0" fontWeight={600}>
                  {box.label}
                </text>
                <text x="180" y={y + 66} textAnchor="middle" fontSize="12" fill="#b0c4dd">
                  {box.detail}
                </text>
                {index < 4 && (
                  <line
                    x1="180"
                    y1={y + 90}
                    x2="180"
                    y2={y + 108}
                    stroke="#38bdf8"
                    strokeWidth="2"
                    markerEnd="url(#rag-arrow-vertical)"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

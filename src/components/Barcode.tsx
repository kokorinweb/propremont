import { barcodeBars, barcodeWidth } from "@/lib/barcode";

/**
 * Настоящий штрихкод Code 128: каждый модуль — целое число пикселей, чтобы штрихи
 * не размывались и код читался сканером прямо с экрана.
 */
export function Barcode({
  value,
  module = 1,
  height = 44,
  className = "",
}: {
  value: string;
  module?: number;
  height?: number;
  className?: string;
}) {
  const width = barcodeWidth(value);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * module}
      height={height}
      shapeRendering="crispEdges"
      role="img"
      aria-label={`Штрихкод ${value}`}
      className={`max-w-full shrink-0 ${className}`}
    >
      {barcodeBars(value).map(([x, w]) => (
        <rect key={x} x={x} width={w} height={height} fill="currentColor" />
      ))}
    </svg>
  );
}

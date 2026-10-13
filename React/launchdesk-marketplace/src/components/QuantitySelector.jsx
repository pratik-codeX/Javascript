import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({
  value,
  min = 1,
  max = 10,
  onChange,
  label = 'Quantity',
  id,
}) {
  const clamp = (n) => Math.max(min, Math.min(max, n));

  return (
    <div className="qty-selector">
      <label className="qty-selector__label" htmlFor={id}>
        {label}
      </label>
      <div className="qty-selector__controls">
        <button
          type="button"
          className="qty-selector__btn"
          onClick={() => onChange(clamp(value - 1))}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
        >
          <Minus size={14} aria-hidden="true" />
        </button>
        <input
          id={id}
          type="number"
          className="qty-selector__input"
          value={value}
          min={min}
          max={max}
          onChange={(e) => {
            const n = parseInt(e.target.value, 10);
            if (Number.isNaN(n)) return;
            onChange(clamp(n));
          }}
          aria-label={label}
        />
        <button
          type="button"
          className="qty-selector__btn"
          onClick={() => onChange(clamp(value + 1))}
          disabled={value >= max}
          aria-label={`Increase ${label}`}
        >
          <Plus size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

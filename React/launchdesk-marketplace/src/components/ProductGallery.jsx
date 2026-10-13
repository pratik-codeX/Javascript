import { FileText, ShieldCheck, Clock, Award } from 'lucide-react';

export default function ProductGallery({ product }) {
  return (
    <div className="gallery card">
      <div className="gallery__visual" aria-label="Product illustration">
        <div className="gallery__document">
          <div className="gallery__doc-header">
            <FileText size={28} aria-hidden="true" />
            <span>Formation Package</span>
          </div>
          <div className="gallery__doc-line" style={{ width: '80%' }} />
          <div className="gallery__doc-line" style={{ width: '65%' }} />
          <div className="gallery__doc-line" style={{ width: '90%' }} />
          <div className="gallery__doc-line" style={{ width: '55%' }} />
          <div className="gallery__doc-stamp">
            <Award size={20} aria-hidden="true" />
            <span>BL-PRO</span>
          </div>
        </div>
      </div>

      <div className="gallery__indicators">
        <div className="gallery__indicator">
          <FileText size={16} aria-hidden="true" />
          <span>3 Documents</span>
        </div>
        <div className="gallery__indicator">
          <ShieldCheck size={16} aria-hidden="true" />
          <span>Compliance Checklist</span>
        </div>
        <div className="gallery__indicator">
          <Clock size={16} aria-hidden="true" />
          <span>Expedited Option</span>
        </div>
      </div>

      <div className="gallery__badge">
        <Award size={14} aria-hidden="true" />
        <span>{product.badge}</span>
      </div>
    </div>
  );
}

import { Table } from 'lucide-react';
import { specifications } from '../data/productData';

export default function SpecificationsTable() {
  return (
    <section className="spec-section card" aria-labelledby="spec-heading">
      <h2 id="spec-heading" className="section-heading">
        Specifications
      </h2>
      <div className="spec-section__wrapper">
        <table className="spec-table">
          <caption className="sr-only">
            Product specifications for Business Launch Pro
          </caption>
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((row) => (
              <tr key={row.property}>
                <th scope="row">{row.property}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

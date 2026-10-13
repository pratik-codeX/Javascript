// ============================================================
// DEMO DATA — All prices, services, and business information
// are illustrative demonstration content only. They do not
// represent real commercial offers, legal services, or
// verified certifications.
// ============================================================

export const product = {
  id: 'bl-pro-2026',
  name: 'Business Launch Pro',
  sku: 'BL-PRO-2026',
  category: 'Business Formation Services',
  categoryPath: ['Home', 'Business Services', 'Formation', 'Business Launch Pro'],
  badge: 'Popular Package',
  basePrice: 349,
  billingType: 'one-time',
  shortDescription:
    'A configurable business formation package that helps customers organize essential registration documents and related administrative services.',
  longDescription:
    'Business Launch Pro bundles the core document preparation and filing coordination tasks that new businesses commonly need. Configure your entity type, choose a jurisdiction, and add optional documents or expedited handling. This is a demonstration product — no legal advice or filing service is actually provided.',
  availability: 'In Stock — Ready to Configure',
  rating: 4.7,
  ratingLabel: 'Sample demonstration data',
  reviewCount: 128,
  estimatedProcessing: '5–7 business days (illustrative)',
  includedServices: [
    'Business Registration Document preparation',
    'Certified Document Copies (3 included)',
    'Compliance Checklist tailored to your entity type',
    'Filing coordination with your chosen jurisdiction',
    'Digital document delivery',
  ],
  keyBenefits: [
    {
      icon: 'FileText',
      title: 'Organized Documentation',
      description:
        'All essential formation documents prepared and bundled in one organized package.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Compliance Ready',
      description:
        'A compliance checklist helps you understand the administrative steps ahead.',
    },
    {
      icon: 'Clock',
      title: 'Flexible Processing',
      description:
        'Choose standard or expedited handling based on your timeline needs.',
    },
  ],
};

export const entityTypes = [
  { id: 'llc', label: 'LLC', description: 'Limited Liability Company' },
  { id: 'corporation', label: 'Corporation', description: 'C-Corp or S-Corp' },
];

export const jurisdictions = [
  { id: 'de', label: 'Delaware', note: 'Popular for corporations' },
  { id: 'wy', label: 'Wyoming', note: 'Popular for LLCs' },
  { id: 'ca', label: 'California', note: 'Home state filing' },
  { id: 'ny', label: 'New York', note: 'Home state filing' },
  { id: 'tx', label: 'Texas', note: 'Home state filing' },
  { id: 'fl', label: 'Florida', note: 'Home state filing' },
];

export const pricingRules = {
  basePrice: 349,
  includedDocuments: 3,
  additionalDocumentPrice: 15,
  expeditedFee: 40,
  maxAdditionalDocuments: 20,
  minPackages: 1,
  maxPackages: 10,
  taxRate: 0.0, // Demo: no tax configured
};

export const bundleComponents = [
  {
    id: 'biz-reg',
    name: 'Business Registration Document',
    description:
      'Preparation of the primary registration document for your chosen entity type and jurisdiction.',
    status: 'included',
    price: null,
    priceLabel: 'Included',
  },
  {
    id: 'cert-copies',
    name: 'Certified Document Copies',
    description: 'Three certified copies of your formation documents.',
    status: 'included',
    price: null,
    priceLabel: '3 included',
  },
  {
    id: 'compliance',
    name: 'Compliance Checklist',
    description:
      'A tailored checklist covering common post-formation administrative steps.',
    status: 'included',
    price: null,
    priceLabel: 'Included',
  },
  {
    id: 'expedited',
    name: 'Expedited Processing',
    description:
      'Priority handling to reduce estimated processing time. Illustrative only.',
    status: 'optional',
    price: 40,
    priceLabel: '+$40 per package',
  },
];

export const relatedServices = [
  {
    id: 'registered-agent',
    name: 'Registered Agent Service',
    description:
      'A registered agent to receive official documents on behalf of your business.',
    price: 29,
    billing: 'month',
    billingLabel: '$29/month',
    icon: 'Building2',
    recurring: true,
  },
  {
    id: 'annual-compliance',
    name: 'Annual Compliance Reminder',
    description:
      'Automated reminders for annual report and compliance filing deadlines.',
    price: 49,
    billing: 'year',
    billingLabel: '$49/year',
    icon: 'CalendarCheck',
    recurring: true,
  },
  {
    id: 'doc-storage',
    name: 'Document Storage Service',
    description:
      'Secure cloud storage for your formation and compliance documents.',
    price: 5,
    billing: 'month',
    billingLabel: '$5/month',
    icon: 'FolderLock',
    recurring: true,
  },
];

export const faqs = [
  {
    id: 'faq-1',
    question: 'Is this a real legal filing service?',
    answer:
      'No. Business Launch Pro is a demonstration product created for this marketplace UI. It does not provide legal advice, file documents with any government agency, or constitute a real commercial offer.',
  },
  {
    id: 'faq-2',
    question: 'How is the price calculated?',
    answer:
      'The package subtotal is calculated as (base price + additional document charges + expedited fee) × package quantity. Additional documents are $15 each beyond the 3 included. Expedited processing is $40 per package. Related services are billed separately according to their own billing periods.',
  },
  {
    id: 'faq-3',
    question: 'What does "illustrative processing time" mean?',
    answer:
      'The estimated processing time shown is a demonstration value only. It does not reflect actual government processing times or service-level commitments.',
  },
  {
    id: 'faq-4',
    question: 'Can I cancel or change my configuration?',
    answer:
      'In this demo, you can adjust your configuration freely before adding to cart. Cancellation and refund terms would be defined by the actual service provider in a real marketplace.',
  },
  {
    id: 'faq-5',
    question: 'Are recurring services added automatically?',
    answer:
      'No. Related services with recurring billing periods are never added silently. You must explicitly add them to your cart, and they are clearly labeled with their billing frequency.',
  },
];

export const specifications = [
  { property: 'Product SKU', value: 'BL-PRO-2026' },
  { property: 'Package type', value: 'One-time service bundle' },
  { property: 'Base price', value: '$349' },
  { property: 'Included documents', value: '3' },
  { property: 'Additional documents', value: '$15 each' },
  { property: 'Supported entity types', value: 'LLC, Corporation' },
  { property: 'Jurisdiction', value: 'Configurable' },
  { property: 'Processing option', value: 'Standard or expedited' },
];

export const trustInfo = {
  support: 'Support available Mon–Fri, 9am–6pm (demo)',
  secureCheckout: 'Secure demo checkout — no real payment is processed',
  terms:
    'Service terms placeholder. Actual terms would be provided by the service provider.',
};

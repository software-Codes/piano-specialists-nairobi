export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://piano-specialists-nairobi.vercel.app/#organization',
    name: 'The Piano Specialists Nairobi',
    alternateName: 'Piano Specialists Nairobi',
    description:
      'Professional piano tuning, servicing, regulation, and expert buying guidance in Nairobi, Kenya. Over 15 years of experience serving schools, churches, and musicians.',
    url: 'https://piano-specialists-nairobi.vercel.app',
    telephone: '+254115671073',
    email: 'info@pianospecialists.co.ke',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lavington',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2786235,
      longitude: 36.7712500,
    },
    areaServed: {
      '@type': 'City',
      name: 'Nairobi',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    sameAs: [
      // Add social media links when available
    ],
    image: 'https://piano-specialists-nairobi.vercel.app/images/hero-piano-dark.webp',
    logo: 'https://piano-specialists-nairobi.vercel.app/apple-touch-icon.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '6',
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'The Piano Specialists Nairobi',
      url: 'https://piano-specialists-nairobi.vercel.app',
    },
    areaServed: {
      '@type': 'City',
      name: 'Nairobi',
    },
    description: service.description,
    url: service.url,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  price: string;
  brand: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'KES',
      availability: 'https://schema.org/InStock',
    },
  };
}

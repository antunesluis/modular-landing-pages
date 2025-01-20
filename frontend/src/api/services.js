// src/api/services.js
export const pageService = {
  getPageBySlug: async (slug) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    const query = [
      'populate[sections][on][section.section-grid][populate][image_grid][populate]=image',
      'populate[sections][on][section.section-grid][populate][metadata]=*',
      'populate[sections][on][section.section-two-columns][populate]=*',
      'populate[sections][on][section.section-content][populate]=*',
      'populate[sections][on][section.section-grid][populate][text_grid]=*',
      'populate[menu][populate]=*',
    ].join('&');

    const url = `${baseUrl}/api/pages?filters[slug][$eq]=${slug}&${query}`;

    const response = await fetch(url, {
      next: {
        revalidate: 3600, // revalidar a cada hora
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  },
};

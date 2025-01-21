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

    // Corrigindo a construção da URL
    const url = slug
      ? `${baseUrl}/api/pages?filters[slug][$eq]=${slug}&${query}`
      : `${baseUrl}/api/pages?${query}`;

    console.log('Fetching URL:', url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  },
};

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { pageService } from './services';

const PROD_API_URL = 'https://modular-landing-pages-strapi.onrender.com';

describe('pageService', () => {
  let mockFetch: ReturnType<typeof vi.fn>;
  let mockJson: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockJson = vi.fn().mockResolvedValue({
      data: [{ attributes: { title: 'Test' } }],
    });

    mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: mockJson,
    });

    global.fetch = mockFetch as any;
    process.env.NEXT_PUBLIC_API_URL = PROD_API_URL;
    vi.clearAllMocks();
  });

  it('should build correct URL with slug', async () => {
    await pageService.getPageBySlug('test-slug');
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining(
        `${PROD_API_URL}/api/pages?filters[slug][$eq]=test-slug`,
      ),
    );
  });

  it('should build correct URL without slug', async () => {
    await pageService.getPageBySlug();
    const url = mockFetch.mock.calls[0][0];
    expect(url.startsWith(`${PROD_API_URL}/api/pages?`)).toBe(true);
    expect(url).not.toContain('filters[slug]');
  });

  it('should include all correct query parameters', async () => {
    await pageService.getPageBySlug();
    const url = mockFetch.mock.calls[0][0];

    const requiredParams = [
      'populate[sections][on][section.section-grid][populate][image_grid][populate]=image',
      'populate[sections][on][section.section-grid][populate][metadata]=*',
      'populate[sections][on][section.section-two-columns][populate]=*',
      'populate[sections][on][section.section-content][populate]=*',
      'populate[sections][on][section.section-grid][populate][text_grid]=*',
      'populate[menu][populate]=*',
    ];

    requiredParams.forEach((param) => {
      expect(url).toContain(param);
    });
  });

  it('should use localhost when API_URL is not set', async () => {
    process.env.NEXT_PUBLIC_API_URL = '';
    await pageService.getPageBySlug();
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('http://localhost:1337/api/pages'),
    );
  });

  it('should throw error on failed request', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(pageService.getPageBySlug()).rejects.toThrow(
      'Failed to fetch data: 404',
    );
  });

  it('should return parsed JSON on success', async () => {
    const mockData = { data: [{ title: 'Test' }] };
    mockJson.mockResolvedValueOnce(mockData);

    const result = await pageService.getPageBySlug();
    expect(result).toEqual(mockData);
  });
});

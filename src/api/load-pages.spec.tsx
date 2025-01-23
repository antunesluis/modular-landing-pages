import { describe, it, expect, vi, beforeEach } from 'vitest';
import { loadPages } from './load-pages';
import * as mapDataModule from './map-data';
import { pageService } from './services';

vi.mock('./map-data', () => ({
  mapData: vi.fn().mockResolvedValue({ mapped: true }),
}));

vi.mock('./services', () => ({
  pageService: {
    getPageBySlug: vi.fn(),
  },
}));

describe('load-pages', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.console.log = vi.fn();
    global.console.error = vi.fn();
  });

  it('should call getPageBySlug and mapData with correct values', async () => {
    const mockData = {
      data: [{ attributes: { title: 'Test' } }],
    };
    pageService.getPageBySlug.mockResolvedValue(mockData);

    const result = await loadPages('test-slug');

    expect(pageService.getPageBySlug).toHaveBeenCalledWith('test-slug');
    expect(mapDataModule.mapData).toHaveBeenCalledWith(mockData.data);
    expect(result).toEqual({ mapped: true });
  });

  it('should clean slug before calling API', async () => {
    await loadPages('test @#$page');
    expect(pageService.getPageBySlug).toHaveBeenCalledWith('testpage');
  });

  it('should return empty array when no data is found', async () => {
    pageService.getPageBySlug.mockResolvedValue({ data: [] });
    const result = await loadPages();
    expect(result).toEqual([]);
    expect(console.log).toHaveBeenCalled();
  });

  it('should handle errors and return empty array', async () => {
    pageService.getPageBySlug.mockRejectedValue(new Error('API Error'));
    const result = await loadPages('test-slug');
    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalled();
  });
});

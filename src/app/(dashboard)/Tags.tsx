'use client';

import { Button } from '@/components/common/Button';
import { useTags } from '@/hooks/useTags';
import { usePathname, useRouter } from 'next/navigation';

export const Tags = () => {
  const router = useRouter();
  const pathname = usePathname();
  const tags = useTags();

  const handleTabChange = (path: string) => () => {
    if (pathname === path) return;

    router.push(path);
  };

  return (
    <nav className="flex gap-2 ml-4">
      {tags.map((tag) => (
        <Button
          key={tag.key}
          className={`flex gap-1 p-2 border border-gray-8 text-sm font-semibold hover:border-stroke focus:ring-1 focus:ring-gray-6 focus:border-gray-6 ${
            pathname === tag.path ? 'bg-gray-9 hover:border-gray-8' : ''
          }`}
          variant="unstyled"
          onClick={handleTabChange(tag.path)}>
          <span className="text-xs text-text-secondary">
            {typeof tag.label === 'function' ? tag.label() : tag.label}
          </span>
          <span>${tag.totalValue}</span>
        </Button>
      ))}
    </nav>
  );
};

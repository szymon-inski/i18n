'use client';

import styles from './LangSwitcher.module.css';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';

export default function LangSwitcher({ caption }: { caption: string }) {

    const locale = useLocale();
    const pathname = usePathname()
    const router = useRouter()


    function handleSelect (e: React.ChangeEvent<HTMLSelectElement>) {
        router.replace(pathname, {locale: e.target.value})
    }

  return (
    <label>
      <span className={styles.label}>{caption}</span>
      {/* bind the current locale and navigate on change */}
      <select
        className={styles.select}
        value={locale}
        onChange={handleSelect}
      >
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </label>
  );
}

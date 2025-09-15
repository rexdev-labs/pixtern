'use client';

import dynamic from 'next/dynamic';

const Provider = dynamic(() => import('./providers').then(mod => mod.Provider), {
    ssr: false,
});

export default function ProvidersWrapper({ children }: { children: React.ReactNode }) {
    return <Provider>{children}</Provider>;
}
 //Code to have dinamycs images in Nuxt3 (see https://github.com/nuxt/nuxt/issues/14766)

import { filename } from 'pathe/utils';

export function getAllImages() {
    const glob = import.meta.glob('~/assets/img/*.(png|jpeg)', { eager: true });
    return Object.fromEntries(
        Object.entries(glob).map(([key, value]) => [filename(key), value.default])
    );
}

export const getGenreUrl = (slug: string) => `/movie/${slug}`
export const getMovieUrl = (slug: string) => `/genre/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (url: string) => `/admin/${url}`
export const getAdminHomeUrl = () => getActorUrl('').slice(0, -1)

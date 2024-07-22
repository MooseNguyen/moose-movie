import config from 'src/constants/config'

export const largeImage = (imgPath: string | undefined) => `${config.LARGE_IMAGE}/${imgPath}`

export const smallImage = (imgPath: string | undefined) => `${config.SMALL_IMAGE}/${imgPath}`

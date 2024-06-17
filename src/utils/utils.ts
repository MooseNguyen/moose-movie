import classNames from 'classnames'
import config from 'src/constants/config'

export const largeImage = (imgPath: string | undefined) => `${config.LARGE_IMAGE}/${imgPath}`

export const smallImage = (imgPath: string | undefined) => `${config.SMALL_IMAGE}/${imgPath}`

export const heroVisible = (additionClassName: string, isActive: boolean) => {
  return classNames(`${additionClassName}`, {
    heroVisible: !isActive,
    heroInvisible: isActive
  })
}

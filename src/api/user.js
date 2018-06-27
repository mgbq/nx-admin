import { menu } from '@/mock/menu'

export const getMenu = (parentId) => {
  return new Promise((resolve, reject) => {
    if (parentId !== 1) parentId = 0
    resolve({ data: menu[parentId] })
  })
}
export const getMenuAll = () => {
  return new Promise((resolve, reject) => {
    resolve({ data: menu[0] })
  })
}


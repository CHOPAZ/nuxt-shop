export const useFavoritesStore = defineStore('favorites', () => {
  const favoritesIdx = ref<number[]>([])

  function toggleFavorit(id: number) {
    if (!favoritesIdx.value.includes(id)) {
      favoritesIdx.value.push(id)
      return
    }
    favoritesIdx.value = favoritesIdx.value.filter((i) => i != id)
  }

  function getFavorites(id: number) {
    return favoritesIdx.value.find((i) => i == id)
  }

  return { favoritesIdx, toggleFavorit, getFavorites }
})

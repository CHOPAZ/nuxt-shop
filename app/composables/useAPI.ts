export function useAPI() {
  const config = useRuntimeConfig()
  return {
    apiURL: config.public.apiurl,
  }
}

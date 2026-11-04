import type { Swiper as SwiperInstance } from 'swiper'
import { carouselRoutes } from '~/data/routes'

const SLIDE_SPEED = 520

export const useRouteCarousel = () => {
  const { selectedRouteId, selectRoute } = useRouteSelection()

  const swiperOptions = {
    slidesPerView: 1,
    speed: SLIDE_SPEED,
    allowTouchMove: true,
    autoHeight: false,
    grabCursor: true,
    observer: true,
    observeParents: true,
  }

  const swiper = shallowRef<SwiperInstance | null>(null)
  const activeSlideIndex = ref(1)
  const isSwiperReady = ref(false)
  const activeRoute = computed(() => carouselRoutes[activeSlideIndex.value])

  const getBoundedSlideIndex = (slideIndex: number) =>
    Math.min(Math.max(slideIndex, 0), carouselRoutes.length - 1)

  const updateRouteSelection = (slideIndex: number) => {
    activeSlideIndex.value = getBoundedSlideIndex(slideIndex)

    const route = activeRoute.value
    if (route && selectedRouteId.value !== route.id) {
      selectRoute(route.id)
    }
  }

  const showSlide = (slideIndex: number) => {
    const nextSlideIndex = getBoundedSlideIndex(slideIndex)

    if (swiper.value && swiper.value.activeIndex !== nextSlideIndex) {
      swiper.value.slideTo(nextSlideIndex, SLIDE_SPEED)
      return
    }

    updateRouteSelection(nextSlideIndex)
  }

  const showPrevSlide = () =>
    showSlide((activeSlideIndex.value - 1 + carouselRoutes.length) % carouselRoutes.length)

  const showNextSlide = () => showSlide((activeSlideIndex.value + 1) % carouselRoutes.length)

  const onSwiper = (instance: SwiperInstance) => {
    swiper.value = instance
    requestAnimationFrame(() => {
      instance.update()
      instance.slideTo(activeSlideIndex.value, 0)
      isSwiperReady.value = true
      updateRouteSelection(activeSlideIndex.value)
    })
  }

  const onSlideChange = (instance: SwiperInstance) => {
    if (!isSwiperReady.value) {
      return
    }

    updateRouteSelection(instance.activeIndex)
  }

  watch(
    selectedRouteId,
    (id) => {
      const slideIndex = carouselRoutes.findIndex((route) => route.id === id)
      if (slideIndex >= 0) {
        activeSlideIndex.value = slideIndex
        swiper.value?.slideTo(slideIndex, 0)
      }
    },
    { immediate: true },
  )

  return {
    swiperOptions,
    activeSlideIndex,
    activeRoute,
    showSlide,
    showPrevSlide,
    showNextSlide,
    onSwiper,
    onSlideChange,
  }
}

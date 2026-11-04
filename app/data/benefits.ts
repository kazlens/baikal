import type { Component } from 'vue'
import IconLogistics from '~/components/icons/IconLogistics.vue'
import IconLogisticsOutline from '~/components/icons/IconLogisticsOutline.vue'
import IconComfort from '~/components/icons/IconComfort.vue'
import IconComfortOutline from '~/components/icons/IconComfortOutline.vue'
import IconCompass from '~/components/icons/IconCompass.vue'
import IconCompassOutline from '~/components/icons/IconCompassOutline.vue'
import IconGuide from '~/components/icons/IconGuide.vue'
import IconGuideOutline from '~/components/icons/IconGuideOutline.vue'

export type Benefit = {
  title: string
  text: string
  icon: Component
  outlineIcon: Component
}

export const benefits: Benefit[] = [
  {
    title: 'Без сложной логистики',
    text: 'Маршрут уже продуман: трансферы, высадки, экскурсии и передвижение по Байкалу организованы заранее.',
    icon: IconLogistics,
    outlineIcon: IconLogisticsOutline,
  },
  {
    title: 'Комфорт на борту',
    text: 'Каюты разных категорий, питание, рестораны, бар, зоны отдыха и атмосфера настоящего путешествия по воде.',
    icon: IconComfort,
    outlineIcon: IconComfortOutline,
  },
  {
    title: 'Редкие места Байкала',
    text: 'Ушканьи острова, Ольхон, Огой, Чивыркуйский залив, бухта Песчаная, горячие источники и маршруты до которых сложно добраться самостоятельно.',
    icon: IconCompass,
    outlineIcon: IconCompassOutline,
  },
  {
    title: 'Сопровождение',
    text: 'В программе — гид, экскурсии, природные локации, культурные встречи, мероприятия и знаковые места Байкала.',
    icon: IconGuide,
    outlineIcon: IconGuideOutline,
  },
]

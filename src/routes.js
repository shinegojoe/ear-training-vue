import chord_classification from './components/chord_classification/chord_classification.vue'
import find_key from './components/find_key/find_key.vue'
import scale_interval from './components/scale_interval/scale_interval.vue'
import guitar_training from './components/guitar_training/guitar_training.vue'
import scale_singing from './components/scale_singing/scale_singing.vue'


export const routes = [
    {path: '', component: chord_classification},
    {path: '/find_key', component: find_key},
    {path: '/guitar_training', component: guitar_training},
    {path: '/scale_interval', component: scale_interval},
    {path: '/scale_singing', component: scale_singing}
]
import HomePage from '@/components/pages/HomePage'
import TimerPage from '@/components/pages/TimerPage'
export default [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/timer',
        name: 'timer',
        component: TimerPage
    }
]
import HomePage from '@/components/Home/HomePage'
import TimerPage from '@/components/Timer/TimerPage'
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
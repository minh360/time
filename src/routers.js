import HomePage from '@/pages/HomePage'
import StopWatchPage from '@/pages/StopWatchPage'
export default [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/stop-watch',
        name: 'stop-watch',
        component: StopWatchPage
    }
]
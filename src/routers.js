import HomePage from '@/components/pages/HomePage'
import StopWatchPage from '@/components/pages/StopWatchPage'
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
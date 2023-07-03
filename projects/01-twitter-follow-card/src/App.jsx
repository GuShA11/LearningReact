import './App.css'
import { TwitterFollowCard } from './TwitterFolowCard'

const users = [
    {
        userName: "midudev",
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: "pheralb",
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: "vxender",
        name: 'Vanderhart',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}
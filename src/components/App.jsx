import userData from '../jsons/userData.json'
import friends from '../jsons/friends.json'
import transactions from '../jsons/transactions.json'


import { Profile } from './Profile'
import { FriendList } from './FriendList'
import { TransactionHistory } from './TransactionHistory'

function App() {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
      friends={friends}
      />
      <TransactionHistory
      transactions={transactions}
      />
    </>
  )
}

export default App

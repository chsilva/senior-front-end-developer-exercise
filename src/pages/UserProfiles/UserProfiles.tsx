import { useState, useEffect } from 'react'
import { MyDropzone } from 'components'
import axios from 'axios'

// TYPES
import { User } from './types'

// STYLES
import './UserProfiles.scss'

function UserProfiles() {
  const [userProfiles, setUserProfiles] = useState<User[]>([])

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/api/v1/user-profile').then((res) => {
      console.log(res)
      setUserProfiles(res.data)
    })
  }

  useEffect(() => {
    fetchUserProfiles()
  }, [])

  return (
    <div className="UserProfiles">
      {userProfiles.map((userProfile: User, index) => (
        <div key={index} className="UserProfiles__item">
          {userProfile.id && (
            <img
              src={userProfile.image}
              alt={`user profile ${userProfile.username}`}
            />
          )}
          <h1>{userProfile.username}</h1>
          <p>{userProfile.id}</p>
          <MyDropzone {...userProfile} />
          <br />
        </div>
      ))}
    </div>
  )
}

export { UserProfiles }

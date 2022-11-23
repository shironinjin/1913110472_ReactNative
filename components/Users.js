import { View, Text } from 'react-native'
import React from 'react'

const Users = () => {
    const users =[
        {id:1,name:'Johe'},
        {id:2,name:'Mary'},
    ];

  return (
    <View>
     {
        users.map((user,index)=>{
            return <Text key={user.id}>{index+1}.{user.name}</Text>
            
        })
     }
    </View>
  )
}

export default Users
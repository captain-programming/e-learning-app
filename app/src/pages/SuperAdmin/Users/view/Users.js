import { View, Text } from 'react-native'
import React from 'react'
import { Style } from '../style/users'
import ButtonComponent from '../../../../component/helping/ButtonComponent'

const Users = () => {
  return (
    <View style={Style.main}>
      <View style={Style.buttonBox}>
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Add Student"} fontWeight={'bold'}/>
      </View>
    </View>
  )
}

export default Users
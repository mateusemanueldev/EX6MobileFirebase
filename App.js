import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class FirebaseApp extends Component{

  constructor(props){
    super(props)
    this.getUser()
    this.state = {nome:'', curso:'', idade:''}
  }

  getUser = async () =>{
      const userDocument = await firestore().collection('alunos').doc('x3lpMNz3sGVtq8P6nFzr').get()
      //chaves para teste: x3lpMNz3sGVtq8P6nFzr, UxuYuKVgtAIdYyTT5NCj, gFwIxcvZI6kghar1qfaU
      //Atenção: essas chaves são de uma coleção teste, passados 30 dias contando do dia 6 de março talvez os dados não carreguem mais :/
      
      this.setState({nome:userDocument._data.nome, curso:userDocument._data.curso, idade:userDocument._data.idade})
  }
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:25,}}>
           Meu nome é {this.state.nome},
        </Text>
        <Text style={{fontSize:25}}>
            sou do curso de {this.state.curso}
        </Text>
        <Text style={{fontSize:25}}>
            e tenho {this.state.idade} anos
        </Text>
      </View>
    )
  }
}


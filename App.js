import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native';


export default function App() {
  return (
    <ScrollView>
    <View style={estilos.container}>
      {/* <Image 
        source={{uri: 'https://img.elo7.com.br/product/685x685/39D9819/2-adesivo-bart-simpson-adesivo-bart-bart-de-lado-adesivos-motos.jpg'}}   
        style={estilos.logo}
      />

      <View style={estilos.cardImage}>
        <Image
          source={ImgHomer}
          style={estilos.logo} 
        />
      </View> */}
      <View style={estilos.BP_f}>
      <View style={estilos.titulo}>
        <Text style={estilos.titulo}>Bate-papo</Text>
      </View>
      </View>
      <View style={estilos.balao1}>
        <View style={estilos.auau}>
          <View style={estilos.direita}>
            <Text style={estilos.letra}>opa mingau!!</Text>
            <Image
            source={{uri: 'https://i.pinimg.com/originals/59/4d/bb/594dbb3996994f7759abce039b68ff88.jpg'}}
            style={estilos.fotoPerfilDog}
            />
          </View>
        </View>
      </View>
      <View style={estilos.balao2}>
        <View style={estilos.miau}>
          <View style={estilos.esquerda}>
            <Text style={estilos.letra}>eai doguinho! Oq manda?</Text>
            <Image
            source={{uri: 'https://thumbs.dreamstime.com/b/padeiro-do-gato-com-os-nacos-de-p%C3%A3o-122531815.jpg'}}
            style={estilos.fotoPerfilGato}
            />
          </View>
        </View>
      </View>
      <View style={estilos.balao1}>
        <View style={estilos.auau}>
          <View style={estilos.direita}>
            <Text style={estilos.letra}>vai estar ocupapdo hj, amigão?? Queria sair um pouco...</Text>
            <Image
            source={{uri: 'https://i.pinimg.com/originals/59/4d/bb/594dbb3996994f7759abce039b68ff88.jpg'}}
            style={estilos.fotoPerfilDog}
            />
        </View>
      </View>
        </View>
        <View style={estilos.balao2}>
          <View style={estilos.miau}>
            <View style={estilos.esquerda}>
              <Text style={estilos.letra}>putz, hj estou trabalhando na minha padaria :/</Text>
              <Image
              source={{uri: 'https://thumbs.dreamstime.com/b/padeiro-do-gato-com-os-nacos-de-p%C3%A3o-122531815.jpg'}}
              style={estilos.fotoPerfilGato}
              />
            </View>
          </View>
        </View>
        <View style={estilos.balao1}>
          <View style={estilos.auau}>
            <View style={estilos.direita}>
              <Text style={estilos.letra}>aaah, q pena :(</Text>
              <Image
              source={{uri: 'https://i.pinimg.com/originals/59/4d/bb/594dbb3996994f7759abce039b68ff88.jpg'}}
              style={estilos.fotoPerfilDog}
              />
            </View>
          </View>
        </View>
        <View style={estilos.balao1}>
          <View style={estilos.auau}>
            <View style={estilos.direita}>
              <Text style={estilos.letra}>mas bom trabalho pra vc ent! Sucesso pra sua padaria :D</Text>
              <Image
              ource={{uri: 'https://i.pinimg.com/originals/59/4d/bb/594dbb3996994f7759abce039b68ff88.jpg'}}
              style={estilos.fotoPerfilDog}
              />
            </View>
          </View>
        </View>
        <View style={estilos.balao2}>
          <View style={estilos.miau}>
            <View style={estilos.esquerda}>
              <Text style={estilos.letra}>obg pela compreensão, amigão </Text>
              <Image
              source={{uri: 'https://thumbs.dreamstime.com/b/padeiro-do-gato-com-os-nacos-de-p%C3%A3o-122531815.jpg'}}
              style={estilos.fotoPerfilGato}
              />
            </View>
          </View>
        </View>
        <View style={estilos.caixaTxtFundo}>
          <View style={estilos.caixaTxtFrente}>
            <Text>Escreva uma mensagem...</Text>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000f2f',
    alignItems: 'center',
    paddingTop: 20
  },

  BP_f:{
    width: '100%',
  },

  titulo:{
    backgroundColor: '#3b568c',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
    fontWeight: '500',
    color: '#fff',
    display: 'flex',
    alignItems: 'center'
  },

  balao1:{
    position: 'relative',
    left: 80,
    display: 'inline-block'
  },
  balao2:{
    position: 'relative',
    right: 80
  },

  auau:{
    backgroundColor: '#001f60',
    margin: 10,
    padding: 10,
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#001f60',
    borderRadius: '5%',
    borderBottomRightRadius: '30%',
    alignItems: 'center',
    justifyContent:'center',
  },

  miau:{
    backgroundColor: '#3b568c',
    margin: 10,
    padding: 10,
    width: 200,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#3b568c',
    borderRadius: '5%',
    borderBottomLeftRadius: '30%',
    alignItems: 'center',
    justifyContent:'center'
  },

  gato:{
    width: 10,
    height: 10
  },

  fotoPerfilDog:{
    width: 50,
    height: 50,
    borderRadius: '100%',
  },

  fotoPerfilGato:{
    width: 50,
    height: 50,
    borderRadius: '100%',
  },

  letra:{
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },

  caixaTxtFundo:{
    backgroundColor: '#3b568c',
    width: 350,
    padding: 15,
    margin: 10,
    borderRadius: '20%',
  },
  // logo:{
  //   backgroundColor: '#8a8a8a',
  //   width: 150, 
  //   height: 150,
  //   borderRadius: 75,
  //   borderStyle: 'solid',
  //   borderWidth: 4,
  //   borderRightColor: '#000',
  //   borderTopColor: '#290b0b',
  //   borderLeftColor: '#9b0a0a',
  //   borderBottomColor: '#490404',
  // },
    // cardImage:{
  //   backgroundColor: '#ffffff',
  //   marginTop: 20,
  //   padding: 20,
  //   borderStyle: 'solid',
  //   borderWidth: 2, 
  //   borderColor: '#000',
  //   borderTopLeftRadius: '50%',
  //   borderBottomRightRadius: '50%',
  // },
});
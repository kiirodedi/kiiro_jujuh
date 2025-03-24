import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native';
import telefoneIcon from './assets/telefoneIcon.png'
import microfoneIcon from './assets/microfoneIcon.png'
import cameraIcon from './assets/cameraIcon.png'

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.cardContato}>
        <Image style={estilos.cardContatoPerfil}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XDFd_IXokZHcVfMo2nq0t-H1N8p3ktEg8Q&s'}}
        />
        <Text style={estilos.cardContatoNome}>Miau Padeiro</Text>
        <Image style={estilos.telefoneIcon}
          source={telefoneIcon}
        />
      </View>
      <ScrollView>
      <View style={estilos.container_chat}>

        <View style={estilos.remetente}>
          <Image style={estilos.fotoPerfil}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJ7oyGcMRMbMtkr3uAVtTmtw4vBVpTOyQg&s'}}
          />
          <Text style={estilos.balaoR}>Opa miau!</Text>
        </View>

        <View style={estilos.destinatario}>
          <Image style={estilos.fotoPerfil}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XDFd_IXokZHcVfMo2nq0t-H1N8p3ktEg8Q&s'}}
          />
          <Text style={estilos.balaoD}>Eai doguinho, oq manda??</Text>
          
        </View>

        <View style={estilos.remetente}>
          <Image style={estilos.fotoPerfil}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJ7oyGcMRMbMtkr3uAVtTmtw4vBVpTOyQg&s'}}
          />
          <Text style={estilos.balaoR}>Vc está livre hj?? Tava querendo sair um pouco...</Text>
        </View>

        <View style={estilos.destinatario}>
          <Image style={estilos.fotoPerfil}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XDFd_IXokZHcVfMo2nq0t-H1N8p3ktEg8Q&s'}}
          />
          <Text style={estilos.balaoD}>Putz amigão, hj estou trabalhando na minha padaria :(</Text>
        </View>

        <View style={estilos.remetente}>
          <Image style={estilos.fotoPerfil}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJ7oyGcMRMbMtkr3uAVtTmtw4vBVpTOyQg&s'}}
          />
          <Text style={estilos.balaoR}>Aah, q pena pra mim :(</Text>
        </View>
        <View style={estilos.remetente}>
          <Image style={estilos.fotoPerfil}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJ7oyGcMRMbMtkr3uAVtTmtw4vBVpTOyQg&s'}}
          />
          <Text style={estilos.balaoR}>Mas blz ent, outro dia a gente sai. Todo sucesso do mundo pra vc, amiguinho!</Text>
        </View>

        <View style={estilos.destinatario}>
          <Image style={estilos.fotoPerfil}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XDFd_IXokZHcVfMo2nq0t-H1N8p3ktEg8Q&s'}}
          />
          <Text style={estilos.balaoD}>Obg pela compreensão, amigão!</Text>
        </View>
      </View>
      </ScrollView>



      <View style={estilos.caixaTexto}>
        <Image style={estilos.iconeCaixaTexto}
          source={cameraIcon}
        />
        <Text style={estilos.digiteAqui}>Digite aqui...</Text>
        <Image style={estilos.iconeCaixaTexto}
          source={microfoneIcon}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1a34',
    alignItems: 'center',
    paddingTop: 20
  },

  cardContato:{
    backgroundColor: '#311e5e',
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
  cardContatoPerfil:{
    height: 60,
    width: 60,
    borderRadius: '100%',
    marginLeft: 15,
  },
  cardContatoNome:{
    fontSize: 25,
    fontWeight: '100',
    color: '#fff',
  },
  telefoneIcon:{
    height: 35,
    width: 35,
    marginRight: 20,
  },


  remetente:{
    flexDirection: 'row-reverse',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10
  },

  destinatario:{
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },

  fotoPerfil:{
    height: 50,
    width: 50,
    borderRadius: '100%',
    marginRight: 10,
    marginLeft: 10,
  },
  balaoR:{
    backgroundColor: '#311e5e',
    color: '#fff',
    padding: 10,
    fontSize: 18,
    borderRadius: 30
  },
  balaoD:{
    backgroundColor: '#593ca1',
    color: '#fff',  
    padding: 10,
    fontSize: 18,
    borderRadius: 30
  },


  caixaTexto:{
    backgroundColor: '#311e5e',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  digiteAqui:{
    backgroundColor: '#593ca1',
    color: '#a69ec6',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    height: 40,
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  iconeCaixaTexto:{
    height: 35,
    width: 35,
    marginRight: 10,
    marginLeft: 10,
  }

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
import React from "react";
import { SafeAreaView, Image, Text, StyleSheet } from "react-native";
import { carregaTopo } from "../../carregaDados/carregadados";
import logo from "../../Imgs/logo.png";

class topo extends React.Component {

  state = {
    topo:{
      boasVindas: "",
      legenda: "",
    }
  }

  atualizaTopo(){
    const retorno =  carregaTopo();
    this.setState({topo: retorno})
  }

  componentDidMount() {
    this.atualizaTopo()
  }
  render() {
    return (
      <SafeAreaView style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>
          {this.state.topo.boasVindas}
        </Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </SafeAreaView>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#f6f6f6",
    padding: 16,
  },

  imagem: {
    width: 70,
    height: 28,
  },

  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    color: "#464646"
  },

  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3"
  },
});

export default topo

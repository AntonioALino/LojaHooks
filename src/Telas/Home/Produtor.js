import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Estrelas from "../../Componentes/estrelas";
export default function Produtor({ nome, imagem, distancia, estrelas }) {
  const [selecionado, setSelecionado] = useState(false);
  return (
    <TouchableOpacity
      style={estilos.cartao}
      onPress={() => setSelecionado(!selecionado)}
    >
      <Image source={imagem} />
      <SafeAreaView style={estilos.informacoes}>
        <SafeAreaView>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </SafeAreaView>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.distancia}>{distancia}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: "#f6f6f6",
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: "row",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 2.63,
  },

  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },

  informacoes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },

  nome: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 19,
  },

  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});

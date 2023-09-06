import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [textFrase, setTextPhrase] = useState("")
  const [img, setImg] = useState(require('./src/images/biscoito.png'))
  const [blockBtn, setBlockBtn] = useState(false)
  const [clock, setClock] = useState(0)
  const frases = [
    "Acredite em si mesmo e alcançará o impossível.",
    "A sorte favorece os audazes.",
    "Grandes realizações começam com pequenos passos.",
    "O sucesso está no horizonte, continue avançando.",
    "A paciência é uma virtude valiosa.",
    "Boas coisas estão a caminho.",
    "O sorriso é o seu melhor acessório.",
    "As oportunidades estão onde você menos espera.",
    "Aprenda com o passado e construa o futuro.",
    "A felicidade está dentro de você, encontre-a.",
    "Siga o seu coração, ele conhece o caminho.",
    "A persistência leva à conquista.",
    "A sabedoria começa com a curiosidade.",
    "A amizade é o maior tesouro da vida.",
    "O amor é a resposta para todas as perguntas."
  ];
  const breakCookie = () => {
    const randonNumber = Math.floor(Math.random() * frases.length);
    setImg(require('./src/images/biscoitoAberto.png'));
    setTextPhrase(frases[randonNumber]);
    setBlockBtn(true);

    let intervalId = setInterval(() => {
      setClock((prevClock) => prevClock + 1);
    }, 1000);

    setTimeout(() => {
      setBlockBtn(false);
      clearInterval(intervalId);
      setClock(0);
      setImg(require('./src/images/biscoito.png'))
      setTextPhrase("")
    }, 5500);
  }
  return (
    <View style={styles.container}>
      <View style={styles.clock}><Text style={styles.clockNumber}>{clock}</Text></View>
      <Image source={img} style={styles.img} />
      <Text style={styles.phrase}>{textFrase}</Text>
      <TouchableOpacity disabled={blockBtn} onPress={breakCookie} style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 250,
    height: 250,
  },
  phrase: {
    fontSize:20,
    color: "#dd7b22",
    margin: 30,
    fontStyle:"italic",
    textAlign: "center"
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  clock: {
    height: 80,
    width: 80,
    marginBottom: 50,
    backgroundColor: "#dd7b22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100
  },
  clockNumber: {
    fontSize: 30,
    fontWeight: "bold"
  }
  
});

export default App;

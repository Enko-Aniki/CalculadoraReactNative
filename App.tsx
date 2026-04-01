import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resul, setResul] = useState(null);
  const [erro, setErro] = useState('');

  const limparNum = () => {
      setNum1("")
      setNum2("")
      setResul("")

  }


  const SomarDoisNum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setErro('Por favor insira um número válido');
      setResul(null);
    } else {
      const soma = n1 + n2;
      setResul(soma);
      setErro('');
    }
  };

  const subtrairDoisNum = () =>{
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
if (isNaN(n1) || isNaN(n2)) {
      setErro('Por favor insira um número válido');
      setResul(null);
    } else {
      const subs = n1 - n2;
      setResul(subs);
      setErro('');
    }

  }
  const multiDoisNum = () =>{
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
if (isNaN(n1) || isNaN(n2)) {
      setErro('Por favor insira um número válido');
      setResul(null);
    } else {
      const mult = n1 * n2;
      setResul(mult);
      setErro('');
    }

  }

  const dividirDoisNum = () =>{
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
if (isNaN(n1) || isNaN(n2)) {
      setErro('Por favor insira um número válido');
      setResul(null);
    } else {
      const divs = n1 / n2;
      setResul(divs);
      setErro('');
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Número 1:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <Text style={styles.label}>Número 2:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonContainer}>
      <Button title="Soma" onPress={SomarDoisNum} />
      <Text />
      <Button title="Subtrair" onPress={subtrairDoisNum}/>
      <Text/>
      <Button  title="Multi" onPress={multiDoisNum}/>
      <Text/>
      <Button title="Divisão" onPress={dividirDoisNum}/>
      </View>
      <Text/>
      <Button title="Limpar" onPress={limparNum}/>
      
      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      {resul !== null && (
        <Text style={styles.resultado}>Resultado: {resul}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', 
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  error: {
    marginTop: 20,
    color: 'red',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'80%'

  }

});

export default App;
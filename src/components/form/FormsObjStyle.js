import { StyleSheet } from 'react-native';

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

export default styles;
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'lightblue'},
  input: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button_container: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  button: {fontSize: 16, color: 'black', fontWeight: 'bold'},
  taskContainer: {
    margin: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  task: {fontSize: 18, color: 'black', fontWeight: 'bold'},
  delete: {},
  sign: {fontSize: 18, color: 'black', fontWeight: 'bold'},
});

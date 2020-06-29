import { StyleSheet } from 'react-native';
import color from '../colors/colors';

export default StyleSheet.create({
  header: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 0.1,
    width: '100%',
    backgroundColor: color.white,
  },
  section: {
    flex: 7,
    width: '100%',
    paddingHorizontal: 30,
    height: '100%',
  },
  Input_text: {
    borderBottomWidth: 1.5,
    borderBottomColor: color.white,
    padding: 0,
    margin: 0,
    color: color.white,
  },
  view_input: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-around',
  },
  button: {
    color: color.white,
    fontFamily: 'bold',
    fontSize: 13,
  },
  text_button: {
    marginLeft: 8,
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: 13,
    color: color.white,
  },
  view_button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue_fb,
    paddingHorizontal: 16,
    paddingVertical: 4,
    width: 140,
    borderRadius: 4,
  }
  // main_center:{
  //     flex:1,
  //     justifyContent:'center',
  //     alignItems:'center',
  //     flexDirection: 'column',
  // },
  // view_logo:{
  //     flexDirection:'row',
  // },
  // logo:{
  //     width:40,
  //     height:40,
  //     borderRadius: 40 / 2,
  //     backgroundColor: color.white,
  //     justifyContent:'center',
  //     alignItems:'center',
  // },
  // text_logo:{
  //     fontFamily: 'regular',
  //     fontSize:30,
  //     margin:5,
  //     color: color.background,
  // },
});
import { StyleSheet } from 'react-native';
import color from '../colors/colors';

export default StyleSheet.create({
  header: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems:'center',
  },
  line: {
    flex: 0.1,
    width: '100%',
    backgroundColor:color.white,
  },
  section: {
    flex: 7,
  
  },


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
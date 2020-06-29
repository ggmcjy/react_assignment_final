import {StyleSheet} from 'react-native';
import color from '../colors/colors';

export default StyleSheet.create({
        container:{
            width:"100%",
            height:"100%",
            backgroundColor:color.background,
            flex:1,
            justifyContent:'center',
            alignItems:'center'

        },
        main_center:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column',
        },
        view_logo:{
            flexDirection:'row',
        },
        logo:{
            width:40,
            height:40,
            borderRadius: 40 / 2,
            backgroundColor: color.white,
            justifyContent:'center',
            alignItems:'center',
        },
        text_logo:{
            fontFamily: 'regular',
            fontSize:30,
            margin:5,
            color: color.background,
        },
        
});
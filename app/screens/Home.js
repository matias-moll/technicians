import React from 'react'
import {View, Text, StyleSheet, Dimensions, Button, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import AppButton from '../components/AppButton';
import Card from '../components/Card';
import Screen from '../components/Screen';
import WorkOrderDetails from '../components/WorkOrderDetails';
import WorkOrderHeader from '../components/WorkOrderHeader';
import WorkOrderNote from '../components/WorkOrderNote';
import appStyles from '../config/appStyles';
import colors from '../config/colors';
import Routes from '../navigation/Routes';

const workOrder = {
    headerInfo: {
      number: 155,
      quantity: 14,
      orderType: 'Reconexión Cable'
    },
    detailsInfo: {
      client: 'John Doe',
      clientNumber: 13452,
      address: 'Mankato Mississippi 96522',
      phone: '011 2312-7854',
      note: {
        summary: 'Lorem 40 sum dolor sit amet consectetur adipisicing elit. Illo ut laudantium nostrum cum aspernatur illum, modi dolore ducimus incidunt explicabo architecto non, ex labore sunt nulla quis velit dolorem perferendis quam quia id, consectetur reiciendis sed molestias! Accusamus, facilis odit!',
        full: 'Lorem 250 m dolor, sit amet consectetur adipisicing elit.\n\n Sequi quos, animi id provident esse natus, ad eveniet enim nam harum eius velit atque inventore odit vel, nihil molestias. \nAutem ullam veritatis ipsam maxime voluptate corrupti sequi officiis modi mollitia consequuntur numquam ipsum deserunt, porro ipsa dolores ducimus suscipit. Ratione, sit fuga. Illum, recusandae. Odit quis obcaecati, ipsum necessitatibus nesciunt dolores aspernatur ex voluptas \nexercitationem commodi ab perspiciatis nam vel distinctio. Magnam totam perferendis omnis magni voluptatem et facere, asperiores, nesciunt aperiam odio eligendi optio voluptatum \n\nsimilique in labore perspiciatis iste commodi at eos nihil accusamus, tenetur sequi. Veritatis, ipsam voluptate maxime commodi veniam ea odio eaque dolore magnam exercitationem tempore architecto facere eligendi voluptatibus qui aperiam, doloremque asperiores reprehenderit doloribus? Architecto facilis incidunt nemo neque \nrepudiandae natus sit a. Sint, tempora minima ea veniam earum nostrum fugit? Eum assumenda maiores delectus repellendus exercitationem illo, quisquam soluta optio unde et ipsam quo quibusdam tenetur libero debitis voluptates totam molestias nihil. Adipisci eveniet harum, veniam eos aspernatur ad, nulla ex vel blanditiis animi consectetur voluptas debitis quidem magni dolor commodi laborum et tempore aut facilis. Modi placeat optio doloremque dignissimos repellat! Error voluptate totam laborum quis ex quae ipsum soluta. Expedita saepe nostrum fuga eius libero magnam aut deleniti sint ipsum asperiores possimus illum sapiente vitae cupiditate non, minima beatae nisi omnis unde nulla corporis aperiam eos. Quasi id alias, ipsa doloremque delectus pariatur necessitatibus quam hic saepe maiores aperiam eos commodi nemo voluptas possimus, blanditiis harum, qui distinctio illo cupiditate enim.'
      } 
    },
    operationalTimes:{
      confirmed: new Date(),
      arrivedToAddress: null,
      finished: null
    }
}

export default function Home({ navigation }) {
  const [arrived, setArrived] = React.useState();
  const [finish, setFinish] = React.useState();
  
  const onConfirmPressed = () => {
    alert("confirmado");
    setArrived(new Date());
  }
  const onArrivedPressed = () => {
    alert("Llegada a domicilio");
    setFinish(new Date());
  }
  const onFinishPressed = () => {
    alert("Orden de trabajo finalizada");
    navigation.navigate(Routes.FINISH_WORK_ORDER);
  }

  const isInConfirmationStatus = () => workOrder.operationalTimes.confirmed && !arrived;
  const isInArrivalStatus = () => arrived && !finish;

  let action =  isInConfirmationStatus() ? {title:'Confirmar', onPress:onConfirmPressed} :
                isInArrivalStatus() ? {title:'Llegada a Domicilio', onPress:onArrivedPressed} :
                {title:'Finalizar', onPress:onFinishPressed};

  return (
    <Screen bottomAction={action}>   
      <View style={styles.topContainer}> 
        <WorkOrderHeader headerInfo={workOrder.headerInfo} />
        <WorkOrderDetails detailsInfo={workOrder.detailsInfo} />
        <WorkOrderNote note={workOrder.detailsInfo.note} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.background,
  },
  topContainer:{
    justifyContent:'flex-start'
  },

})
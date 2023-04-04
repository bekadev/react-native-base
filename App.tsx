import { StatusBar } from 'expo-status-bar';
import {Dimensions, Platform, Pressable} from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem
} from 'react-native';
import {BasketIcon} from "./SvgIcons/BasketIcon";
import {BurgerMenu} from "./SvgIcons/BurgerMenu";


const images = [
  require('./assets/image1.png'),
  require('./assets/image2.png'),
  require('./assets/image3.png'),
  require('./assets/image4.png'),
  require('./assets/image5.png'),
  require('./assets/image6.png'),
]

const titles = [
  'Apple iPhone 13 \n128GB Blue',
  'Apple iPhone 14 Pro 128GB Space Black',
  'Apple iPhone 12 128GB Purple',
  'Apple iPhone SE 128GB 2022 Midnight',
  'Apple iPhone 13 512GB Midnight',
  'Apple iPhone 14 Pro Max 256GB Purple'
]
const prices = [999, 1199, 799, 599, 899, 1199]


type ItemType = {
  id: number
  title: string
  price: number
  image: any
}

const fakeData: ItemType[] = [...Array(12)].map((_, index) => ({ id: index + 1,
  title: titles[index % titles.length],
  price: prices[index % prices.length],
  image: images[index % images.length],
}))

export default function App() {
  const renderItem: ListRenderItem<ItemType> = ({item}) => {
    return <View style={styles.itemPhone}>
      <Image
          style={styles.phoneImage}
        resizeMode={'contain'}
        source={item.image}
      />
      <View style={styles.infoPhone}>
        <Text style={styles.phoneName}>{item.title}</Text>
        <View style={styles.containerPhonePrice}>
          <Text style={styles.phonePrice}>$ {item.price}</Text>
          <Pressable>
              <BasketIcon />
          </Pressable>
        </View>
      </View>
    </View>
  }
  return (
    <View style={styles.container}>
      <StatusBar style={'light'}/>
      <FlatList
          data={fakeData}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{paddingHorizontal: 16}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          ListHeaderComponent={Header}
          ListHeaderComponentStyle={styles.header}
          stickyHeaderIndices={[0]}
          ListFooterComponent={Footer}
          ListFooterComponentStyle={styles.footer}
          ListEmptyComponent={Empty}
      />
    </View>
  );
}

const  Header = () => {
  return (
       <View style={styles.heaerContent}>
         <Pressable>
           <BurgerMenu />
         </Pressable>
         <Pressable>
           <BasketIcon colorFill={'#fff'}/>
         </Pressable>
       </View>
  )
}

const Footer = () => {
  return (
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>
          2023 beka.dev All rights reserved
        </Text>
      </View>
  )
}

const Empty = () => {
  return (
      <View style={styles.emptyContent}>
        <Text style={styles.emptyTitle}>Oops! This place looks empty</Text>
        <Text style={styles.emptySubTitle}>Oops! This place looks empty</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#969090',
  },
  itemPhone : {
    backgroundColor: '#fff',
    width: (400 - 16 * 2) / 2 - 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 5,
    paddingTop: 12,
  },
  phoneImage: {
    width: (400 - 16 * 2) / 2 - 8,
    height: (400 - 16 * 2) / 2 - 8,
  },
  infoPhone: {
    marginTop: 19,
    marginBottom: 22,
    paddingLeft: 12,
    paddingRight: 15,
  },
  phoneName: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  containerPhonePrice: {
    marginTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  phonePrice: {
    fontWeight: '400',
    lineHeight: 12,
    fontSize: 12
  },
  header: {
    borderWidth: 1,
    marginHorizontal: -18,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#21201E',
    marginBottom: 19
  },
  heaerContent: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  footer: {
    marginHorizontal: -18,
    backgroundColor: '#21201E'
  },
  footerContent: {
    paddingTop: 15,
    paddingBottom: 25,
    alignItems: 'center'
  },
  footerText: {
    color: '#fff'
  },
  emptyContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  emptyTitle: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24
  },
  emptySubTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24
  }
});

import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const BookItem = ({ booking }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: booking.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{booking.title}</Text>
        <Text style={styles.description}>This is bthe best availbale parking spot.Awesome</Text>

        <View style={styles.footer}>
        <Text style={styles.price}>Kshs {booking.price}</Text>
        <Text>
          ⭐ {booking.rating} ({booking.numberOfStars})
        </Text>
        </View>
      </View>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 70,
    left: 10,
    right: 10,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden', // Ensure the border radius works as expected
    elevation: 3, 
    // borderRadius: 20,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: 'gray',
  },
  price: {
    fontSize: 16,
    color: 'green', // Adjust the color as needed
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto'

  }
});


// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react';
// import bookings from '../assets/data/bookings.json'
// import { RotateInDownLeft } from 'react-native-reanimated';

// const BookItem = ({ booking }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: booking.image}} style={styles.image}/>
//       <View style={styles.rightContainer}>
//       <Text style={styles.title}>{booking.title}</Text>
//       <Text style={styles.title}>{booking.price}</Text>
//       </View>
//     </View>
//   )
// }

// export default BookItem;

// const styles = StyleSheet.create({
//   card: { 
//     backgroundColor: 'white',
//     position: 'absolute',
//     bottom: 50,
//     left: 10,
//     right: 10,
//     flexDirection: 'row',
//   },
//   title: {
//     fontWeight: 'bold'
//   },
//   image: {
//     width: 150,
//     aspectRatio: 1,
//   },
//   rightContainer: {
//     padding: 100,
//   }
// })
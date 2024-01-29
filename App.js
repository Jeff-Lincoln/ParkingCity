import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Map from './components/index';

export default function App() {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["30%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  function handleBooking() {
    console.log("Booking logic goes here");
    // Replace this console.log with your actual booking logic
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Map style={styles.map} />
      <BottomSheetModalProvider>
        <View style={styles.buttonContainer}>
          <Button title='Present Modal' onPress={handlePresentModal} />
          <StatusBar style="auto" />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 50 }}
          >
            <View style={styles.contentContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.title}>Garden City Mall</Text>
                <Text style={styles.priceTag}>Ksh 500</Text>
              </View>
              <Text>Add Tip</Text>
              <TouchableOpacity onPress={handleBooking} style={styles.bookNowButton}>
                <Text style={{ color: 'white' }}>BOOK NOW</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 18,
  },
  priceTag: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 18,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  bookNowButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center', // Center the button horizontally
  },
});


// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { useRef } from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import Map from './components/index';

// export default function App() {
//   const bottomSheetModalRef = useRef(null);
//   const snapPoints = ["30%"];

//   function handlePresentModal() {
//     bottomSheetModalRef.current?.present();
//   }

//   function handleBooking() {
//     console.log("Booking logic goes here");
//     // Replace this console.log with your actual booking logic
//   }

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Map style={styles.map} />
//       <BottomSheetModalProvider>
//         <View style={styles.buttonContainer}>
//           <Button title='Present Modal' onPress={handlePresentModal} />
//           <StatusBar style="auto" />
//           <BottomSheetModal
//             ref={bottomSheetModalRef}
//             index={0}
//             snapPoints={snapPoints}
//             backgroundStyle={{ borderRadius: 50 }}
//           >
//             <View style={styles.contentContainer}>
//               <View style={styles.rowContainer}>
//                 <Text style={styles.title}>Garden City Mall</Text>
//                 <Text style={styles.priceTag}>Ksh 500</Text>
//               </View>
//               <Text>Add Tip</Text>
//               <TouchableOpacity onPress={handleBooking} style={styles.bookNowButton}>
//                 <Text style={{ color: 'white' }}>BOOK NOW</Text>
//               </TouchableOpacity>
//             </View>
//           </BottomSheetModal>
//         </View>
//       </BottomSheetModalProvider>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   contentContainer: {
//     flex: 1,
//     paddingHorizontal: 15,
//     marginTop: 10,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   title: {
//     fontWeight: "900",
//     letterSpacing: 0.5,
//     fontSize: 18,
//   },
//   priceTag: {
//     fontWeight: "900",
//     letterSpacing: 0.5,
//     fontSize: 18,
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//     zIndex: -1,
//   },
//   bookNowButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 20,
//   },
// });


// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { useRef } from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import Map from './components/index';

// export default function App() {
//   const bottomSheetModalRef = useRef(null);
//   const snapPoints = ["30%"];

//   function handlePresentModal() {
//     bottomSheetModalRef.current?.present();
//   }

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Map style={styles.map}/>
//       <BottomSheetModalProvider>
//       <View style={styles.buttonContainer}>
//         <Button title='Present Modal' onPress={handlePresentModal} />
//         <StatusBar style="auto" />
//         <BottomSheetModal
//           ref={bottomSheetModalRef}
//           index={0}
//           snapPoints={snapPoints}
//           backgroundStyle={{ borderRadius: 50 }}
//         >
//           <View style={styles.contentContainer}>
//               <View style={styles.rowContainer}>
//                 <Text style={styles.title}>Garden City Mall</Text>
//                 <Text style={styles.priceTag}>Ksh 500</Text>
//               </View>
//               <Text>Add Tip</Text>
//               <TouchableOpacity onPress={handleBooking} style={styles.bookNowButton}>
//                 <Text style={{ color: 'white' }}>BOOK NOW</Text>
//               </TouchableOpacity>
//               {/* <Button title='BOOK NOW' style={styles.bookNowButton} /> */}
//             </View>
//         </BottomSheetModal>
//       </View>
//     </BottomSheetModalProvider>
//     </GestureHandlerRootView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   contentContainer: {
//     flex: 1,
//     paddingHorizontal: 15,
//     // justifyContent: 'center',
//     marginTop: 10,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   title: {
//     fontWeight: "900",
//     letterSpacing: 0.5,
//     fontSize: 18,
//   },
//   priceTag: {
//     fontWeight: "900",
//     letterSpacing: 0.5,
//     fontSize: 18,
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject, // Make the map cover the entire container
//     zIndex: -1, // Move the map to the background
//   },
//   bookNowButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 20, // Adjust this value as needed
//   },
//   // bookNowButton: {
//   //   backgroundColor: 'red',
//   //   padding: 10,
//   //   borderRadius: 8,
//   //   marginTop: 20,
//   //   alignItems: 'center',
//   // }
// });


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'grey',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   contentContainer: {
// //     flex: 1,
// //     // alignItems: 'center',
// //     paddingHorizontal: 15,
// //   },
// //   title: {
// //     fontWeight: "900",
// //     letterSpacing: .5,
// //     fontSize: 18,
// //   },
// //   priceTagsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 10,
// //   },
// //   priceTag: {
// //     fontWeight: "900",
// //     letterSpacing: .5,
// //     fontSize: 18,
// //     marginTop: 10,
// //   },
// // });


// // import 'react-native-gesture-handler';
// // import { StatusBar } from 'expo-status-bar';
// // import { Button, StyleSheet, Text, View } from 'react-native';
// // import { BottomSheetModal,
// //         BottomSheetModalProvider,
// //         } from "@gorhom/bottom-sheet";
// // import { useRef } from 'react';


// // export default function App() {
// //   const bottomSheetModalRef = useRef(null);

// //   const snapPoints= ["30%"];

// //   function handlePresentModal() {
// //     bottomSheetModalRef.current?.present();

// //   }
// //   return (
// //     <BottomSheetModalProvider>
// //       <View style={styles.container}>
// //       <Button title='present modal' onPress={handlePresentModal}/>
// //       <Text>Awesome Project Jeff!</Text>
// //       <StatusBar style="auto" />
// //       <BottomSheetModal
// //       ref={bottomSheetModalRef}
// //       index={0}
// //       snapPoints={snapPoints}>
// //         <View>
// //           <Text>Good Job Lincoln!!!</Text>
// //         </View>
// //       </BottomSheetModal>
// //     </View>
// //     </BottomSheetModalProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'grey',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

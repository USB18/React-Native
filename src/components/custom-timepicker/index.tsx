// import React, { useState } from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const TimePicker = ({ onSelectTime }: any) => {
//   const [isPickerVisible, setIsPickerVisible] = useState(false);
//   const [selectedTime, setSelectedTime] = useState(null);

//   const showPicker = () => {
//     setIsPickerVisible(true);
//   };

//   const hidePicker = () => {
//     setIsPickerVisible(false);
//   };

//   const handleConfirm = (time: any) => {
//     setSelectedTime(time);
//     hidePicker();
//     onSelectTime(time);
//   };

//   return (
//     <>
//       <TouchableOpacity onPress={showPicker}>
//         <DateTimePickerModal
//           isVisible={isPickerVisible}
//           mode="time"
//           onConfirm={handleConfirm}
//           onCancel={hidePicker}
//         />
//       </TouchableOpacity>
//     </>
//   );
// };

// export default TimePicker;

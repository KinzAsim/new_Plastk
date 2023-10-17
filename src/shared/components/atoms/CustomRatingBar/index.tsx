import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomRatingBar = ({
  totalStars,
  defaultRating,
  onRatingChange,
  styleRate,
}: any) => {
  const [rating, setRating] = useState(defaultRating || 0);

  const handleRatingPress = (newRating: any) => {
    if (rating === newRating) {
      setRating(0);
      onRatingChange(0);
    } else {
      setRating(newRating);
      onRatingChange(newRating);
    }
  };

  return (
    <View style={[styles.container, styleRate]}>
      {[...Array(totalStars).keys()].map(star => (
        <TouchableOpacity
          style={{paddingHorizontal: 3}}
          key={star}
          onPress={() => handleRatingPress(star + 1)}>
          <Icon
            name={star < rating ? 'star' : 'star-outline'}
            size={25}
            color={star < rating ? '#A0D800' : 'gray'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default CustomRatingBar;

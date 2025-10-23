import { StyleSheet, View } from 'react-native';

export function GradientProgressBar() {
  const segments = ['#CC3F02', '#FE5900', '#FF9332', '#FFD8A5'];

  return (
    <View style={styles.progressBar}>
      {segments.map((color, index) => {
        return (
          <View
            key={index}
            style={[
              { backgroundColor: color, flexGrow: segments.length - index + 1 },
              styles.bar,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    width: '100%',
    gap: 2,
  },
  bar: {
    height: 8,
    flex: 1,
    borderRadius: 3,
  },
});

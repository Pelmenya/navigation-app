import { Button, StyleSheet, Text, View } from 'react-native';

export default function IntroScreen() {
    return (
        <View style={styles.container}>
                <Text style={styles.intro}>
                    Одно из самых вкусных кофе в городе!
                </Text>
                <Text style={styles.description}>
                    Свежие зёрна, настоящая арабика и бережная обжарка
                </Text>
                <Button title='Начать' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 34,
    },
    intro: {
        fontSize: 34,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 34,
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 82,
    },
    description: {
        height: 44,
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 24,
    },

});

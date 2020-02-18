import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { List, Appbar } from 'react-native-paper';
import AnimeEntry from "../components/AnimeEntry";


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

class FavoritesList extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }


    renderRow = ({ item }) => {
        const {animeDatas} = this.props;
        return (
            <AnimeEntry {...animeDatas[item]} navigation={this.navigation} />
        )
    }

    render() {
        const { favorites } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content title="收藏的動畫" />
                    <Appbar.Action icon="information-outline" onPress={() => { }} />
                </Appbar.Header>
                <FlatList
                    data={favorites.idList}
                    renderItem={this.renderRow}
                    keyExtractor={item => `${item}`}
                />
            </SafeAreaView>
        );
    }
}

export default connect(state => ({
    favorites: state.favorites,
    animeDatas: state.animeDatas
}))(FavoritesList);
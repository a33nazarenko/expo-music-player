import { TrackList } from "@/components/TracksList";
import { screenPadding } from "@/constants/tokens";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles } from "@/styles"
import { View, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in songs'
        }
    })
    return <View style={defaultStyles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic"
            style={{ paddingHorizontal: screenPadding.horizontal }}>
            <TrackList scrollEnabled={false} />
        </ScrollView>
    </View>

}

export default SongsScreen;
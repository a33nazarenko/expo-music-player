import { FlatList, FlatListProps, View } from "react-native"
import library from '@/assets/data/library.json';
import { TrackListItem } from "./TrackListItem";
import { utilsStyles } from "@/styles";

export type TrackListProps = Partial<FlatListProps<unknown>> & {
    tracks: any[]
};

const ItemDivider = () => (
    <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TrackList = ({ tracks, ...flatlistProps }: TrackListProps) => {
    console.log(library.length)
    return <FlatList data={tracks}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
        ItemSeparatorComponent={ItemDivider}
        ListFooterComponent={ItemDivider}
        renderItem={({ item: track }) => <TrackListItem track={{ title: track.title, artist: track.artist, image: track.artwork }} {...flatlistProps} />} />

}